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
            <Year number='2002' />
            <div className="odd_child_content" data-aos="fade-right">
              <img src={"/Assets/images/login-bg.png"} />
              <div className="flex_content">
                <h1>Lorem Ipsum</h1>
                <p>Lorem Ipsum is simply dummy text of the printing</p>
              </div>
            </div>
          </div>

          <div className="even_child"  >
            <Year number='2003' />
            <div className="even_child_content"data-aos="fade-left" >
              <div className="flex_content" >
                <h1>Lorem Ipsum</h1>
                <p>Lorem Ipsum is simply dummy text of the printing</p>
              </div>
              <img src={"/Assets/images/login-bg.png"} />
            </div>
          </div>

          <div className="odd_child" >
            <Year number='2004' />
            <div className="odd_child_content" data-aos="fade-right"> 
              <img src={"/Assets/images/login-bg.png"} />
              <div className="flex_content">
                <h1>Lorem Ipsum</h1>
                <p>Lorem Ipsum is simply dummy text of the printing</p>
              </div>
            </div>
          </div>
          
          <div className="even_child"  >
            <Year number='2005' />
            <div className="even_child_content" data-aos="fade-left">
              <div className="flex_content">
                <h1>Lorem Ipsum</h1>
                <p>Lorem Ipsum is simply dummy text of the printing</p>
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
