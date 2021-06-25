import React from "react";
import { Container, Dropdown, Table, Grid } from "semantic-ui-react";
import Footer from "../../Component/Main-Component/Footer";
import Header from "../../Component/Main-Component/Header";
import { Link, useHistory, useParams } from "react-router-dom";
import Crumb from "../../Component/Main-Component/Crumb";
import "../../Sass/Sass-Main/_About.scss";
const options = [
  { key: 1, text: "Choice 1", value: 1 },
  { key: 2, text: "Choice 2", value: 2 },
  { key: 3, text: "Choice 3", value: 3 },
];

const Company = () => {
  const history = useHistory();
  const [service, setService] = React.useState({});

  const { slug } = useParams();
  const service_url = `${process.env.REACT_APP_BASE_URL}/serviceCategory/${slug}`;

  React.useEffect(() => {
    getServiceSlugDetail();
  }, []);

  const getServiceSlugDetail = async () => {
    const services = await (await fetch(service_url, { method: "GET" })).json();
    const serviceData = {
      deleted: services.data.deleted,
      _id: services.data._id,
      name: services.data.name,
      scode: services.data.scode,
      description: services.data.description,
      slug: services.data.slug,
      serviceHowToApply: services.data.serviceDetail.serviceHowToApply,
      reqDocs: services.data.serviceDetail.reqDocs,
      overview: services.data.serviceDetail.overview,
      processT: services.data.serviceDetail.processT,
      stayPeriod: services.data.serviceDetail.stayPeriod,
      validity: services.data.serviceDetail.validity,
      entry: services.data.serviceDetail.entry,
      price: services.data.serviceDetail.price,
    };
    setService(serviceData);
  };

  if (!service) return <div></div>;
  return (
    <>
      <div className="company_wrapper">
        <Crumb />
        <div
          class="company"
          style={{
            background: `url(${
              process.env.PUBLIC_URL + "/Assets/images/contact-bg.png"
            })`,
            backgroundSize: "cover",
          }}
        >
          <Container>
            <h1>{service.name} </h1>
            <p>
              {service.description}
              {/* <br />
            veniam. Doloribus officiis minus Lorem ipsum, dolor sit amet
            consectetur adipisicing elit. Sunt, ratione. eius!
            */}
            </p>
          </Container>
        </div>
        <Container>
          <div className="overview">
            <Grid stackable column={2}>
              <Grid.Column>
                <div className="Service_overview">
                  <h3>Overview</h3>
                  <p>{service.overview}</p>
                  <Dropdown
                    className="golu"
                    text="Service Type"
                    options={options}
                    icon="angle down"  
                  />

                  <Grid.Column>
                    <div className="company_plans">
                      <div className="tourist" style={{ margin: "0" }}>
                        <Grid>
                          <Grid.Row>
                            <Grid.Column>
                              <div className="tourist-border">
                                <div className="hours">
                                  <h3>{service.name}</h3>
                                  <Link to="/apply">
                                    {" "}
                                    <button className="same-btn" type="submit">
                                      APPLY NOW
                                    </button>
                                  </Link>
                                </div>
                                {/*      <div className="hours-content">
                              <div className="rectangle11">
                                <div className="days-dull">Processing Time:</div>
                                <div className="days">Upto {service.processT} Days</div>
                              </div>
                              <div className="rectangle11">
                                <div className="days-dull">Stay Period:</div>
                                <div className="days">{service.stayPeriod} Days</div>
                              </div>
                              <div className="rectangle11">
                                <div className="days-dull">Validity</div>
                                <div className="days">{service.validity} Days</div>
                              </div>
                              <div className="rectangle11">
                                <div className="days-dull">Entry:</div>
                                <div className="days">{service.entry}</div>
                              </div>
                            </div > */}
                                <Table fixed>
                                  <Table.Row>
                                    <Table.HeaderCell>Processing Time</Table.HeaderCell>
                                    <Table.HeaderCell>Stay Period</Table.HeaderCell>
                                    <Table.HeaderCell>Validity</Table.HeaderCell>
                                    <Table.HeaderCell>Entry</Table.HeaderCell>
                                    <Table.HeaderCell>Fees</Table.HeaderCell>
                                  </Table.Row>
                                  <Table.Row>
                                    <Table.Cell>
                                      Upto {service.processT} Days
                                    </Table.Cell>
                                    <Table.Cell>
                                      {service.stayPeriod} Days
                                    </Table.Cell>
                                    <Table.Cell>
                                      {service.validity} Days
                                    </Table.Cell>
                                    <Table.Cell>{service.entry}</Table.Cell>
                                    <Table.Cell><span className="total-right">{service.price} AED</span></Table.Cell>
                                  </Table.Row>
                                </Table>
                              </div>
                            </Grid.Column>
                          </Grid.Row>
                        </Grid>
                      </div>
                    </div>
                  </Grid.Column>

                  <h3>Documents Required</h3>

                  {service.reqDocs &&
                    service.reqDocs.map((d) => (
                      <div className="testimonial">
                        <img
                          src={
                            process.env.PUBLIC_URL +
                            "/Assets/images/pinpoint.png"
                          }
                        />
                        <p>{d}</p>
                      </div>
                    ))}

                  {/*
              <div className="testimonial">
              <img src={process.env.PUBLIC_URL + '/Assets/images/pinpoint.png'} />
                <p>Lorem Ipsum is simply dummy text of the printing </p>
              </div>
              <div className="testimonial">
              <img src={process.env.PUBLIC_URL + '/Assets/images/pinpoint.png'} />
                <p>Lorem Ipsum is simply dummy text of the printing </p>
              </div>
              <div className="testimonial">
              <img src={process.env.PUBLIC_URL + '/Assets/images/pinpoint.png'} />
                <p>Lorem Ipsum is simply dummy text of the printing </p>
              </div>
              <div className="testimonial">
              <img src={process.env.PUBLIC_URL + '/Assets/images/pinpoint.png'} />
                <p>Lorem Ipsum is simply dummy text of the printing </p>
              </div>
              */}
                </div>
              </Grid.Column>
            </Grid>
          </div>
        </Container>
        <Footer />
      </div>
    </>
  );
};
export default Company;
