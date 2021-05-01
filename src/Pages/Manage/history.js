import React from 'react';
import { Container, Icon, Pagination, Table, Label } from 'semantic-ui-react';
import BreadCrumbs from '../../Component/Breadcrumb/breadcrumb';
import StatusChip from '../../Component/StatusChip/StatusChip';
import SideBar from '../../Component/Nav/Sidebar';
import './manage.scss';
import { useHistory } from 'react-router';

const History = ({title, key}) =>{
  const history=useHistory();
  if (!localStorage.getItem("token") && !localStorage.getItem("id"))
  history.push("/login");
        return (
          <main className='manage-main'>
            <div className='history-main'>
            <BreadCrumbs section={[
                   {key:'home', content:'Home', link:true },
                   {key:'history', content:'History', active:true }
            ]}/>
            <div className='manage-container'>
            <h2>{title}</h2>
            <Container fluid>
          <Table striped stackable='tablet'>
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell>Date</Table.HeaderCell>
        <Table.HeaderCell>Service Id</Table.HeaderCell>
        <Table.HeaderCell>Service name</Table.HeaderCell>
        <Table.HeaderCell>Transaction Id</Table.HeaderCell>
        <Table.HeaderCell>Status</Table.HeaderCell>
        <Table.HeaderCell>Mode</Table.HeaderCell>
        <Table.HeaderCell textAlign='right'>Amount(AED)</Table.HeaderCell>
        <Table.HeaderCell textAlign='right'>Actions</Table.HeaderCell>
      </Table.Row>
    </Table.Header>
    <Table.Body>
      <Table.Row>
        <Table.Cell>22/01/2021</Table.Cell>
        <Table.Cell>BJXCR34</Table.Cell>
        <Table.Cell>Emirates ID</Table.Cell>
        <Table.Cell>XMBC3457XNT0</Table.Cell>
        <Table.Cell><StatusChip value="Success"/></Table.Cell>
        <Table.Cell>Debit Card</Table.Cell>
        <Table.Cell textAlign='right'>350.00</Table.Cell>
        <Table.Cell className='view' textAlign='right'><a href="#">View Details</a></Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>22/01/2021</Table.Cell>
        <Table.Cell>BJXCR34</Table.Cell>
        <Table.Cell>Emirates ID</Table.Cell>
        <Table.Cell>XMBC3457XNT0</Table.Cell>
        <Table.Cell><StatusChip value="Success"/></Table.Cell>
        <Table.Cell>Debit Card</Table.Cell>
        <Table.Cell textAlign='right'>350.00</Table.Cell>
        <Table.Cell className='view' textAlign='right'><a href="#">View Details</a></Table.Cell>
      </Table.Row >
      <Table.Row>
        <Table.Cell>22/01/2021</Table.Cell>
        <Table.Cell>BJXCR34</Table.Cell>
        <Table.Cell>Emirates ID</Table.Cell>
        <Table.Cell>XMBC3457XNT0</Table.Cell>
        <Table.Cell><StatusChip value="Pending"/></Table.Cell>
        <Table.Cell>Debit Card</Table.Cell>
        <Table.Cell textAlign='right'>350.00</Table.Cell>
        <Table.Cell className='view' textAlign='right'><a href="#">View Details</a></Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>22/01/2021</Table.Cell>
        <Table.Cell>BJXCR34</Table.Cell>
        <Table.Cell>Emirates ID</Table.Cell>
        <Table.Cell>XMBC3457XNT0</Table.Cell>
        <Table.Cell><StatusChip value="In-process"/></Table.Cell>
        <Table.Cell>Debit Card</Table.Cell>
        <Table.Cell textAlign='right'>350.00</Table.Cell>
        <Table.Cell className='view' textAlign='right'><a href="#">View Details</a></Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>22/01/2021</Table.Cell>
        <Table.Cell>BJXCR34</Table.Cell>
        <Table.Cell>Emirates ID</Table.Cell>
        <Table.Cell>XMBC3457XNT0</Table.Cell>
        <Table.Cell><StatusChip value="Success"/></Table.Cell>
        <Table.Cell>Debit Card</Table.Cell>
        <Table.Cell textAlign='right'>350.00</Table.Cell>
        <Table.Cell className='view' textAlign='right'><a href="#">View Details</a></Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>22/01/2021</Table.Cell>
        <Table.Cell>BJXCR34</Table.Cell>
        <Table.Cell>Emirates ID</Table.Cell>
        <Table.Cell>XMBC3457XNT0</Table.Cell>
        <Table.Cell><StatusChip value="Success"/></Table.Cell>
        <Table.Cell>Debit Card</Table.Cell>
        <Table.Cell textAlign='right'>350.00</Table.Cell>
        <Table.Cell className='view' textAlign='right'><a href="#">View Details</a></Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>22/01/2021</Table.Cell>
        <Table.Cell>BJXCR34</Table.Cell>
        <Table.Cell>Emirates ID</Table.Cell>
        <Table.Cell>XMBC3457XNT0</Table.Cell>
        <Table.Cell><StatusChip value="In-process"/></Table.Cell>
        <Table.Cell>Debit Card</Table.Cell>
        <Table.Cell textAlign='right'>350.00</Table.Cell>
        <Table.Cell className='view' textAlign='right'><a href="#">View Details</a></Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>22/01/2021</Table.Cell>
        <Table.Cell>BJXCR34</Table.Cell>
        <Table.Cell>Emirates ID</Table.Cell>
        <Table.Cell>XMBC3457XNT0</Table.Cell>
        <Table.Cell><StatusChip value="Pending"/></Table.Cell>
        <Table.Cell>Debit Card</Table.Cell>
        <Table.Cell textAlign='right'>350.00</Table.Cell>
        <Table.Cell className='view' textAlign='right'><a href="#">View Details</a></Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>22/01/2021</Table.Cell>
        <Table.Cell>BJXCR34</Table.Cell>
        <Table.Cell>Emirates ID</Table.Cell>
        <Table.Cell>XMBC3457XNT0</Table.Cell>
        <Table.Cell><StatusChip value="Success"/></Table.Cell>
        <Table.Cell>Debit Card</Table.Cell>
        <Table.Cell textAlign='right'>350.00</Table.Cell>
        <Table.Cell className='view' textAlign='right'><a href="#">View Details</a></Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>22/01/2021</Table.Cell>
        <Table.Cell>BJXCR34</Table.Cell>
        <Table.Cell>Emirates ID</Table.Cell>
        <Table.Cell>XMBC3457XNT0</Table.Cell>
        <Table.Cell><StatusChip value="Success"/></Table.Cell>
        <Table.Cell>Debit Card</Table.Cell>
        <Table.Cell textAlign='right'>350.00</Table.Cell>
        <Table.Cell className='view' textAlign='right'><a href="#">View Details</a></Table.Cell>
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

export default History;