import styled from "styled-components"
import BaseBg from "../../assets/images/adminhome.jpg"

export const Main = styled.main`
  background: url(${BaseBg}) no-repeat center;
  background-size: cover;
  min-height: 100vh;
`
export const MainContainer = styled.div`
max-width: 1440px;
margin: 0 auto;
display: flex;
justify-content: space-between;
align-items: center;
min-height: 100vh;
padding: 0 30px;
overflow: hidden;

@media(max-width: 450px) {
    flex-direction: column;
    }

`

export const CardInfo = styled.div`
width: 23%;
height: 400px;
box-shadow: 0px 0px 10px rgba(0,0,0, .8);
backdrop-filter: blur(4px);
background: hsla(0, 0%, 70%, 0.7);
padding: 20px;
font-size: 20px;
border-radius: 5px;
color: #2f0444;
font-weight: 500;

@media(max-width: 450px) {
    width: 100%;
    margin-top: 90px;
    margin-bottom: 16px;
    }

span{
  font-weight: bold;
  font-size: 16px;
}
`