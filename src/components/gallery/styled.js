import styled from "styled-components";
import img1 from './gallery-img/2.jpg'
import bg from './gallery-img/3.jpg'
export const Container = styled.div`
width: 100%;
height: auto;
display: flex;
padding-bottom: 3rem;
background-image: linear-gradient(180deg , rgba(0,0,0,0.58) , rgba(0,0,0,0.58)), url(${bg});
flex-wrap: wrap;
overflow: hidden;
background-size: cover;
background-position: center;
p{
margin-top: 2rem;
width: 40%;
height: 100px;
display: flex;
font-size: 30px;
font-family: 'Karla', sans-serif;
align-items: end;
justify-content: center;
}
align-items: center;
justify-content: center;
`
export const CarouselBlock = styled.div`
width: 90%;
height: 100%;
overflow: hidden !important;
display: flex;
flex-wrap: wrap;
align-items: center;
padding-bottom: 20px;
padding-top: 20px;
margin: auto;
justify-content: center;
`
export const Item = styled.div`
width: 25%;
height: 280px;  
box-shadow: -1px 4px 28px 9px rgba(34,60,80,0.42);
border-radius: 20px;
background-image: url(${img1});
background-position: center;
background-size: cover;
transition: 0.5s;
display: flex;
margin: 2rem;
align-items: end;
&:hover{
transform: scale(1.1);
}
`
export const ItemFooter = styled.div`
border-radius: 20px;
background: rgba(0,0,0,0.62);
width: 100%;
height: 80px;
display: flex;
justify-content: space-between;
div{
width: 50%;
display: flex;
flex-wrap: wrap;
align-items: end;

padding-bottom: 5px;
color: white;
}
p{
font-size: 13px;
height: auto;
width: 100%;
margin: 0 !important;
}
span{
color: rgb(255,169,3);
margin: 0 5px;
}
.star{
color: white;
font-size: 8px;
margin-right: 10px;
i{
margin: 0 4px;
}
}
button{
width: 70%;
height: 35px;
border-radius: 20px;
margin-right: 6px;
margin-bottom: 5px;
border: 2px solid rgb(255,169,3);
outline: none;
background: transparent;
color: white;
font-family: 'Karla', sans-serif;
cursor: pointer;
font-size: 13px;
}
`
export const Carousel2 = styled.div`
width: 100vw;
height: 100vh;
text-align: center;
position: relative;
padding-top: 40px;
padding-bottom: 20px;
font-family: 'Karla', sans-serif;
button{
width: 140px;
height: 40px;
border-radius: 20px;
border: 2px solid rgb(255,169,3);
background: transparent;
margin-top: 15px;
}
`
export const Item1= styled.div`
width: 60%;
height: 240px;
margin: 0 auto;
display: flex;
justify-content: space-between;
position:absolute;
left: 0;
right: 0;
top: 70px;
div{
width: 20%;
height: 90%;
border-radius: 20px;
background-image: url(${img1});
background-size: cover;
background-position: center;
transition: 1.1s;
cursor: pointer;
&:hover{
z-index: 1;
transform: translateY(10px);
}
}
`
export const Item2= styled.div`
width: 80%;
height: 240px;
margin: 0 auto;
display: flex;
position:absolute;
justify-content: space-around;
padding: 0 40px;
left: 0;
right: 0;
bottom: 200px;
div{
width: 16%;
height: 90%;
border-radius: 20px;
margin: 0 50px;
background-image: url(${img1});
background-size: cover;
background-position: center;
transition: 1.1s;
cursor: pointer;
&:hover{
z-index: 1;
transform: translateY(10px);
}
}
`
export const Item3= styled.div`
width: 80%;
height: 240px;
margin: 0 auto;
display: flex;
position:absolute;
justify-content: center;
left: 0;
right: 0;
bottom: 50px;
div{
width: 16%;
height: 90%;
border-radius: 20px;
margin: 0 40px;
background-image: url(${img1});
background-size: cover;
background-position: center;
transition: 1.1s;
cursor: pointer;
&:hover{
z-index: 1;
transform: translateY(10px);
}
}
`
export const Item4= styled.div`
width: 14%;
height: 240px;  
margin: 0 auto;
border-radius: 20px;
position:absolute;
bottom: 0;
left: 0;
right: 0;
background-image: url(${img1});
background-size: cover;
background-position: center;
transition: 1.1s;
cursor: pointer;
&:hover{
z-index: 1;
transform: translateY(10px);
}
`