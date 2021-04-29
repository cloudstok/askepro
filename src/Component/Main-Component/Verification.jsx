import React from "react";

import {
  Button,
  Icon,
  Grid,
  Header,
  Image,
  Modal,
  Form,
} from "semantic-ui-react";

function exampleReducer(state, action) {
  switch (action.type) {
    case "close":
      return { open: false };
    case "open":
      return { open: true, size: action.size };
    default:
      throw new Error("Unsupported action...");
  }
}

const Verification = () => {
  const [state, dispatch] = React.useReducer(exampleReducer, {
    open: false,
    size: undefined,
  });
  const { open, size } = state;

  return (
    <>
      <Button onClick={() => dispatch({ type: "open", size: "small" })}>
        Verify
      </Button>
      <Modal
        size={size}
        open={open}
        onClose={() => dispatch({ type: "close" })}
      >
        <Modal.Header>
          <center>Document verification</center>
        </Modal.Header>
        <Modal.Content>
          <Grid stackable columns={3}>
            <Grid.Column>
              <div className="verify">
                <h6>Service name</h6>
                <p>Company Formation Services</p>
              </div>
            </Grid.Column>
            <Grid.Column>
              <div className="verify">
                <h6>Submitted by</h6>
                <p>Vikas Singh</p>
              </div>
            </Grid.Column>
            <Grid.Column>
              <div className="verify">
                <h6>Submitted on</h6>
                <p> 23 Jan 2021, 12:23</p>
              </div>
            </Grid.Column>
            <Grid.Column>
              <div className="verify">
                <h6>Phone number</h6>
                <p>9868333029</p>
              </div>
            </Grid.Column>
            <Grid.Column>
              <div className="verify">
                <h6>Email</h6>
                <p>Singh.vikas@gmail.com</p>
              </div>
            </Grid.Column>
            <Grid.Column>
              <div className="verify">
                <h6>Amount</h6>
                <p>1,500.00 AED</p>
              </div>
            </Grid.Column>
          </Grid>
        </Modal.Content>
        <Modal.Description>
          <div className="documents">
            <h6>Documents Submitted</h6>
            <div className="doc_inner">
              <img src="Assets/images/doc_pin.png" />
              <p>Emirates ID.jpg</p>
            </div>
            <div className="doc_inner">
              <img src="Assets/images/doc_pin.png" />
              <p>Special ID.jpg</p>
            </div>
            <div className="doc_inner">
              <img src="Assets/images/doc_pin.png" />
              <p>GDFRA permit.jpg</p>
            </div>
            <div className="doc_inner">
              <img src="Assets/images/doc_pin.png" />
              <p>Entry Permit.jpg</p>
            </div>
            <div className="doc_inner">
              <img src="Assets/images/doc_pin.png" />
              <p>XYZ government ID.jpg</p>
            </div>
          </div>

          <div className="accept_bottom">
            <button
              color="black"
              className="reject-btn"
              onClick={() => dispatch({ type: "close" })}
            >
              <strong>Reject</strong>
            </button>
            <button
              color="black"
              className="reject-btn"
              onClick={() => dispatch({ type: "close" })}
            >
              <strong>APPROVE</strong>
            </button>
          </div>
        </Modal.Description>
      </Modal>
    </>
  );
};
export default Verification;
