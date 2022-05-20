import styled from "styled-components";

import img  from "./about-img/2.jpg"
export const Container = styled.div`
width: 100%;  
height: 100vh;
padding-top: 3rem;
background-image: linear-gradient(180deg , rgba(0,0,0,0.23),rgba(0,0,0,0.23)) , url(${img});
background-size: cover;
background-position: center;

`
export const BlockText = styled.div`
border-bottom: 2px solid rgb(255,169,3);
width: 60%;
height: 120px;
margin: 0 auto;
display: flex;
align-items: end;
justify-content: space-around;
padding-bottom: 28px;
p{
font-family: 'Karla', sans-serif;
color: white;
font-size: 25px;
}
`
export const BlockBody = styled.div`
width: 65%;
height: 80px;
margin: 10px auto;
display: flex;
justify-content: space-around;
align-items: end;

`
export const BlockItem = styled.div`
width: 35%;
height: 80px;
display: flex;
justify-content: space-around;
align-items: center;
font-size: 16px;
font-family: 'Karla', sans-serif;
color: white;
i{
font-size: 35px;
color: rgb(255,169,3);
}
`