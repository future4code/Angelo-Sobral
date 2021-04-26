import styled, { keyframes } from "styled-components";
import BaseBg from "../../assets/images/bg1.jpg";

const translate = keyframes`
0% {
    transform: translateX(850%) translateY(-110px) rotate(-170deg) ;
}

100% {
    transform: translateX(-200px) translateY(200px)
}
`;

const translateMobile = keyframes`
0% {
    transform: translateX(750%) translateY(-310px) rotate(-130deg) ;
}

100% {
    transform: translateX(-200px) translateY(200px)
}
`;

export const Main = styled.main`
  background: url(${BaseBg}) no-repeat center;
  background-size: cover;
  height: 100vh;
  position: relative;
  overflow: hidden;
`;

export const MainCard = styled.div`
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
  align-items: center;
  box-shadow: 0 8px 32px 0 rgb(0 9 2 / 82%),
    inset 0 8px 32px 0 rgb(28 30 69 / 52%);
  padding: 20px 30px;
  border: 1px solid #f4f4f4;

  h1 {
    margin-bottom: 12px;

    @media (max-width: 1024px) {
      font-size: 24px;
    }

    @media (max-width: 768px) {
      font-size: 21px;
    }
  }

  p {
    font-size: 20px;
    font-weight: 500;
    text-align: justify;
    margin-bottom: 12px;

    @media (max-width: 1024px) {
      font-size: 17px;
      letter-spacing: 1px;
    }

    @media (max-width: 768px) {
      font-size: 16px;
      letter-spacing: 1px;
    }
  }

  button {
    padding: 15px;
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

    @media(max-width: 450px) {
    font-size: 14px;
    padding: 12px;
    }

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

export const DivButtons = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;

export const MoonIMG = styled.img`
  width: 120px;
  object-fit: cover;
  position: absolute;
  left: 30px;
  animation: ${translate} 30s linear infinite;
  z-index: 100;

  @media(max-width: 450px) {
    animation: ${translateMobile} 12s linear infinite;
    }

`;