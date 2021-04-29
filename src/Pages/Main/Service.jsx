import React from 'react';
import { Container } from "semantic-ui-react";

const Service = () => {
    return (
        <>
        <div className="service-banner">
        <img src="assets/images/banner.jpg" />
        <div className="banner-content">
          <h1 className="headingOne">Our Services</h1>
          <div className="underline_img">
          <img src="assets/images/path.png" style={{width:'85px', height: '10px'}}/>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius,
            nulla.
          </p>
        </div>
      </div>
      <div className="service-formation">
          <Container>
        <h1 className="headingOne">List Of Our Services</h1>
        <div className="underline_img">
          <img src="assets/images/center.png" style={{width:'85px', height: '10px'}}/>
          </div>    
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
          excepturi, ducimus ab eius iste similique? Expedita ipsum atque nam
          facere!
        </p>
        </Container>
        </div>
        </>
    );
}

export default Service;