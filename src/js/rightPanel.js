import React from "react";

function RightPanel({mails}) {
    return (
        <div className="right-panel">
            <label htmlFor="">
                <input type="text" placeholder="Пошук" className="search" />
            </label>
            <ul className="mail-list">
                {mails.sort((a, b) => a.date < b.date? 1 : -1).map((e, i)=>
                    <li className="mail-list-item" key={e.id}>
                        <span className="mail-sender">{e.sender}</span>
                        <span className="mail-header">{e.title}</span>
                        <span className="mail-date">{new Date(e.date).toLocaleDateString()}</span>
                    </li>
                )}
            </ul>
        </div>
    )
}

export default RightPanel;