import React, { useState } from "react";
import { useFormik, useformik } from 'formik';
import { useHistory } from "react-router";
import {
  Container,
  Grid,
  Radio,
  Divider,
  Checkbox,
} from "semantic-ui-react";
import BreadCrumbs from "../../Component/Breadcrumb/breadcrumb";
import ButtonBar from "../../Component/ButtonBar/buttonbar";
import Heading from "../../Component/Heading/heading";
import Stepper from "../../Component/Stepper/stepper";
import "../StepPages/stepPage.scss";

function Type() {
  window.history.pushState(null, document.title, window.location.href);
  window.addEventListener('popstate', function (event){
      window.history.pushState(null, document.title,  window.location.href);
  });

  const service_url = `${process.env.REACT_APP_BASE_URL}/serviceCategory/${localStorage.getItem("serviceSlug") }`;
  const [services, setServices] = React.useState(null);
  const history = useHistory();
  const requestId = localStorage.getItem("applicationId");
 

  if (!localStorage.getItem("token") && !localStorage.getItem("id"))
    history.push("/login");
  React.useEffect(() => {
    getSubServices();
  }, []);

  const getSubServices = async () => {
    const services = await (await fetch(service_url, { method: "GET" })).json();
    const serviceData = services.data.serviceDetail.map((e) => ({
      _id: e._id,
      name: e.name,
    }));
    setServices(serviceData);
  };

  const handleSubmit = async (subCatId, Name) => {
    localStorage.setItem("subCatId",subCatId);
    const jsonPostData={
      "subCat": Name
    }
   
    const url = `${process.env.REACT_APP_BASE_URL}/service/type/${requestId}`;
    const result = await(await fetch(url, {
      method: 'PUT',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'x-access-token':localStorage.getItem("token")
      },
      body: JSON.stringify(jsonPostData)
    })).json();
    
    history.push(`/fill`);
  }

  // const formik =useFormik({
  //   initialValues,
  //   onSubmit:(values)=>{
  //     alert(JSON.stringify(values, null, 2));
  //   }
  // });

  return (
    <main>
      <div className="apply-section">
        <BreadCrumbs
          section={[
            { key: "home", content: "Home", link: true },
            { key: "apply", content: "Apply Now", active: true },
          ]}
        />
        <Heading />
        <Container className="stepper-container" stackable="mobile">
          <Stepper />
          <Divider />
          <div className="form">
            <Grid columns="2" stackable="mobile">
              <Grid.Row>
                {services &&
                  services.map((service) =>
                    <Grid.Column >

                      <div class="checkbox p-default p-round pretty">
                        <input type="radio" name="service_radio" onClick={() =>handleSubmit(service._id,service.name)}/>
                        <span class="state">
                          <label>{service.name}</label>
                        </span>
                      </div>

                    </Grid.Column>
                  )}
              </Grid.Row>
            </Grid>
          </div>
        </Container>
      </div>
      {/* <ButtonBar /> */}
    </main>
  );
}
export default Type;
