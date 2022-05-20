import styled from "styled-components";
import bgImg1 from './bg-img/469543.jpg';
export const Container = styled.div`
width: 100%;
height: 100vh;
position: relative;
text-align: center;
background-image: url(${bgImg1});
background-position: center;
background-size: cover;
z-index: 1;
`
export const Navbar = styled.div`
width: 100%;
display: flex;
z-index: 1 !important;
height: 80px;
backdrop-filter: blur(20px);
position: fixed;
top: 0;
right: 0;
left: 0;
margin: 0 auto;
`
export const Logo = styled.div`
width: 20%;
height: 80px;
display: flex;
align-items: center;
justify-content: center;
font-family: 'Karla', sans-serif;
color: rgb(255,169,3);
font-size: 20px;
a{
text-decoration: none;
font-size: 25px;
color: rgb(255,169,3);
font-family: 'Karla', sans-serif;
}
`
export const NavLink = styled.div`
width: 60%;
height: 80px;
display: flex;
align-items: center;
justify-content: center;
a{
text-decoration: none;
font-family: 'Karla', sans-serif;
font-size: 22px;
margin:  0 10px;
font-weight: 500;
overflow: hidden;  
border: 2px solid  transparent;  
padding: 10px;
color: white;
transition: 0.5s;
&:hover{
border-left: 2px solid rgb(255,169,3);
border-right: 2px solid rgb(255,169,3);
}
}
`
export const BlockHeader = styled.div`
width: 50%;
height: 100%;
background: rgba(0,0,0,0.26);
display: flex;
align-items: end;
justify-content: center;
border-radius: 0 0 20px 0;
`
export const BoxText = styled.div`
width: 70%;
height: 450px;
text-align: left;
overflow: hidden;

h1{
font-size: 45px ;
letter-spacing: 2px; 
margin: 1rem 0;
color: white;
font-family: 'Spectral', serif;
}

.turkey{
color: rgb(255,169,3);
margin-top: 30px;
}
p{
font-size: 25px;
margin: 1.5rem 0;
font-family: 'Karla', sans-serif;
color: white;
}
.btn-1{
width: 140px;
height: 45px;
border-radius: 20px;
outline: none;
border: 2px solid rgb(255,169,3);
background: transparent;
margin: 0 10px;
color: white;
cursor: pointer;
font-size: 17px;
font-family: 'Karla', sans-serif;
transition: 0.5s;
&:hover{
transform: scale(1.1);
}
}
.btn-2{
width: 140px;
height: 45px;
border-radius: 20px;
outline: none;
background:  rgb(255,169,3);
border: none;
cursor: pointer;
font-size: 17px;
margin: 0 10px;
color: white;
font-family: 'Karla', sans-serif;
transition: 0.5s;
&:hover{
transform: scale(1.1);
}
}

`