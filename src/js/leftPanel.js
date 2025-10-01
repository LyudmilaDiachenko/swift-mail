import React from "react";
import WriteLetter from "./writeLetter";

function LeftPanel({newLetter, setNewLetter, setEmailStatus}) {
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
          <li onClick={() => setEmailStatus('incoming')}>Вхідні</li>
          <li onClick={() => setEmailStatus('sent')}>Надіслані</li>
          <li>Спам</li>
          <li>Чернетки</li>
      </ul>
    </div>
  )
}

export default LeftPanel;