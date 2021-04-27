import React, { Component } from "react";
import { Menu, Segment, Dropdown, Button, Container } from "semantic-ui-react";


  const options = [
    { key: "edit", icon: "edit", text: "Edit Post", value: "edit" },
    { key: "delete", icon: "delete", text: "Remove Post", value: "delete" },
    { key: "hide", icon: "hide", text: "Hide Post", value: "hide" },
  ];


  export default class Navbar2 extends Component {
    state = { activeItem: 'home' }
  
    handleItemClick = (e, { name }) => this.setState({ activeItem: name })
  
    render() {
      const { activeItem } = this.state

    

    return (
      <>
        
      <header className="top_header">
     
        <Menu secondary>
        <Container>
        <a href="#"><img src="/assets/images/Epro Logo_Web.png" /></a>
          <Menu.Menu position="right">
           

            <div className="Item"
              name="Home"
              active={activeItem === "Home"}
              onClick={this.handleItemClick}
            >
              Home
            </div>

            <div className="Item"
              name="Service"
              active={activeItem === "Service"}
              onClick={this.handleItemClick}
            >
             Service
            </div>

            <div className="Item"
              name="About"
              active={activeItem === "About"}
              onClick={this.handleItemClick}
            >
            About
            </div>

            <div className="Item"
              name="Contact"
              active={activeItem === "Contact"}
              onClick={this.handleItemClick}
            >
            Contact
            </div>
          </Menu.Menu>

          <Menu.Menu position="right">
          <div className="Btn-Item">
          <button className="same-btn"
            style={{borderRadius:'20px'}}
          >
            <strong>APPLY NOW</strong>
          </button>
          
             
            </div>

            <div style={{marginTop:'1.5rem'}}>
  <Button.Group color='blue'>
    <Button >Save</Button>
    <Dropdown
      className='button icon'
      floating
      options={options}
      trigger={<></>}
    />
  </Button.Group>

  </div>
          </Menu.Menu>
          </Container>
        </Menu>

        </header>
        
     </>
    )
  }
}
  
