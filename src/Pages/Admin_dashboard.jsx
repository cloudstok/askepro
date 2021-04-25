import _ from 'lodash'
import React from 'react';
import Appointment_card from '../Components/Appointment_card';
import { Grid, Segment } from 'semantic-ui-react';



  
const Admin_dashboard = () => {
    return(
        <>
<div className="overview">
<p>Overview</p>

<Grid stackable columns = {2}>
<Grid.Column width={10}>

  <Grid stackable columns={3}>
    <Grid.Column>
        <div className="clients"> 
        <h6>Total Clients</h6>
        <h1>1,385</h1>
        </div> 

    </Grid.Column>
    <Grid.Column>
    <div className="clients"> 
        <h6>Total Applications</h6>
        <h1>127</h1>
    </div>
    </Grid.Column>
    <Grid.Column>
     <div className="clients">
        <h6>Total Revenue(in AED)</h6>
        <h1>1,00,443.45</h1>
     </div>
    </Grid.Column>
   </Grid>
   </Grid.Column>
   <Grid.Column width={6}>
       <div className="appointment_heading">
      <p> Appointments for approval(4)</p>
      <p >VIEW ALL</p>
      </div>
      <Appointment_card />
      
   </Grid.Column>
   </Grid>
  </div>
        </>
    );
}

export default Admin_dashboard;