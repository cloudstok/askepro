import React from 'react';
import { Container, Icon, Pagination, Table, Label, Sidebar } from 'semantic-ui-react';
import BreadCrumbs from '../../Component/Breadcrumb/breadcrumb';
import StatusChip from '../../Component/StatusChip/StatusChip';
import SideBar from '../../Component/Nav/Sidebar';
import './manage.scss';

const Manageclient = ({title}) =>{
  const [client, setClient] = React.useState(null);
    React.useEffect(() => {
        getclient();
    }, []);

    const getclient = async () => {
        const client = await (await fetch(`${process.env.REACT_APP_BASE_URL}/admin/client`, { method: "GET"})).json();
       
        setClient(client);
    }
    if(!client)
    {return (<div></div>)}
        return (
          <main className='manage-main'>
            <SideBar value='client' active='active'/>
            <div className='table-container'>
            <BreadCrumbs section={[
                   {key:'dash', content:'Dashboard', link:true },
                   {key:'client', content:'Manage client', active:true }
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
        <Table.HeaderCell  >Actions</Table.HeaderCell>
      </Table.Row>
    </Table.Header>
    <Table.Body>
    {client.data&&client.data.map((ele) =><Table.Row>
        <Table.Cell>{ele._id}</Table.Cell>
        <Table.Cell>{ele.name}</Table.Cell>
        <Table.Cell>{ele.email}</Table.Cell>
        <Table.Cell>{ele.phone}</Table.Cell>
        <Table.Cell>{ele.createdAt}</Table.Cell>
        <Table.Cell className='view'  ><a href="#">View Details</a></Table.Cell>
      </Table.Row>)}
    
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

export default Manageclient;