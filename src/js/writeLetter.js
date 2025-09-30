import React, { useState } from "react";

function WriteLetter({isOpen}) {
  return (
    <>
        {isOpen && (
            <form className="email-form">
                <span>Нове повідомлення</span>
                <label className="field-label">
                    Кому:
                    <input type="text" name="recipient" />
                </label>  
                <label className="field-label">
                    Тема:
                    <input type="text" name="title" />
                </label>
                <label className="message-label">
                    <textarea></textarea>
                </label>
                <div className="form-btn">
                    <button type="submit" className="submit-btn">Надіслати</button>
                </div>
            </form>
    )}
    </>
)}

export default WriteLetter;