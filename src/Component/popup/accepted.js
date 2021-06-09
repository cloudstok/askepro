import React, { useReducer } from "react";
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

const Accepted = (id) => {

  const [state, dispatch] = useReducer(exampleReducer, {
    open: false,
    size: undefined,
  });
  const { open, size } = state;
  const handleAccept = () => {

    dispatch({ type: "close" })

  
   
     window.location.reload(false);
   
  }
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
          The re has been acceted
          </p>

          <div className="accept_bottom">
            <button
              color="black"
              className="same-btn"
              onClick={() =>handleAccept(id.id) }
            >
              CLOSE
            </button>
          </div>
        </Modal.Description>
      </Modal>
    </>
  );
};
export default Accepted;
