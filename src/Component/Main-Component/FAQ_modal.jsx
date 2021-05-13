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
  const [faqTitle, setTitle] = React.useState(null);
  const [description, setDescription] = React.useState(null);
  const submitFaq = async () => {
    dispatch({ type: "close" });
    const url = `${process.env.REACT_APP_BASE_URL}/faqs`;
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

  const [state, dispatch] = React.useReducer(exampleVerify, {
    open: false,
    size: undefined,
    
  });
  const { open, size } = state;

  return (
    <>
<<<<<<< HEAD

      <button className="same-btn" /* onClick={submitFaq} */ onClick={() => dispatch({ type: "open", size: "huge" })}>
        + ADD Service
=======
   
      <button className="same-btn" onClick={() => dispatch({ type: "open", size: "huge" })}>
          + ADD FAQ
>>>>>>> 99ac9d9975881386e426f1ea85ea35699c5769d8
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
<<<<<<< HEAD
=======
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
>>>>>>> 99ac9d9975881386e426f1ea85ea35699c5769d8
                <p>Question</p>
              </Table.Cell>
              <Table.Cell>
                <input placeholder="Enter question here" onChange={(event) => setTitle(event.target.value)} />
              </Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell collapsing>
                <p>Answer</p>
              </Table.Cell>
              <Table.Cell>
                <Form.Field>
                  <input placeholder="Enter answer here" onChange={(event) => setDescription(event.target.value)} />
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
export default FAQ_modal;
