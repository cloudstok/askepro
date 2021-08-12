import React from "react";
import { Container, Dropdown, Table, Grid } from "semantic-ui-react";
import Footer from "../../Component/Main-Component/Footer";
import Header from "../../Component/Main-Component/Header";
import { Link, useHistory, useParams } from "react-router-dom";
import Crumb from "../../Component/Main-Component/Crumb";
import "../../Sass/Sass-Main/_About.scss";

const Company = () => {
  const history = useHistory();
  const [service, setService] = React.useState({});
  const [serviceType, setServiceType] = React.useState({});
  const [options, setOptions] = React.useState([]);
  const [show, setShow] = React.useState(false);
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
      overview: services.data.overview,
      serviceDetail: services.data.serviceDetail,
      description: services.data.description,
      slug: services.data.slug,
    };
    console.log(services);
    let serviceOptions = services.data.serviceDetail.map((e) => ({
      text: e.name,
      value: e._id,
      key: e._id,
    }));
    setOptions(serviceOptions);
    setService(serviceData);
  };
  const getserviceType = async (val) => {
    let sub = service.serviceDetail.find((o) => o._id === val);
    setShow(true);
    setServiceType(sub);
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
                    placeholder="Service Type"
                    options={options}
                    icon="angle down"
                    onChange={(e, i) => {
                      const val = i.value;
                      getserviceType(val);
                    }}
                  />

                  {show ? (
                    <Grid.Column>
                      <div className="company_plans">
                        <div className="tourist" style={{ margin: "0" }}>
                          <Grid>
                            <Grid.Row>
                              <Grid.Column>
                                <div className="tourist-border">
                                  <div className="hours">
                                    <h3>{serviceType.name}</h3>
                                    <Link to="/apply">
                                      {" "}
                                      <button
                                        className="same-btn"
                                        type="submit"
                                      >
                                        APPLY NOW
                                      </button>
                                    </Link>
                                  </div>

                                  <Table fixed>
                                    <Table.Row></Table.Row>
                                    <Table.Row>
                                      <Table.HeaderCell>Fees</Table.HeaderCell>

                                      <Table.Cell>
                                        <div className="total-right">
                                        <span className="year"> 1 YEAR</span>
                                          {serviceType.price} AED
                                        </div>
                                      </Table.Cell>
                                      <Table.Cell>
                                        <div className="total-right">
                                        <span className="year"> 2 YEAR</span>
                                          {serviceType.price} AED
                                        </div>
                                      </Table.Cell>
                                      <Table.Cell>
                                        <div className="total-right">
                                        <span className="year"> 3 YEAR</span>
                                          {serviceType.price} AED
                                        </div>
                                      </Table.Cell>
                                    </Table.Row>
                                  </Table>
                                </div>
                              </Grid.Column>
                            </Grid.Row>
                          </Grid>
                        </div>
                      </div>
                      <h3>Documents Required</h3>

                      {serviceType.reqDocs &&
                        serviceType.reqDocs.map((d) => (
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
                    </Grid.Column>
                  ) : (
                    <></>
                  )}

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
