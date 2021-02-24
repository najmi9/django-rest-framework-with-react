import React from 'react';

export default function Summary () {
    const handleSubmit = e => {
        e.preventDefault();
        const data = Object.fromEntries(new FormData(e.target));
        console.log(data);
    }

    return(
        <div className="summary">
            <h1>Summary: </h1>
            Personnal Data:
            <form onSubmit={handleSubmit}>
                <input type="text" name="name" id="name"/>
                <input type="email" name="email" id="email"/>
                <input type="password" name="password" id="password"/>
                <input type="submit" name="submit" value="submit"/>
            </form>
        </div>
    );
}