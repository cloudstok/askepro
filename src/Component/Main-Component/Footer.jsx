import React from "react";
import { Grid, Segment, Container, Form } from "semantic-ui-react";
import '../../Sass/Sass-Main/_Footer.scss';


const Footer = () => {
  const url = 'http://localhost:8000/contact/create';

  const [name, setName] = React.useState(null);
  const [email, setEmail] = React.useState(null);
  const [query, setQuery] = React.useState(null);

  const createContact = async (event) => {
    try {

      event.preventDefault();
      const jsonPostData = {
        'name': name,
        'email': email,
        'query': query
      }

      const result = await fetch(url, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(jsonPostData)
      });
      var form = document.getElementsByName('query')[0];
      form.reset();
      const data = await result.json()

      if (data && result.status == 200) {
        alert(data.msg);
      }

    } catch (error) {
      console.log(error)
    }
  };
  return (
    <>
     <div className="reach">
        <Container>
<<<<<<< HEAD
          <h2>Reach Out To Us</h2>
          
=======
          <h2 className="underline-small">Reach Out To Us</h2>
          <div className="underline_img">
            <img src="assets/images/path.png" />
          </div>
>>>>>>> d4ca41b74fff14304be90fc66f430976dd5717d9

          <p>Marina Crown</p>
          <p>King Salman Bin Abdulaziz Al Saud St</p>
          <p>Dubai, United Arab Emirates</p>
          <br />
<<<<<<< HEAD
          <p>care@askepro.ae</p><br />
          <p>+97180073232</p> 
=======
          <p>care@askepro.ae</p>
          <p>+97180073232</p>
>>>>>>> d4ca41b74fff14304be90fc66f430976dd5717d9

          <div className="information" onSubmit={createContact}>
            <Form name="query">
              <Form.Group widths="equal">
<<<<<<< HEAD
                <Form.Input placeholder="Enter your name" />
                <Form.Input placeholder="Enter email address" />
              </Form.Group>
              <Form.TextArea placeholder="Describe your query" />
=======
                <Form.Field>
                  <label>Name</label>
                  <input onChange={(event) => setName(event.target.value)} placeholder="Enter your name" />
                </Form.Field>
                <Form.Field>
                  <label>Email</label>
                  <input onChange={(event) => setEmail(event.target.value)} placeholder=" Enter your email address" />
                </Form.Field>
              </Form.Group>
              <label>Query</label>
              <Form.TextArea onChange={(event) => setQuery(event.target.value)} placeholder="Describe Your Query" />

>>>>>>> d4ca41b74fff14304be90fc66f430976dd5717d9
              <div className="reach-Submit">
                <p>By clicking on 'Submit' you will agree to T&C of AskePro</p>
                <button className="reach-btn bt n-outline-dark" type="submit">
                  <strong> SUBMIT </strong>
                </button>
              </div>
            </Form>
          </div>
        </Container>
      </div>
      <footer className="footer">
        <Container>
          <Grid doubling columns={2}>
            <Grid.Column>
            <div className="footer-part-1">
                <img
                  className="footer_image"
                  src="assets/images/Epro Logo_Web.png"
                />
                <img
                  className="footer_image1"
                  src="assets/images/Image 1@2x.png"
                 
                />
                <img
                  className="footer_image2"
                  src="assets/images/Image 2@2x.png"
         
                />
              </div>
            </Grid.Column>

            <Grid.Column>
              <div className="footer-part-2">
                <p>copyright @ 2020 AskePro</p>
                <div className="bottom-button">
                  <a href="#" style={{ borderLeft: "none" }}>
                    Site Map
                  </a>
                  <a href="#">Legal Notice</a>
                  <a href="#">Data Policy</a>
                  <a href="#">Terms and Conditions</a>
                  <a href="#">Privacy Policy</a>
                </div>
              </div>
            </Grid.Column>
          </Grid>
        </Container>

      </footer>
    </>
  );
};

export default Footer;
