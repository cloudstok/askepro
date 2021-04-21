import React from "react";

import { Breadcrumb, Container } from "semantic-ui-react";
const Crumb = () => {
  return (
    <>
      <Container>
        <div className="crumb">
          <Breadcrumb>
            <Breadcrumb.Section link>Home</Breadcrumb.Section>
            <Breadcrumb.Divider />
            <Breadcrumb.Section link>Store</Breadcrumb.Section>
            <Breadcrumb.Divider />
            <Breadcrumb.Section active>Service</Breadcrumb.Section>
          </Breadcrumb>
        </div>
      </Container>
    </>
  );
};

export default Crumb;
