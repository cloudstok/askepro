import React from "react";
import { Grid, Container, Icon, Button } from "semantic-ui-react";

const Apply = () => {
  return (
    <>


      <section className="step">
        <div className="apply">
        <h1 className="headingOne">How to apply</h1>
        <div className="underline_img">
        <img src="assets/images/center.png" />
        </div>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint quam
          distinctio impedit ducimus? Eum incidunt sequi quae molestias non<br/>
          tempora. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Hic, laborum?
        </p>
        </div>
        <Container>
          
        <Grid stackable columns={3}>
          <Grid.Row>
            <Grid.Column>
  
            <div className="circle">
              
                </div>
               
                </Grid.Column>
                <Grid.Column>
                <div className="circle">
              
                </div>
                </Grid.Column>
                <Grid.Column>
                 <div className="circle">
              
                </div>
                </Grid.Column>
                </Grid.Row>
              </Grid>
        
        <div className="process">
           
        <Grid stackable columns={3}>
          <Grid.Row>
                <Grid.Column>
                <p className='step_heading'>Step 1 </p>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Dolorum placeat itaque in tempora sunt deserunt aut odio
                  libero quia asperiores?
                </p>
              </Grid.Column>
              <Grid.Column>
                <p className='step_heading'>Step 2</p>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Ullam, eveniet! Voluptas ducimus, pariatur nihil beatae magnam
                  inventore voluptatem ipsam voluptates!
                </p>
              </Grid.Column>
              <Grid.Column>
                <p className='step_heading'>Step 3</p>
                <p>
                  Lorem ipsum dolor sit amet consec tetur adipisicing elit.
                  Assumenda natus neque eveniet minus cumque error delectus ut
                  nulla aut necessitatibus?
                </p>
              </Grid.Column>
              </Grid.Row>
          </Grid>
         
        </div>
         </Container>
      </section>

      <section className="customer">
      <Container>
          <h1 className="headingOne">Customer Reviews</h1>
          <img className="underline_img" src="assets/images/path.png" />
          <Grid stackable columns={3}>
            <Grid.Row>
              <Grid.Column>
                <div className="customer-card">
                  <div className="one">
                    <div className="left">
                      <img
                        src="assets/images/Mask Group 4@2x.png"
                        width="60px"
                      />
                    </div>
                    <div className="right">
                      Fatima Sheikh <br />
                      <img
                        src="assets/images/Group 4617@3x.png"
                        style={{ width: "61px", height: "14px" }}
                      />
                    </div>
                  </div>
                  <div className="two">
                    Lorem ips um dolor sit amet conse cte tur adipisicing elit.
                    Illum, pariatur animi hic rerum voluptatibus autem veritatis
                    fugit necessitatibus expedita tempore!
                  </div>
                </div>
              </Grid.Column>
              
              <Grid.Column>
                <div className="customer-card">
                  <div className="one">
                    <div className="left">
                      <img
                        src="assets/images/user.png"
                        width="60px"
                      />
                    </div>
                    <div className="right">
                      Muhammed Al- Rasool <br />
                      <img
                        src="assets/images/Group 4617@3x.png"
                        style={{ width: "61px", height: "14px" }}
                      />
                    </div>
                  </div>
                  <div className="two">
                    Lorem ipsum dol or sit amet conse ctetur adipisicing elit.
                    Illum, pariatur animi hic rerum voluptatibus autem veritatis
                    fugit nec us expedita tempore!
                  </div>
                </div>
              </Grid.Column>

              <Grid.Column>
                <div className="customer-card">
                  <div className="one">
                    <div className="left">
                      <img
                        src="assets/images/user.png"
                        width="60px"
                      />
                    </div>
                    <div className="right">
                      Muhammed Al-Imran
                      <br />
                      <img
                        src="assets/images/Group 4617@3x.png"
                        style={{ width: "61px", height: "14px" }}
                      />
                    </div>
                  </div>
                  <div className="two">
                    Lorem ipsum dol or sit amet conse ctetur adipisicing elit.
                    Illum, pariatur animi hic rerum voluptatibus autem veritatis
                    fugit necessi edita tempore!
                  </div>
                </div>
              </Grid.Column>
              </Grid.Row>
          </Grid>

          
        <div className="slide-btn">
          
          
          <Icon name='arrow left' />
          

          
          <Icon name='arrow right'></Icon>
          
        </div>
        </Container>

        
      </section>



   
    </>
  );
};

export default Apply;
