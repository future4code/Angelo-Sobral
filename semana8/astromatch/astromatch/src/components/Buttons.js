import axios from "axios";
import React, { useState } from "react";
import "../App.css";

const Buttons = (props) => {
  const [alert, setAlert] = useState(false);

  const clearAll = async () => {
    try {
      const url =
        "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/angelo/clear";
      await axios.put(url);
      alertOpen();
      alertClose();
      props.getMatches();
      props.getProfile();
    } catch (err) {
      console.log(err);
    }
  };

  const alertOpen = () => {
    setAlert(true);
  };

  const alertClose = () => {
    setTimeout(() => setAlert(false), 3000);
  };

  return (
    <div className="buttons">
      {alert && (
        <div className="alertSuccess">
          Dados de matches resetados! Novos contatos adicionados!
        </div>
      )}
      <button
        onClick={() => props.choosePerson(props.id, false)}
        className="dislike"
        disabled={props.isMatch}
      />
      <button onClick={clearAll} className="reset" disabled={props.isMatch} />
      <button
        onClick={() => props.choosePerson(props.id, true)}
        className="like"
        disabled={props.isMatch}
      />
    </div>
  );
};

export default Buttons;