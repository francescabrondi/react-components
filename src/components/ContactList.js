import React from "react";
import Contact from "./Contact";
import "./Contact.css";

function ContactList({ users }) {
  return (
    <div>
      {users.map(users => (
        <Contact
          name={users.name}
          online={users.online}
          avatar={users.avatar}
        />
      ))}
    </div>
  );
}

export default ContactList;
