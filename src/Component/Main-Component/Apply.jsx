import React from "react";
import { Grid, Container, Icon, Button } from "semantic-ui-react";

const Apply = () => {
  return (
    <>


      <section className="step">
        <div className="apply">
        <h1 className="headingOne">How to apply</h1>
        
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
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and 
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
          
          <Grid stackable columns={3}>
            <Grid.Row>
              <Grid.Column>
                <div className="customer-card">
                  <div className="one">
                    <div className="left">
                    <img src={process.env.PUBLIC_URL+"/Assets/images/user_review.png"}/>
                    </div>
                    <div className="right">
                      Fatima Sheikh <br />
                      <img src={process.env.PUBLIC_URL+"/Assets/images/ratings.png"}/>
                    </div>
                  </div>
                  <div className="two">
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and 
                  </div>
                </div>
              </Grid.Column>
              
              <Grid.Column>
                <div className="customer-card">
                  <div className="one">
                    <div className="left">
                    <img src={process.env.PUBLIC_URL+"/Assets/images/user_review.png"}/>
                    </div>
                    <div className="right">
                      Muhammed Al- Rasool <br />
                       <img src={process.env.PUBLIC_URL+"/Assets/images/ratings.png"}/>
                    </div>
                  </div>
                  <div className="two">
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and 
                  </div>
                </div>
              </Grid.Column>

              <Grid.Column>
                <div className="customer-card">
                  <div className="one">
                    <div className="left">
                    <img src={process.env.PUBLIC_URL+"/Assets/images/user_review.png"}/>
                    </div>
                    <div className="right">
                      Muhammed Al-Imran
                      <br />
                       <img src={process.env.PUBLIC_URL+"/Assets/images/ratings.png"}/>
                    </div>
                  </div>
                  <div className="two">
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and 
                  </div>
                </div>
              </Grid.Column>
              </Grid.Row>
          </Grid>

          
        <div className="slide-btn">
        <Icon name='chevron left'></Icon>  
        <Icon name='chevron right'></Icon>
        
          

          
          
          
        </div>
        </Container>

        
      </section>



   
    </>
  );
};

export default Apply;
