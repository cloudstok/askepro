import React, {useState, useEffect, Component } from "react";
import { Button, Menu, Icon, Header, Dropdown } from "semantic-ui-react";
import '../../Sass/nav.scss';

const options = [
  { text: "Wiiliam", value: "William" },
];  
export function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <header>
      <div className='logo'>
        <img src={process.env.PUBLIC_URL+"Assets/Logo/brand.png"} alt='logo'/>
        </div>
      <Icon name='bars' onClick={() => setOpen(!open)}/>
        <nav>
        <div className='nav-brand'>
        <img src={process.env.PUBLIC_URL+"Assets/Logo/brand.png"} alt='logo'/>
        </div>
        <Icon name='close' onClick={()=>setOpen(!open)}/>
          <div>
          <MenuBar/>
          </div>
          <div className="btn-group">
            <Icon name='bell outline'/>
            <div class='dropdown-btn'>
              <Icon name='user outline'/>
                <Dropdown text='William'>
                  <Dropdown.Menu className='dropdown-menu'>
                  <li className='item-name'><Icon name='user outline'/>My Account</li>
                  <li className='item-name'><Icon name='history'/>History</li>
                  <li className='item-name'><Icon name='history'></Icon>Logout</li>
                </Dropdown.Menu>
                </Dropdown>
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
