import React from "react";
import ContactList from "./components/ContactList";

function App() {
  const users = [
    {
      id: 1,
      name: "Erika",
      online: false,
      avatar: "https://randomuser.me/api/portraits/women/40.jpg"
    },
    {
      id: 2,
      name: "Melanie",
      online: true,
      avatar: "https://randomuser.me/api/portraits/women/52.jpg"
    },
    {
      id: 3,
      name: "Heather",
      online: false,
      avatar: "https://randomuser.me/api/portraits/women/22.jpg"
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
