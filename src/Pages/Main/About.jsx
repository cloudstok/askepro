import React from "react";
import { Container, Grid } from "semantic-ui-react";
import Footer from '../../Component/Main-Component/Footer';
import Header from '../../Component/Main-Component/Header';

const About = () => {
  return (
    <>
     <Container>
      <div className="about">
        <img
          src="assets/images/Group 4794.png"
          style={{ width: "100%", height: "60vh", objectFit: "cover" }}
        />
        <div className="about-content">
          <img src="assets/images/Epro Logo_Web@3x.png" />
          <h1 className="headingOne">About</h1>
          <img src="assets/images/center.png" />
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Placeat,
            amet! Velit quod sit dicta et accusamus? Rerum earum tempore ab,
            itaque culpa quod modi quaerat! Officia consequuntur earum nulla
            deserunt?
          </p>
        </div>
      </div>
   
      <div className="team">
        <div className="about_conteiner">
          <h1 className="headingOne">Our Team</h1>
          <img src="assets/images/path.png" />
          <Grid stackable columns={2}>
            
              <Grid.Column>
                <div className="space1">
                  <div className="about-card">
                    <div className="column">
                      <div className="team-name">
                        <h5>Shakeb Khan</h5>
                        <p>Chief Executive Office, EPro</p>
                      </div>
                      <div className="team-content">
                        <p>
                          Lorem, ipsum dolor sit amet consectetur adipisicing
                          elit. Autem similique quos, non excepturi sint numquam
                          adipisci dolor quas architecto? Aliquam.
                        </p>
                      </div>
                      <div className="team-image">
                        <img
                          src="assets/images/Mask Group 8@3x.png"
                          style={{ width: "120px", height: "120px" }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </Grid.Column>
              <Grid.Column>
                <div className="space2">
                  <div className="about-card">
                    <div className="column">
                      <div className="team-name">
                        <h5>Shakeb Khan</h5>
                        <p>Chief Executive Office, EPro</p>
                      </div>
                      <div className="team-content">
                        <p>
                          Lorem, ipsum dolor sit amet consectetur adipisicing
                          elit. Autem similique quos, non excepturi sint numquam
                          adipisci dolor quas architecto? Aliquam.
                        </p>
                      </div>
                      <div className="team-image">
                        <img
                          src="assets/images/Mask Group 8@3x.png"
                          style={{ width: "120px", height: "120px" }}
                        />
                      </div>
                    </div>
                    <div className="team"></div>
                  </div>
                </div>
              </Grid.Column>
              <Grid.Column></Grid.Column>
          </Grid>
        </div>
      </div>
      </Container>
    <Footer />
    </>
  );
};

export default About;
