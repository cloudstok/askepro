import React from "react";

import { Breadcrumb, Container } from "semantic-ui-react";


const sections = [
  { key: 'Home', content: 'Home', link: true },
  { key: 'Store', content: 'Store', link: true },
  { key: 'Shirt', content: 'Sign in', active: true },
]


const Crumb = () => {
  return (
    <>
      <Container>
        <div className="crumb">
        <Breadcrumb icon='right angle' sections={sections} />
        </div>
      </Container>
    </>
  );
};

export default Crumb;
