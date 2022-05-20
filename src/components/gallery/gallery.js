import React from "react";
import {Carousel2, CarouselBlock, Container, Item, Item1, Item2, Item3, Item4, ItemFooter} from "./styled";
import Fade from 'react-reveal/Fade';
function Gallery() {

    return(
         <Container>
             <Fade bottom>
                 <p>Our tours</p>
                 <CarouselBlock>
                     <Item>
                         <ItemFooter>
                             <div>
                                 <p> <span>Lorem ipsum.343 sd</span></p>
                                 <p><span><i className="bi bi-calendar-week"> </i></span> 27-11-2021-27-12-2021</p>
                                 <p><span> <i className="bi bi-cash-coin"> </i></span> from <span>7000 $</span></p>
                             </div>
                             <div style={{justifyContent:'end'}}>
           <span className={'star'}>
               <i className="bi bi-star-fill"> </i>
               <i className="bi bi-star-fill"> </i>
               <i className="bi bi-star-fill"> </i>
               <i className="bi bi-star-fill"> </i>
               <i className="bi bi-star-fill"> </i>
               <i className="bi bi-star-fill"> </i>
           </span>

                                 <button>More details</button>

                             </div>
                         </ItemFooter>
                     </Item>
                     <Item>
                         <ItemFooter>
                             <div>
                                 <p> <span>Lorem ipsum.343 sd</span></p>
                                 <p><span><i className="bi bi-calendar-week"></i></span> 27-11-2021-27-12-2021</p>
                                 <p><span> <i className="bi bi-cash-coin"></i></span> from <span>7000 $</span></p>
                             </div>
                             <div style={{justifyContent:'end'}}>
           <span className={'star'}>
               <i className="bi bi-star-fill"></i>
               <i className="bi bi-star-fill"></i>
               <i className="bi bi-star-fill"></i>
               <i className="bi bi-star-fill"></i>
               <i className="bi bi-star-fill"></i>
               <i className="bi bi-star-fill"></i>
           </span>

                                 <button>More details</button>

                             </div>
                         </ItemFooter>
                     </Item>
                     <Item>
                         <ItemFooter>
                             <div>
                                 <p> <span>Lorem ipsum.343 sd</span></p>
                                 <p><span><i className="bi bi-calendar-week"></i></span> 27-11-2021-27-12-2021</p>
                                 <p><span> <i className="bi bi-cash-coin"></i></span> from <span>7000 $</span></p>
                             </div>
                             <div style={{justifyContent:'end'}}>
           <span className={'star'}>
               <i className="bi bi-star-fill"></i>
               <i className="bi bi-star-fill"></i>
               <i className="bi bi-star-fill"></i>
               <i className="bi bi-star-fill"></i>
               <i className="bi bi-star-fill"></i>
               <i className="bi bi-star-fill"></i>
           </span>

                                 <button>More details</button>

                             </div>
                         </ItemFooter>
                     </Item>
                     <Item>
                         <ItemFooter>
                             <div>
                                 <p> <span>Lorem ipsum.343 sd</span></p>
                                 <p><span><i className="bi bi-calendar-week"></i></span> 27-11-2021-27-12-2021</p>
                                 <p><span> <i className="bi bi-cash-coin"></i></span> from <span>7000 $</span></p>
                             </div>
                             <div style={{justifyContent:'end'}}>
           <span className={'star'}>
               <i className="bi bi-star-fill"></i>
               <i className="bi bi-star-fill"></i>
               <i className="bi bi-star-fill"></i>
               <i className="bi bi-star-fill"></i>
               <i className="bi bi-star-fill"></i>
               <i className="bi bi-star-fill"></i>
           </span>

                                 <button>More details</button>

                             </div>
                         </ItemFooter>
                     </Item>
                     <Item>
                         <ItemFooter>
                             <div>
                                 <p> <span>Lorem ipsum.343 sd</span></p>
                                 <p><span><i className="bi bi-calendar-week"></i></span> 27-11-2021-27-12-2021</p>
                                 <p><span> <i className="bi bi-cash-coin"></i></span> from <span>7000 $</span></p>
                             </div>
                             <div style={{justifyContent:'end'}}>
           <span className={'star'}>
               <i className="bi bi-star-fill"></i>
               <i className="bi bi-star-fill"></i>
               <i className="bi bi-star-fill"></i>
               <i className="bi bi-star-fill"></i>
               <i className="bi bi-star-fill"></i>
               <i className="bi bi-star-fill"></i>
           </span>

                                 <button>More details</button>

                             </div>
                         </ItemFooter>
                     </Item>
                     <Item>
                         <ItemFooter>
                             <div>
                                 <p> <span>Lorem ipsum.343 sd</span></p>
                                 <p><span><i className="bi bi-calendar-week"></i></span> 27-11-2021-27-12-2021</p>
                                 <p><span> <i className="bi bi-cash-coin"></i></span> from <span>7000 $</span></p>
                             </div>
                             <div style={{justifyContent:'end'}}>
           <span className={'star'}>
               <i className="bi bi-star-fill"></i>
               <i className="bi bi-star-fill"></i>
               <i className="bi bi-star-fill"></i>
               <i className="bi bi-star-fill"></i>
               <i className="bi bi-star-fill"></i>
               <i className="bi bi-star-fill"></i>
           </span>

                                 <button>More details</button>

                             </div>
                         </ItemFooter>
                     </Item>
                 </CarouselBlock>

             </Fade>
             <Fade right>
                 <Carousel2>
                     <h2>Gallery</h2>
                     <button>Category</button>
                     <Item1>
                         <div></div>
                         <div></div>
                     </Item1>
                     <Item2>
                         <div></div>
                         <div></div>
                     </Item2>
                     <Item3>
                         <div></div>
                         <div></div>
                     </Item3>
                     <Item4>
                         <div></div>
                     </Item4>
                 </Carousel2>
             </Fade>

            </Container>

    )
}

export default Gallery