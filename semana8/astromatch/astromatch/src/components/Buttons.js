import React from 'react'
import "../App.css";

const Buttons = (props) => {

    return(
        <div className="buttons">
            <button onClick={() => props.choosePerson(props.id, false)} className="dislike"/>
            <button onClick={() => props.choosePerson(props.id, true)} className="like"/>
        </div>
    )
}

export default Buttons