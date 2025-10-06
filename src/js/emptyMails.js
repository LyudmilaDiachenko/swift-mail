import React from "react";

function EmptyMails({searchRequest, currentStatus}) {
    return (
        searchRequest ? <div>По вашому запиту нічого не знайдено</div> :
        currentStatus === 'inbox' ? <div>Вам ще не надійшло жодного листа</div> :
        currentStatus === 'sent' ? <div>Ви ще не надіслали жодного повідомлення</div> :
        currentStatus === 'spam' ? <div>Ура! Спаму немає!</div> :
        currentStatus === 'draft' ? <div>Чернеток немає.</div> : <div>Список порожній</div>
    )
}

export default EmptyMails;