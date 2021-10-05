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
  Input
} from "semantic-ui-react";


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

const Offer_modal = () => {
  const [name, setName] = React.useState(null);
  const [file, setFile] = React.useState(null);
  const[img, setImg]=React.useState(null);
  const submitOffer= async () => {
    dispatch({ type: "close" });
    const url = `${process.env.REACT_APP_BASE_URL}/admin/offer`;
   
    const formData = new FormData();
    formData.append("upload", file);
    formData.append("name", name);
    const result = await (
      await fetch(url, {
        method: "POST",
        headers: {
          "x-access-token": localStorage.getItem("token"),
        },
        body: formData,
      })
    ).json();

    if (result.status === 1) {
      alert("Offer Updated");
      window.location.reload(false);
    }
  };

  const [state, dispatch] = React.useReducer(exampleVerify, {
    open: false,
    size: undefined,
  });
  const { open, size } = state;
  const toBase64 = file => new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = error => reject(error);
});
console.log(img)
  return (
    <>

      <button className="same-btn" /* onClick={submitoffer} */ onClick={() => dispatch({ type: "open", size: "small" })}>
        + ADD NEW OFFER
          </button>
      <Modal
        size={size}
        open={open}
        onClose={() => dispatch({ type: "close" })}
      >
        <Modal.Header>
          <div className="accept_heading">Add New offer</div>
        </Modal.Header>
        <Modal.Content>
          <div className="faq_content">
            <Table.Row>
             
              <Table.Cell>
                <input placeholder="Enter Name here" onChange={(event) => setName(event.target.value)} />
              </Table.Cell>
            </Table.Row>
            <Table.Row>
             
              <Table.Cell>
              <Form.Field>
                  <label>Image(JPEG/PNG)</label>
                  <Input
                    type="file"
                    name="file"
                    id="file-btn"
                    onChange={async (event) => {setFile(event.target.files[0]); setImg(await toBase64(event.target.files[0]))}}
                    style={{ display: "none" }}
                  />
                  <p className="file">
                    <label for="file-btn">Click to select file </label>
                  </p>
                </Form.Field>
              </Table.Cell>
            </Table.Row>
          </div>

         { img&&<div className="offer_banner" >
          <img src={img} width="300" height="200" /></div>}
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
              onClick={() => submitOffer()}
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
export default Offer_modal;
