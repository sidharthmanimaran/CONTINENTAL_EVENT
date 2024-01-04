import React, { useState } from 'react';
import '../assets/css/EventPage.css';

const EventPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleRegistration = (event) => {
    event.preventDefault();

    // Perform registration logic (you can send data to a server here)

    alert(`Thank you, ${name}! You are now registered for the Royal Enfield event.`);
    setName('');
    setEmail('');
  };

  return (
    <div className="event-page">
      <header>
        <h1>REGISTER FOR THE EVENT</h1>
      </header>

      <main>
        <section className="event-details">
          <h2>EVENT DETAILS</h2><br/>
          <p>DATE: JAN 15, 2024</p>
          <p>TIME: 10:00 AM - 4:00 PM</p>
          <p>LOCATION: ROYAL ENFIELD SHOWROOM</p>
        </section>

        <section className="registration-form">
          
          <form onSubmit={handleRegistration}>
            <label htmlFor="name">NAME:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />

            <label htmlFor="email">EMAIL@:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            <button type="submit">Register</button>
          </form>
        </section>

        {/* Side Panel Section */}
        <section className="side-panel">
          <h2>Event Information</h2>
          <p>Join us for an exciting event showcasing the latest Royal Enfield models!</p>
        </section>
      </main>

      <footer>
        <p>&copy;2023 CONTINENTAL EVENT</p>
        {/* Follow Us Section */}
        <div className="follow-us">
          <h3>Follow Us</h3>
          <p>Stay connected on social media for the latest updates!</p>
          {/* Add your social media icons/links here */}
        </div>
      </footer>
      
    </div>
  );
};

export default EventPage;
