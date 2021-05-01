import React from "react";
import { Container, Icon, Step, Grid, Table, Segment } from "semantic-ui-react";
import StatusChip from "../../Component/Main-Component/StatusChip";
import '../../Sass/Sass-Main/_View_details.scss';

const View_details = () => {
  return (
    <>

      <div className="view_detail_wrapper">
          <Container>
      <h2>Application Details</h2>

      <Table selectable>
        <Table.Row>
          <Table.Cell>
            <h6>Date</h6>
            <p>22/01/2021</p>
          </Table.Cell>

          <Table.Cell>
            <h6>Service Id</h6>
            <p>BJXCR34</p>
          </Table.Cell>

          <Table.Cell>
            <h6>Service Name</h6>
            <p>Emirates ID</p>
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
              <StatusChip value="Success" />
            </p>
          </Table.Cell>
        </Table.Row>
      </Table>

      <div className="details_wrapper_inner">
      <Grid stackable columns>
      
        <Grid.Column width={3}>
          <Step.Group vertical>
            <Step completed>
            <Icon name="truck" />
              <Step.Content>

              <Step.Description>Appointment Date</Step.Description>
              
              </Step.Content>
              
            </Step>

            <Step completed>
              <Icon name="payment" />
              <Step.Content>
              <Step.Description>Appointment Date</Step.Description>
                
              </Step.Content>
            </Step>

            <Step completed>
              <Icon name="payment" />
              <Step.Content>
                
                <Step.Description>Documents Uploaded</Step.Description>
              </Step.Content>
            </Step>

            <Step completed>
              <Icon name="payment" />
              <Step.Content>
                
                <Step.Description>Details Provided</Step.Description>
              </Step.Content>
            </Step>

            <Step completed>
              <Icon name="payment" />
              <Step.Content>
                
                <Step.Description>Severice Chosen</Step.Description>
              </Step.Content>
            </Step>

            <Step active>
              <Icon name="info" />
              <Step.Content>
                <Step.Description>Confirm Order</Step.Description   >
              </Step.Content>
            </Step>
          </Step.Group>
          
        </Grid.Column>
        <Grid.Column width={9}>
          <Grid.Row>
            <Grid.Column>
              <div  className="view_segment">
              <Segment>
              <div className="vertical_step1">
              <Icon color="green" size='huge' link name='check square' /> 
                <p>
                  Your payment was successful and we have also reserved the slot
                  for your appointment. You can keep track of your application
                  from your “History”.
                </p>
              </div>
              </Segment>
              </div>
            </Grid.Column>
            <Grid.Column>
            <div  className="view_segment">
              <Segment>
                <div className="appoint2">
                  <div className="date">
                    <span className="number">23</span>
                    <span className="jan">JAN 21</span>
                  </div>
                  <div className="upcoming">
                    <span className="done_info">UPCOMING</span>
                    <br />
                    <p>Appointment with AMER executive in Dubai Media City</p>
                    <span className="minutfe">11:00 - 12:00 </span>
                  </div>
                </div>
                </Segment>
                </div>
            </Grid.Column>

            <Grid.Column>
            <div  className="view_segment">
              <Segment>
                  <div className="details_3_outer">
                <div className="details_3">
                               <img src={process.env.PUBLIC_URL + '/Assets/images/point.png'} />
                  <p>Emirates ID.jpg</p>
                </div>
                <div className="details_3">
                <img src={process.env.PUBLIC_URL + '/Assets/images/point.png'} />
                  <p>Special ID.jpg</p>
                </div>
                <div className="details_3">
                <img src={process.env.PUBLIC_URL + '/Assets/images/point.png'} />
                  <p>GDFRA permit.jpg </p>
                </div>
                <div className="details_3">
                  <img src={process.env.PUBLIC_URL + '/Assets/images/point.png'} />
                  <p>Entry Permit.jpg</p>
                </div>
                <div className="details_3">
                  <img src={process.env.PUBLIC_URL + '/Assets/images/point.png'} />
                  <p>XYZ government ID.jpg</p>
                </div>
                </div>
                </Segment>
                </div>
            </Grid.Column>

            <Grid.Column>
            <div  className="view_segment">
              <Segment>
                <div className="vertical_step4">
                  <div className="vertical_step4_inner1">
                    <div>
                      <h6>Name</h6>
                      <p>Vikas Khana </p>
                    </div>
                    <div>
                      <h6>Address</h6>
                      <p>
                        B 3/ 41, 4th Floor, Greenfileds CHS, Anheri East,
                        Mumbai, Maharastra, India Pin - 430092
                      </p>
                    </div>
                  </div>
                  <div className="vertical_step4_inner2">
                    <h6>Date of Birth</h6>
                    <p>14 Sep 1987</p>
                  </div>
                </div>
              </Segment>
              </div>
            </Grid.Column>

            <Grid.Column>
            <div  className="view_segment">
              <Segment>
                <div className="company_formation1">
                  <h5>Company Formation Services</h5>
                </div>
                <div className="company_formation2">
                  <Table  basic='very'>
                      <Table.Row>
                    <Table.Cell>
                      <h6>Date</h6>
                      <p>22/01/2021</p>
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
                      <p className="total_amoint_2">350 AED</p>
                    </Table.Cell>
                    </Table.Row>
                  </Table>
                </div>
              </Segment>
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
