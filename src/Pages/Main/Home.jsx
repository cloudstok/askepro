import React from "react";
import { Container } from "semantic-ui-react";
import Header from '../../Component/Main-Component/Header';
import Visa from '../../Component/Main-Component/Visa';
import '../../Sass/Sass-Main/_home.scss';


const Home = () => {
  return (
    <div className="cover">
      <Header />
      <main className="wrapper">
        {/* <!-- //second division// --> */}

        <div className="home">
          <div className="home-content">
            <h1>Mainland Company Registration in UAE</h1>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry’s
            </p>
            <button type="button" className="same-btn">
              <strong> APPLY NOW </strong>
            </button>
          </div>

          <div className="home-bg">
            <img
              src="/assets/images/login-bg.png"
              
            />
          </div>
        </div>

        <Container>
          <div className="service">
            <h1 className="headingOne">Our Services</h1>
          </div>
          <div className="underline_img">
            <img src="assets/images/path.png" />
          </div>
        </Container>
        <Visa />
      </main>
    </div>
  );
};

export default Home;
