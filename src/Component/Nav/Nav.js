import userEvent from "@testing-library/user-event";
import React, {useState, useEffect, Component } from "react";
import {Link, useHistory, withRouter} from 'react-router-dom';
import { Button, Menu, Icon, Header, Dropdown } from "semantic-ui-react";
import '../../Sass/nav.scss';
import ToggleNav from "../toggle_nav";
 
export function Nav() {
  const history = useHistory();
  const [open, setOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const token = localStorage.getItem("token")
  const name = localStorage.getItem("name");
   let fullname = name.split(' ');
  let firstname = fullname[0];

  useEffect(() => {
    if (token){
      setIsLoggedIn(true)
    }
    else {
      setIsLoggedIn(false)
    }
   }, [token])
    
  return (
    <>
    <header>
    <div className='logo'>
    <a href="#"><img src={process.env.PUBLIC_URL+"Assets/Logo/brand.png"} alt='logo'/></a>  
    </div>
    { 
      open ? <Icon name='close' onClick={() => setOpen(!open)}/>: <Icon name='bars' onClick={() => setOpen(!open)}/>
    }
    {
      open && <ToggleNav/>
    }
    <nav>
    <div className='nav-brand'>
    <a href="/"> <img src={process.env.PUBLIC_URL+"Assets/Logo/brand.png"} alt='logo'/></a>
    </div>
      <MenuBar />
    {
      isLoggedIn ? (
        <div className="btn-group">
        <Icon name='bell outline'/>
        <div class='dropdown-btn'>
        <Icon name='user outline'/>
        <Dropdown text={firstname}>
        <Dropdown.Menu className='dropdown-menu'>
        <Link to={'/account'}><li className='item-name' style={{color:"#000"}}><Icon name='user outline'/>My Account</li></Link>
        <Link to={'/history'}><li className='item-name' style={{color:"#000"}}><Icon name='history'/>History</li></Link>
        <li className='item-name'><Icon name='history'></Icon>Logout</li>
        </Dropdown.Menu>
        </Dropdown>
        </div>
        </div>
        ): (  
        <div className="action-group">
        <Link to="/login"><button className="btn-login">LOGIN</button></Link>
        <Link to="/register"><button className='btn-apply'>APPLY NOW</button></Link>
          </div>
          )
        } 
        </nav>
        </header>
        </>
        );
      }
    

export default class MenuBar extends Component {
  state = { activeItem: 'home'}

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <div>
      <Menu pointing secondary>
        <Link to='/'> 
        <Menu.Item
            name='home'
            active={activeItem === 'home'}
            onClick={this.handleItemClick}
          /></Link>
         <Link to="/service"><Menu.Item
            name='services'
            active={activeItem === 'services'}
            onClick={this.handleItemClick}
          /></Link>   
          <Link to="/about"><Menu.Item
            name='about'
            active={activeItem === 'about'}
            onClick={this.handleItemClick}
          />
          </Link>
            <Link to="/contact"><Menu.Item
              name='contact'
              active={activeItem === 'contact'}
              onClick={this.handleItemClick}
            /></Link>
        </Menu> 
      </div>
    )
  }
}
