import React from "react";
import { Grid, Container } from "semantic-ui-react";
import { useHistory } from "react-router-dom";

const Visa = () => {
  const service_url = `${process.env.REACT_APP_BASE_URL}/serviceCategory`;
  const history = useHistory();
  
  const [services, setServices] = React.useState(null);
  
  React.useEffect(() => { getServices(); }, []);
  
  const getServices = async () => {
    const services = await (await fetch(service_url, { method: "GET" })).json();
    const serviceData = services.data.map(e => ({
      _id: e._id,
      name: e.name,
      scode: e.scode,
      slug: e.slug,
      image: e.serviceDetail.image[0]
    }));
    
    setServices(serviceData);
  };
  
  return (
  <>
    <Container>
    <Grid stackable columns={4}> 
          { services && services.map((service) =>
            <Grid.Column>
              <div className="service-card" onClick={() => history.push(`/service/${service.slug}`)}>
                <img src={process.env.PUBLIC_URL+"Assets/Images/building.png"} />
                <p>{service.name}</p>
              </div>
            </Grid.Column>
          )}
          
          {/*
            <Grid.Column>
              <div className="service-card">
                <img src="assets/images/building.png" />
                <p>Company Formation Services</p>
              </div>
            </Grid.Column>
          <Grid.Column>
            <div className="service-card">
              <img src="assets/images/solution.png" />
              <p>Local Sponser Services</p>
            </div>
          </Grid.Column>
          <Grid.Column>
            <div className="service-card">
              <img src="assets/images/office.png" />
              <p>Office Arrangements</p>
            </div>
          </Grid.Column>
          <Grid.Column>
            <div className="service-card">
              <img src="assets/images/passport.png" />
              <p>Visa Services</p>
            </div>
          </Grid.Column>
          <Grid.Column>
            <div className="service-card">
              <img src="assets/images/policy.png" />
              <p>Attestation Services</p>
            </div>
          </Grid.Column>
          <Grid.Column>
            <div className="service-card">
              <img src="assets/images/translator.png" />
              <p>Translation Services</p>
            </div>
          </Grid.Column>
          <Grid.Column>
            <div className="service-card">
              <img src="assets/images/govt.png" />
              <p>Dubai Economic Services</p>
            </div>
          </Grid.Column>
          <Grid.Column>
            <div className="service-card">
              <img src="assets/images/trakhees.png" />
              <p>Trakhees Services</p>
            </div>
          </Grid.Column>
          <Grid.Column>
            <div className="service-card">
              <img src="assets/images/stamp.png" />
              <p>Company Stamp</p>
            </div>
          </Grid.Column>
          <Grid.Column>
            <div className="service-card">
              <img src="assets/images/amer.png" />
              <p>Amer Services</p>
            </div>
          </Grid.Column>
          <Grid.Column>
            <div className="service-card">
              <img src="assets/images/tas-heel.png" />
              <p>Tasheel Services</p>
            </div>
          </Grid.Column>
          <Grid.Column>
            <div className="service-card">
              <img src="assets/images/service2.png" />
              <p>Emirates ID</p>
            </div>
          </Grid.Column>
        <Grid.Row columns={4}>
          <Grid.Column>
            <div className="service-card">
              <img src="assets/images/service1.png" />
              <p>Medical Services</p>
          </div>
          </Grid.Column>*/}
          <Grid.Column width={8}>
            <div className="service-card2">
              <img src="assets/images/stamp.png" />
              <p>
                Didn't find what you were looking for? Contact us we will help
                you out.
              </p>
            </div>
          </Grid.Column>
        
      
      
      </Grid>
    
      
      <div className="tourist">
          <h1 className="headingOne">Tourist Visa Services</h1>
        
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit ad velit
            quaerat. Dignissimos odio animi minus deleniti dolorem, in adipisci?
          </p>

          <Grid stackable columns={4}  only='computer'>
            <Grid.Row>
              <Grid.Column>
                <div className="tourist-border">
                  <div className="hours">
                    <h3>96 Hours</h3>
                    <p className="transit">Transit Visa + Insurance (Covid)</p>
                  </div>
                  <div className="hours-content">
                    <div className="rectangle11">
                      <div className="days-dull">Processing Time:</div>
                      <div className="days">Upto 5 Days</div>
                    </div>
                    <div className="rectangle11">
                      <div className="days-dull">Stay Period:</div>
                      <div className="days">14 Days</div>
                    </div>
                    <div className="rectangle11">
                      <div className="days-dull">Validity</div>
                      <div className="days">58 Days</div>
                    </div>
                    <div className="rectangle11">
                      <div className="days-dull">Entry:</div>
                      <div className="days">Single</div>
                    </div>
                  </div>
                  <div className="hours-total">
                    <div className="fees">
                      <div className="total-left">Fees</div>
                      <div className="total-right">350 AED</div>
                    </div>
                  </div>
                </div>
              </Grid.Column>
              <Grid.Column>
                <div className="tourist-border">
                  <div className="hours">
                    <h3>96 Hours</h3>
                    <p className="transit">Transit Visa + Insurance (Covid)</p>
                  </div>
                  <div className="hours-content">
                    <div className="rectangle11">
                      <div className="days-dull">Processing Time:</div>
                      <div className="days">Upto 5 Days</div>
                    </div>
                    <div className="rectangle11">
                      <div className="days-dull">Stay Period:</div>
                      <div className="days">14 Days</div>
                    </div>
                    <div className="rectangle11">
                      <div className="days-dull">Validity</div>
                      <div className="days">58 Days</div>
                    </div>
                    <div className="rectangle11">
                      <div className="days-dull">Entry:</div>
                      <div className="days">Single</div>
                    </div>
                  </div>
                  <div className="hours-total">
                    <div className="fees">
                      <div className="total-left">Fees</div>
                      <div className="total-right">350 AED</div>
                    </div>
                  </div>
                </div>
              </Grid.Column>
              <Grid.Column>
                <div className="tourist-border">
                  <div className="hours">
                    <h3>96 Hours</h3>
                    <p className="transit">Transit Visa + Insurance (Covid)</p>
                  </div>
                  <div className="hours-content">
                    <div className="rectangle11">
                      <div className="days-dull">Processing Time:</div>
                      <div className="days">Upto 5 Days</div>
                    </div>
                    <div className="rectangle11">
                      <div className="days-dull">Stay Period:</div>
                      <div className="days">14 Days</div>
                    </div>
                    <div className="rectangle11">
                      <div className="days-dull">Validity</div>
                      <div className="days">58 Days</div>
                    </div>
                    <div className="rectangle11">
                      <div className="days-dull">Entry:</div>
                      <div className="days">Single</div>
                    </div>
                  </div>
                  <div className="hours-total">
                    <div className="fees">
                      <div className="total-left">Fees</div>
                      <div className="total-right">350 AED</div>
                    </div>
                  </div>
                </div>
              </Grid.Column>
              <Grid.Column>
                <div className="tourist-border">
                  <div className="hours">
                    <h3>96 Hours</h3>
                    <p className="transit">Transit Visa + Insurance (Covid)</p>
                  </div>
                  <div className="hours-content">
                    <div className="rectangle11">
                      <div className="days-dull">Processing Time:</div>
                      <div className="days">Upto 5 Days</div>
                    </div>
                    <div className="rectangle11">
                      <div className="days-dull">Stay Period:</div>
                      <div className="days">14 Days</div>
                    </div>
                    <div className="rectangle11">
                      <div className="days-dull">Validity</div>
                      <div className="days">58 Days</div>
                    </div>
                    <div className="rectangle11">
                      <div className="days-dull">Entry:</div>
                      <div className="days">Single</div>
                    </div>
                  </div>
                  <div className="hours-total">
                    <div className="fees">
                      <div className="total-left">Fees</div>
                      <div className="total-right">350 AED</div>
                    </div>
                  </div>
                </div>
              </Grid.Column>
              </Grid.Row>
          </Grid>
        </div>
    </Container>
  </>
 );
};

export default Visa;
