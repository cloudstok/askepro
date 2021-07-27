import React from "react";
import { Container, Grid, Breadcrumb } from "semantic-ui-react";
import Footer from "../../Component/Main-Component/Footer";
import Crumb from "../../Component/Main-Component/Crumb";
import Notification from "../../Component/Main-Component/Notification";
import "../../Sass/Sass-Main/_About.scss";
import { MyJourney } from "../../Component/Main-Component/MyJourney";

const About = () => {
  return (
    <>
      <div className="about_crumb">
    {/*     <Crumb
          section={[
            { key: "home", content: "Home", link: true },
            { key: "apply", content: "About", active: true },
          ]}
        /> */}
         <Breadcrumb>
                <Breadcrumb.Section href="/">Home</Breadcrumb.Section>
                <Breadcrumb.Divider icon="right chevron" />
                <Breadcrumb.Section active>
                  About
                </Breadcrumb.Section>
              </Breadcrumb>
    

      </div>
      <div className="about">
        <img
          className="about_bg"
          src={process.env.PUBLIC_URL + "/Assets/images/texture.png"}
        />

        <div className="about-content">
          <img
            className="about_logo"
            src={process.env.PUBLIC_URL + "/Assets/images/Epro Logo_Web@3x.png"}
          />
          <h1 className="headingOne">About</h1>

          <p>
            <Container text>
              <h2>WHY WE ARE DIFFRENT ?</h2>
              <p>Our core values are trust, integrity and confidentiality. We strive to deliver a cost-effective, professional and speedy service in line with customer requirements. We have a dedicated team of professionals and experienced hands with in-depth knowledge of the laws and procedures relating to governmental transactions. We provide advice which works and ensure that an assignment achieves timely completion. We believe in long term relationships and hence are committed to providing the best services to our Clients</p>
              <h2>WE ARE AIMING TO</h2>
              <p>Our goal is to be the PRO concierge service of choice for businesses and individuals across the UAE. Navigating the UAE’s complex landscape of administrative and regulatory obligations can be time-consuming and overwhelming, whether you’re an individual, a start-up, SME or large-scale corporate</p>
              <h2>MISSION</h2>
              <p>Our mission is to take the hassle out of business by consistently providing superior services designed to put our clients at ease. And with unparalleled depth of both functional and industrial expertise, we not only help clients enter the UAE market with condense and poise but also build their capabilities for the future. Our knowledge, expertise, local insight and passion allow us to address governmental challenges that no one else can.</p>
              
              {/* <p>
                With an objective of successfully set-up businesses in UAE,
                Askepro was established in 2014, in Dubai. With a streamlined
                approach, we ensure that all our experienced consultants help
                you navigate through all the processes that are needed to
                relocate, establish or start a venture from scratch.
                Cost-effectiveness and transparent communication are constantly
                emphasised on because our business’s success lies in yours.
                <br />
                <br />
                With an expert advisory and experience in dealing with clients
                from various industries, our experience is reflected on our
                approach towards your requirements and the quick turn-around
                time also ensures that you do not miss an opportunity in
                succeeding.
                <br />
                <br />
                Get in-touch for all business requirements and relocation
                queries and we’ll contact you with the best way forward.
                <br />
                <br />
                Experience success with UAE and take your business to new
                heights with Askepro.
                <br />
                <br />
                Contact us, today!
              </p> */}
            </Container>
          </p>
        </div>
      </div>

      <div className="team">
        <Container>
        <div className="about_container">
            <h1 className="headingOne">Meet Our Management Team </h1>

            <Grid doubling columns={2}>
              <Grid.Column>
                <div className="space1">
                  <div className="about-card">
                    <div className="column">
                      <div className="team-name">
                        <h5>Ahmed Bin Sulayem</h5>
                        <p>Executive Chairman and Chief Executive Officer, askEPro</p>
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
                        <img
                          src={
                            process.env.PUBLIC_URL + "/Assets/images/team.svg"
                          }
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
                        <h5>Agent Name</h5>
                        <p>Chief Operating Officer, askEPro</p>
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
                        <img
                          src={
                            process.env.PUBLIC_URL + "/Assets/images/team2.svg"
                          }
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </Grid.Column>
     
            </Grid>
          </div> 
        </Container>
      </div>
    <MyJourney />

      <Footer />
      <Notification />
    </>
  );
};

export default About;
