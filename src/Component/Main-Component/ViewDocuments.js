import React from "react";
import { Button,Menu, Header, Table, Icon, Container, Form, Grid } from "semantic-ui-react";
import './document.scss';
export default function ViewDocuments() {
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
            />

            <Form.Field label="Select Category" control="select">
              <option value="male">Male</option>
              <option value="female">Female</option>
            </Form.Field>
            <Form.Field
              label="Valid From"
              control="input"
              type="date"
            ></Form.Field>
            <Form.Field
              label="valid To"
              control="input"
              type="date"
            ></Form.Field>
          </Form.Group>
          
            <button className="same-btn">UPLOAD</button>
          
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
            <Table.Row>
              <Table.Cell>
                Cell
              </Table.Cell>
              <Table.Cell>Cell</Table.Cell>
              <Table.Cell>Cell</Table.Cell>
              <Table.Cell>Cell</Table.Cell>
              <Table.Cell>
                  <span>
                  <Icon name="eye"/> 
                  

                  </span>
                  <span>
                  <Icon name="delete"/>
                  </span>
              </Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>Cell</Table.Cell>
              <Table.Cell>Cell</Table.Cell>
              <Table.Cell>Cell</Table.Cell>
              <Table.Cell>Cell</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>Cell</Table.Cell>
              <Table.Cell>Cell</Table.Cell>
              <Table.Cell>Cell</Table.Cell>
              <Table.Cell>Cell</Table.Cell>
            </Table.Row>
          </Table.Body>

          
        </Table>
        </div>
      
    </div>
    
  );
}
