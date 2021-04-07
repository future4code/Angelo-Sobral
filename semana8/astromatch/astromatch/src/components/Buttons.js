import React, { useState } from 'react'
import "../App.css";
import axios from 'axios'

const Buttons = (props) => {

    const [isMatch, setIsMatch] = useState({})

    const handleLikePerson = async (id, choice) => {
        // props.loading(false)
        try {
            const url = 'https://us-central1-missao-newton.cloudfunctions.net/astroMatch/darvas/choose-person'
            const body = {
                id: id,
                choice: choice
            }
            const res = await axios.post(url, body)
            setIsMatch(res.data)
            props.getProfile()
        } catch (err) {
            console.log(err)
        }
        console.log(isMatch)
    }

    return(
        <div className="buttons">
            <button onClick={() => handleLikePerson(props.id, false)} className="dislike"/>
            <button onClick={() => handleLikePerson(props.id, true)} className="like"/>
        </div>
    )
}

export default Buttons