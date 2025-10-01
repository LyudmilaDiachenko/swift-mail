import React from "react";

function EmailList({mails, currentEmailId, setCurrentEmailId}) {
    function getEmail(){
        return mails.filter(e => e.id === currentEmailId)[0]
    }

    return (
        <div className="right-panel">
            {getEmail()['description']}
            <button onClick={_=>setCurrentEmailId(null)}>Взад</button>
        </div>
    )
}

export default EmailList;