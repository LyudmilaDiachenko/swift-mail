import React from "react";
import WriteLetter from "./newLetter";

function LeftPanel({mails, setCurrentDraftId, setCurrentEmailId, setCurrentStatus}) {
  return (
    <div className="left-panel">
      <button className="write-letter">
        Отримати листа
      </button>
      <button className="write-letter"
          onClick={() => setCurrentDraftId(0)}
          >Написати листа
      </button>
      <ul className="list">
          <li onClick={() => setCurrentStatus('inbox') || setCurrentEmailId(null)}>Вхідні ({mails.filter(e=>e?.status==='inbox').length})</li>
          <li onClick={() => setCurrentStatus('sent') || setCurrentEmailId(null)}>Надіслані ({mails.filter(e=>e?.status==='sent').length})</li>
          <li onClick={() => setCurrentStatus('spam') || setCurrentEmailId(null)}>Спам ({mails.filter(e=>e?.status==='spam').length})</li>
          <li onClick={() => setCurrentStatus('draft') || setCurrentEmailId(null)}>Чернетки ({mails.filter(e=>e?.status==='draft').length})</li>
      </ul>
    </div>
  )
}

export default LeftPanel;