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
    margin-bottom: 20px;
    color: #2f0444;
    font-size: 36px;

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

  div {
    position: relative;
    border-radius: 5px;
    height: 50px;
    width: 90%;
    margin-bottom: 30px;
    box-shadow: 0px 0px 10px rgba(0,0,0, .4);
    backdrop-filter: blur(4px);
    background: hsla(0, 0%, 70%, 0.338);
    display: flex;
    justify-content: center;
    align-items: flex-end;
    padding-bottom: 6px;
  }

  input {
    width: 95%;
    outline: none;
    border: none;
    height: 30px;
    border-bottom: 2px solid #1a1a1a;
    background: transparent;
  
    :focus ~ label, :valid ~ label {
      transform: translateY(-18px) scale(.7);
      left: 3px;
      font-weight: 500;
      color: #2f0444;
    }

    :focus ~ span::before, :valid ~ span::before {
      transform: scale(1)
    }

    :valid ~ span::before {
      background: green;
    }

    :valid ~ label {
      color: green;
    }
  }

  span {
    position: absolute;
    bottom: 6px;
    height: 2px;
    width: 95%;
    background: #5b5b5b;

    ::before{
      content: '';
      position: absolute;
      width: 100%;
      height: 100%;
      background: #3a0555;
      transform: scale(0);
      transition: .5s all ease;
    }
  }

  label {
    position: absolute;
    bottom: 10px;
    left: 10px;
    transition: .3s all ease;
    pointer-events: none;
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
      transform: translateY(2px);
      box-shadow: none;
    }
  }
`;
