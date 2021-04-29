import React from 'react';
import { Container, Icon, Pagination, Table, Label } from 'semantic-ui-react';
import BreadCrumbs from '../../Component/Breadcrumb/breadcrumb';
import StatusChip from '../../Component/StatusChip/StatusChip';
import SideBar from '../../Component/Nav/Sidebar';
import './manage.scss';

const ManageAppointments = ({title}) =>{
        return (
          
          <main className='manage-main'>
            <SideBar value='appointment' active='active'/>
            <div className='history-main'>
            <BreadCrumbs section={[
                   {key:'dash', content:'Dashboard', link:true },
                   {key:'appointment', content:'Manage Appointments', active:true }
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
        <Table.HeaderCell>Service Name</Table.HeaderCell>
        <Table.HeaderCell>Appointment Time</Table.HeaderCell>
        <Table.HeaderCell>Actions</Table.HeaderCell>
      </Table.Row>
    </Table.Header>
    <Table.Body>
      <Table.Row>
        <Table.Cell>BJXCR34</Table.Cell>
        <Table.Cell>Vikas Singh</Table.Cell>
        <Table.Cell>singh.vikas@gmail.com</Table.Cell>
        <Table.Cell>1234567890</Table.Cell>
        <Table.Cell>Emirates Id</Table.Cell>
        <Table.Cell>22 Jun 2020, 12:00</Table.Cell>
        <Table.Cell className='action'>
         <Icon name='check'/>
         <Icon name='close'/>     
        </Table.Cell>
      </Table.Row>
      <Table.Row>
        
      <Table.Cell>BJXCR34</Table.Cell>
        <Table.Cell>Vikas Singh</Table.Cell>
        <Table.Cell>singh.vikas@gmail.com</Table.Cell>
        <Table.Cell>1234567890</Table.Cell>
        <Table.Cell>Emirates Id</Table.Cell>
        <Table.Cell>22 Jun 2020, 12:00</Table.Cell>
        <Table.Cell className='action'>
         <Icon name='check'/>
         <Icon name='close'/>     
        </Table.Cell>
      </Table.Row >
      <Table.Row>
        
      <Table.Cell>BJXCR34</Table.Cell>
        <Table.Cell>Vikas Singh</Table.Cell>
        <Table.Cell>singh.vikas@gmail.com</Table.Cell>
        <Table.Cell>1234567890</Table.Cell>
        <Table.Cell>Emirates Id</Table.Cell>
        <Table.Cell>22 Jun 2020, 12:00</Table.Cell>
        <Table.Cell className='action'>
         <Icon name='check'/>
         <Icon name='close'/>     
        </Table.Cell>
      </Table.Row>
      <Table.Row>
        
      <Table.Cell>BJXCR34</Table.Cell>
        <Table.Cell>Vikas Singh</Table.Cell>
        <Table.Cell>singh.vikas@gmail.com</Table.Cell>
        <Table.Cell>1234567890</Table.Cell>
        <Table.Cell>Emirates Id</Table.Cell>
        <Table.Cell>22 Jun 2020, 12:00</Table.Cell>
        <Table.Cell className='action'>
         <Icon name='check'/>
         <Icon name='close'/>     
        </Table.Cell>
      </Table.Row>
      <Table.Row>
        
      <Table.Cell>BJXCR34</Table.Cell>
        <Table.Cell>Vikas Singh</Table.Cell>
        <Table.Cell>singh.vikas@gmail.com</Table.Cell>
        <Table.Cell>1234567890</Table.Cell>
        <Table.Cell>Emirates Id</Table.Cell>
        <Table.Cell>22 Jun 2020, 12:00</Table.Cell>
        <Table.Cell className='action'>
         <Icon name='check'/>
         <Icon name='close'/>     
        </Table.Cell>
      </Table.Row>
      <Table.Row>
        
      <Table.Cell>BJXCR34</Table.Cell>
        <Table.Cell>Vikas Singh</Table.Cell>
        <Table.Cell>singh.vikas@gmail.com</Table.Cell>
        <Table.Cell>1234567890</Table.Cell>
        <Table.Cell>Emirates Id</Table.Cell>
        <Table.Cell>22 Jun 2020, 12:00</Table.Cell>
        <Table.Cell className='action'>
         <Icon name='check'/>
         <Icon name='close'/>     
        </Table.Cell>
      </Table.Row>
      <Table.Row>
        
      <Table.Cell>BJXCR34</Table.Cell>
        <Table.Cell>Vikas Singh</Table.Cell>
        <Table.Cell>singh.vikas@gmail.com</Table.Cell>
        <Table.Cell>1234567890</Table.Cell>
        <Table.Cell>Emirates Id</Table.Cell>
        <Table.Cell>22 Jun 2020, 12:00</Table.Cell>
        <Table.Cell className='action'>
         <Icon name='check'/>
         <Icon name='close'/>     
        </Table.Cell>
      </Table.Row>
      <Table.Row>
        
      <Table.Cell>BJXCR34</Table.Cell>
        <Table.Cell>Vikas Singh</Table.Cell>
        <Table.Cell>singh.vikas@gmail.com</Table.Cell>
        <Table.Cell>1234567890</Table.Cell>
        <Table.Cell>Emirates Id</Table.Cell>
        <Table.Cell>22 Jun 2020, 12:00</Table.Cell>
        <Table.Cell className='action'>
         <Icon name='check'/>
         <Icon name='close'/>     
        </Table.Cell>
      </Table.Row>
      <Table.Row>
        
      <Table.Cell>BJXCR34</Table.Cell>
        <Table.Cell>Vikas Singh</Table.Cell>
        <Table.Cell>singh.vikas@gmail.com</Table.Cell>
        <Table.Cell>1234567890</Table.Cell>
        <Table.Cell>Emirates Id</Table.Cell>
        <Table.Cell>22 Jun 2020, 12:00</Table.Cell>
        <Table.Cell className='action'>
         <Icon name='check'/>
         <Icon name='close'/>     
        </Table.Cell>
      </Table.Row>
      <Table.Row>
        
      <Table.Cell>BJXCR34</Table.Cell>
        <Table.Cell>Vikas Singh</Table.Cell>
        <Table.Cell>singh.vikas@gmail.com</Table.Cell>
        <Table.Cell>1234567890</Table.Cell>
        <Table.Cell>Emirates Id</Table.Cell>
        <Table.Cell>22 Jun 2020, 12:00</Table.Cell>
        <Table.Cell className='action'>
         <Icon name='check'/>
         <Icon name='close'/>     
        </Table.Cell>
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

export default ManageAppointments;