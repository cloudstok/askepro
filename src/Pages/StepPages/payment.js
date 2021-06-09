import React from "react";
import { useHistory } from "react-router";
import {
  Container,
  Header,
  Divider,
  Grid,
  Radio,
  Button,
  Form,
  Select
} from "semantic-ui-react";
import BreadCrumbs from "../../Component/Breadcrumb/breadcrumb";
import Heading from "../../Component/Heading/heading";
import Stepper from "../../Component/Stepper/stepper";
import "../StepPages/stepPage.scss";

const Payment = () => {
  const countryOptions = [
    { key: 'normal', value: 0, text: 'Normal' },
    { key: 'urgent', value: 50, text: 'Urgent' },
  ]
  
  const [method, setMethod] = React.useState(null);
  const [adFess, setFees] = React.useState(0);
  const [status, setStatus] = React.useState(null);
  const history = useHistory();
  const requestId=localStorage.getItem("applicationId");
  const url = `${process.env.REACT_APP_BASE_URL}/service/payment/${requestId}`
  if (!localStorage.getItem("token") && !localStorage.getItem("id"))
    history.push("/login");

  const [services, setService] = React.useState(null);
  const slug = localStorage.getItem("serviceSlug");
  const service_url = `${process.env.REACT_APP_BASE_URL}/serviceCategory/${slug}`;

  React.useEffect(() => {
    getServices();
  }, []);

  const getServices = async () => {
    const service = await (await fetch(service_url, { method: "GET" })).json();
    const serviceData = {
      deleted: service.data.deleted,
      _id: service.data._id,
      name: service.data.name,
      scode: service.data.scode,
      description: service.data.description,
      slug: service.data.slug,
      serviceHowToApply: service.data.serviceDetail.serviceHowToApply,
      image: service.data.serviceDetail.image[0],
      reqDocs: service.data.serviceDetail.reqDocs,
      overview: service.data.serviceDetail.overview,
      processT: service.data.serviceDetail.processT,
      stayPeriod: service.data.serviceDetail.stayPeriod,
      validity: service.data.serviceDetail.validity,
      entry: service.data.serviceDetail.entry,
      price: service.data.serviceDetail.price,
    };
    setService(serviceData);
  };
  
  
   const handleSubmit=async(state)=>{
  
   const jsonData = {
      "price": services.price + adFess,
      "type": method,
      "status": state,
    }
    
      const result = await (await fetch(url, {
        method: 'PUT',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'x-access-token': localStorage.getItem("token")
        },
        body: JSON.stringify(jsonData)
      })).json();
  
 if(state==="Failed"){

      alert("There has been issue with your payment, please craete a new Application");
      history.push("/apply");

    }       
    else  if (result.status === 1)
    history.push("/Success")
  }



  if (!services) {
    return <div />;
  }
  return (
    <main>
      <div className="payment-section">
        <BreadCrumbs
          section={[
            { key: "home", content: "Home", link: true },
            { key: "apply", content: "Apply Now", active: true },
          ]}
        />
        <Heading />
        <Container className="stepper-container">
          <Stepper />
          <Divider />
          <div className="form">
            <label className="payment-header">Summary</label>
            <div className="payment-container">
              <h3>{services.name}</h3>
              <Grid columns="5" fluid stackable="tablet">
                <Grid.Row>
                  <Grid.Column>
                    <label className="heading">Processing Time</label>
                    <label className="value">
                      Upto {services.processT} days
                    </label>
                  </Grid.Column>
                  <Grid.Column>
                    <label className="heading">Stay Period</label>
                    <label className="value">{services.stayPeriod} days</label>
                  </Grid.Column>
                  <Grid.Column>
                    <label className="heading">Validity</label>
                    <label className="value">{services.validity} Days</label>
                  </Grid.Column>
                  <Grid.Column>
                    <label className="heading">Entry</label>
                    <label className="value">{services.entry}</label>
                  </Grid.Column>
                  <Grid.Column>
                    <label className="heading fees">Fees</label>
                    <label className="value total">{parseInt(services.price+ adFess) } AED</label>
                  </Grid.Column>
                </Grid.Row>
              </Grid>
            </div>
            <label className="payment-header">Choose payment method</label>
            <Grid columns="3" stackable="mobile">
              <Grid.Row>
                <Grid.Column>
                  <Radio
                    label="Pay via Debit Card"
                    name="paymentGroup"
                    id="dc"
                    onClick={() => { setMethod('Debit Card') }}
                  />
                </Grid.Column>
                <Grid.Column>
                  <Radio
                    label="Pay via Credit Card"
                    name="paymentGroup"
                    id="cc"
                    onClick={() => { setMethod('Credit Card') }}
                  />
                </Grid.Column>
                <Grid.Column>
                  <Radio
                    label="Pay via Net Banking"
                    name="paymentGroup"
                    id="upi"
                    onClick={() => { setMethod('Net Banking') }}
                  />
                </Grid.Column>
                <Grid.Column>
                <label className="payment-header">Priortiy</label>
                   <Select placeholder='Priority' options={countryOptions} onChange={(e,{value})=>setFees(value)} />
                </Grid.Column>
                
              </Grid.Row>
            </Grid>
            <label className="notice">
              Final price mentioned in the summary will be deducted from the
              account provided
            </label>
            <div className="button-group">
            <Button size='big' onClick={() => {handleSubmit("Complete")}}>YES</Button>
            <Button size='big' onClick={() => {handleSubmit("Failed")}}>NO</Button>
          </div>
          </div>
          
        </Container>
      </div>
    </main>
  );
};
export default Payment;
