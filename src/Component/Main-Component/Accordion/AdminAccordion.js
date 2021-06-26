import React, { Component } from "react";
import { Accordion, Form, Icon, Button } from "semantic-ui-react";

export default class AdminAccordion extends Component {
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
      <Accordion fluid styled>
        <Accordion.Title>
        <div className="application_types">
                <div>
                  <Form.Field>
                <label>Add Application Type(s)</label>
                </Form.Field>
                </div>
                <div>
                <Form.Field>
                <Button className="cancel_btn"
            active={activeIndex === 0}
            index={0}
            onClick={this.handleClick}
          >
              <img src={process.env.PUBLIC_URL + "/Assets/images/cancel.png"} />
           <label> Cancel</label>
          </Button>
                <Button
            active={activeIndex === 0}
            index={0}
            onClick={this.handleClick}
          >
              <img src={process.env.PUBLIC_URL + "/Assets/images/save.png"} />
           <label> Save</label>
          </Button>
                <Button
            active={activeIndex === 0}
            index={0}
            onClick={this.handleClick}
          >
              <img src={process.env.PUBLIC_URL + "/Assets/images/edit.png"} />
           <label> Edit</label>
          </Button>
                </Form.Field>
                </div>
              </div>
        </Accordion.Title>
        
        <Accordion.Content active={activeIndex === 0}>
        <div className="admin_accordion">
        <Form>
        <Form.Group widths='equal'>
          <Form.Input fluid label='Application Type' placeholder='First name' />
          <Form.Input fluid label='Enter total fees' placeholder='Enter time' />
        </Form.Group>
        <Form.Group widths='equal'>
          <Form.Input fluid label='Processing time' placeholder='Enter total fees' />
          <Form.Input fluid label='Stay Period' placeholder='Enter duration' />
          <Form.Input fluid label='Validity' placeholder='Enter validity' />
          <Form.Input fluid label='Entry' placeholder='Enter headcount' />
        </Form.Group>
        <Form.TextArea label='About' placeholder='Tell us more about you...' />
        </Form>
        </div>
        </Accordion.Content>
        
      </Accordion>
      
    );  
  }
}
