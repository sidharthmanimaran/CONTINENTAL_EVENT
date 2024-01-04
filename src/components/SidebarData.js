import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';


export const SidebarData = [
  {
    title: 'Home',
    path: '/',
    icon: <AiIcons.AiFillHome />,
    cName: 'nav-text'
  },
  {
    title: 'GT CUP',
    path:'/GT CUP',
    icon:<IoIcons.IoIosTrophy/>,
    cName: 'nav-text'
  },
  {
    title: 'TEAM',
    path: '/team',
    icon: <IoIcons.IoMdPeople />,
    cName: 'nav-text'
  },
  {
    title: 'REPORT',
    path: '/reports',
    icon: <IoIcons.IoIosPaper />,
    cName: 'nav-text'
  },
  
  {
    title: 'About Us',
    path: '/products',
    // icon: <FaIcons.FaCartPlus />,
    cName: 'nav-text'
  },
  {
    title: 'SUPPORT',
    path: '/support',
    icon: <IoIcons.IoMdHelpCircle />,
    cName: 'nav-text'
  },
  {
    title: 'LogOut',
    path:'/LogOut',
    icon:<IoIcons.IoIosLogOut />,
    cName: 'nav-text'
  },

];