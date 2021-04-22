import React, { Component } from "react";
import { Button, Menu, Icon, Header, Dropdown } from "semantic-ui-react";
import '../Nav/nav.scss';

const options = [
  { text: "Wiiliam", value: "William" },
];  

export function Nav() {
  return (
    <>
      <header>
        <nav>
          <div className='nav-brand'>
        <img src={process.env.PUBLIC_URL+"Assets/Logo/brand.png"} alt='logo'/>
          </div>
          <div>
          <MenuBar/>
          </div>
          <div className="btn-group">
            <Icon name='bell outline'/>
            <div class='dropdown-btn'>
              <Icon name='user outline'/>
                <Dropdown
                  inline
                  options={options}
                  defaultValue={options[0].value}
                />
            </div>  
          </div>
        </nav>
      </header>
    </>
  );
}



export default class MenuBar extends Component {
  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <div>
        <Menu pointing secondary>
          <Menu.Item
            name='home'
            active={activeItem === 'home'}
            onClick={this.handleItemClick}
          />
           <Menu.Item
            name='services'
            active={activeItem === 'services'}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            name='about'
            active={activeItem === 'about'}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            name='contact'
            active={activeItem === 'contact'}
            onClick={this.handleItemClick}
          />
        </Menu>
        </div>
    )
  }
}
