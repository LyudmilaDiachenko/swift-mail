import React, { useState } from "react";
import './App.css';
import LeftPanel from './js/leftPanel';
import EmailList from './js/emailList';
import ViewEmail from './js/viewEmail';
import WriteLetter from "./js/writeLetter";

function App() {
  const [newLetter, setNewLetter] = useState(false);
  const [currentEmailId, setCurrentEmailId] = useState(null);
  const [emailStatus, setEmailStatus] = useState('incoming');
  const mails = [
    {
      id: 1,
      sender: "Anna Smith",
      email: "anna.smith@example.com",
      title: "Meeting tomorrow",
      description: "Don't forget about our meeting at 10am.",
      typeStatus: 'incoming',
      isRead: false,
      date: "2025-09-25T09:30:00"
    },
    {
      id: 2,
      sender: "John Doe",
      email: "john.doe@example.com",
      title: "Project update",
      description: "The latest report is ready for review.",
      typeStatus: 'incoming',
      isRead: true,
      date: "2025-09-24T16:45:00"
    },
    {
      id: 3,
      sender: "Emma Johnson",
      email: "emma.johnson@example.com",
      title: "Party invitation",
      description: "You are invited to my birthday party this weekend.",
      typeStatus: 'sent',
      isRead: false,
      date: "2025-09-26T18:00:00"
    }
  ];
  return (
    <div className="App">
      <LeftPanel {...{newLetter, setNewLetter, setCurrentEmailId, setEmailStatus}}/>
      {
        currentEmailId ?
        <ViewEmail {...{mails, currentEmailId, setCurrentEmailId}} />:
        <EmailList {...{mails, setCurrentEmailId, emailStatus}} />
      }
      <WriteLetter {...{newLetter, setNewLetter}}/>
    </div>
  );
}

export default App;
