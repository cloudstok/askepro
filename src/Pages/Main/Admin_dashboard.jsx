import _ from "lodash";
import React from "react";
import Appointment_card from "../../Component/Main-Component/Appointment_card";
import Request_file from "../../Component/Main-Component/Request_file";
import '../../Sass/Sass-Main/_Admin_dashboard.scss';
import BreadCrumbs from '../../Component/Breadcrumb/breadcrumb';
import '../../Sass/Sass-Main/_Request_file.scss';
import SideBar from '../../Component/Nav/Sidebar';
import { Container, Grid } from "semantic-ui-react";




const Admin_dashboard = () => {
  return (
     <main className='manage-main'>
      <SideBar  value='dashboard' active='active'/>
      <div className='history-main'>
      <BreadCrumbs section={[
                   {key:'dash', content:'Dashboard', link:true }]}/>
      <div className="admin_wrapper2">
        <Grid stackable columns={2}>
          <Grid.Column width={10}>
            <div className="overview5">
              <p>Overview</p>
            </div>
            <Grid doubling columns={3}>
              <Grid.Row>
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
              </Grid.Row>
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
                <Appointment_card />
                 <Appointment_card />
              </Grid.Column>
            </Grid>
            
          <div className="appointment_divider">
            <Grid columns>
              <Grid.Column>
              <div className="appointment_heading3">
              <Grid columns>
                  <Grid.Row>             
                  <p> Document Verification Request(4)</p>
                  <a href={URL}><p className="para10"> VIEW ALL</p></a>
                  </Grid.Row>     
                </Grid>
                </div>
                <Request_file />
                <Request_file />
                <Request_file />
              </Grid.Column>
            </Grid>
            </div>
          </Grid.Column>
        </Grid>
      </div>
      </div>
      </main>
  );
};

export default Admin_dashboard;
