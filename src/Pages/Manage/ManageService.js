import React from 'react';
import { Container, Icon, Pagination, Table, Label, Grid, Sidebar } from 'semantic-ui-react';
import BreadCrumbs from '../../Component/Breadcrumb/breadcrumb';
import StatusChip from '../../Component/StatusChip/StatusChip';
import SideBar from '../../Component/Nav/Sidebar'
import './manage.scss';
import Service_modal from '../../Component/Main-Component/Add_service_modal';

const ManageService = ({ title }) => {



  const [service, setservice] = React.useState(null);
  React.useEffect(() => {
    getservice();
  }, []);

  const getservice = async () => {
    const service = await (await fetch(`${process.env.REACT_APP_BASE_URL}/admin/services`, { method: "GET" })).json();

    setservice(service);
  }
  const deleteService = async (id) => {
    const url = `${process.env.REACT_APP_BASE_URL}/admin/services/${id}`;
    const result = await (
      await fetch(url, {
        method: "DELETE",
      })
    ).json();

    if (result.status === 1) {
      alert(result.msg);
      window.location.reload(false);
    }
  };
  const pageClick = async (p) => {
    const service = await (await fetch(`${process.env.REACT_APP_BASE_URL}/admin/services?page=${p}`, { method: "GET" })).json();

    setservice(service);
  };

  if (!service) { return (<div></div>) }
  return (

    <main className='manage-main'>
      <SideBar value='service' active='active' />
      <div className='table-container'>
        <BreadCrumbs section={[
          { key: 'dash', content: 'Dashboard', link: true },
          { key: 'history', content: 'Manage service', active: true }
        ]} />
        <div className='manage-container'>
          <div className="manage_heading">
            <Grid>

              <Grid.Column width={2}>
                <h2>{title}</h2>
              </Grid.Column>
              <Grid.Column floated='right' width={1}>
                <Service_modal />
              </Grid.Column>

            </Grid>
          </div>
          <Container fluid>
            <Table striped stackable='tablet'>
              <Table.Header>
                <Table.Row>
                  <Table.HeaderCell>Date Created</Table.HeaderCell>
                  <Table.HeaderCell>Service Id</Table.HeaderCell>
                  <Table.HeaderCell>Service name</Table.HeaderCell>
                  <Table.HeaderCell>Total Fees</Table.HeaderCell>
                  <Table.HeaderCell>Processing Time</Table.HeaderCell>
                  <Table.HeaderCell>Stay Period</Table.HeaderCell>
                  <Table.HeaderCell >Validity</Table.HeaderCell>
                  <Table.HeaderCell>Actions</Table.HeaderCell>
                </Table.Row>
              </Table.Header>
              <Table.Body>
                {service.data && service.data.map((ele) => <Table.Row>
                  <Table.Cell>{new Date(ele.createdAt).toLocaleString()}</Table.Cell>
                  <Table.Cell>{ele.scode}</Table.Cell>
                  <Table.Cell>{ele.name}</Table.Cell>
                  <Table.Cell>{ele.serviceDetail.price}</Table.Cell>
                  <Table.Cell>{ele.serviceDetail.processT} Days</Table.Cell>
                  <Table.Cell>{ele.serviceDetail.stayPeriod} Days</Table.Cell>
                  <Table.Cell>{ele.serviceDetail.validity} Days </Table.Cell>
                  <Table.Cell>
                    <img
                      src={
                        process.env.PUBLIC_URL + "/Assets/images/edit.png"
                      } className="btn-upload" />
                    <img
                      src={
                        process.env.PUBLIC_URL + "/Assets/images/trash.png"
                      }
                      style={{ marginLeft: "30px" }}
                      className="btn-upload"
                      onClick={() => deleteService(ele._id)}
                    />
                  </Table.Cell>
                </Table.Row>)}

              </Table.Body>
            </Table>
          </Container>
          <div className='pagination-container'>
            <label className='page-name'>Showing{service.currentPage}  of {service.totalPages}</label>
            <Pagination
              size='small'
              defaultActivePage={service.currentPage}
              firstItem={null}
              lastItem={null}
              prevItem={{ content: <label className='next' onClick={() => pageClick(--service.currentPage)}>PREV</label> }}
              nextItem={{ content: <label className='prev' onClick={() => pageClick(++service.currentPage)}>NEXT</label> }}
              totalPages={service.totalPages}
              onClick={e => pageClick(parseInt(e.target.outerText))}
            />
          </div>
        </div>
      </div>
    </main>
  )

  // const pageClick = async (p) => {
  //   const service = await (await fetch(`${process.env.REACT_APP_BASE_URL}/admin/service?page=${p}`, { method: "GET" })).json();

  //   setservice(service);
  // };

  // if (!service) { return (<div></div>) }
  // return (

  //   <main className='manage-main'>
  //     <SideBar value='service' active='active' />
  //     <div className='table-container'>
  //       <BreadCrumbs section={[
  //         { key: 'dash', content: 'Dashboard', link: true },
  //         { key: 'history', content: 'Manage service', active: true }
  //       ]} />
  //       <div className='manage-container'>
  //         <div className="manage_heading">
  //           <Grid>

  //             <Grid.Column width={2}>
  //               <h2>{title}</h2>
  //             </Grid.Column>
  //             <Grid.Column floated='right' width={1}>
  //               <Service_modal />
  //             </Grid.Column>

  //           </Grid>
  //         </div>
  //         <Container fluid>
  //           <Table striped stackable='tablet'>
  //             <Table.Header>
  //               <Table.Row>
  //                 <Table.HeaderCell>Date Created</Table.HeaderCell>
  //                 <Table.HeaderCell>Service Id</Table.HeaderCell>
  //                 <Table.HeaderCell>Service name</Table.HeaderCell>
  //                 <Table.HeaderCell>Total Fees</Table.HeaderCell>
  //                 <Table.HeaderCell>Processing Time</Table.HeaderCell>
  //                 <Table.HeaderCell>Stay Period</Table.HeaderCell>
  //                 <Table.HeaderCell >Validity</Table.HeaderCell>
  //                 <Table.HeaderCell>Actions</Table.HeaderCell>
  //               </Table.Row>
  //             </Table.Header>
  //             <Table.Body>
  //               {service.data && service.data.map((ele) => <Table.Row>
  //                 <Table.Cell>{new Date(ele.createdAt).toLocaleString()}</Table.Cell>
  //                 <Table.Cell>{ele.serviceCategory.name}</Table.Cell>
  //                 <Table.Cell>{ele.serviceCategory.scode}</Table.Cell>
  //                 <Table.Cell>XMBC3457XNT0</Table.Cell>
  //                 <Table.Cell><StatusChip value="Success" /></Table.Cell>
  //                 <Table.Cell>Debit Card</Table.Cell>
  //                 <Table.Cell>350.00</Table.Cell>
  //                 <Table.Cell>View Details</Table.Cell>
  //               </Table.Row>)}

  //             </Table.Body>
  //           </Table>
  //         </Container>
  //         <div className='pagination-container'>
  //           <label className='page-name'>Showing {service.totalPages} of {service.currentPage}</label>
  //           <Pagination
  //             size='small'
  //             defaultActivePage={service.currentPage}
  //             firstItem={null}
  //             lastItem={null}
  //             prevItem={{ content: <label className='next' onClick={() => pageClick(--service.currentPage)}>PREV</label> }}
  //             nextItem={{ content: <label className='prev' onClick={() => pageClick(++service.currentPage)}>NEXT</label> }}
  //             totalPages={service.totalPages}
  //             onClick={e => pageClick(parseInt(e.target.outerText))}
  //           />
  //         </div>
  //       </div>
  //     </div>
  //   </main>
  // )
}

export default ManageService;