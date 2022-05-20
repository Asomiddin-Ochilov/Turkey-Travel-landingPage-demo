import React from "react";
import {BlockBody, BlockItem, BlockText, Container} from "./styled";

import Fade from 'react-reveal/Fade';

function About() {

    return(
        <Container>
       <BlockText>
       <p>Lorem ipsum dolor.</p>
       <p>Lorem ipsum dolor. erer ere ...</p>
       </BlockText>
            <Fade bottom>
                <BlockBody>
                    <BlockItem>
                        <i className="bi bi-award"> </i>
                        <p>Lorem ipsum dolor sit.</p>
                    </BlockItem>
                    <BlockItem>
                        <i className="bi bi-people"> </i>
                        <p>Lorem ipsum dolor sit.</p>
                    </BlockItem>
                </BlockBody>
            </Fade>
            <Fade bottom>
                <BlockBody>

                    <BlockItem>
                        <i className="bi bi-alarm"> </i>
                        <p>Lorem ipsum dolor sit.</p>
                    </BlockItem>
                    <BlockItem>
                        <i className="bi bi-camera"> </i>
                        <p>Lorem ipsum dolor sit.</p>
                    </BlockItem>
                </BlockBody>
            </Fade>
            <Fade bottom>
                <BlockBody>
                    <BlockItem>
                        <i className="bi bi-signpost-2"> </i>
                        <p>Lorem ipsum dolor sit.</p>
                    </BlockItem>
                    <BlockItem>
                        <i className="bi bi-person-check"> </i>
                        <p>Lorem ipsum dolor sit.</p>
                    </BlockItem>
                </BlockBody>
            </Fade>
            <Fade bottom>
                <BlockBody>
                    <BlockItem>
                        <i className="bi bi-palette2"> </i>
                        <p>Lorem ipsum dolor sit.</p>
                    </BlockItem>
                    <BlockItem>
                        <i className="bi bi-joystick"> </i>
                        <p>Lorem ipsum dolor sit.</p>
                    </BlockItem>
                </BlockBody>
            </Fade>
        </Container>
    )

}

export default About