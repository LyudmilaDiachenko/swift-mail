import React, { useState } from "react";
import './App.css';
import LeftPanel from './js/leftPanel';
import EmailList from './js/emailList';
import ViewEmail from './js/viewEmail';
import NewLetter from "./js/newLetter";
import TextFilter from "./js/textFilter";

function App() {
  const [currentEmailId, setCurrentEmailId] = useState(null);
  const [currentDraftId, setCurrentDraftId] = useState(null);
  const [currentStatus, setCurrentStatus] = useState('inbox');
  const [searchRequest, setSearchRequest] = useState('')
  const [mails, setMails] = useState([
    {
      id: 1,
      sender: "Anna Smith",
      email: "anna.smith@example.com",
      title: "Meeting tomorrow",
      description: "Don't forget about our meeting at 10am.",
      status: 'inbox',
      isRead: true,
      date: "2025-09-25T09:30:00"
    },
    {
      id: 2,
      sender: "John Doe",
      email: "john.doe@example.com",
      title: "Project update",
      description: "The latest report is ready for review.",
      status: 'inbox',
      isRead: true,
      date: "2025-09-24T16:45:00"
    },
    {
      id: 3,
      sender: "Emma Johnson",
      email: "emma.johnson@example.com",
      title: "Party invitation",
      description: "You are invited to my birthday party this weekend.",
      status: 'sent',
      isRead: false,
      date: "2025-09-26T18:00:00"
    },
    {
    id: 4,
    sender: "Lottery Winner",
    email: "lottery@fakeprizes.com",
    title: "You won $1,000,000!",
    description: "Claim your prize now by clicking the link below.",
    status: "spam",
    isRead: false,
    date: "2025-09-27T08:45:00"
  },
  {
    id: 5,
    sender: "Unknown Sender",
    email: "offer@superdealz.biz",
    title: "Exclusive offer just for you!",
    description: "Buy 1 get 5 free! Limited time only.",
    status: "spam",
    isRead: true,
    date: "2025-09-27T12:20:00"
  },
  {
    id: 6,
    sender: "Bank Support",
    email: "support@secure-bank-login.net",
    title: "Urgent: Verify your account",
    description: "Your account has been locked. Click here to unlock.",
    status: "spam",
    isRead: false,
    date: "2025-09-28T07:10:00"
  }
  ]);
  
  function getAutoIncrement(){
    return mails.reduce((acc, e) => e?.id > acc ? e?.id : acc, 0) + 1
  }

  return (
    <div className="App">
      <LeftPanel {...{mails, setMails, getAutoIncrement, setCurrentDraftId, setCurrentEmailId, currentStatus, setCurrentStatus}}/>
      <div className="right-panel">      
        <TextFilter {...{searchRequest, setSearchRequest, setCurrentEmailId}} />
        {
          currentEmailId ?
          <ViewEmail {...{mails, currentEmailId, setCurrentEmailId, setMails}} />:
          <EmailList {...{mails, setCurrentEmailId, currentStatus, searchRequest}} />
        }
        {currentDraftId !== null && <NewLetter {...{mails, setMails, getAutoIncrement, setCurrentDraftId}} />}
      </div>
    </div>
  );
}

export default App;
