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
import "../../Sass/Sass-Main/_Admin_dashboard.scss";
import AdminAccordion from "./Accordion/AdminAccordion";
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
  const [name, setName] = React.useState(null);
  const [description, setDescription]= React.useState(null);
  const [overview, setOverview]= React.useState(null);
  const [processT, setProcessT]= React.useState(null);
  const [stayPeriod, setStayPeriod] = React.useState(null);
  const [validity, setValidity] = React.useState(null);
  const [type, setType] = React.useState(null);
  const [entry, setEntry] = React.useState(null);
  const [subject, setSubject] = React.useState(false);
  const [comp, setComp] = React.useState([]);
  const [serviceDetail, setServiceDetail] = React.useState([]);
  const [price, setPrice] = React.useState(null);
  const [serviceHowToApply, setHta] = React.useState(null);
  const [reqDocs, setDocs] = React.useState(null);
  const [file, setFile]=React.useState(null);
  const [state, dispatch] = React.useReducer(exampleService, {
    open: false,
    size: undefined,
  });
  const { open, size } = state;

  const uploadWithFormData = async (event) => {
    dispatch({ type: "close" });
    const url=`${process.env.REACT_APP_BASE_URL}/admin/services`
    event.preventDefault();
    const formData = new FormData();
    formData.append("upload", file);
    formData.append("name", name);
    formData.append("description", description);
    formData.append("overview", overview);
    formData.append("processT", processT);
    formData.append("stayPeriod", stayPeriod);
    formData.append("validity", validity);
    formData.append("entry", entry);
    formData.append("price",price );
    formData.append("reqDocs", reqDocs);
    formData.append("serviceHowToApply", serviceHowToApply);


    const result = await (await fetch(url, {
      method: 'POST',
      body: formData
    })).json();

    if (result.status === 1)
      window.location.reload(false);
  }
  const handleAdd = async (e) => {
    e.preventDefault();
    setComp([...comp, <Form.Input id="var" label='Enter Var' onChange={(e) => setSubject(subject + "~" + e.target.value)} ></Form.Input>]);
  }
  const handleSave=async(e)=>{

setServiceDetail([...serviceDetail,{
  type:type, 
  price:price,
  processT:processT,
  stayPeriod:stayPeriod,
  validity:validity, 
  entry:entry}]);
  
  }


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
                  label='Service name'
                  placeholder='First name'
                  onChange={(event) => setName(event.target.value)}
                />
                  <Form.Field>
                  <label>Image(JPEG/PNG)</label>
                  <Input type='file' name='file' id="file-btn" onChange={(event) => setFile(event.target.files[0])} style={{ display: "none" }} />
                  <p className='file'>
                    <label for='file-btn'>Click to select file  </label>
                  </p>
                </Form.Field>
                </Form.Group>
                <Form.Field
                control={TextArea}
                label='Description'
                placeholder='Write your text here'
                onChange={(event) => setDescription(event.target.value)}
              />
                 <Form.Field
                control={TextArea}
                label='Overview'
                placeholder='Write your text here'
                onChange={(event) => setOverview(event.target.value)}
              />
              
      {/*         <div className="application_types">
                <div>
                  <Form.Field>
                <label>Add Application Type(s)</label>
                </Form.Field>
                </div>
                <div>
                <Button action={{ onClick: (e) => handleAdd(e), icon: 'plus square icon' }} id="var" onChange={(e) => setSubject(e.target.value)}>
                <label>+ ADD NEW</label>
                </Button>
                </div>
              </div> */}
               <div className="application_types">
            <div>
              <Form.Field>
                <label>Add Application Type(s)</label>
              </Form.Field>
            </div>
            <div>
              <Form.Field>
                <Button onClick={(e)=>handleSave(e)}>
                  <Icon name="save outline" />
                  <label> Save</label>
                </Button>
              </Form.Field>
            </div>
          </div>
                
              <div className="admin_accordion">
              <Form>
              <Form.Group widths="equal">
                <Form.Input
                  fluid
                  label="Application Type"
                  placeholder="Enter Application Type"
                  onChange={(event) => setType(event.target.value)}
                />
                <Form.Input
                  fluid
                  label="Enter total fees"
                  placeholder="Enter total fees"
                  onChange={(event) => setPrice(event.target.value)}
                />
              </Form.Group>
              <Form.Group widths="equal">
                <Form.Input
                  fluid
                  label="Processing time"
                  placeholder="Enter Processing Time"
                  onChange={(event) => setProcessT(event.target.value)}
                />
                <Form.Input
                  fluid
                  label="Stay Period"
                  placeholder="Enter duration"
                  onChange={(event) => setStayPeriod(event.target.value)}
                />
                <Form.Input
                  fluid
                  label="Validity"
                  placeholder="Enter validity"
                  onChange={(event) => setValidity(event.target.value)}
                />
                <Form.Input fluid label="Entry" 
                placeholder="Enter Entry"
                onChange={(event) => setEntry(event.target.value)} />
              </Form.Group>
            </Form>
              </div>
                
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
              onClick={(event) => uploadWithFormData(event)}
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
