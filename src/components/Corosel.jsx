import React, { useEffect, useState } from "react";
import {Carousel} from 'react-bootstrap'

export default class Corosel extends React.Component{
    render(){
        return (
          <div className="landing-section">
            <div className="container">
              {/* {ControlledCarousel} */}

              <Carousel>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src="images/poster_1.jpg"
                    alt="First slide"
                  />
                  <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>
                      Nulla vitae elit libero, a pharetra augue mollis interdum.
                    </p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src="images/poster_2.jpg"
                    alt="Second slide"
                  />

                  <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src="images/poster_3.jpg"
                    alt="Third slide"
                  />

                  <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>
                      Praesent commodo cursus magna, vel scelerisque nisl
                      consectetur.
                    </p>
                  </Carousel.Caption>
                </Carousel.Item>
              </Carousel>
            </div>
          </div>
          // <div className='landing-section'>
          //     <div className='container'>
          //         <Carousel>
          //             <Carousel.Item>
          //                 <img className="d-block w-100" src="images/layanan_1.png" alt="First slide" />
          //                 <Carousel.Caption>
          //                     <h3>First slide label</h3>
          //                     <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          //                 </Carousel.Caption>
          //             </Carousel.Item>
          //             <Carousel.Item>
          //                 <img className="d-block w-100" src="images/poster_2.jpg" alt="Second slide" />
          //                 <Carousel.Caption>
          //                     <h3>Second slide label</h3>
          //                     <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          //                 </Carousel.Caption>
          //             </Carousel.Item>
          //             <Carousel.Item>
          //                 <img className="d-block w-100" src="images/poster_3.jpg" alt="Third slide" />
          //                 <Carousel.Caption>
          //                     <h3>Third slide label</h3>
          //                     <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
          //                 </Carousel.Caption>
          //             </Carousel.Item>
          //         </Carousel>
          //     </div>
          // </div>
        );
    }
}
