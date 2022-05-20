import React from "react";
import {Contact, Container, Item, UserBlock} from "./styled";

import user1 from './img/user-img/user1.jpg'
import {AboutBlock} from "../about turkey/styled";

import Fade from 'react-reveal/Fade';
function FooterBlock() {

    return(
        <Container>
            <Fade left>
                <div className="block-header">
                    <h1>Best offer!</h1>
                </div>
                <div className="block-body">
                    <div className="block-item">
                        <h1>15%</h1> <p>Discount</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                        <button>Receive</button>
                    </div>
                    <div className="block-item">
                        <h1><i className="bi bi-gift"> </i></h1> <p>Discount</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                        <button>Receive</button>
                    </div>
                </div>
                <div className="block-header">
                    <h1>Reviews!</h1>
                </div>
            </Fade>

           <UserBlock>
               <Fade bottom>
                   <div className="user-item">
                       <img src={user1} alt=""/>
                       <span>Lorem ipsum </span>
                       <p>Lorem ipsum dolor sit amet,
                           consectetur adipisicing elit.
                           Dolore est id iure!</p>
                   </div>
               </Fade>
               <Fade bottom>
                   <div className="user-item">
                       <img src={user1} alt=""/>
                       <span>Lorem ipsum </span>
                       <p>Lorem ipsum dolor sit amet,
                           consectetur adipisicing elit.
                           Dolore est id iure!</p>
                   </div>
               </Fade>
               <Fade bottom>
                   <div className="user-item">
                       <img src={user1} alt=""/>
                       <span>Lorem ipsum </span>
                       <p>Lorem ipsum dolor sit amet,
                           consectetur adipisicing elit.
                           Dolore est id iure!</p>
                   </div>
               </Fade>
               <Fade bottom>
                   <div className="user-item">
                       <img src={user1} alt=""/>
                       <span>Lorem ipsum </span>
                       <p>Lorem ipsum dolor sit amet,
                           consectetur adipisicing elit.
                           Dolore est id iure!</p>
                   </div>
               </Fade>
               <Fade bottom>
                   <div className="user-item">
                       <img src={user1} alt=""/>
                       <span>Lorem ipsum </span>
                       <p>Lorem ipsum dolor sit amet,
                           consectetur adipisicing elit.
                           Dolore est id iure!</p>
                   </div>
               </Fade>
               <Fade bottom>
                   <div className="user-item">
                       <img src={user1} alt=""/>
                       <span>Lorem ipsum </span>
                       <p>Lorem ipsum dolor sit amet,
                           consectetur adipisicing elit.
                           Dolore est id iure!</p>
                   </div>
               </Fade>
               <Fade bottom>
                   <div className="user-item">
                       <img src={user1} alt=""/>
                       <span>Lorem ipsum </span>
                       <p>Lorem ipsum dolor sit amet,
                           consectetur adipisicing elit.
                           Dolore est id iure!</p>
                   </div>
               </Fade>
               <Fade bottom>
                   <div className="user-item">
                       <img src={user1} alt=""/>
                       <span>Lorem ipsum </span>
                       <p>Lorem ipsum dolor sit amet,
                           consectetur adipisicing elit.
                           Dolore est id iure!</p>
                   </div>
               </Fade>

           </UserBlock>

          <AboutBlock>
              <Fade top>
                  <p className={'form-text'}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id, repellat?</p>
                  <div className="form">
                      <input type="text" placeholder={'Enter your name'}/>
                      <input type="text" placeholder={'Enter your email'}/>
                      <button>Submit your application</button>
                  </div>
              </Fade>
          </AboutBlock>
          <Contact>
            <div style={{width:'100%'}}>
                <h1>Contact</h1>
            </div>

              <br/>
      <Item>
          <p><span> <i className="bi bi-telephone"> </i></span> +3 80 (95) 448 32 30</p>
          <p><span>    <i className="bi bi-geo-alt"> </i></span> Address Kiev,st. Vishnova</p>
          <p><span>    <i className="bi bi-envelope"> </i></span> traveltur@gmail.com</p>
      </Item>
              <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d396518.51543307246!2d69.88590857382908!3d41.03185382445409!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38afeeb0f032acbf%3A0x6af0123d5787be09!2z0JDQvdCz0YDQtdC9LCDQo9C30LHQtdC60LjRgdGC0LDQvQ!5e0!3m2!1sru!2s!4v1638084229064!5m2!1sru!2s"
                   loading="lazy"></iframe>
              <div className="links">
                  <a href=""><i className="bi bi-telegram"> </i></a>
                  <a href=""> <i className="bi bi-facebook"> </i></a>
                  <a href=""> <i className="bi bi-instagram"> </i> </a>
              </div>
          </Contact>

        </Container>
    )

}
export default FooterBlock