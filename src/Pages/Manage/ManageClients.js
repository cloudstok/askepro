import React from 'react';
import { Container, Icon, Pagination, Table, Label, Sidebar } from 'semantic-ui-react';
import BreadCrumbs from '../../Component/Breadcrumb/breadcrumb';
import StatusChip from '../../Component/StatusChip/StatusChip';
import SideBar from '../../Component/Nav/Sidebar';
import './manage.scss';

const ManageClients = ({title}) =>{
        return (
          <main className='manage-main'>
            <SideBar value='clients' active='active'/>
            <div className='table-container'>
            <BreadCrumbs section={[
                   {key:'dash', content:'Dashboard', link:true },
                   {key:'client', content:'Manage Clients', active:true }
            ]}/>
            <div className='manage-container'>
            <h2>{title}</h2>
            <Container fluid>
            <Table striped stackable='tablet'>
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell>Client Id</Table.HeaderCell>
        <Table.HeaderCell>Client Name</Table.HeaderCell>
        <Table.HeaderCell>Email Id</Table.HeaderCell>
        <Table.HeaderCell>Phone No.</Table.HeaderCell>
        <Table.HeaderCell>Created on</Table.HeaderCell>
        <Table.HeaderCell>Status</Table.HeaderCell>
        <Table.HeaderCell  >Actions</Table.HeaderCell>
      </Table.Row>
    </Table.Header>
    <Table.Body>
      <Table.Row>
        <Table.Cell>BJXCR34</Table.Cell>
        <Table.Cell>Vikas Singh</Table.Cell>
        <Table.Cell>singh.vikas@gmail.com</Table.Cell>
        <Table.Cell>1234567890</Table.Cell>
        <Table.Cell>22/01/2021</Table.Cell>
        <Table.Cell><StatusChip value="Success"/></Table.Cell>
        <Table.Cell className='view'  ><a href="#">View Details</a></Table.Cell>
      </Table.Row>
      <Table.Row>
      <Table.Cell>BJXCR34</Table.Cell>
        <Table.Cell>Vikas Singh</Table.Cell>
        <Table.Cell>singh.vikas@gmail.com</Table.Cell>
        <Table.Cell>1234567890</Table.Cell>
        <Table.Cell>22/01/2021</Table.Cell>
        <Table.Cell><StatusChip value="Success"/></Table.Cell>
        <Table.Cell className='view'  ><a href="#">View Details</a></Table.Cell>
      </Table.Row >
      <Table.Row>
        <Table.Cell>BJXCR34</Table.Cell>
        <Table.Cell>Vikas Singh</Table.Cell>
        <Table.Cell>singh.vikas@gmail.com</Table.Cell>
        <Table.Cell>1234567890</Table.Cell>
        <Table.Cell>22/01/2021</Table.Cell>
        <Table.Cell><StatusChip value="Pending"/></Table.Cell>
        <Table.Cell className='view'  ><a href="#">View Details</a></Table.Cell>
      </Table.Row>
      <Table.Row>
      <Table.Cell>BJXCR34</Table.Cell>
        <Table.Cell>Vikas Singh</Table.Cell>
        <Table.Cell>singh.vikas@gmail.com</Table.Cell>
        <Table.Cell>1234567890</Table.Cell>
        <Table.Cell>22/01/2021</Table.Cell>
        <Table.Cell><StatusChip value="In-process"/></Table.Cell>
        <Table.Cell className='view'  ><a href="#">View Details</a></Table.Cell>
      </Table.Row>
      <Table.Row>
      <Table.Cell>BJXCR34</Table.Cell>
        <Table.Cell>Vikas Singh</Table.Cell>
        <Table.Cell>singh.vikas@gmail.com</Table.Cell>
        <Table.Cell>1234567890</Table.Cell>
        <Table.Cell>22/01/2021</Table.Cell>
        <Table.Cell><StatusChip value="Success"/></Table.Cell>
        <Table.Cell className='view'  ><a href="#">View Details</a></Table.Cell>
      </Table.Row>
      <Table.Row>
      <Table.Cell>BJXCR34</Table.Cell>
        <Table.Cell>Vikas Singh</Table.Cell>
        <Table.Cell>singh.vikas@gmail.com</Table.Cell>
        <Table.Cell>1234567890</Table.Cell>
        <Table.Cell>22/01/2021</Table.Cell>
        <Table.Cell><StatusChip value="Success"/></Table.Cell>
        <Table.Cell className='view'  ><a href="#">View Details</a></Table.Cell>
      </Table.Row>
      <Table.Row>
      <Table.Cell>BJXCR34</Table.Cell>
        <Table.Cell>Vikas Singh</Table.Cell>
        <Table.Cell>singh.vikas@gmail.com</Table.Cell>
        <Table.Cell>1234567890</Table.Cell>
        <Table.Cell>22/01/2021</Table.Cell>
        <Table.Cell><StatusChip value="In-process"/></Table.Cell>
        <Table.Cell className='view'  ><a href="#">View Details</a></Table.Cell>
      </Table.Row>
      <Table.Row>
          <Table.Cell>BJXCR34</Table.Cell>
        <Table.Cell>Vikas Singh</Table.Cell>
        <Table.Cell>singh.vikas@gmail.com</Table.Cell>
        <Table.Cell>1234567890</Table.Cell>
        <Table.Cell>22/01/2021</Table.Cell>
        <Table.Cell><StatusChip value="Pending"/></Table.Cell>
        <Table.Cell className='view'  ><a href="#">View Details</a></Table.Cell>
      </Table.Row>
      <Table.Row><Table.Cell>BJXCR34</Table.Cell>
        <Table.Cell>Vikas Singh</Table.Cell>
        <Table.Cell>singh.vikas@gmail.com</Table.Cell>
        <Table.Cell>1234567890</Table.Cell>
        <Table.Cell>22/01/2021</Table.Cell>
        <Table.Cell><StatusChip value="Success"/></Table.Cell>
        <Table.Cell className='view'  ><a href="#">View Details</a></Table.Cell>
      </Table.Row>
      <Table.Row>
      <Table.Cell>BJXCR34</Table.Cell>
        <Table.Cell>Vikas Singh</Table.Cell>
        <Table.Cell>singh.vikas@gmail.com</Table.Cell>
        <Table.Cell>1234567890</Table.Cell>
        <Table.Cell>22/01/2021</Table.Cell>
        <Table.Cell><StatusChip value="Success"/></Table.Cell>
        <Table.Cell className='view'  ><a href="#">View Details</a></Table.Cell>
      </Table.Row>
    </Table.Body>
 </Table>
</Container>
<div className='pagination-container'>
<label className='page-name'>Showing 9 of 5</label>
<Pagination
    size='small'
    defaultActivePage={1}
    firstItem={null}
    lastItem={null}
    prevItem={{ content: <label className='next'>NEXT</label>}}
    nextItem={{ content: <label className='prev'>PREV</label>}}
    totalPages={5}
  />
 </div>

 </div>
 </div>
 </main>
        )
}

export default ManageClients;