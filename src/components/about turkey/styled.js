import styled from "styled-components";

import img from "./img/2.jpg"
export const Container = styled.div`
width: 100%;
height: 100vh;
background-image: url(${img});
background-size: cover;
background-position: center;
display: flex;
justify-content: center;
flex-wrap: wrap;
align-items: center;
`
export const AboutBlock = styled.div`
width: 70%;
height: 60%;
margin-top: 40px;
border-radius: 40px;
overflow: hidden;
backdrop-filter: blur(10px);
background-color: rgba(0,0,0,0.21);
text-align: center;
display: flex;
flex-wrap: wrap;
align-items: center;
justify-content: center;
padding: 3rem;
color: white;
font-family: 'Karla', sans-serif;
p{
font-size: 15px;
}

`
export const BlockVideo = styled.div`
width: 100%;
height: 100px;
display: flex;
justify-content: center;
button{
width: 150px;
height: 80px;
font-size: 70px;
border: none;
color:rgb(255,169,3) ;
background-color: transparent;
outline: none;
cursor: pointer;
transition: 0.5s;
&:hover{
transform: scale(1.1);
}
}
`