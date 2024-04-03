package com.springpro.springpro.service;



import java.util.List;
import java.util.Optional;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.springpro.springpro.entity.student;
import com.springpro.springpro.repository.studentRepo;

import jakarta.transaction.Transactional;

@Transactional
@Service
public class studentService {
    @Autowired
    private studentRepo studentrepo;
    
    // public student saveDetails(student s){
    //     return studentrepo.save(s);
    // }

    // public String deleteStudent(int Id){
    //    if(studentrepo.existsById(Id)){
    //        studentrepo.deleteById(Id);
    //        return "deleted" + Id;

    //    }else{
    //     return "id not found";
    //    }

    // }

    public void saveUser(student user) {
        Optional<student> userExists = studentrepo.findByEmail(user.getEmail());
        if (userExists.isPresent())
            return;
        studentrepo.save(user);
    }
    public List<student> getAllUser() {
        return studentrepo.findAll();
    }
    public String deleteUser(String email) {
        boolean userExists = studentrepo.existsByEmail(email);
        if (userExists) {
            studentrepo.deleteByEmail(email);
            return "User deleted successfully!";
        }
        return "Record not found with email id " + email;
    }
    public student updateUser(String email, student user) {
        Optional<student> userExists = studentrepo.findByEmail(email);
        if (userExists.isPresent()) {
            student existingUser = userExists.get();
            existingUser.setEmail(user.getEmail());
            existingUser.setPassword(user.getPassword());
            return studentrepo.save(existingUser);
        }
        return new student();
    }

    public student updateUserBy(String email, student user) {
        Optional<student> userExists = studentrepo.findByEmail(email);
        return userExists.map(existingUser -> {
            Optional.ofNullable(user.getPassword()).ifPresent(existingUser::setPassword);
            return studentrepo.save(existingUser);
        }).orElse(new student());
    }

   }