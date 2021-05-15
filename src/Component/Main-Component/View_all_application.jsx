import React, { applicationeducer } from "react";
import { useParams } from "react-router";
import { Container, Button } from "semantic-ui-react";
import BreadCrumbs from "../Breadcrumb/breadcrumb";
import SideBar from '../Nav/Sidebar'

const View_all = () => {
  let { applicationId } = useParams();
  const [application, setapplication] = React.useState(null);
  React.useEffect(() => {
    getapplication();
  }, []);
  const getapplication = async () => {
    let application = await (
      await fetch(`${process.env.REACT_APP_BASE_URL}/admin/application/${applicationId}`, {
        method: "GET",
        headers: {
          "x-access-token": localStorage.getItem("token"),
        },
      })
    ).json();
    application = application.data[0];
    setapplication(application || []);
  }

  const generateLink = async (key) => {

    const jsonPostData = {
      'key': key
    }
    const url = `${process.env.REACT_APP_BASE_URL}/users/download`
    console.log(url)
    const resu = await (await fetch(url, {
      method: 'PUT',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(jsonPostData)
    })).json();

    window.open(resu.data, "_blank");
  }
  if (!application)
    return (<div />);
  console.log(application)
  return (
    <>
      <main className='manage-main'>
        <SideBar value='client' active='active' />
        <div className='table-container'>
          <BreadCrumbs section={[
            { key: 'dash', content: 'Dashboard', link: true },
            { key: 'client', content: 'Manage Application', active: true },
            { key: 'client', content: applicationId, active: true }
          ]} />


          <Container>
            <div className="details_wrapper">
              <div className="my_details">
                <div className="detail_inner1">
                  <h4>Application Detail</h4>
                  <p>Service</p>
                  <p>Status</p>
                  <p>CreatedBy</p>
                </div>
                <div className="detail_inner2">
                  <h4>deactivate</h4>
                  <p>{application.serviceCategory.name}</p>
                  <p>{application.status}</p>
                  <p>{application.users.name}<br /> {application.users.email}<br /> {application.users.phone}</p>
                </div>
              </div>
            </div>
            {application.name ? <div className="details_wrapper2">
              <div className="my_details">
                <div className="detail_inner1">
                  <h4>Applicant Details</h4>
                  <p>Name</p>
                  <p>Date of Birth</p>
                  <p>{application.otherAddress && application.otherAddress.alias} Address</p>
                </div>
                <div className="detail_inner2">
                  <h4>deactivate</h4>
                  <p>{application.name}</p>
                  <p>{application.dob}</p>
                  <p>
                    {application.otherAddress && application.otherAddress.addressLineOne} <br></br>
                    {application.otherAddress && application.otherAddress.addressLineTwo} <br></br>
                    {application.otherAddress && application.otherAddress.city} {application.otherAddress && application.otherAddress.state} <br></br>
                    {application.otherAddress && application.otherAddress.country}
                  </p>
                </div>
              </div>
            </div> : <div />}
            {application.docs.length!==0 ? <div className="details_wrapper2">
              <div className="my_details">
                <div className="detail_inner1">
                  <h4>Document Details</h4>
                </div>
                <div className="detail_inner2">
                  {application.docs.map((ele) =>
                    <p>{ele.name}
                      <br />
                      <Button onClick={() => generateLink(ele.key)} >
                        DOWNLOAD
                        </Button>
                    </p>)}
                </div>
              </div>
            </div> : <div />}
            {application.appointment ? <div className="details_wrapper2">
              <div className="my_details">
                <div className="detail_inner1">
                  <h4>Appointment Details</h4>
                </div>
                <div className="detail_inner2">

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
                </div>
              </div>
            </div> : <div />}
          </Container>
        </div>

      </main>
    </>
  );
};

export default View_all;
