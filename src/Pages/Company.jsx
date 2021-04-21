import React from "react";
import { Container, Grid } from "semantic-ui-react";
const Company = () => {
  return (
    <>
      <div
        class="company"
        style={{
          background: "url(assets/images/contact-bg.png)",
          backgroundSize: "cover",
        }}
      >
        <Container>
          <h1 class="headingOne">Company Formation Services </h1>
          <img src="assets/images/center.png" />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
            numquam nemo voluptatibus fuga fugit quod
            <br />
            veniam. Doloribus officiis minus Lorem ipsum, dolor sit amet
            consectetur adipisicing elit. Sunt, ratione. eius!
          </p>
        </Container>
      </div>
      <Container>


      <div className="overview">
      <Grid doubling column={2}>
      <Grid.Column width={11}>
            <div>
              <h3>Overview</h3>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry’s standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five ce
              </p>
              <h3>How to Apply</h3>
              <div className="testimonial">
                <img src="/assets/images/Rectangle 242@2x.png" />
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry’s
                  standard.{" "}
                </p>
              </div>
              <div className="testimonial">
                <img src="/assets/images/Rectangle 242@2x.png" />
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry’s
                  standard.{" "}
                </p>
              </div>
              <div className="testimonial">
                <img src="/assets/images/Rectangle 242@2x.png" />
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry’s
                  standard.{" "}
                </p>
              </div>
              <div className="testimonial">
                <img src="/assets/images/Rectangle 242@2x.png" />
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry’s
                  standard.{" "}
                </p>
              </div>
              <div className="testimonial">
                <img src="/assets/images/Rectangle 242@2x.png" />
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry’s
                  standard.{" "}
                </p>
              </div>

              <h3>Documents Required</h3>

              <div className="testimonial">
                <img src="/assets/images/Rectangle 242@2x.png" />
                <p>Lorem Ipsum is simply dummy text of the printing </p>
              </div>
              <div className="testimonial">
                <img src="/assets/images/Rectangle 242@2x.png" />
                <p>Lorem Ipsum is simply dummy text of the printing </p>
              </div>
              <div className="testimonial">
                <img src="/assets/images/Rectangle 242@2x.png" />
                <p>Lorem Ipsum is simply dummy text of the printing </p>
              </div>
              <div className="testimonial">
                <img src="/assets/images/Rectangle 242@2x.png" />
                <p>Lorem Ipsum is simply dummy text of the printing </p>
              </div>
              <div className="testimonial">
                <img src="/assets/images/Rectangle 242@2x.png" />
                <p>Lorem Ipsum is simply dummy text of the printing </p>
              </div>
            </div>  
      </Grid.Column>

      <Grid.Column width={5}>
      <div className="tourist" style={{margin:'0'}}>
              <Grid>
                <Grid.Row>
                  <Grid.Column>
                    <div className="tourist-border">
                      <div className="hours">
                        <h3>Company Formation Services</h3>
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
      </Grid.Column>
    </Grid>
        </div>

        </Container>
          </>
  );
};
export default Company;
