import React from "react";

function EmailList({mails, setCurrentEmailId, currentStatus, searchRequest}) {
    const filteredMails = mails
        .filter(e => e?.status === currentStatus)
        .filter(e => e?.title?.toLowerCase()?.includes(searchRequest?.toLowerCase()))
    return (
        <div className="right-panel">
            <ul className="mail-list">
                {filteredMails.length ? filteredMails.sort((a, b) => a.date < b.date? 1 : -1).map((e, i)=>
                    <li className="mail-list-item" key={e.id} onClick={_=>setCurrentEmailId(e.id)}>
                        <span className="mail-sender">{e.sender || e.email}</span>
                        <span className="mail-header">{e.title}</span>
                        <span className="mail-date">{new Date(e.date).toLocaleDateString()}</span>
                    </li>
                ) : <></>
                // <EmptyMails {...{searchRequest, currentStatus}}/>
                }
            </ul>
        </div>
    )
}

export default EmailList;