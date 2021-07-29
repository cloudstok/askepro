import React from "react";
import { Grid, Image } from "semantic-ui-react";
import "../../Sass/Sass-Main/_About.scss"

export const MyJourney = () => {
  return (
    <div>
      <div className="my_journey">
        <h1 className="headingOne">Our Journey </h1>
        
              <div className="journey_tree">
                <Year number='2002'/>
                {/* <img src={"/Assets/images/service2.png"}/> */}
                {/* <div className="flex_content">
                  <h1>Lorem Ipsum</h1>
                  <p>Lorem Ipsum is simply dummy text of the printing</p> */}
                {/* </div> */}
              
              <Year number='2003'/>
              <Year number='2004'/>
              <Year number='2005'/>
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
