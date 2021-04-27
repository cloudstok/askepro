import React from "react";
import { Grid, Segment, Container, Form } from "semantic-ui-react";

const Footer = () => {
  
  // const response = fetch('http://localhost:8000/serviceCategory', {
  //   method: 'GET'
  // }).then(response => response.json())
  // .then(result => console.log(result.data));
  
  return (
    <>
      <div className="reach">
        <Container>
          <h2 className="underline-small">Reach Out To Us</h2>
          <div className="underline_img">
          <img src="assets/images/path.png" />
          </div>

          <p>Marina Crown</p>
          <p>King Salman Bin Abdulaziz Al Saud St</p>
          <p>Dubai, United Arab Emirates</p>
          <br />
          <p>care@askepro.ae</p>
          <p>+97180073232</p> 

          <div className="information">
            <Form>
              <Form.Group widths="equal">
                <Form.Input placeholder="First name" />
                <Form.Input placeholder="Last name" />
              </Form.Group>
              <Form.TextArea placeholder="Tell us more about you..." />
              <div className="reach-Submit">
                <p>By clicking on 'Submit' you will agree to T&C of AskePro</p>
                <button className="reach-btn bt n-outline-dark" type="submit">
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
                  className="epro_logo"
                  src="assets/images/Epro Logo_Web.png"
                  width="60px"
                />
                <img
                  className="image1"
                  src="assets/images/Image 1@2x.png"
                  width="40px"
                />
                <img
                  className="image2"
                  src="assets/images/Image 2@2x.png"
                  width="40px"
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
