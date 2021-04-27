import React from "react";
import { Container, Icon, Step, Grid, Table, Segment } from "semantic-ui-react";
import StatusChip from "../Components/StatusChip";

const View_details = () => {
  return (
    <>

      <div className="view_detail_wrapper">
          
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

      
      <Grid columns>
        <Grid.Column width={4}>
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
        <Grid.Column width={10}>
          <Grid.Row>
            <Grid.Column>
              <div className="vertical_step1">
                <img src="Assets/images/check.png" />
                
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
              
            </Grid.Column>

            <Grid.Column>
              
                  <div className="details_3_outer">
                <div className="details_3">
                  <img src="Assets/images/point.png" />
                  <p>Emirates ID.jpg</p>
                </div>
                <div className="details_3">
                  <img src="Assets/images/point.png" />
                  <p>Special ID.jpg</p>
                </div>
                <div className="details_3">
                  <img src="Assets/images/point.png" />
                  <p>GDFRA permit.jpg </p>
                </div>
                <div className="details_3">
                  <img src="Assets/images/point.png" />
                  <p>Entry Permit.jpg</p>
                </div>
                <div className="details_3">
                  <img src="Assets/images/point.png" />
                  <p>XYZ government ID.jpg</p>
                </div>
                </div>
              
            </Grid.Column>

            <Grid.Column>
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
            </Grid.Column>

            <Grid.Column>
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
            </Grid.Column>
          </Grid.Row>
        </Grid.Column>
      </Grid>
      
      </div>
    </>
  );
};

export default View_details;
