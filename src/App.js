import React from "react";
import ContactList from "./components/ContactList";

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
    },
    {
      id: 4,
      name: "Clyde",
      online: true,
      avatar: "https://randomuser.me/api/portraits/men/91.jpg"
    },
    {
      id: 5,
      name: "Hector",
      online: false,
      avatar: "https://randomuser.me/api/portraits/men/20.jpg"
    }
  ];

  return (
    <div className="App">
      <ContactList users={users} />
    </div>
  );
}

export default App;
