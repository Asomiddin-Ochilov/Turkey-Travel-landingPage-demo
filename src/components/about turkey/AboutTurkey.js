import React from "react";
import {AboutBlock, BlockVideo, Container} from "./styled";

import Fade from "react-reveal/Fade";
function AboutTurkey() {
    return(
      <Container>
              <AboutBlock>
                  <Fade bottom>
                      <h1>About Turkey</h1>
                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                          Consectetur impedit iste maiores quam totam vel voluptas!
                          Consectetur iure quam sed?</p>
                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                          Consectetur impedit iste maiores quam totam vel voluptas!
                          Consectetur iure quam sed?</p>
                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                          Consectetur impedit iste maiores quam totam vel voluptas!
                          Consectetur iure quam sed?</p>
                  </Fade>
              </AboutBlock>
          <BlockVideo>
              <button>
                  <i className="bi bi-play-circle"> </i>
              </button>
          </BlockVideo>
      </Container>
    )
}
export default AboutTurkey