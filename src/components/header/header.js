import React from 'react'
import {BlockHeader, BoxText, Container, Logo, Navbar, NavLink} from "./styled";
import Fade from 'react-reveal/Fade';
function Header() {
    return(
        <Container>
         <Navbar>
         <Logo>
             <a href="">
                 Travel
             </a>
         </Logo>
          <NavLink>
              <a href="">ABOUT US</a>
              <a href="">TOURS</a>
              <a href="">GALLERY</a>
              <a href="">ABOUT TURKEY</a>
          </NavLink>
             <Logo>
                 ENG|РУС
             </Logo>
         </Navbar>
        <BlockHeader>
        <BoxText>
            <Fade bottom>
                <h1>WELCOME TO </h1>
                <h1 className={'turkey'}>TURKEY</h1>
                <p>Travel with us</p>
                <p>Lorem ipsum dolor sit amet.</p>
                <button className={'btn-1'}>fgf</button>
                <button className={'btn-2'}>fgeeer</button>
            </Fade>
        </BoxText>
        </BlockHeader>
        </Container>
    )

}
export default Header