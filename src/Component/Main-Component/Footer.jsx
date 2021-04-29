import React from "react";
import { Grid, Segment, Container, Form } from "semantic-ui-react";
import '../../Sass/Sass-Main/_Footer.scss';


const Footer = () => {
  return (
    <>
     <div className="reach">
        <Container>
          <h2>Reach Out To Us</h2>
          

          <p>Marina Crown</p>
          <p>King Salman Bin Abdulaziz Al Saud St</p>
          <p>Dubai, United Arab Emirates</p>
          <br />
          <p>care@askepro.ae</p><br />
          <p>+97180073232</p> 

          <div className="information">
            <Form>
              <Form.Group widths="equal">
                <Form.Input placeholder="Enter your name" />
                <Form.Input placeholder="Enter email address" />
              </Form.Group>
              <Form.TextArea placeholder="Describe your query" />
              <div className="reach-Submit">
                <p>By clicking on 'Submit' you will agree to T&C of AskePro</p>
                <button className="same-btn btn-outline-dark" type="submit">
                <strong> SUBMIT </strong>
                </button>
              </div>
            </Form>
          </div>
        </Container>
      </div>

      <footer className="footer">
        <Container>
        <Grid doubling columns={2}>
            <Grid.Column>
            <div className="footer-part-1">
                <img
                  className="footer_image"
                  src="assets/images/Epro Logo_Web.png"
                />
                <img
                  className="footer_image1"
                  src="assets/images/Image 1@2x.png"
                 
                />
                <img
                  className="footer_image2"
                  src="assets/images/Image 2@2x.png"
         
                />
              </div>
            </Grid.Column>
              
            <Grid.Column>
              <div className="footer-part-2">
                <p>copyright @ 2020 AskePro</p>
                <div className="bottom-button">
                  <a href="#" style={{ borderLeft: "none" }}>
                    Site Map
                  </a>
                  <a href="#">Legal Notice</a>
                  <a href="#">Data Policy</a>
                  <a href="#">Terms and Conditions</a>
                  <a href="#">Privacy Policy</a>
                </div>
              </div>
            </Grid.Column>
          </Grid>
        </Container>
        
      </footer>
    </>
  );
};

export default Footer;
