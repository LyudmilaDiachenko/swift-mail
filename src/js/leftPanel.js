import React from "react";
import WriteLetter from "./writeLetter";

function LeftPanel({isOpen, setIsOpen}) {
  return (
    <div className="left-panel">
      <button className="write-letter">
        Отримати листа
      </button>
      <WriteLetter />
      <button className="write-letter"
          onClick={() => setIsOpen(!isOpen)}
          >Написати листа
      </button>
      <ul className="list">
          <li>Вхідні</li>
          <li>Надіслані</li>
          <li>Спам</li>
          <li>Чернетки</li>
      </ul>
    </div>
  )
}

export default LeftPanel;