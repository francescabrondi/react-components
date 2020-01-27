import React from "react";
import Contact from "./components/Contact";

function App() {
  const users = [
    {
      id: 1,
      name: "Nathaniel",
      online: false,
      avatar: "https://randomuser.me/api/portraits/men/47.jpg"
    },
    {
      id: 2,
      name: "Francesco",
      online: true,
      avatar: "https://randomuser.me/api/portraits/men/1.jpg"
    },
    {
      id: 3,
      name: "Mai na Joy",
      online: false,
      avatar: "https://randomuser.me/api/portraits/women/47.jpg"
    }
  ];

  return (
    <div className="App">
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

export default App;
