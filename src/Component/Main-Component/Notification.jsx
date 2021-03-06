import React from 'react';
import { Button} from "semantic-ui-react";
import '../../Sass/Sass-Main/_home.scss';

const Notification = () => {
    return(
        <>

<div className="banner3">
        <img src="assets/images/covid-19.png"/>
          
          <div className="pop_content">
            <h6>Covid-19 Guidelines & Updates</h6>
            <p>
              Given the COVID-19 outbreak, we urge you to stay tuned to updates
              by airlines & hoteliers to make informed decisions regarding
              travel date changes & cancellations.
            </p>
          </div>
          <div className="pop_btn">
            <div className="cancel-tab">
            <button onclick="myFunction()">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="black"
                  className="bi bi-x-octagon-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M11.46.146A.5.5 0 0 0 11.107 0H4.893a.5.5 0 0 0-.353.146L.146 4.54A.5.5 0 0 0 0 4.893v6.214a.5.5 0 0 0 .146.353l4.394 4.394a.5.5 0 0 0 .353.146h6.214a.5.5 0 0 0 .353-.146l4.394-4.394a.5.5 0 0 0 .146-.353V4.893a.5.5 0 0 0-.146-.353L11.46.146zm-6.106 4.5L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 1 1 .708-.708z" />
                </svg></button>
            
            </div>
            <button className="same-btn" 
            style={{padding:'0'}}>
              <strong>KNOW MORE</strong>
            </button>
          </div>  
        </div>

        </>
    );
}
export default Notification;