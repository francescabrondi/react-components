import React from "react";

import "./Contact.css";

function Contact(props) {
  // const name = props.name;
  // const avatar = props.avatar;
  // const online = props.online;

  const { name, avatar, online } = props;

  return (
    <div className="Contact">
      <img className="avatar" src={avatar} alt="" />
      <div>
        <h4 className="name">{name}</h4>
        <p className="status">{online ? "Online" : "Offline"}</p>
      </div>
    </div>
  );
}

export default Contact;
