import React from "react";

import {
  Button,
  Icon,
  Header,
  Image,
  Modal,
  Form,
  Container,
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

const Reject = () => {
  const [state, dispatch] = React.useReducer(exampleReducer, {
    open: false,
    size: undefined,
  });
  const { open, size } = state;

  return (
    <>
      <Icon
        name="close"
        onClick={() => dispatch({ type: "open", size: "tiny" })}
      ></Icon>
      <Modal
        size={size}
        open={open}
        onClose={() => dispatch({ type: "close" })}
      >
        <Modal.Header>
          <div className="accept_heading">Reject Appointment</div>
        </Modal.Header>
        <Modal.Content>
          <div className="modal_img2">
            <Icon className="icon1" name="close" color="red" size="big" />
          </div>
          <p className="modal_p">
            Please provide a reason/remark for the rejection.
          </p>
        </Modal.Content>
        <Modal.Description>
          <Form className="verification_form">
            <label className="reason">Reason ?</label>

            <Form.TextArea />
          </Form>
        </Modal.Description>

        <Modal.Description>
          <div className="accept_bottom">
            <button
              color="black"
              className="modal-btn"
              onClick={() => dispatch({ type: "close" })}
            >
              CLOSE
            </button>
            <button
              color="black"
              className="modal-btn"
              onClick={() => dispatch({ type: "close" })}
            >
              REJECT
            </button>
          </div>
        </Modal.Description>
      </Modal>
    </>
  );
};
export default Reject;
