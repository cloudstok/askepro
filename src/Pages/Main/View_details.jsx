import React from "react";
import { useParams } from "react-router";
import { Container,Button, Icon, Step, Grid, Table, Segment } from "semantic-ui-react";
import StatusChip from "../../Component/Main-Component/StatusChip";
import '../../Sass/Sass-Main/_View_details.scss';
import { useHistory } from 'react-router';
const View_details = () => {
  const history = useHistory();



  const [application, setApplication] = React.useState(null);

  React.useEffect(() => { getUser() }, []);
  let { requestId } = useParams();
  console.log(`${process.env.REACT_APP_BASE_URL}/service/${requestId}`);
  const getUser = async () => {
    if (!localStorage.getItem("token") && !localStorage.getItem("id")) { history.push("/login"); }
    else {
      let application = await (
        await fetch(
          `${process.env.REACT_APP_BASE_URL}/service/${requestId}`,
          {
            method: "GET"
          })).json();

      setApplication(application || []);
    }
  }

  const generateLink=async (key)=>{
  
    const jsonPostData = {
      'key':  key
    }
    const url = `${process.env.REACT_APP_BASE_URL}/users/download`
    console.log(url)
    const resu =await( await fetch(url, {
        method: 'PUT',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(jsonPostData)
      })).json();
  
      window.open(resu.data, "_blank");
  }
  
  if (!application) {
    return (<div></div>);
  }

  function dateFormat(d) {
    const date = new Date(d);
    return `${date.toLocaleString()}`
  };


  console.log(application);
  return (
    <>

      <div className="view_detail_wrapper">
        <Container>
          <h2>Application Details</h2>

          <Table selectable>
            <Table.Row>
              <Table.Cell>
                <h6>Date</h6>
                <p>{dateFormat(application.createdAt)}</p>
              </Table.Cell>

              <Table.Cell>
                <h6>Service Id</h6>
                <p>{application.serviceCategory.scode}</p>
              </Table.Cell>

              <Table.Cell>
                <h6>Service Name</h6>
                <p>{application.serviceCategory.name}</p>
              </Table.Cell>

              <Table.Cell>
                <h6>Transaction Id</h6>
                <p>XMBC3457XNT0</p>
              </Table.Cell>

              <Table.Cell>
                <h6>Mode</h6>
                <p>Debit Card</p>
              </Table.Cell>

              <Table.Cell>
                <h6>Amount (AED)</h6>
                <p>350.00</p>
              </Table.Cell>

              <Table.Cell>
                <h6>Status</h6>
                <p>
                  <StatusChip value={application.status} />
                </p>
              </Table.Cell>
            </Table.Row>
          </Table>

          <div className="details_wrapper_inner">
            <Grid stackable columns>

              <Grid.Column width={4}>
                <Step.Group vertical>
                  <Step completed>
                    
                    <Step.Content>

                      <Step.Description>Appointment Date</Step.Description>

                    </Step.Content>

                  </Step>
                
                  <Step completed>
                    
                    <Step.Content>
                      <Step.Description>Appointment Date</Step.Description>

                    </Step.Content>
                  </Step>

                  <Step completed>
                    
                    <Step.Content>

                      <Step.Description>Documents Uploaded</Step.Description>
                    </Step.Content>
                  </Step>

                  <Step completed>
                    
                    <Step.Content>

                      <Step.Description>Details Provided</Step.Description>
                    </Step.Content>
                  </Step>

                  <Step completed>
                    
                    <Step.Content>

                      <Step.Description>Severice Chosen</Step.Description>
                    </Step.Content>
                  </Step>
                </Step.Group>

              </Grid.Column>
              <Grid.Column width={9}>
                <Grid.Row>
                  <Grid.Column>


                    <div className="vertical_step1">
                      <Icon color="green" size='huge' link name='check square' />
                      <p>
                        Your payment was successful and we have also reserved the slot
                        for your appointment. You can keep track of your application
                        from your “History”.
                </p>
                    </div>


                  </Grid.Column>
                  <Grid.Column>


                    <div className="appoint2">
                      <div className="date">
                        <span className="number">{application.appointment && application.appointment.appt_date}</span>
                        <span className="jan">{application.appointment && application.appointment.appt_month} {application.appointment && application.appointment.appt_year}</span>
                      </div>
                      <div className="upcoming">
                        <span className="done_info">{application.appointment && application.appointment.status}</span>
                        <br />
                        <p>{application.appointment && application.appointment.title}</p>
                        <span className="minute">{application.appointment && application.appointment.time}</span>
                      </div>
                    </div>


                  </Grid.Column>

                  <Grid.Column>


                    <div className="details_3_outer">
                      {application.docs.map((ele) => <div className="details_3">
                        <p>{ele.name}</p>
                        
                        <a onClick={()=>generateLink(ele.key)} >
                        Download
                        </a>
                      </div>)}
                    </div>


                  </Grid.Column>

                  <Grid.Column>


                    <div className="vertical_step4">
                      <div className="vertical_step4_inner1">
                        <div>
                          <h6>Name</h6>
                          <p>{application.name}</p>
                        </div>
                        <div>
                          <h6>Date of Birth</h6>
                          <p>{application.dob}</p>
                        </div>
                        <div>
                          <h6>{application.otherAddress && application.otherAddress.alias} Address</h6>
                          <p>
                            {application.otherAddress && application.otherAddress.addressLineOne} <br></br>
                            {application.otherAddress && application.otherAddress.addressLineTwo} <br></br>
                            {application.otherAddress && application.otherAddress.city} {application.otherAddress && application.otherAddress.state} <br></br>
                            {application.otherAddress && application.otherAddress.country}
                          </p>
                        </div>
                      </div>

                    </div>


                  </Grid.Column>

                  <Grid.Column>
                    <div className="view_segment3">

                      <div className="company_formation1">
                        <h5>{application.serviceCategory.name}</h5>
                      </div>
                      <div className="company_formation2">
                        <Table basic='very'>
                          <Table.Row>
                            <Table.Cell>
                              <h6>Date</h6>
                              <p>{dateFormat(application.createdAt)}</p>
                            </Table.Cell>



                            <Table.Cell>
                              <h6>Transaction Id</h6>
                              <p>XMBC3457XNT0</p>
                            </Table.Cell>

                            <Table.Cell>
                              <h6>Mode</h6>
                              <p>Debit Card</p>
                            </Table.Cell>

                            <Table.Cell>
                              <h6>Amount (AED)</h6>
                              <p>350.00</p>
                            </Table.Cell>

                            <Table.Cell>
                              <p className="total_amoint_1">Status</p>
                              <p className="total_amoint_2">{application.status}</p>
                            </Table.Cell>
                          </Table.Row>
                        </Table>
                      </div>

                    </div>
                  </Grid.Column>
                </Grid.Row>
              </Grid.Column>
            </Grid>
          </div>
        </Container>
      </div>
    </>
  );
};

export default View_details;
