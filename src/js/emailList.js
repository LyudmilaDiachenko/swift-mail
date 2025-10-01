import React from "react";
import Search from "./search";

function EmailList({mails, setCurrentEmailId, emailStatus}) {
    const filterStatus = mails.filter(e => e.typeStatus === emailStatus)
    return (
        <div className="right-panel">
            < Search />
            <ul className="mail-list">
                {filterStatus.sort((a, b) => a.date < b.date? 1 : -1).map((e, i)=>
                    <li className="mail-list-item" key={e.id} onClick={_=>setCurrentEmailId(e.id)}>
                        <span className="mail-sender">{e.sender}</span>
                        <span className="mail-header">{e.title}</span>
                        <span className="mail-date">{new Date(e.date).toLocaleDateString()}</span>
                    </li>
                )}
            </ul>
        </div>
    )
}

export default EmailList;