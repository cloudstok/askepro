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
} from "semantic-ui-react";
import Reject from "./Reject";
import Accept from "./Accept";
import Verification from "./Verification";



const options = [
  { key: 'm', text: 'Tasheel', value: 'service1' },
  { key: 'f', text: 'Company Formation Services', value: 'service2' },
  { key: 'o', text: 'Emirates ID', value: 'service3' },
]


function exampleVerify(state, action) {
  switch (action.type) {
    case "close":
      return { open: false };
    case "open":
      return { open: true, size: action.size };
    default:
      throw new Error("Unsupported action...");
  }
}

const FAQ_modal = () => {
  const [state, dispatch] = React.useReducer(exampleVerify, {
    open: false,
    size: undefined,
    
  });
  const { open, size } = state;

  return (
    <>
   
      <button className="same-btn" onClick={() => dispatch({ type: "open", size: "huge" })}>
          + ADD FAQ
          </button>
      <Modal
        size={size}
        open={open}
        onClose={() => dispatch({ type: "close" })}
      >
        <Modal.Header>
          <div className="accept_heading">Add New FAQ</div>
        </Modal.Header>
        <Modal.Content>
          <div className="faq_content">
            <Table.Row>
              <Table.Cell collapsing>
                <p>Service name</p>
              </Table.Cell>
              <Table.Cell>
              <Form.Select
     
            options={options}
            placeholder='Services'
          />
              </Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell collapsing>
                <p>Question</p>
              </Table.Cell>
              <Table.Cell>
                <input placeholder="Enter question here" />
              </Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell collapsing>
                <p>Answer</p>
              </Table.Cell>
              <Table.Cell>
                <Form.Field>
                  <input placeholder="Enter answer here" />
                </Form.Field>
              </Table.Cell>
            </Table.Row>
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
              onClick={() => dispatch({ type: "close" })}
            >
              SAVE
            </button>
          </div>
        </Modal.Description>
      </Modal>
     
    </>
  );
};
export default FAQ_modal;
