import React from "react";
import { useHistory } from "react-router";
import { Grid, Segment, Table, Button, Container } from "semantic-ui-react";
import StatusChip from "../../Component/Main-Component/StatusChip";
import BreadCrumbs from "../../Component/Breadcrumb/breadcrumb";
const Account = () => {
  const history = useHistory();


  const [user, setUser] = React.useState(null);
  const [add, setAdd] = React.useState(null);
  const [appointment, setAppointment] = React.useState(null);
  const [application, setApplication] = React.useState(null);

  React.useEffect(() => { getUser() });
  let id = localStorage.getItem('id');
  const getUser = async () => {
    if (!localStorage.getItem("token") && !localStorage.getItem("id")) { history.push("/login"); setAdd(0); }
    else {
      let user = await (
        await fetch(
          `${process.env.REACT_APP_BASE_URL}/users/${id}`,
          {
            method: "GET",
            headers: {
              'x-access-token': localStorage.getItem('token'),
            }
          })).json();

      user = user.data;
      console.log(user);

      setAdd(user.address[0] || []);

      delete user.address;
      setUser(user || []);
    }
  }
  if (!add || !user) {
    return (<div></div>);
  }
  return (
    <>
<<<<<<< HEAD
    
      <div className="account_wrapper">
        <Container fluid style={{padding:"0 50px"}}>
        <BreadCrumbs section={[
=======
     <div className='account_breadcrumb'>
     <BreadCrumbs section={[
>>>>>>> 007341dbe01330843e028d75ffa51aee952cf19c
                        {key:'home', content:'Home', link:true },
                        {key:'apply', content:'My Account', active:true }
                 ]}/>
    </div> 
      <div className="account_wrapper">
        
        <Container fluid>
       
          <div className="account">
            <h4>Account Overview</h4>
          </div>
          <Grid stackable columns={2}>
            <Grid.Column width={11}>
              <Segment>
                <div className="my_user">
                  <div className="user_inner1">
                    <div className="round">
                      <img src={process.env.PUBLIC_URL + "Assets/images/team.png"}/>
                      {" "}
                    </div>
                  </div>
                  <div className="user_inner2">
                    <h6>Name</h6>
                    <p>{user.name}</p>
                    <br />
                    <h6>Phone Number</h6>
                    <p>{user.phone}</p>
                  </div>
                  <div className="user_inner3">
                    <h6>Email</h6>
                    <p>{user.email}</p>
                    <br />
                    <h6>Address</h6>
                    <p>
                      {add.address} <br></br>
                      {add.city} {add.state} <br></br>
                      {add.country}
                    </p>
                  </div>
                </div>
              </Segment>
            </Grid.Column>

            <Grid.Column width={5}>
              <div className="account_carousel">
                <p className="carousel_p">
                  Total number of applications <br />
                  <span className="carousel_number">{0}</span>
                </p>
              </div>
            </Grid.Column>
          </Grid>

          <Grid stackable columns={2}>
            <Grid.Column width={11}>
              <div className="user_heading">
                <h4>Recent Applications </h4>
              </div>
              <div className="account_table">
                <Table striped>
                  <Table.Header>
                    <Table.Row>
                      <Table.HeaderCell>
                        <h6>Date</h6>
                      </Table.HeaderCell>
                      <Table.HeaderCell>
                        <h6>Service id</h6>
                      </Table.HeaderCell>
                      <Table.HeaderCell>
                        <h6>Service Name</h6>
                      </Table.HeaderCell>
                      <Table.HeaderCell>
                        <h6>Transaction Id</h6>
                      </Table.HeaderCell>
                      <Table.HeaderCell>
                        <h6>Status</h6>
                      </Table.HeaderCell>
                      <Table.HeaderCell>
                        <h6>Mode</h6>
                      </Table.HeaderCell>
                      <Table.HeaderCell>
                        <h6>Amount(AED)</h6>
                      </Table.HeaderCell>
                    </Table.Row>
                  </Table.Header>

                  <Table.Body>
                    <Table.Row>
                      <Table.Cell>22/01/2021</Table.Cell>
                      <Table.Cell>BJXCR34</Table.Cell>
                      <Table.Cell>Emirates ID</Table.Cell>
                      <Table.Cell>XMBC3457XNT0</Table.Cell>
                      <Table.Cell><StatusChip value="Success" /></Table.Cell>
                      <Table.Cell>Debit Card</Table.Cell>
                      <Table.Cell textAlign='right'>350.00</Table.Cell>
                    </Table.Row>
                  {/*     <Table.Row>
                      <Table.Cell>22/01/2021</Table.Cell>
                      <Table.Cell>BJXCR34</Table.Cell>
                      <Table.Cell>Local Sponsorship Se…</Table.Cell>
                      <Table.Cell>XMBC3457XNT0</Table.Cell>
                      <Table.Cell><StatusChip value="Success" /></Table.Cell>
                      <Table.Cell>Debit Card</Table.Cell>
                      <Table.Cell textAlign='right'>4250.00</Table.Cell>
                    </Table.Row>
                    <Table.Row>
                      <Table.Cell>22/01/2021</Table.Cell>
                      <Table.Cell>BJXCR34</Table.Cell>
                      <Table.Cell>Office Arrangements</Table.Cell>
                      <Table.Cell>XMBC3457XNT0</Table.Cell>
                      <Table.Cell><StatusChip value="Success" /></Table.Cell>
                      <Table.Cell>Debit Card</Table.Cell>
                      <Table.Cell textAlign='right' >378.50</Table.Cell>
                    </Table.Row>
                    <Table.Row>
                      <Table.Cell>22/01/2021</Table.Cell>
                      <Table.Cell>BJXCR34</Table.Cell>
                      <Table.Cell>Tasheel Services</Table.Cell>
                      <Table.Cell>XMBC3457XNT0</Table.Cell>
                      <Table.Cell><StatusChip value="Success" /></Table.Cell>
                      <Table.Cell>Debit Card</Table.Cell>
                      <Table.Cell textAlign='right'> 269.00 </Table.Cell>
                    </Table.Row>
                    <Table.Row>
                      <Table.Cell>22/01/2021</Table.Cell>
                      <Table.Cell>BJXCR34</Table.Cell>
                      <Table.Cell>Company Stamp</Table.Cell>
                      <Table.Cell>XMBC3457XNT0</Table.Cell>
                      <Table.Cell><StatusChip value="Success" /></Table.Cell>
                      <Table.Cell>Debit Card</Table.Cell>
                      <Table.Cell textAlign='right'>350.00</Table.Cell>
                    </Table.Row>*/}
                  </Table.Body> 
                </Table>
              </div>
              {/* <div className="history">
                <button type="button" className="account-btn">
                  <strong> VIEW ALL HISTORY </strong>
                </button>
              </div> */}
            </Grid.Column>
            <Grid.Column width={5}>
              <div className="user_heading">
                <h4>Appointments(0)</h4>
              </div>
               <Segment className="appointment" style={{ marginTop: '0' }}>
                <div className="appoint">
                  <div className="date">
                    <span className="number">23</span>
                    <span className="jan">JAN 21</span>
                  </div>
                  <div className="upcoming">
                    <span className="done_info">UPCOMING</span>
                    <br />
                    <p>Appointment with AMER executive in Dubai Media City</p>
                    <span className="minute">11:00 - 12:00 </span>
                  </div>
                </div>
              </Segment>
            {/*  <Segment>
                <div className="appoint">
                  <div className="date">
                    <span className="number2">16</span>
                    <span className="nov">Nov 21</span>
                  </div>
                  <div className="upcoming">
                    <span className="first_info"> PAST Appointment</span>
                    <p>Appointment with AMER executive in Dubai Media City</p>
                    <span className="minute">11:00 - 12:00 </span>
                  </div>
                </div>
              </Segment>
              <Segment>
                <div className="appoint">
                  <div className="date">
                    <span className="number2">16</span>
                    <span className="nov">Nov 21</span>
                  </div>
                  <div className="upcoming">
                    <span className="first_info"> PAST Appointment</span>
                    <p>Appointment with AMER executive in Dubai Media City</p>
                    <span className="minute">11:00 - 12:00 </span>
                  </div>
                </div>
              </Segment> */
              /* <div className="circle_btn">
                
                <img src={process.env.PUBLIC_URL + 'Assets/images/arrow.png'} />
                <img src={process.env.PUBLIC_URL + 'Assets/images/arrowA.png'} />

           
              </div> */}
            </Grid.Column>
          </Grid>
        </Container>
      </div>
    </>
  );
};

export default Account;
