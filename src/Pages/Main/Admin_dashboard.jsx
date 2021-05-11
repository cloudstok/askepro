import _ from "lodash";
import React from "react";
import Appointment_card from "../../Component/Main-Component/Appointment_card";
import Request_file from "../../Component/Main-Component/Request_file";
import "../../Sass/Sass-Main/_Admin_dashboard.scss";
import BreadCrumbs from "../../Component/Breadcrumb/breadcrumb";
import "../../Sass/Sass-Main/_Request_file.scss";
import SideBar from "../../Component/Nav/Sidebar";
import Reject from "../../Component/Main-Component/Reject";
import Accept from "../../Component/Main-Component/Accept";
import { Container, Grid, Icon} from "semantic-ui-react";
import "../../Sass/Sass-Main/_Appointment_card.scss";
import "../../Sass/Sass-Main/_Admin_dashboard.scss";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from "recharts";


const Admin_dashboard = () => {
  const [data, setData] = React.useState("null");
  React.useEffect(() => {
    getData();
  }, []);
  let id = localStorage.getItem("id");
  const getData = async () => {

    let result = await (
      await fetch(
        `${process.env.REACT_APP_BASE_URL}/admin/dashboard`,
        {
          method: "GET",
        }
      )
    ).json();
    setData(result);
  }
  if(!data){
    return <div/>
  }
  console.log(data);
  return (
    <main className="manage-main">
      <SideBar value="dashboard" active="active" />

      <div className="history-main">
        <BreadCrumbs
          section={[{ key: "dash", content: "Dashboard", link: true }]}
        />

        <div className="admin_wrapper2">
          <Grid stackable columns={2}>
            <Grid.Column width={11}>
              <div className="overview5">
                <p>Overview</p>
              </div>
              <Grid doubling columns={3}>
                <Grid.Row>
                  <Grid.Column>
                    <div className="clients">
                      <h6>Total Clients</h6>
                      <h1>{data.clientCount}</h1>
                    </div>
                  </Grid.Column>
                  <Grid.Column>
                    <div className="clients">
                      <h6>Total Applications</h6>
                      <h1>{data.applicationCount}</h1>
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
                  {/* <div className="overview5">
                    <p>Revenue Overview</p>
                  </div>
                  <div className="revenue_data">asd</div> */}
                  <BarChart
                    width={875}
                    height={500}
                    data={data.graphData}
                    margin={{
                      top: 5,
                      right: 0,
                      left: 0,
                      bottom: 5
                    }}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="_id" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="count" fill="#9d9494" />
                  </BarChart>
                </Grid.Column>
              </Grid>
            </Grid.Column>

            <Grid.Column width={5}>
              <div className="appointment_heading2">
                <Grid columns>
                  <Grid.Row>
                    <Grid.Column width={8}>
                      <p> Appointments for approval({data.pendingAppointmentCount})</p>
                    </Grid.Column>
                    <Grid.Column floated="right" width={3}>
                      <a href={URL}>
                      <p className="para9"> VIEW ALL</p>
                      </a>
                    </Grid.Column>
                  </Grid.Row>
                </Grid>
              </div>
              <Grid columns>
                <Grid.Column>
                {data.pendingAppointment&&data.pendingAppointment.map((ele) => <div className="border_appointment">
                    <Grid columns>
                      <Grid.Column>
                        <div className="appoint_card">
                          <div className="appoint_card content">
                            <div className="content6">
                              <p>{
                                ele.title}
                  </p>
                              <span className="date_time">{ele.appt_date} {ele.appt_month} {ele.appt_year}</span>
                            </div>
                          </div>
                          <div className="action-icon">
                            <Reject />
                            <Accept />
                          </div>
                        </div>
                      </Grid.Column>
                    </Grid>
                  </div>)}
                </Grid.Column>
              </Grid>

              <Grid columns>
                <Grid.Column>
                  <div className="appointment_heading3">
                    <Grid columns>
                      <Grid.Row>
                        <Grid.Column width={8}>
                          <p>Document Verification Request({data.pendingDcoumentCount})</p>
                        </Grid.Column>
                        <Grid.Column floated="right" width={3}>
                          <a href={URL}>
                            <p className="para9"> VIEW ALL</p>
                          </a>
                        </Grid.Column>
                      </Grid.Row>
                    </Grid>
                  </div>
                  {data.pendingDcoument&&data.pendingDcoument.map((ele) =>                 <div className="Request_bg">
        <Grid columns>
          <Grid.Column>
            <div className="request3">
              <p>
                Dummy text , appointment with AMER executive in Dubai Media City
              </p>
              <Grid column={2}>
                <Grid.Row>
                  <Grid.Column width={8}>
                    <span className="date_time">
                      23 Jan 2021, 11:00 - 12:00
                    </span>
                  </Grid.Column>
                  <Grid.Column floated="right" width={4}>
                    <p className="para6">View Details</p>
                  </Grid.Column>
                </Grid.Row>
              </Grid>
            </div>
          </Grid.Column>
        </Grid>
      </div>)}
                </Grid.Column>
              </Grid>
            </Grid.Column>
          </Grid>
        </div>
      </div>
    </main>
  );
};

export default Admin_dashboard;
