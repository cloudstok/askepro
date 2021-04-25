import React from 'react';
import { Grid,  Image } from 'semantic-ui-react';


const Appointment_card = () =>{
return(
    <>
      <Grid columns>
      <div className="border_appointment">
      <Grid.Column>
        <div className="appoint_card">
          <div className="appoint_card content">  
          <div>
        <p>Dummy text , appointment with AMER executive in Dubai Media City</p>
        <span className="date_time">23 Jan 2021, 11:00 - 12:00</span>
        </div>
        </div>
        <div className="appoint_card images">
        <img src="Assets/images/arrow.png"/>
       <img src="Assets/images/arrowA.png"/>
       </div>
       </div>
      </Grid.Column>

      </div>
    </Grid>
  

  

    </>
);

}

export default Appointment_card;