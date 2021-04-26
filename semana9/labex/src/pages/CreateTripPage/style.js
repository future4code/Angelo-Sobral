import styled from "styled-components";
import BaseBg from "../../assets/images/adminhome.jpg";

export const Main = styled.main`
  background: url(${BaseBg}) no-repeat center;
  background-size: cover;
  min-height: 100vh;
`;

export const MainContainer = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  padding: 0 30px;
  overflow: hidden;
`;

export const FormArea = styled.form`
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  backdrop-filter: blur(3px);
  background: hsla(0, 0%, 100%, 0.438);
  box-shadow: 0px 8px 32px rgba(0, 0, 0, 0.718);
  max-height: 500px;
  min-width: 360px;
  width: 50%;
  margin-top: 100px;
  padding: 20px;

  input,
  select {
    outline: none;
    border: 1px solid #f2f2f2;
    backdrop-filter: blur(3px);
    background: hsla(0, 0%, 100%, 0.138);
    box-shadow: 0px 0px 7px rgba(0, 0, 0, 0.718);
    border-radius: 5px;
    padding: 10px 5px;
    margin-bottom: 10px;

    &::-webkit-inner-spin-button {
      -webkit-appearance: none;
    }
  }

  button {
    outline: none;
    border: none;
    cursor: pointer;
    padding: 5px 10px;
    border-radius: 3px;
    font-size: 16px;
    background-color: #2f0444;
    color: #f2f2f2;
    transition: 0.3s all ease;

    :hover {
      background-color: #3a0555;
      box-shadow: 0 4px 8px 0 rgb(0 9 2 / 52%);
      transform: translateY(-1px);
    }

    :active {
      transform: translateY(1px);
      box-shadow: none;
    }
  }
`;

export const Input = styled.input`
  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }
`;
