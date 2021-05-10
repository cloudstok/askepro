import React from 'react';
import { Container, Icon, Pagination, Table, Label, Sidebar } from 'semantic-ui-react';
import BreadCrumbs from '../../Component/Breadcrumb/breadcrumb';
import StatusChip from '../../Component/StatusChip/StatusChip';
import SideBar from '../../Component/Nav/Sidebar'
import './manage.scss';

const ManageQuery = ({title}) =>{
    const [query, setquery] = React.useState(null);
    React.useEffect(() => {
        getquery();
    }, []);

    const getquery = async () => {
        const query = await (await fetch(`${process.env.REACT_APP_BASE_URL}/contact`, { method: "GET", headers: {
            'x-access-token': localStorage.getItem('token'),
          } })).json();
       
        setquery(query);
    }
if(!query){
    return(<div/>)
}
        return (
          <main className='manage-main'>
            <SideBar  value='query' active='active'/>
            <div className='table-container'>
            <BreadCrumbs section={[
                   {key:'dash', content:'Dashboard', link:true },
                   {key:'history', content:'Manage Query', active:true }
            ]}/>
            <div className='manage-container'>
            <h2>{title}</h2>
            <Container fluid>
          <Table striped stackable='tablet'>
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell>Date</Table.HeaderCell>
        <Table.HeaderCell>Email</Table.HeaderCell>
        <Table.HeaderCell>Name</Table.HeaderCell>
        <Table.HeaderCell>Query</Table.HeaderCell>
        <Table.HeaderCell>Status</Table.HeaderCell>
      </Table.Row>
    </Table.Header>
    <Table.Body>
    {query.data&&query.data.map((ele) =><Table.Row>
        <Table.Cell>{ele.createdAt}</Table.Cell>
        <Table.Cell>{ele.email}</Table.Cell>
        <Table.Cell>{ele.name}</Table.Cell>
        <Table.Cell>{ele.query}</Table.Cell>
        <Table.Cell>{ele.status}</Table.Cell>
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

export default ManageQuery;