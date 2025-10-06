import React from "react";
import { PiKeyReturnBold } from "react-icons/pi";

function EmailList({mails, currentEmailId, setCurrentEmailId}) {
    const email = mails.filter(e => e?.id === currentEmailId)[0]

    return (
        <div className="view-letter">
            <div className="view-box">
                <div className="header-container">
                    <div className="view-header">
                        <h2>{email['title']}</h2>
                        <p>{email['sender']} <span> <a href={`mailto:${email['email']}`}>{email['email']}</a></span></p>
                    </div>
                    <div onClick={_=>setCurrentEmailId(null)}>
                        <PiKeyReturnBold className="return-icon"/>
                    </div>
                </div>
                <div className="view-description">
                    {email['description']}
                </div>
            </div>
        </div>
    )
}

export default EmailList;