import React from "react";
import { Container, Breadcrumb } from "semantic-ui-react";
import Header from "../../Component/Main-Component/Header";
import Footer from "../../Component/Main-Component/Footer";
import Notification from "../../Component/Main-Component/Notification";
import Visa from "../../Component/Main-Component/Visa";
import Accordion from "../../Component/Main-Component/Accordion/Accordion";
import "../../Sass/Sass-Main/_home.scss";
import "../../Sass/Sass-Main/_About.scss";

import Crumb from "../../Component/Main-Component/Crumb";

const Service = () => {
  return (
    <>
      <div className="crumb">
       {/*  <Crumb
          section={[
            { key: "home", content: "Home", link: true },
            { key: "apply", content: "Service", active: true },
          ]}
        /> */}
          <Breadcrumb>
                <Breadcrumb.Section href="/">Home</Breadcrumb.Section>
                <Breadcrumb.Divider icon="right chevron" />
                <Breadcrumb.Section active>
                  Service
                </Breadcrumb.Section>
              </Breadcrumb>
      </div>
      <div className="service-banner">
        <img src={process.env.PUBLIC_URL + "/Assets/images/step2.jpg"} />
        <div className="banner-content">
          <h1>Our Services</h1>

          <p>
          We provide all types services ranging from your tourist visa needs to forming a company in UAE. Consider us at every level to serve you the best.
          </p>
        </div>
      </div>
      <div className="service-formation">
        <Container>
          <h1 className="headingOne">List Of Our Services</h1>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
            excepturi, ducimus ab eius iste similique? Expedita ipsum atque nam
            facere!
          </p>
        </Container>
      </div>
      <Visa />
      <Accordion />
      <Footer />
      <Notification />
    </>
  );
};

export default Service;
