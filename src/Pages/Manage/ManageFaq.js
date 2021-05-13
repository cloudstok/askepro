import React from "react";
import {
  Container,
  Icon,
  Pagination,
  Table,
  Label,
  Sidebar,
  Grid,
  Form,
  Button,
  Input,
  TextArea,
} from "semantic-ui-react";
import BreadCrumbs from "../../Component/Breadcrumb/breadcrumb";
import StatusChip from "../../Component/StatusChip/StatusChip";
import SideBar from "../../Component/Nav/Sidebar";
import "./manage.scss";
import FAQ_modal from "../../Component/Main-Component/FAQ_modal";

const ManageFaq = ({ title }) => {
  const [faqs, setfaq] = React.useState(null);
  const [faqTitle, setTitle] = React.useState(null);
  const [description, setDescription] = React.useState(null);

  React.useEffect(() => {
    getfaqs();
  }, []);

  const getfaqs = async () => {
    const faq = await (
      await fetch(`${process.env.REACT_APP_BASE_URL}/faqs`, { method: "GET" })
    ).json();

    setfaq(faq);
  };

  const pageClick = async (p) => {
    const faq = await (
      await fetch(`${process.env.REACT_APP_BASE_URL}/faqs?page=${p}`, {
        method: "GET",
      })
    ).json();
    setfaq(faq);
  };

  const submitFaq = async () => {
    const url = `${process.env.REACT_APP_BASE_URL}/faqs`;
    let jsonData = {
      title: faqTitle,
      description: description,
    };
    console.log(jsonData);
    const result = await (
      await fetch(url, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          "x-access-token": localStorage.getItem("token"),
        },
        body: JSON.stringify(jsonData),
      })
    ).json();

    if (result.status === 1) {
      alert(result.msg);
      window.location.reload(false);
    }
  };

  const deleteFaq = async (id) => {
    const url = `${process.env.REACT_APP_BASE_URL}/faqs/${id}`;
    let jsonData = {
      title: faqTitle,
      description: description,
    };
    console.log(jsonData);
    const result = await (
      await fetch(url, {
        method: "DELETE",
        headers: {
          "x-access-token": localStorage.getItem("token"),
        },
      })
    ).json();

    if (result.status === 1) {
      alert(result.msg);
      window.location.reload(false);
    }
  };
  if (!faqs) {
    return <div />;
  }

  return (
    <main className="manage-main">
      <SideBar value="faq" active="active" />
      <div className="table-container">
        <BreadCrumbs
          section={[
            { key: "dash", content: "Dashboard", link: true },
            { key: "history", content: "Manage Faq", active: true },
          ]}
        />
        <div className="manage-container">
            <div className="manage_heading">
            <Grid>
             
                <Grid.Column width={2}>
          <h2>{title}</h2>
          </Grid.Column>
          <Grid.Column floated='right' width={1}>
          <FAQ_modal/>
          </Grid.Column>
       
          </Grid>
          </div>
          <Container fluid>
            <Table striped stackable="tablet">
              <Table.Header>
                <Table.Row>
                  <Table.HeaderCell>Date Created</Table.HeaderCell>
                  <Table.HeaderCell>Question</Table.HeaderCell>
                  <Table.HeaderCell>Answer</Table.HeaderCell>
                  <Table.HeaderCell>Actions</Table.HeaderCell>
                </Table.Row>
              </Table.Header>
              <Table.Body>
                {faqs.data &&
                  faqs.data.map((ele) => (
                    <Table.Row>
                      <Table.Cell>
                        {new Date(ele.createdAt).toLocaleString()}
                      </Table.Cell>                 
                      <Table.Cell>{ele.description}</Table.Cell>
                      <Table.Cell>{ele.description}</Table.Cell>
                      <Table.Cell>
                        {" "}
                        <img
                          src={
                            process.env.PUBLIC_URL + "/Assets/images/edit.png"
                          }
                          className="btn-upload"
                          onClick={() => deleteFaq(ele._id)}
                        />
                        <img
                          src={
                            process.env.PUBLIC_URL + "/Assets/images/trash.png"
                          }
                          style={{ marginLeft: "30px" }}
                          className="btn-upload"
                          onClick={() => deleteFaq(ele._id)}
                        />
                      </Table.Cell>
                    </Table.Row>
                  ))}
              </Table.Body>
            </Table>
          </Container>
          <div className="pagination-container">
            <label className="page-name">
              Showing {faqs.totalPages} of {faqs.currentPage}
            </label>
            <Pagination
              size="small"
              defaultActivePage={faqs.currentPage}
              firstItem={null}
              lastItem={null}
              prevItem={{
                content: (
                  <label
                    className="next"
                    onClick={() => pageClick(--faqs.currentPage)}
                  >
                    PREV
                  </label>
                ),
              }}
              nextItem={{
                content: (
                  <label
                    className="prev"
                    onClick={() => pageClick(++faqs.currentPage)}
                  >
                    NEXT
                  </label>
                ),
              }}
              totalPages={faqs.totalPages}
              onClick={(e) => pageClick(parseInt(e.target.outerText))}
            />
          </div>
        </div>
      </div>
    </main>
  );
};

export default ManageFaq;
