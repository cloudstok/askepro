import React from "react";
import {
  Button,
  Icon,
  Grid,
  Header,
  Image,
  Modal,
  Form,
  Table,
  Input,
  TextArea
} from "semantic-ui-react";


function exampleService(state, action) {
    switch (action.type) {
      case "close":
        return { open: false };
      case "open":
        return { open: true, size: action.size };
      default:
        throw new Error("Unsupported action...");
    }
  }

  const Service_modal = () => {
    const [faqTitle, setTitle] = React.useState(null);
    const [description, setDescription] = React.useState(null);
    const submitFaq = async () => {
      dispatch({ type: "close" });
      const url = `${process.env.REACT_APP_BASE_URL}/service`;
      let jsonData = {
        title: faqTitle,
        description: description,
      };
      console.log(jsonData);
      const result = await (
        await fetch(url, {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            "x-access-token": localStorage.getItem("token"),
          },
          body: JSON.stringify(jsonData),
        })
      ).json();
  
      if (result.status === 1) {
        window.location.reload(false);
      }
    };
  
    const [state, dispatch] = React.useReducer(exampleService, {
      open: false,
      size: undefined,
    });
    const { open, size } = state;
  
    return (
      <>
  
        <button className="same-btn" /* onClick={submitFaq} */ onClick={() => dispatch({ type: "open", size: "huge" })}>
          + ADD SERVICE
            </button>
        <Modal
          size={size}
          open={open}
          onClose={() => dispatch({ type: "close" })}
        >

<Modal.Header>
          <div className="accept_heading">Add New Service</div>
        </Modal.Header>
        <Modal.Content>
        <div className="services_form">
        <Form>
        <Form.Group widths='equal'>
          <Form.Field
            control={Input}
            label='Enter service name'
            placeholder='First name'
          />
          <Form.Field
            control={Input}
            label='Total Fees'
            placeholder='Enter total fees'
          />
         
        </Form.Group>
        <Form.Group widths='equal'>
          <Form.Field
            control={Input}
            label='Processing Time'
            placeholder='Enter time'
          />
          <Form.Field
            control={Input}
            label='Stay Period'
            placeholder='Enter duration'
          />
            <Form.Field
            control={Input}
            label='Validity'
            placeholder='Enter validity'
          />
          <Form.Field
            control={Input}
            label='Entry'
            placeholder='Enter headcount'
          />
         
        </Form.Group>
        <Form.Field
          control={TextArea}
          label='Overview'
          placeholder='Write your text here'
        />
          <Form.Field
          control={TextArea}
          label='How to Apply'
          placeholder='Write your text here'
        />
          <Form.Field
          control={TextArea}
          label='Documents Required'
          placeholder='Write your text here'
        />
        </Form>
        </div>
        </Modal.Content>
        <Modal.Description>
          <div className="accept_bottom">
            <button
              color="black"
              className="same-btn"
              onClick={() => dispatch({ type: "close" })}
            >
              CANCEL
            </button>
            <button
              color="black"
              className="same-btn"
              onClick={() => submitFaq()}
            >
              SAVE
            </button>
            <br />
            <br />  
          </div>
        </Modal.Description>
      </Modal>
    
    </>
  );
};
export default Service_modal;
