import styled from "styled-components";

import img from './img/2.jpg'
export const Container = styled.div`
width: 100%;
height: auto;
display: flex;
background-image:  url(${img});
background-position: center;
background-size: cover;
color: white;
text-align: center;
justify-content: center;
flex-wrap: wrap;
font-family: 'Karla', sans-serif;
.block-header{
width: 60%;
height: 150px;
display: flex;
align-items: end;
justify-content: center;
}
.block-body{
width: 60%;
height: auto;
margin-top: 2rem;
display: flex;
justify-content:space-around ;
.block-item{
width: 35%;
display: flex;
flex-wrap: wrap;
align-items: center;
justify-content: center;
text-align: center;
height: 200px;
h1{
font-size: 50px;
color:rgb(255,169,3) ;
}
p{
margin: 0 10px;
}
button{
width: 80%;
height: 40px;
border: 2px solid rgb(255,169,3) ;
background: transparent;
outline: none ;
border-radius: 20px;
color: white;
font-size: 16px;
}
}
}
.form-text{
margin-top: 10px;
}
.form{
width: 50%;
height: 220px;
margin-top: 20px;
display: flex;
justify-content: center;
align-items: center;
flex-wrap: wrap;
input{
width: 80%;
height: 40px;
border: none;
background: none;
outline: none;
font-size: 18px;
color: #c2c2c2;
border-bottom: 2px solid #cdc9c9;
}
button{
width: 70%;
height: 50px;
border-radius: 20px;
border: none;
outline: none;
background: rgb(255,169,3) ;
color: white;
font-family: 'Karla', sans-serif;
font-size: 16px;
}
}
`
export const UserBlock = styled.div`
  width: 78%;
  height: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  margin: 2rem 0;
  .user-item{
  border: 2px solid rgb(255,169,3) ;
  width: 20%;
  height: 170px;
  backdrop-filter: blur(10px);
  margin: 20px;
  border-radius: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  padding: 10px;
  transition: 0.3s;
  &:hover{
  backdrop-filter: blur(0);
  }
  img{
  width: 60px;
  height: 60px;
  border-radius: 50%;
  }
  p{
  font-size: 14px;
  }
  }
`
export const Contact = styled.div`
width: 100%;
height: 400px;
margin-top: 3rem;
background: rgba(0,0,0,0.75);
display: flex;
flex-wrap: wrap;
align-items: end;
text-align: center;
padding-bottom: 3rem;
padding-top: 10px;
iframe{
border-radius: 20px;
width: 50%;
height: 60%;
border: none;
}
.links{
width: 10%;
display: flex;
flex-wrap: wrap;
justify-content: end;
align-items: center;
padding: 35px 0;
height: 60%;
a{
text-decoration: none;
width: 60%;
font-size: 27px;
color: white;
}
}
`
export  const  Item = styled.div`
width: 27%;
padding-left: 100px;
padding-top: 30px;
padding-bottom: 30px;
display: flex;
flex-wrap: wrap;
height: 60%;
p{
font-size: 16px;
margin: 10px 0;
text-align: left;
i{
font-size: 25px;
margin: 0 10px;
color: rgb(255,169,3);
}
}
`