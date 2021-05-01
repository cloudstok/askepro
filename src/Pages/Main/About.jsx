import React from "react";
import { Container, Grid } from "semantic-ui-react";
import Footer from "../../Component/Main-Component/Footer";

import Crumb from '../../Component/Main-Component/Crumb';
import '../../Sass/Sass-Main/_About.scss';

const About = () => {
  return (
    <>
      <Crumb />
      <div className="about">
        
     <img  classname="about_background" src={process.env.PUBLIC_URL + 'Assets/images/texture.png'}   style={{ width: "100%", height: "60vh", objectFit: "cover"}}/>
        <div className="about-content">
          <img src={process.env.PUBLIC_URL + '/Assets/images/Epro Logo_Web@3x.png'} />
          <h1 className="headingOne">About</h1>

          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Placeat,
            amet! Velit quod sit dicta et accusamus? Rerum earum tempore ab,
            itaque culpa quod modi quaerat! Officia consequuntur earum nulla
            deserunt?
          </p>
        </div>
      </div>

      <div className="team">

        <Container>
        <div className="about_container">    
            <h1 className="headingOne">Our Team</h1>

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
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry. Lorem Ipsum has been the
                          industry’s standard dummy text ever since the 1500s,
                          when an unknown printer took a galley of type and
                          scrambled it to make a type
                        </p>
                      </div>
                      <div className="team-image">

                      <img src={process.env.PUBLIC_URL + '/Assets/images/Mask Group 8@3x.png'} />
                        
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
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry. Lorem Ipsum has been the
                          industry’s standard dummy text ever since the 1500s,
                          when an unknown printer took a galley of type and
                          scrambled it to make a type
                        </p>
                      </div>
                      <div className="team-image">
                      <img src={process.env.PUBLIC_URL + '/Assets/images/Mask Group 8@3x.png'} />
                      </div>
                    </div>
                    
                  </div>
                </div>
              </Grid.Column>
              <Grid.Column></Grid.Column>
            </Grid>
          </div>
        </Container>
      </div>

      <Footer />
    </>
  );
};

export default About;
