import React from "react";
import { useHistory } from "react-router";
import { useProtectedPage } from "../hooks/useProtectedPage";

const AdiminHomePage = () => {
    const history = useHistory()
    
    const token = window.localStorage.getItem("tokenLabeX")

    const logout = () => {
        window.localStorage.removeItem("tokenLabeX")
        history.push("/login")
    }

    return (<>
    {token
    ? 
    (<>
    <h1>Página do Administrador</h1>
    <button onClick={logout}>Logout</button>
    </>)
    :
    (<div>Você precisa estar logado para acessar essa página</div>)
    }
    </>)
}

export default AdiminHomePage