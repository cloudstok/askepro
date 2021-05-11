import React from 'react';
import { Container, Icon, Pagination, Table, Label } from 'semantic-ui-react';
import BreadCrumbs from '../../Component/Breadcrumb/breadcrumb';
import StatusChip from '../../Component/StatusChip/StatusChip';
import './manage.scss';
import { useHistory } from 'react-router';

const History = ({ title, key }) => {
  const history = useHistory();  const [application, setApplication] = React.useState(null);

  React.useEffect(() => { getApplication() },[]);
  let id = localStorage.getItem('id');
  const getApplication = async () => {
    if (!localStorage.getItem("token") && !localStorage.getItem("id")) { history.push("/login"); }
    else {
      let application = await (
        await fetch(
          `${process.env.REACT_APP_BASE_URL}/service/application/${id}`,
          {
            method: "GET"
          })).json();

      setApplication(application || []);
    }
  }
  if (!application) {
    return (<div></div>);
  }
  
  return (
    <main className='manage-main'>
      <div className='history-main'>
        <BreadCrumbs section={[
          { key: 'home', content: 'Home', link: true },
          { key: 'history', content: 'History', active: true }
        ]} />
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
                </Table.Row>
                {application.data && application.data.map((ele) => <Table.Row>
                  <Table.Cell>{new Date(ele.createdAt).toLocaleString()}</Table.Cell>
                  <Table.Cell>{ele.serviceCategory.scode}</Table.Cell>
                  <Table.Cell>{ele.serviceCategory.name}</Table.Cell>
                  <Table.Cell>XMBC3457XNT0</Table.Cell>
                  <Table.Cell><StatusChip value={ele.status} /></Table.Cell>
                  <Table.Cell>Debit Card</Table.Cell>
                  <Table.Cell textAlign='right'>350.00</Table.Cell>
                  <Table.Cell className='view' textAlign='right' onClick={() => history.push(`/view/${ele._id}`)}>View Details</Table.Cell>
                </Table.Row>)}
              </Table.Body>
            </Table>
          </Container>
          <div className='pagination-container'>
            <label className='page-name'>Showing {application.data.length} of {application.data.length}</label>
            <Pagination
              size='small'
              defaultActivePage={1}
              firstItem={null}
              lastItem={null}
              prevItem={{ content: <label className='next'>NEXT</label> }}
              nextItem={{ content: <label className='prev'>PREV</label> }}
              totalPages={5}
            />
          </div>

        </div>
      </div>
    </main>
  )
}

export default History;