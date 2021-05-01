import React from 'react';
import { Grid, Container } from "semantic-ui-react";

import Footer from '../../Component/Main-Component/Footer';

import Crumb from '../../Component/Main-Component/Crumb';
const Contact = () => {
    return(
        <>
        <Crumb />
        <div class="contact" style={{ background: `url(${process.env.PUBLIC_URL + '/Assets/images/contact-bg.png'})`,backgroundSize: 'cover' }}>  
        

    <h1 class="headingOne">Contact</h1>
    
    <p>Experience success with UAE and take your business to new heights with Askepro.<br/><br/>
            Contact us, today!
</p>
  </div>
  <Container>
  <div class="address">
  <Grid doubling columns={2}>
      <Grid.Column width={6}>
      
        
          <div class="contact-details-1">
            <img src={process.env.PUBLIC_URL + '/Assets/images/pin.png'} />
            <p>Marina Crown<br />
              King Salman Bin Abdulaziz Al Saud St
              Dubai, United Arab Emirates</p>
          </div>
          <div class="contact-details">
          <img src={process.env.PUBLIC_URL + '/Assets/images/phone.png'} />
            <p>+97180073232</p>
          </div>
          <div class="contact-details">
          <img src={process.env.PUBLIC_URL + '/Assets/images/mail.png'} />
            <p>care@askepro.ae</p>
          </div>
        
      
      </Grid.Column>
      <Grid.Column width={10}>
        <div id="map">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3613.353890326994!2d55.14604381427655!3d25.08987918394629!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f6b5004392cff%3A0x34dd31289ede45e!2sMarina%20Crown%20-%20King%20Salman%20Bin%20Abdulaziz%20Al%20Saud%20St%20-%20Dubai%20-%20United%20Arab%20Emirates!5e0!3m2!1sen!2sin!4v1619884139758!5m2!1sen!2sin" ></iframe>
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