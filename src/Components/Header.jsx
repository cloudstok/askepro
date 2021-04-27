import React, { Component } from "react";
import { Menu, Segment,Button, Container } from "semantic-ui-react";
import { useHistory } from "react-router-dom";
export default class MenuExampleBasic extends Component {
  state = {};

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;

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

            <div className="Btn-Item">
          <button basic color='black' className="same-btn"
            style={{borderRadius:'20px'}}
            
          >
            <strong>LOGIN</strong>
          </button>
             
            </div>
          </Menu.Menu>
          </Container>
        </Menu>

        </header>
        
     </>
    );
  }
}
