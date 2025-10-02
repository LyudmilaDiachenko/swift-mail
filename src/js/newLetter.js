import React, { useState } from "react";

function WriteLetter({mails, setMails, getAutoIncrement, setCurrentDraftId}) {
    const [mail, setMail] = useState({})
    function sendEmail(){
        let newMail = {...mail}
        newMail.status = 'sent'
        saveDraft(newMail)
    }
    function emailChange(eve){
        let newMail = {...mail}
        newMail.email = eve.target.value
        saveDraft(newMail)
    }
    function titleChange(eve){
        let newMail = {...mail}
        newMail.title = eve.target.value
        saveDraft(newMail)
    }
    function descriptionChange(eve){
        let newMail = {...mail}
        newMail.description = eve.target.value
        saveDraft(newMail)
    }    
    function saveDraft(newMail){
        newMail.id = newMail.id || getAutoIncrement()
        newMail.status = newMail.status || 'draft'
        newMail.date = newMail.date || new Date().toISOString()
        setMail(newMail)
        
        const mailId = mails.filter(e=>e?.id === newMail?.id)[0]?.id
        mailId ? updateDraft(newMail) : insertDraft(newMail)
    }
    function insertDraft(newMail){
        const newMails = [...mails]
        newMails.push(newMail)
        setMails(newMails)
    }
    function updateDraft(newMail){
        const newMails = [...mails]
        let prevVersionIdx = mails.findIndex(e => e?.id === newMail?.id)
        delete newMails[prevVersionIdx]
        newMails.push(newMail)
        setMails(newMails)
    }
    return (
        <form className="email-form">
            <span>Нове повідомлення</span>
            <label className="field-label">
                Кому:
                <input type="text" value={mail.email} onChange={emailChange}/>
            </label>  
            <label className="field-label">
                Тема:
                <input type="text" value={mail.title} onChange={titleChange}/>
            </label>
            <label className="message-label">
                <textarea placeholder="Повідомлення:" onChange={descriptionChange}>
                    {mail.description}
                </textarea>
            </label>
            <div className="form-btn">
                <button type="button" className="submit-btn" onClick={_=>sendEmail() || setCurrentDraftId(null)}>Надіслати</button>
                <button type="button" className="submit-btn" onClick={_=>setCurrentDraftId(null)}>Відмінити</button>                
            </div>
        </form>
    )
}

export default WriteLetter;