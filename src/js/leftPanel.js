import React, { useState, useEffect } from "react";

function LeftPanel({mails, setMails, setCurrentDraftId, setCurrentEmailId, currentStatus, setCurrentStatus, getAutoIncrement}) {
  let example = {
    inbox: `
      Can we have a 15-min sync tomorrow to align on the Q4 milestones? I have a couple of updates to share.
      I've uploaded the draft proposal to the drive. Could you please review sections 2 and 3 by Friday?
      Summary from today's call with the client attached. Main points: timeline, budget adjustments, next steps.
      I'm out sick tomorrow — could you run the standup at 10am and share notes with the team?
      I've granted you access to the analytics dashboard. Let me know if you need additional filters or views.
      Finance asked for an invoice copy for the June payment. Please attach it when you have a moment.
      Great work on the mockups — two small suggestions: increase CTA contrast and reduce header padding.
      Friendly reminder to submit your timesheet for last week before Monday 9am. Thanks!
      New hire starts next week — could you prepare their accounts and grant repo access?
      Attached are the notes from sprint planning. Action items assigned to Alex and Maria.
    `,  
    spam: `
      Hurry up — limited stock! Click here to grab the best deals before they're gone.
      We detected unusual activity. Verify your account now to avoid suspension. [link]
      Congratulations! You have won. Provide details to claim your prize.
      Open the attachment to see details regarding a legal claim against you.
      You have unclaimed points waiting — click here to redeem your gift card.
      Join our limited investment program. High returns guaranteed.
      You're invited to our virtual launch event. RSVP to receive a discount code.
      Click the link to reset your password. This link expires in 1 hour.
    `,
    sender:[
      'Olivia Brown', 'Liam Johnson', 'Emma Davis', 'Noah Wilson', 'Ava Thompson', 'William Harris', 'Sophia Clark', 'James Lewis', 'Isabella Walker', 'Benjamin Young', 'Mia Hall', 'Elijah Allen', 'Charlotte King', 'Henry Wright', 'Amelia Scott', 'Alexander Green', 'Harper Adams', 'Daniel Baker', 'Evelyn Turner', 'Matthew Hill', 
    ],
  }

  const [rand, setRand] = useState(0)

  useEffect(_ => {
    Array(10).fill().forEach(_ => getNewEmail())
    setInterval(_ => setRand(Math.random()), 10000)
  }, [])

  useEffect(_ => {
    checkEmails()
  }, [rand])

  function checkEmails(){
    return Math.random() > 0.5 ? getNewEmail() : null 
  }

  function getNewEmail(){
    let status = Math.random() > 0.3 ? 'inbox' : 'spam'
    let sender = checkSender()
    mails.push({
      id: getAutoIncrement(),
      sender: sender,
      email: (sender + "@example.com").toLowerCase().replace(" ",'.'),
      title: checkText(status, 5, 15),
      description: checkText(status, 50, 150),
      status: status,
      isRead: false,
      date: new Date().toISOString() 
    })
    setMails([...mails])
  }
  function checkSender(){
    return example.sender[Math.floor(Math.random() * example.sender.length)]
  }
  
  function checkText(type ="inbox", min=20, max=50){
    return example[type]
      .split(' ')
      .sort(_=>Math.random()>0.5?1:-1)
      .slice(0, min + Math.random()*(max - min))
      .join(' ')
      .trim()
      .toLowerCase()
      .replace(/(^|[.!?]\s+)([a-z])/g, (_,p1,p2)=> p1 + p2.toUpperCase());
  }

  
  return (
    <div className="left-panel">
      <button className="write-letter" onClick={checkEmails}>
        Перевірити пошту
      </button>
      <button className="write-letter"
          onClick={() => setCurrentDraftId(0)}
          >Написати листа
      </button>
      <ul className="list">
          <li className={currentStatus === 'inbox' ? 'active' : ''}
          onClick={() => setCurrentStatus('inbox') || setCurrentEmailId(null)}>Вхідні ({mails.filter(e=>e?.status==='inbox').length})</li>
          <li className={currentStatus === 'sent' ? 'active' : ''}
          onClick={() => setCurrentStatus('sent') || setCurrentEmailId(null)}>Надіслані ({mails.filter(e=>e?.status==='sent').length})</li>
          <li className={currentStatus === 'spam' ? 'active' : ''}
          onClick={() => setCurrentStatus('spam') || setCurrentEmailId(null)}>Спам ({mails.filter(e=>e?.status==='spam').length})</li>
          <li className={currentStatus === 'draft' ? 'active' : ''}
          onClick={() => setCurrentStatus('draft') || setCurrentEmailId(null)}>Чернетки ({mails.filter(e=>e?.status==='draft').length})</li>
      </ul>
    </div>
  )
}

export default LeftPanel;