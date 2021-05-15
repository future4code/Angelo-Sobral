import styled from "styled-components"
import BaseBg from "../../assets/images/bgListTrip.jpg"

export const Main = styled.main`
 background: url(${BaseBg}) no-repeat center;
  background-size: cover;
min-height: 100vh;
`

export const MainContainer = styled.div`
max-width: 1440px;
margin: 0 auto;
display: flex;
flex-direction: column;
align-items: center;
height: 100vh;
padding: 0 30px;
overflow: hidden;

h1{
    backdrop-filter: blur(3px);
  background: hsla(0, 0%, 100%, 0.438);
    width: 100%;
    position: absolute;
    top: 0;
    text-align: center;
    height: 60px;
    display:flex;
    align-items: center;
    justify-content:center; 
    z-index: 100;
}
`

export const MainTripCard = styled.div`
border-radius: 10px;
display: flex;
flex-wrap: wrap;
backdrop-filter: blur(3px);
background: hsla(0, 0%, 100%, 0.438);
 box-shadow: 0px 8px 32px rgba(0, 0, 0, 0.718);
max-height: 80%;
min-width: 350px;
margin-top: 100px;
padding: 5px;
overflow-y: scroll;

@media(max-width: 450px) {
    display: grid;
    grid-template-columns: 350px;
    }

&::-webkit-scrollbar {
  width: 6px;
}
 
&::-webkit-scrollbar-track {
  background: transparent;
}
 
&::-webkit-scrollbar-thumb {
  background-color: #2f0444;
  border-radius: 50px;
}

&::-webkit-scrollbar-track{
  margin: 15px;
}
`

export const DetailsCard = styled.div`
border: 1px solid  #f2f2f2;
backdrop-filter: blur(3px);
background: hsla(0, 0%, 100%, 0.138);
box-shadow: 0px 0px 10px rgba(0,0,0, .6);
padding: 10px;
border-radius: 5px;
margin: 10px;
flex: 1 350px;
position: relative;


button{
    position: absolute;
    right: 10px;
    bottom: 0;
    outline: none;
    border: none;
    cursor: pointer;
    padding: 5px 10px;
    border-radius: 3px;
    font-size: 16px;
    background-color: #2f0444;
    color: #f2f2f2;
    margin-bottom: 10px;
    transition: .3s all ease;

    @media(max-width: 450px) {
    font-size: 15px;
    padding: 2px 5px;
    }

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
`
export const Loading = styled.div`
height:100%;
display: flex;
align-items: center;
text-align: center;
`