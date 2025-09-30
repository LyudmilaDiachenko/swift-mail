import React, { useState } from "react";
import './App.css';
import LeftPanel from './js/leftPanel';
import RightPanel from './js/rightPanel';
import WriteLetter from "./js/writeLetter";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const mails = [
    {
      id: 1,
      sender: "Anna Smith",
      title: "Meeting tomorrow",
      description: "Don't forget about our meeting at 10am.",
      isRead: false,
      date: "2025-09-25T09:30:00"
    },
    {
      id: 2,
      sender: "John Doe",
      title: "Project update",
      description: "The latest report is ready for review.",
      isRead: true,
      date: "2025-09-24T16:45:00"
    },
    {
      id: 3,
      sender: "Emma Johnson",
      title: "Party invitation",
      description: "You are invited to my birthday party this weekend.",
      isRead: false,
      date: "2025-09-26T18:00:00"
    }
  ];
  return (
    <div className="App">
      <LeftPanel {...{isOpen, setIsOpen}}/>
      <WriteLetter {...{isOpen, setIsOpen}}/>
      <RightPanel {...{mails}} />
    </div>
  );
}

export default App;
