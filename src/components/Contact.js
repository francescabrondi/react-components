import React from "react";
import "./Contact.css";

class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      online: this.props.online
    };
  }

  changeStatus = e => {
    e.preventDefault();

    this.setState({ online: !this.state.online });
  };

  render() {
    return (
      <div>
        <div className="Contact">
          <img className="avatar" src={this.props.avatar} alt="" />
          <div>
            <h4 className="name">{this.props.name}</h4>
            <p className="status" onClick={this.changeStatus}>
              {this.state.online ? "Online" : "Offline"}
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;

//function Contact(props) {
// const name = props.name;
// const avatar = props.avatar;
// const online = props.online;

// const { name, avatar, online } = props;

//   return (
//     <div className="Contact">
//       <img className="avatar" src={avatar} alt="" />
//       <div>
//         <h4 className="name">{name}</h4>
//         <p className="status">{online ? "Online" : "Offline"}</p>
//       </div>
//     </div>
//   );
// }
