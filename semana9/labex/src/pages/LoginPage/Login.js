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

  const login = () => {
    axios
      .post(URL_LOGIN, form)
      .then((res) => {
        window.localStorage.setItem("tokenLabeX", res.data.token);
        goToAdminHomePage(history);
      })
      .catch((err) => {
        console.log(err);
        resetForm();
      });
  };

  return (
    <MainContainer>
      <CardLogin>
        <h1>LabeX - Login</h1>
        <form onSubmit={login}>
        <input
          required
          pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,}$"
          name="email"
          type="email"
          value={form.email}
          onChange={onChange}
          placeholder="E-mail"
        />
        <input
          required
          name="password"
          type="password"
          value={form.password}
          onChange={onChange}
          placeholder="Senha"
        />
        <button>Entrar</button>
        </form>
      </CardLogin>
    </MainContainer>
  );
};

export default LoginPage;
