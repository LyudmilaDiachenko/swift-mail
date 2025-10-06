import React from "react";


function TextFilter({searchRequest, setSearchRequest, setCurrentEmailId}) {
    return (
        <div>
            <label htmlFor="search">
                <input 
                    type="text" placeholder="Пошук" className="search" id="search"
                    value={searchRequest} 
                    onChange={e => setSearchRequest(e.target.value) || setCurrentEmailId(null)}
                />
            </label>
        </div>
    )
}

export default TextFilter;