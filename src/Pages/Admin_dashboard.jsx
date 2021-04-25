import _ from "lodash";
import React from "react";
import Appointment_card from "../Components/Appointment_card";
import Request_file from "../Components/Request_file";


import { Container, Grid } from "semantic-ui-react";

const Admin_dashboard = () => {
  return (
    <>

        
    
      <div className="admin_wrapper2">
      <Container>
        <Grid stackable columns={2}>
          <Grid.Column width={10}>
            <div className="overview5">
              <p>Overview</p>
            </div>
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
            <Grid>
              <Grid.Column>
                <div className="overview5">
                  <p>Overview</p>
                </div>

                <div className="revenue_data">asd</div>
              </Grid.Column>
            </Grid>
          </Grid.Column>

          <Grid.Column width={6}>

          <div className="appointment_heading2">
              <Grid columns>
                  
                  <Grid.Row>
                              
                  <p> Appointments for approval(4)</p>
                  <a href={URL}><p className="para9"> VIEW ALL</p></a>
                  
                  </Grid.Row>
                  
                
                </Grid>
                </div>
            <Grid columns>
              <Grid.Column>
               
                <Appointment_card />
              </Grid.Column>
            </Grid>
            
            <Grid columns>
              <Grid.Column>
              <div className="appointment_heading2">
              <Grid columns>
                  
                  <Grid.Row>
                              
                  <p> Appointments for approval(4)</p>
                  <a href={URL}><p className="para9"> VIEW ALL</p></a>
                  
                  </Grid.Row>
                  
                
                </Grid>
                </div>
                
                <Request_file />
               
              </Grid.Column>
            </Grid>
          </Grid.Column>
        </Grid>
        </Container>
      </div>
     
    </>
  );
};

export default Admin_dashboard;
