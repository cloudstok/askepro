import React, { Component } from "react";
import { Accordion, Grid, Icon, Container } from "semantic-ui-react";

export default class AccordionExampleFluid extends Component {
  state = { activeIndex: 0 };

  handleClick = (e, titleProps) => {
    const { index } = titleProps;
    const { activeIndex } = this.state;
    const newIndex = activeIndex === index ? -1 : index;

    this.setState({ activeIndex: newIndex });
  };

  render() {
    const { activeIndex } = this.state;

    return (
      <>
        <Container>


          <div className="accordion">
            <h1 className="headingOne">Frequently Asked Questions</h1>
            <div className="underline_img">
              <img src="assets/images/center.png" />
            </div>
          </div>
          <Accordion fluid>

            <div className="accordion_section">
            <Accordion.Title
              active={activeIndex === 0}
              index={0}
              onClick={this.handleClick}
            >
              <div className="accordion_gap">
              <Grid>
                <Grid.Column width={4}>
                  <img src="assets/images/question.png" width="32px" />
                </Grid.Column>
                <Grid.Column width={8}>
                  What kinds of dogs are there?
                </Grid.Column>
                <Grid.Column width={4}>
                  <img src="assets/images/plus.png" width="24px" />
                </Grid.Column>
              </Grid>
              </div>
            </Accordion.Title>
            <Accordion.Content active={activeIndex === 0}>
            <div className="accord_content">
              <p>
                A dog is a type of domesticated animal. Known for its loyalty
                and faithfulness, it can be found as a welcome guest in many
                households across the world.
              </p>
              </div>
            </Accordion.Content>

            </div>

            <div className="accordion_section">
            <Accordion.Title
              active={activeIndex === 1}
              index={1}
              onClick={this.handleClick}
            >
              <div className="accordion_gap">
              <Grid>
                <Grid.Column width={4}>
                  <img src="assets/images/question.png" width="32px" />
                </Grid.Column>
                <Grid.Column width={8}>
                  What kinds of dogs are there?
                </Grid.Column>
                <Grid.Column width={4}>
                  <img src="assets/images/plus.png" width="24px" />
                </Grid.Column>
              </Grid>
              </div>
            </Accordion.Title>
            <Accordion.Content active={activeIndex === 1}>
            <div className="accord_content">
              <p>
                There are many breeds of dogs. Each breed varies in size and
                temperament. Owners often select a breed of dog that they find
                to be compatible with their own lifestyle and desires from a
                companion.
              </p>
              </div>
            </Accordion.Content>
            </div>

            <div className="accordion_section">
            <Accordion.Title
              active={activeIndex === 2}
              index={2}
              onClick={this.handleClick}
            >
              <div className="accordion_gap">
              <Grid>
                <Grid.Column width={4}>
                  <img src="assets/images/question.png" width="32px" />
                </Grid.Column>
                <Grid.Column width={8}>
                  What kinds of dogs are there?
                </Grid.Column>
                <Grid.Column width={4}>
                  <img src="assets/images/plus.png" width="24px" />
                </Grid.Column>
              </Grid>
              </div>
            </Accordion.Title>
            <Accordion.Content active={activeIndex === 2}>
            <div className="accord_content">
              <p>
                Three common ways for a prospective owner to acquire a dog is
                from pet shops, private owners, or shelters.
              </p>
              <p>
                A pet shop may be the most convenient way to buy a dog. Buying a
                dog from a private owner allows you to assess the pedigree and
                upbringing of your dog before choosing to take it home. Lastly,
                finding your dog from a shelter, helps give a good home to a dog
                who may not find one so readily.
              </p>
              </div>
            </Accordion.Content>
            </div>

            <div className="accordion_section">
            <Accordion.Title
              active={activeIndex === 3}
              index={3}
              onClick={this.handleClick}
            >
              <div className="accordion_gap">
              <Grid>
                <Grid.Column width={4}>
                  <img src="assets/images/question.png" width="32px" />
                </Grid.Column>
                <Grid.Column width={8}>
                  What kinds of dogs are there?
                </Grid.Column>
                <Grid.Column width={4}>
                  <img src="assets/images/plus.png" width="24px" />
                </Grid.Column>
              </Grid>
              </div>
            </Accordion.Title>
            <Accordion.Content active={activeIndex === 3}>
            <div className="accord_content">
              <p>
                There are many breeds of dogs. Each breed varies in size and
                temperament. Owners often select a breed of dog that they find
                to be compatible with their own lifestyle and desires from a
                companion.
              </p>
              </div>
            </Accordion.Content>
            </div>

            <div className="accordion_section">
            <Accordion.Title
              active={activeIndex === 4}
              index={4}
              onClick={this.handleClick}
            > 
            <div className="accordion_gap">
              <Grid>
                <Grid.Column width={4}>
                  <img src="assets/images/question.png" width="32px" />
                </Grid.Column>
                <Grid.Column width={8}>
                  What kinds of dogs are there?
                </Grid.Column>
                <Grid.Column width={4}>
                  <img src="assets/images/plus.png" width="24px" />
                </Grid.Column>
              </Grid>
              </div>
            </Accordion.Title>
            <Accordion.Content active={activeIndex === 4}>
              <div className="accord_content">
              <p>
                There are many breeds of dogs. Each breed varies in size and
                temperament. Owners often select a breed of dog that they find
                to be compatible with their own lifestyle and desires from a
                companion.
              </p>
              </div>
            </Accordion.Content>
            </div>

            <div className="accordion_section">
            <Accordion.Title
              active={activeIndex === 5}
              index={5}
              onClick={this.handleClick}
            >
              <div className="accordion_gap">
              <Grid>
                <Grid.Column width={4}>
                  <img src="assets/images/question.png" width="32px" />
                </Grid.Column>
                <Grid.Column width={8}>
                  What kinds of dogs are there?
                </Grid.Column>
                <Grid.Column width={4}>
                  <img src="assets/images/plus.png" width="24px" />
                </Grid.Column>
              </Grid>
              </div>
            </Accordion.Title>
            <Accordion.Content active={activeIndex === 5}>
            <div className="accord_content">
              <p>
                Hello many breeds of dogs. Each breed varies in size and
                temperament. Owners often select a breed of dog that they find
                to be compatible with their own lifestyle and desires from a
                companion.
              </p>
              </div>  
            </Accordion.Content>
            </div>
          </Accordion>

          <div className="question">
            <button className="same-btn" style={{ borderRadius: "20px" }}>
              <strong>APPLY NOW</strong>
            </button>
          </div>
        </Container>
      </>
    );
  }
}
