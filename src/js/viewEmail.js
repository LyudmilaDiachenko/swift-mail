import React from "react";
import Search from "./search";

function EmailList({mails, currentEmailId, setCurrentEmailId}) {
    const email = mails.filter(e => e.id === currentEmailId)[0]

    return (
        <div className="view-letter">
            <Search />
            <div className="view-box">
                <div className="view-header">
                    <h2>{email['title']}</h2>
                    <p>{email['sender']} <span>{email['email']}</span></p>
                </div>
                <div>
                    {email['description']}
                </div>
                <div>
                    <button onClick={_=>setCurrentEmailId(null)}>Взад</button>
                </div>
            </div>
        </div>
    )
}

export default EmailList;