import React from "react";
import WriteLetter from "./writeLetter";

function LeftPanel({mails, newLetter, setNewLetter, setCurrentStatus}) {
  return (
    <div className="left-panel">
      <button className="write-letter">
        Отримати листа
      </button>
      <WriteLetter />
      <button className="write-letter"
          onClick={() => setNewLetter(!newLetter)}
          >Написати листа
      </button>
      <ul className="list">
          <li onClick={() => setCurrentStatus('inbox')}>Вхідні ({mails.filter(e=>e.status==='inbox').length})</li>
          <li onClick={() => setCurrentStatus('sent')}>Надіслані ({mails.filter(e=>e.status==='sent').length})</li>
          <li onClick={() => setCurrentStatus('spam')}>Спам ({mails.filter(e=>e.status==='spam').length})</li>
          <li onClick={() => setCurrentStatus('draft')}>Чернетки ({mails.filter(e=>e.status==='draft').length})</li>
      </ul>
    </div>
  )
}

export default LeftPanel;