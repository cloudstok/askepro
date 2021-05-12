import React from "react";
import { Button, Icon, Header, Image, Modal } from "semantic-ui-react";
import "../../Sass/Sass-Main/_Modal.scss";

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

const Accept = () => {
  const [state, dispatch] = React.useReducer(exampleReducer, {
    open: false,
    size: undefined,
  });
  const { open, size } = state;

  return (
    <>
      <Icon
        name="check"
        onClick={() => dispatch({ type: "open", size: "tiny" })}
      ></Icon>
      <Modal
        size={size}
        open={open}
        onClose={() => dispatch({ type: "close" })}
      >
        <Modal.Header>
          <div className="accept_heading">Accept Appointment</div>
        </Modal.Header>
        <Modal.Content image>
          <div className="modal_img">
            <Icon className="icon1" name="check" color="green" size="big" />
          </div>
        </Modal.Content>
        <Modal.Description>
          <p className="modal_p">
            You have accept the <br />
            appointment booked by Client BJXCR34
          </p>

          <div className="accept_bottom">
            <button
              color="black"
              className="modal-btn"
              onClick={() => dispatch({ type: "close" })}
            >
              CLOSE
            </button>
          </div>
        </Modal.Description>
      </Modal>
    </>
  );
};
export default Accept;
