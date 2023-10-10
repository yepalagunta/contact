// MailApp.js
import React, { useState } from "react";
import "./Mail.css"; // Add your CSS styles here

export default function Mail() {
  const [emails, setEmails] = useState([
    { id: 1, subject: "mail1", content: "This is the first email." },
    { id: 2, subject: "mail2", content: "Regarding our meeting today." },
    // Add more sample emails here
  ]);

  const [selectedEmail, setSelectedEmail] = useState(null);

  const handleEmailClick = (email) => {
    setSelectedEmail(email);
  };

  return (
    <div className="mail-app">
      <div className="email-list">
        <h2>Emails</h2>
        <ul>
          {emails.map((email) => (
            <li key={email.id} onClick={() => handleEmailClick(email)}>
              {email.subject}
            </li>
          ))}
        </ul>
      </div>
      <div className="email-view">
        <h2>Email View</h2>
        {selectedEmail ? (
          <div>
            <h3>{selectedEmail.subject}</h3>
            <p>{selectedEmail.content}</p>
          </div>
        ) : (
          <p>Select an email to view</p>
        )}
      </div>
    </div>
  );
}


