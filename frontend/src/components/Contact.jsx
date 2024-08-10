// src/components/Contacts.jsx
import React from "react";
import "../styles/Contacts.css"; // Import the CSS file

const Contacts = () => {
  return (
    <div className="contacts-container">
      <div className="contacts-card">
        <h1 className="app-title">JobFast JobSearch App</h1>
        <p className="app-moto">
          To find and post recent job updates to freshers and experienced
          candidates on a regular basis. Help the candidates find their dream
          job.
        </p>
        <div className="contact-details">
          <h2>Contact Details</h2>
          <p>
            <strong>Founder:</strong> Rikhita Koganti
          </p>
          <p>
            <strong>Mail ID:</strong>{" "}
            <a href="mailto:rikhitakoganti0299@gmail.com">
              rikhitakoganti0299@gmail.com
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
