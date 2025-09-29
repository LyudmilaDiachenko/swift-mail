import React from "react";

function WriteLetter({isOpen, setIsOpen}) {

  return (
  <div className="left-panel">
    <button className="write-letter"
        onClick={() => setIsOpen(!isOpen)}
        >Написати листа</button>
    {isOpen && (
        <form className="email-form">
            <span>Нове повідомлення</span>
            <label>
                Кому:
                <input type="text" name="recipient" placeholder="Email отримувача" />
            </label>  
            <label>
                Тема:
                <input type="text" name="title" placeholder="Тема листа" />
            </label>
            <label>
                Повідомлення:
                <textarea name="message" placeholder="Ваш текст"></textarea>
            </label>  
            <button type="submit">Відправити</button>
        </form>
    )}
  </div>
)}

export default WriteLetter;