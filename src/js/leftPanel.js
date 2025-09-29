import React from "react";
import WriteLetter from "./writeLetter";

function LeftPanel({}) {
  return <div className="left-panel">
    <button className="write-letter">Отримати листа</button>
    <ul className="list">
        <li>Вхідні</li>
        <li>Надіслані</li>
        <li>Спам</li>
        <li>Чернетки</li>
    </ul>
  </div>
}

export default LeftPanel;