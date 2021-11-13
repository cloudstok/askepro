import React from "react";
import { Button,Menu, Header, Table, Icon, Container, Form, Grid, Input} from "semantic-ui-react";
import Updated from "../popup/updated";
import './document.scss';
export default function ViewDocuments() {

  const[name, setName]= React.useState("");
  const[category, setCategory]= React.useState("Passport");
  const[validTo, setValidTo]= React.useState("");
  const[validFrom, setValidFrom]= React.useState("");
  const[file, setFile]= React.useState(null);
  const[docs, setDocs]= React.useState([]);
  const [openPop, setOpen] = React.useState(false);
  const [openPopErr, setOpenErr] = React.useState(false);
  const [msg, setMsg] = React.useState(false);
  React.useEffect(() => {
    getMyDocs();
  }, []);
  const getMyDocs = async () => {
    let documents = await (
      await fetch(`${process.env.REACT_APP_BASE_URL}/document`, {
        method: "GET",
        headers: {
          "x-access-token": localStorage.getItem("token"),
        },
      })
    ).json();
    console.log(documents)
    documents = documents.data;
    setDocs(documents || []);
  }
  const resetFields=()=>{
    setCategory("Passport");
    setName("");
    setValidFrom("");
    setValidTo("");
    setFile(null);
  }
  const uploadWithFormData = async (event) => {

    const url = `${process.env.REACT_APP_BASE_URL}/document/upload`;
    event.preventDefault();
    const formData = new FormData();
    formData.append("file", file);
    formData.append("name", name);
    formData.append("validTo", validTo);
    formData.append("validFrom", validFrom);
    formData.append("type", category);
console.log(formData)
    const result = await (
      await fetch(url, {
        method: "POST",
        body: formData,
        headers: {
          "x-access-token": localStorage.getItem("token"),
        },
      })
    ).json();

    if (result.status === 1) {
      setMsg("Document Added Successfully");
      setOpen(true);
      resetFields();
      getMyDocs();
    } else {
      setMsg("There has been an error");
      resetFields();
      setOpenErr(true);
    }
  };


  const generateLink = async (key) => {
    const jsonPostData = {
      key: key,
    };
    const url = `${process.env.REACT_APP_BASE_URL}/download`;

    const resu = await (
      await fetch(url, {
        method: "PUT",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(jsonPostData),
      })
    ).json();

    window.open(resu.data, "_blank");
  };

  const deleteDoc = async (id) => {
    const url = `${process.env.REACT_APP_BASE_URL}/document/${id}`;
    const result = await (
      await fetch(url, {
        method: "DELETE",
        headers: {
          "x-access-token": localStorage.getItem("token"),
        },
      })
    ).json();

    if (result.status === 1) {
      setMsg("Document Deleted Successfully");
      setOpen(true);
      getMyDocs();
    }
  };
  return (
  
    <div className="viewDownload">
    <Header as ='h1'>My documents</Header>
        <Form>
          <Form.Group widths="equal">
            <Form.Field
              label="Name"
              placeholder="Your name"
              type="text"
              control="input"
              value={name}
              onChange={(event) => setName(event.target.value)}
            />

            <Form.Field label="Select Category" control="select" value={category} onChange={(event) => setCategory(event.target.value)}>
              <option value="Passport">Passport</option>
              <option value="Visa">Visa</option>
              <option value="Photograph">Photograph</option>
              <option value="Driving License">Driving License</option>
            </Form.Field>
            <Form.Field
              label="Valid From"
              control="input"
              type="date"
              value={validFrom}
              onChange={(event) => setValidFrom(event.target.value)}
            ></Form.Field>
            <Form.Field
              label="valid To"
              control="input"
              type="date"
              value={validTo}
              onChange={(event) => setValidTo(event.target.value)}
            ></Form.Field>
             <Form.Field>
                  <label>Document</label>
                  <Input
                    type="file"
                    name="file"
                    id="file-btn"
                    onChange={(event) => setFile(event.target.files[0])}
                    style={{ display: "none" }}
                  />
                  <p className="file">
                    <label for="file-btn">{!file?"Click to select file":file?.name + " Uploaded"} </label>
                  </p>
                </Form.Field>
          </Form.Group>
          
            <button className="same-btn" onClick={(event)=>uploadWithFormData(event)}>UPLOAD</button>
          
        </Form>
        <div className='data_grid'>
        <Table celled>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Name</Table.HeaderCell>
              <Table.HeaderCell>Category</Table.HeaderCell>
              <Table.HeaderCell>Valid From</Table.HeaderCell>
              <Table.HeaderCell>Valid To</Table.HeaderCell>
              <Table.HeaderCell>Action</Table.HeaderCell>


            </Table.Row>
          </Table.Header>

          <Table.Body>
           {docs?.map(ele=> <Table.Row>
              <Table.Cell>
                {ele.name}
              </Table.Cell>
              <Table.Cell>{ele.type}</Table.Cell>
              <Table.Cell>{ele.validFrom}</Table.Cell>
              <Table.Cell>{ele.validTo}</Table.Cell>
              <Table.Cell>
                  <span style={{margin:'0 2rem 0 0rem'}}>
                  <Icon name="eye" onClick={()=>generateLink(ele.key)}/> 
                  </span>

                  <span>
                  <Icon name="delete" onClick={()=>deleteDoc(ele._id)}/>
                  </span>
              </Table.Cell>
            </Table.Row>)}
          </Table.Body>

          
        </Table>
        </div>
        <Updated open={openPop} msg={msg} onClose={() => setOpen(false)} />
      <Updated
        open={openPopErr}
        wrong={openPopErr}
        msg={msg}
        onClose={() => setOpenErr(false)}
      />
    </div>
    
  );
}
