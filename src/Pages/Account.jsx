import React from "react";
import { Grid, Segment, Table, Button } from "semantic-ui-react";

const Account = () => {
  return (
    <>
      <div className="account">
        <h4>Account Overview</h4>
        <img src="Assets/images/Path_tiny.png" />
      </div>
      <Grid stackable columns={2}>
        <Grid.Column width={12}>
          <Segment>
            <div className="my_user">
              <div className="user_inner1">
                <div className="round">
                  <img src="Assets/images/user.png" width="100px" />{" "}
                </div>
              </div>
              <div className="user_inner2">
                <h6>Name</h6>
                <p>William Lawsons</p>
                <br />
                <h6>Phone Number</h6>
                <p>+971 838221191</p>
              </div>
              <div className="user_inner3">
                <h6>Email</h6>
                <p>lawson.william@gmail.com</p>
                <br />
                <h6>Address</h6>
                <p>
                  Marina Crown, King Salman Bin Abdulaziz Al Saud St Dubai,
                  United Arab Emirates
                </p>
              </div>
            </div>
          </Segment>
        </Grid.Column>
        
        <Grid.Column width={4}>
         
              <img src="Assets/images/data.png" />

         
        </Grid.Column>
      </Grid>



      <Grid stackable columns={2}>
    <Grid.Column width={12}>
        <div className="user_heading">
      <h4>Recent Applications </h4>
      <img src="Assets/images/Path_tiny.png" />

      </div>
    </Grid.Column>
 


    <Grid.Column width={4}>
    <div className="user_heading">
    <h4>Appointments(11)</h4>
    <img src="Assets/images/Path_tiny.png" />
    </div>
    </Grid.Column> 
    
    <Grid.Column width={12}>


    <Table striped>
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell>Name</Table.HeaderCell>
        <Table.HeaderCell>Date Joined</Table.HeaderCell>
        <Table.HeaderCell>E-mail</Table.HeaderCell>
        <Table.HeaderCell>Called</Table.HeaderCell>
      </Table.Row>
    </Table.Header>

    <Table.Body>
      <Table.Row>
        <Table.Cell>John Lilki</Table.Cell>
        <Table.Cell>September 14, 2013</Table.Cell>
        <Table.Cell>jhlilk22@yahoo.com</Table.Cell>
        <Table.Cell>No</Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>Jamie Harington</Table.Cell>
        <Table.Cell>January 11, 2014</Table.Cell>
        <Table.Cell>jamieharingonton@yahoo.com</Table.Cell>
        <Table.Cell>Yes</Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>Jill Lewis</Table.Cell>
        <Table.Cell>May 11, 2014</Table.Cell>
        <Table.Cell>jilsewris22@yahoo.com</Table.Cell>
        <Table.Cell>Yes</Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>John Lilki</Table.Cell>
        <Table.Cell>September 14, 2013</Table.Cell>
        <Table.Cell>jhlilk22@yahoo.com</Table.Cell>
        <Table.Cell>No</Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>John Lilki</Table.Cell>
        <Table.Cell>September 14, 2013</Table.Cell>
        <Table.Cell>jhlilk22@yahoo.com</Table.Cell>
        <Table.Cell>No</Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>Jamie Harington</Table.Cell>
        <Table.Cell>January 11, 2014</Table.Cell>
        <Table.Cell>jamieharingonton@yahoo.com</Table.Cell>
        <Table.Cell>Yes</Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>Jill Lewis</Table.Cell>
        <Table.Cell>May 11, 2014</Table.Cell>
        <Table.Cell>jilsewris22@yahoo.com</Table.Cell>
        <Table.Cell>Yes</Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>John Lilki</Table.Cell>
        <Table.Cell>September 14, 2013</Table.Cell>
        <Table.Cell>jhlilk22@yahoo.com</Table.Cell>
        <Table.Cell>No</Table.Cell>
      </Table.Row>
    </Table.Body>
  </Table>



 
    </Grid.Column>
    <Grid.Column width={4}>
    
    <Segment>
    asdsad
    </Segment>
    </Grid.Column>
    
    </Grid>
    <Button>Click Here</Button>

    </>
  );
};

export default Account;
