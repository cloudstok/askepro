import React from 'react';
import { Container, Icon, Pagination, Table, Label } from 'semantic-ui-react';
import BreadCrumbs from '../../Component/Breadcrumb/breadcrumb';
import StatusChip from '../../Component/StatusChip/StatusChip';
import SideBar from '../../Component/Nav/Sidebar';
import './manage.scss';
import { useHistory } from 'react-router';

const ManagePayments = ({ title }) => {
  const history = useHistory();
  if (!localStorage.getItem("token") && !localStorage.getItem("id"))
    history.push("/login");
  const [payment, setpayment] = React.useState(null);
  React.useEffect(() => {
    getpayment();
  }, []);

  const getpayment = async () => {
    const payment = await (await fetch(`${process.env.REACT_APP_BASE_URL}/admin/payment`, { method: "GET" })).json();

    setpayment(payment);
  }
  const pageClick = async (p) => {
    const payment = await (await fetch(`${process.env.REACT_APP_BASE_URL}/admin/payment?page=${p}`, {
      method: "GET", headers: {
        'x-access-token': localStorage.getItem('token'),
      }
    })).json();

    setpayment(payment);
  };
if(!payment){
  return(<></>)
}
console.log(payment)
  return (
    <main className='manage-main'>
      <SideBar value='payment' active='active' />
      <div className='table-container'>
        <BreadCrumbs section={[
          { key: 'dash', content: 'Dashboard', link: true },
          { key: 'payment', content: 'Manage Payment', active: true }
        ]} />
        <div className='manage-container'>
          <h2>{title}</h2>
          <Container fluid>
            <Table striped stackable='tablet'>
              <Table.Header>
                <Table.Row>
                  <Table.HeaderCell>Date</Table.HeaderCell>
                  <Table.HeaderCell>Transaction Id</Table.HeaderCell>
                  <Table.HeaderCell>Service Id</Table.HeaderCell>
                  <Table.HeaderCell>Service name</Table.HeaderCell>
                  <Table.HeaderCell>Client Name</Table.HeaderCell>
                  <Table.HeaderCell>Mode of Payment</Table.HeaderCell>
                  <Table.HeaderCell>Amount(AED)</Table.HeaderCell>
                  <Table.HeaderCell>Status</Table.HeaderCell>
                </Table.Row>
              </Table.Header>
               <Table.Body>
      {payment.data && payment.data.map((ele) => (<Table.Row>
        <Table.Cell>{new Date(ele.transaction.createdAt).toLocaleString()}</Table.Cell>
        <Table.Cell>{ele.transaction._id}</Table.Cell>
        <Table.Cell>{ele.serviceCategory._id}</Table.Cell>
        <Table.Cell>{ele.serviceCategory.name}</Table.Cell>
        <Table.Cell>{ele.name}</Table.Cell>
        <Table.Cell>{ele.transaction.ptype}</Table.Cell>
        <Table.Cell>{ele.transaction.amount}</Table.Cell>
        <Table.Cell><StatusChip value={ele.transaction.status}/></Table.Cell>
      </Table.Row>))}
      </Table.Body>
            </Table>
          </Container>
          <div className='pagination-container'>
          <label className='page-name'>Showing {(payment.currentPage * payment.data.length % 10 === 0 && payment.currentPage * payment.data.length % 100 !== 0? payment.currentPage * payment.data.length : (payment.currentPage - 1) * 10 + payment.data.length)} of  {payment.count}</label>
            <Pagination
              size='small'
              defaultActivePage={payment.currentPage}
              firstItem={null}
              lastItem={null}
              prevItem={{ content: <label className='next'>PREV</label> }}
              nextItem={{ content: <label className='prev'>NEXT</label> }}
              totalPages={payment.totalPages}
              onClick={e => pageClick(parseInt(e.target.outerText))}
            />
          </div>

        </div>
      </div>
    </main>
  )
}

export default ManagePayments;