import React from "react";
import { Container } from "semantic-ui-react";
import BreadCrumbs from "../../Component/Breadcrumb/breadcrumb";

const View_all = () => {
  return (
    <>
      <main>
        <div className="book-section">
          <BreadCrumbs
            section={[
              { key: "home", content: "Home", link: true },
              { key: "apply", content: "Apply Now", active: true },
            ]}
          />

          <div className="details_wrapper">
              <Container>
            <div className="my_details">
              <div className="detail_inner1">
                <h4>Owner Details</h4>
                <p>Owner Name</p>
                <p>Owner Mobile No.</p>
                <p>Owner Email Id</p>
              </div>
              <div className="detail_inner2">
                <h4>deactivate</h4>
                <p>Vikas Sharma</p>
                <p>9868444029</p>
                <p>vikas.sharma@sheelafoam.com</p>
              </div>
            </div>
            <div className="my_details">
              <div className="detail_inner1">
                <h4>Contact Details</h4>
                <p>Landline number</p>
                <p>Address Line 1</p>
                <p>Address Line 2</p>
                <p>City</p>
                <p>State</p>
                <p>Country</p>
                <p>PIN Code</p>
              </div>
              <div className="detail_inner2">
                <h4>deactivate</h4>
                <p>9868444029</p>
                <p>1st Floor, Plot 5</p>
                <p>Kormangla Street</p>
                <p>Bangalore</p>
                <p>Karnataka</p>
                <p>India</p>
                <p>123459</p>
              </div>
            </div>
            </Container>
          </div>
        </div>
      </main>
    </>
  );
};

export default View_all;
