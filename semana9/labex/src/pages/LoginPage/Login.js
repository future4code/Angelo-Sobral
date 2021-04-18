import React from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { URL_LOGIN } from "../../utils/apiUtils";
import { goToAdminHomePage } from "../../routes/coordinator";
import { CardLogin, MainContainer } from "./LoginStyle";
import { useForm } from "../../hooks/useForm";

const LoginPage = () => {
  const history = useHistory();
  const [form, onChange, resetForm] = useForm({ email: "", password: "" });

  const login = (e) => {
    e.preventDefault()
    axios
      .post(URL_LOGIN, form)
      .then((res) => {
        window.localStorage.setItem("tokenLabeX", res.data.token);
        window.localStorage.setItem("emailLogin", form.email);
        goToAdminHomePage(history);
      })
      .catch((err) => {
        console.log(err);
        alert("Este e-mail não tem autorização para acessar esta área! Entre em contato com o desenvolvedor.")
        resetForm();
      });
  };

  return (
    <MainContainer>
      <CardLogin>
        <h1>LabeX - Login</h1>
        <form onSubmit={login}>
        <div>
          <input
            required
            pattern="^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$"
            name="email"
            type="email"
            value={form.email}
            onChange={onChange}
          />
          <span></span> {/* para animação no css*/}
          <label>E-mail</label>
        </div>

        <div>
          <input
            required
            pattern="^.{6,}$"
            name="password"
            type="password"
            value={form.password}
            onChange={onChange}
          />
          <span></span> {/* para animação no css*/}
          <label>Senha</label>
        </div>

        <button>Entrar</button>
        </form>
      </CardLogin>
    </MainContainer>
  );
};

export default LoginPage;
