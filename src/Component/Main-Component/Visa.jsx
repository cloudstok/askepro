import React from "react";
import { Grid, Container } from "semantic-ui-react";
import { useHistory,Link } from "react-router-dom";

const Visa = () => {
  const service_url = `${process.env.REACT_APP_BASE_URL}/serviceCategory`;
  const history = useHistory();

  const [services, setServices] = React.useState(null);

  React.useEffect(() => {
    getServices();
  }, []);

  const getServices = async () => {
    const services = await (await fetch(service_url, { method: "GET" })).json();
    const serviceData = services.data.map((e) => ({
      _id: e._id,
      name: e.name,
      tv_type: e.tv_type,
      scode: e.scode,
      slug: e.slug,
      serviceDetail: e.serviceDetail
    }));

    setServices(serviceData);
  };

  return (
    <>
      <Container fluid>
        <Grid stackable columns={4}>
          {services &&
            services.map((service) => (
              <Grid.Column>
                <div
                  className="service-card"
                  onClick={() => history.push(`/service/${service.slug}`)}
                >
                  <img src={process.env.PUBLIC_URL + "/Assets/images/building.png"}/>

                  <p>{service.name}</p>
                </div>
              </Grid.Column>
            ))}

          {/*
            <Grid.Column>
              <div className="service-card">
              
                 <img src={process.env.PUBLIC_URL+"/Assets/images/building.png"} />
                <p>Company Formation Services</p>
              </div>
            </Grid.Column>
          <Grid.Column>
            <div className="service-card">
          
              <img src={process.env.PUBLIC_URL+"/Assets/images/solution.png"} />
              
              <p>Local Sponser Services</p>
            </div>
          </Grid.Column>
          <Grid.Column>
            <div className="service-card">
             
              <img src={process.env.PUBLIC_URL+"/Assets/images/office.png"} />
              <p>Office Arrangements</p>
            </div>
          </Grid.Column>
          <Grid.Column>
            <div className="service-card">
              
              <img src={process.env.PUBLIC_URL+"/Assets/images/passport.png"} />
              <p>Visa Services</p>
            </div>
          </Grid.Column>
          <Grid.Column>
            <div className="service-card">
             
              <img src={process.env.PUBLIC_URL+"/Assets/images/policy.png"} />
              <p>Attestation Services</p>
            </div>
          </Grid.Column>
          <Grid.Column>
            <div className="service-card">
              <img src={process.env.PUBLIC_URL+"/Assets/images/translator.png"} />
              <p>Translation Services</p>
            </div>
          </Grid.Column>
          <Grid.Column>
            <div className="service-card">
              <img src={process.env.PUBLIC_URL+"/Assets/images/govt.png"} />
              <p>Dubai Economic Services</p>
            </div>
          </Grid.Column>
          <Grid.Column>
            <div className="service-card">
              <img src={process.env.PUBLIC_URL+"/Assets/images/trakhees.png"} />
              <p>Trakhees Services</p>
            </div>
          </Grid.Column>
          <Grid.Column>
            <div className="service-card">
              <img src={process.env.PUBLIC_URL+"/Assets/images/stamp.png"} />

              <p>Company Stamp</p>
            </div>
          </Grid.Column>
          <Grid.Column>
            <div className="service-card">
              <img src={process.env.PUBLIC_URL+"/Assets/images/amer.png"} />
              <p>Amer Services</p>
            </div>
          </Grid.Column>
          <Grid.Column>
            <div className="service-card">
              <img src={process.env.PUBLIC_URL+"/Assets/images/tas-heel.png"} />
              <p>Tasheel Services</p>
            </div>
          </Grid.Column>
          <Grid.Column>
            <div className="service-card">
              <img src={process.env.PUBLIC_URL+"/Assets/images/service2.png"} />
              <p>Emirates ID</p>
            </div>
          </Grid.Column>
        <Grid.Row columns={4}>
          <Grid.Column>
            <div className="service-card">
              <img src={process.env.PUBLIC_URL+"/Assets/images/service1.png"} />
              <p>Medical Services</p>
          </div>
          </Grid.Column>*/}
          <Grid.Column width={16}><Link to="/contact">
            <div className="service-card2">
              <img src={process.env.PUBLIC_URL+"/Assets/images/stamp.png"} />
              <p>
                Didn't find what you were looking for? Contact us we will help
                you out.
              </p>
            </div></Link>
          </Grid.Column>
        </Grid>

        <div className="tourist">
          <h1 className="headingOne">Tourist Visa Services</h1>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit ad
            velit quaerat. Dignissimos odio animi minus deleniti dolorem, in
            adipisci?
          </p>

          <Grid stackable columns={4} only="computer">
            <Grid.Row>
            
            { services && services.map((d) => {
              if (d.tv_type) {
                return (
                  <Grid.Column>
                    <div className="tourist-border" onClick={() => history.push(`/service/${d.slug}`)}>
                      <div className="hours">
                        <h3>{d.serviceDetail.hours ? d.serviceDetail.hours : 96 } Hours</h3>
                        <p className="transit">Transit Visa + Insurance (Covid)</p>
                      </div>
                      <div className="hours-content">
                        <div className="rectangle11">
                          <div className="days-dull">Processing Time :</div>
                          <div className="days">Upto {d.serviceDetail.processT} Days</div>
                        </div>
                        <div className="rectangle11">
                          <div className="days-dull">Stay Period :</div>
                          <div className="days">{d.serviceDetail.stayPeriod} Days</div>
                        </div>
                        <div className="rectangle11">
                          <div className="days-dull">Validity :</div>
                          <div className="days">{d.serviceDetail.validity} Days</div>
                        </div>
                        <div className="rectangle11">
                          <div className="days-dull">Entry :</div>
                          <div className="days">{d.serviceDetail.entry}</div>
                        </div>
                      </div>
                      <div className="hours-total">
                        <div className="fees">
                          <div className="total-left">Fees</div>
                          <div className="total-right">{d.serviceDetail.price} AED</div>
                        </div>
                      </div>
                    </div>
                  </Grid.Column>
                )
              }
            }
            )}
              
              {/*
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
              */}
              
            </Grid.Row>
          </Grid>
        </div>
      </Container>
    </>
  );
};

export default Visa;
