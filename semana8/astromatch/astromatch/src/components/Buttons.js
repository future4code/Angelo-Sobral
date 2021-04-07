import axios from 'axios';
import React from 'react'
import "../App.css";

const Buttons = (props) => {

    const clearAll = async () => {
        try {
            const url = 'https://us-central1-missao-newton.cloudfunctions.net/astroMatch/:aluno/clear'
            await axios.put(url)
            alert("Tudo ok")
        } catch (err) {
            console.log(err)
        }
    }

    return(
        <div className="buttons">
            <button onClick={() => props.choosePerson(props.id, false)} className="dislike"/>
            <button onClick={clearAll} className="reset"/>
            <button onClick={() => props.choosePerson(props.id, true)} className="like"/>
        </div>
    )
}

export default Buttons