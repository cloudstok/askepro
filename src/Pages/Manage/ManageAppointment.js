import React from 'react';
import { Container, Icon, Pagination, Table, Label } from 'semantic-ui-react';
import BreadCrumbs from '../../Component/Breadcrumb/breadcrumb';
import StatusChip from '../../Component/StatusChip/StatusChip';
import SideBar from '../../Component/Nav/Sidebar';
import './manage.scss';

const ManageAppointments = ({title}) =>{
  const [appointment, setAppointment] = React.useState(null);
    React.useEffect(() => {
        getappointment();
    }, []);

    const getappointment = async () => {
        const appointment = await (await fetch(`${process.env.REACT_APP_BASE_URL}/admin/appointment`, { method: "GET"})).json();
       
        setAppointment(appointment);
    }
    
    const pageClick = async (p) => {
      const appointment = await (await fetch(`${process.env.REACT_APP_BASE_URL}/admin/appointment?page=${p}`, { method: "GET"})).json();
      setAppointment(appointment);
    };
    
    if(!appointment)
    {return (<div></div>)}
        return (
          
          <main className='manage-main'>
            <SideBar value='appointment' active='active'/>
            <div className='table-container'>
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
        <Table.HeaderCell>Appointment Date</Table.HeaderCell>
        <Table.HeaderCell>Actions</Table.HeaderCell>
      </Table.Row>
    </Table.Header>
    <Table.Body>
    {appointment.data&&appointment.data.map((ele) =>  <Table.Row>
        <Table.Cell>{ele.users._id}</Table.Cell>
        <Table.Cell>{ele.users.name}</Table.Cell>
        <Table.Cell>{ele.users.email}</Table.Cell>
        <Table.Cell>{ele.users.phone}</Table.Cell>
        <Table.Cell>{ele.serviceCategory.name}</Table.Cell>
        <Table.Cell>{ele.appointment.appt_date} {ele.appointment.appt_month} {ele.appointment.appt_year}</Table.Cell>
        <Table.Cell className='action'>
         <Icon name='check'/>
         <Icon name='close'/>     
        </Table.Cell>
      </Table.Row>)}
        
    </Table.Body>
 </Table>
</Container>
<div className='pagination-container'>
<label className='page-name'>Showing { appointment.totalPages } of { appointment.currentPage || 1 }</label>
<Pagination
    size='small'
    defaultActivePage={appointment.currentPage}
    firstItem={null}
    lastItem={null}
    prevItem={{ content: <label className='next' onClick={() => pageClick(--appointment.currentPage)}>PREV</label>}}
    nextItem={{ content: <label className='prev' onClick={() => pageClick(++appointment.currentPage)}>NEXT</label>}}
    totalPages={appointment.totalPages}
    onClick={e => pageClick(parseInt(e.target.outerText))}
  />
 </div>

 </div>
 </div>
 </main>
   
 
        )
}

export default ManageAppointments;