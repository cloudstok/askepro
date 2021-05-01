import React from "react";
import { Container, Grid  } from "semantic-ui-react";
import Header from '../../Component/Main-Component/Header';
import Visa from '../../Component/Main-Component/Visa';
import Apply from '../../Component/Main-Component/Apply';
import Footer from '../../Component/Main-Component/Footer';
import Notification from '../../Component/Main-Component/Notification';
import '../../Sass/Sass-Main/_home.scss';
import { Link } from "react-router-dom";




const Home = () => {
  return (

    <>
    <div className="cover">
      <main className="wrapper">
        {/* <!-- //second division// --> */}

        <div className="home">
          <div className="home-content">
            <h1>Mainland Company Registration in UAE</h1>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry’s
            </p>
            <Link to="apply"><button type="button" className="same-btn">
               APPLY NOW 
            </button></Link>
          </div>

          <div className="home-bg">
          
            <img src={process.env.PUBLIC_URL + '/Assets/images/login-bg.png'} />;


          </div>
        </div>

        <Container>
          <div className="service">
            <h1 className="headingOne">Our Services</h1>
          </div>
        

          
     
        
        </Container>
        <Visa />
        <Apply />
       
        <Footer />
        <Notification />
        
      </main>
    
    </div>
    </>
  );
};

export default Home;
