import React from 'react';
import { Grid, Container } from "semantic-ui-react";

import Footer from '../../Component/Main-Component/Footer';
import Header from '../../Component/Main-Component/Header';
const Contact = () => {
    return(
        <>
        <div class="contact" style={{ background: "url(/Assets/images/contact-bg.png)",backgroundSize: 'cover' }}>            
    <h1 class="headingOne">Contact</h1>
    
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis numquam nemo voluptatibus fuga fugit quod
      veniam. Doloribus officiis minus eius!</p>
  </div>
  <Container>
  <div class="address">
  <Grid doubling columns={2}>
      <Grid.Column width={6}>
      
        
          <div class="contact-details-1">
            <img src={process.env.PUBLIC_URL + '/Assets/images/pin.png'} />;
            <p>Marina Crown<br />
              King Salman Bin Abdulaziz Al Saud St
              Dubai, United Arab Emirates</p>
          </div>
          <div class="contact-details">
         <img src={process.env.PUBLIC_URL + '/Assets/images/phone.png'} />;
            <p>+97180073232</p>
          </div>
          <div class="contact-details">
                        <img src={process.env.PUBLIC_URL + '/Assets/images/mail.png'} />;
            <p>care@askepro.ae</p>
          </div>
        
      
      </Grid.Column>
      <Grid.Column width={10}>
        <div id="map">

          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.090007291963!2d77.37166581492322!3d28.62706438242004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce559fabd5969%3A0x48a08667edff0402!2sThe%20Corenthum!5e0!3m2!1sen!2sin!4v1608110081574!5m2!1sen!2sin" ></iframe>
        </div>
      </Grid.Column>
      </Grid>
    </div>
    </Container>
    <Footer />
        </>
    );
} 

export default Contact;