import React from "react";
import { Grid, Image } from "semantic-ui-react";
import "../../Sass/Sass-Main/_About.scss"
import AOS from "aos";

export const MyJourney = () => {
  AOS.init({
    offset: 100,
    duration: 1100,
    easing: 'ease-in-sine',
    delay: 100,
  });
  return (
    <div>
      <div className="my_journey">
        <h1 className="headingOne">Our Journey </h1>
        <div className="journey_tree">

          <div className="odd_child" >
            <Year number='2015' />
            <div className="odd_child_content" data-aos="fade-right">
              <img src={"/Assets/images/login-bg.png"} />
              <div className="flex_content">
                <h1>LAID THE FOUNDATION

                </h1>
                <p>FOR OUR NEW JOURNEY</p>
              </div>
            </div>
          </div>

          <div className="even_child"  >
            <Year number='2016' />
            <div className="even_child_content" data-aos="fade-left" >
              <div  >
                <h1>NEW CEO JOINED TO OUR TEAM</h1>
                <p>Hamad Mohammed 
                  Bakhit Suhail Alrashdi 
                  Become our company CEO</p>
              </div>
              <img src={"/Assets/images/login-bg.png"} />
            </div>
          </div>

          <div className="odd_child" >
            <Year number='2017' />
            <div className="odd_child_content" data-aos="fade-right">
              <img src={"/Assets/images/login-bg.png"} />
              <div className="flex_content">
                <h1>REACHED OUR FIRST MILE STONE</h1>
                <p>Join 100 Companies with Us in This Journey</p>
              </div>
            </div>
          </div>

          <div className="even_child"  >
            <Year number='2018' />
            <div className="even_child_content" data-aos="fade-left">
              <div className="flex_content">
                <h1>JOURNEY CONTINUES </h1>
                <p>Opened a new branch
                  Collectively to our parent company</p>
              </div>
              <img src={"/Assets/images/login-bg.png"} />
            </div>
          </div>

          <div className="odd_child" >
            <Year number='2019' />
            <div className="odd_child_content" data-aos="fade-right">
              <img src={"/Assets/images/login-bg.png"} />
              <div className="flex_content">
                <h1>ESTABLISHED A NEW DIRECTORY BOARD </h1>
                <p>Join 100 Companies with Us in This Journey</p>
              </div>
            </div>
          </div>

          <div className="even_child"  >
            <Year number='2020' />
            <div className="even_child_content" data-aos="fade-left">
              <div className="flex_content">
                <h1>Here We Go… </h1>
                <p> Curtain raised for our 2nd branch
          To enhance services  
</p>
              </div>
              <img src={"/Assets/images/login-bg.png"} />
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export const Year = (props) => {
  return (
    <div className="content_list_item">
      <span>{props.number}</span>
    </div>
  );
};
