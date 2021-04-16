import styled from "styled-components";
import BaseBg from "../../assets/images/login.jpg";

export const MainContainer = styled.main`
  height: 100vh;
  width: 100%;
  background: url(${BaseBg}) no-repeat center;
  background-size: cover;
`;

export const CardLogin = styled.div`
  height: 60%;
  width: 40%;
  min-width: 360px;
  min-height: 436px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  backdrop-filter: blur(4px);
  background: hsla(0, 0%, 100%, 0.438);
  border-radius: 10px;
  z-index: 100;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: 0 8px 32px 0 rgb(0 9 2 / 82%),
    inset 0 8px 32px 0 rgb(28 30 69 / 52%);
  padding: 20px 30px;
  border: 1px solid #f4f4f4;

  h1 {
    margin-bottom: 30px;

    @media (max-width: 1024px) {
      font-size: 24px;
    }

    @media (max-width: 768px) {
      font-size: 21px;
    }
  }

  form {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  input {
    width: 80%;
    outline: none;
    padding: 5px 10px;
    border: none;
    border-bottom: 2px solid #1a1a1a;
    background-color: transparent;
    margin-bottom: 30px;
    ::placeholder{
      color: #1a1a1a;
      font-size: 16px;
    }
  }

  button {
    padding: 10px 15px;
    outline: none;
    border: none;
    border-radius: 5px;
    font-size: 18px;
    text-transform: uppercase;
    background-color: #2f0444;

    color: #f4f4f4;
    font-weight: 400;
    cursor: pointer;
    transition: 0.3s;

    :hover {
      background-color: #3a0555;
      box-shadow: 0 4px 8px 0 rgb(0 9 2 / 52%);
      transform: translateY(-2px);
    }

    :active {
      transform: scale(1.1);
    }
  }
`;
