import React from "react";
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

function ApplyStepper() {
  const service_url = `${process.env.REACT_APP_BASE_URL}/serviceCategory`;
  const [services, setServices] = React.useState(null);
  const history = useHistory();
  if (!localStorage.getItem("token") && !localStorage.getItem("id"))
    history.push("/login");
  React.useEffect(() => {
    getServices();
  }, []);

  const getServices = async () => {
    const services = await (await fetch(service_url, { method: "GET" })).json();
    const serviceData = services.data.map((e) => ({
      _id: e._id,
      name: e.name,
      scode: e.scode,
      slug: e.slug,
      image: e.serviceDetail.image[0],
    }));
    setServices(serviceData);
  };
  
  //Radio Button Check/Uncheck
    const [isChecked, setIsChecked] = React.useState(false);
    const handleChange  = (e) =>{
        setIsChecked(prevCheckedValue => !prevCheckedValue); 
    }

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
            <Grid columns="3" stackable="mobile">
              <Grid.Row>
                <Grid.Column>
                  {services &&
                    services.map((service) => <Checkbox label={service.name} onChange={handleChange} >
                    </Checkbox>)}
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </div>
        </Container>
      </div>
      <ButtonBar />
    </main>
  );
}
export default ApplyStepper;
