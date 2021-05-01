import userEvent from "@testing-library/user-event";
import React, { useState, useEffect, Component } from "react";
import { Link, useHistory, withRouter } from 'react-router-dom';
import { Button, Menu, Icon, Header, Dropdown } from "semantic-ui-react";
import '../../Sass/nav.scss';
import ToggleNav from "../toggle_nav";

export function Nav() {
  const history = useHistory();
  const [open, setOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const token = localStorage.getItem("token")
  const [name, setName]= useState(false);
  let fullname; 

useEffect(() => {
    if (token) {
       let name=localStorage.getItem("name");
      fullname = name.split(' ');
      if (fullname.length > 1){
        setName(fullname[0])
       }
       else{
         setName(name);  
      }
      setIsLoggedIn(true);
    }
    else {
      setIsLoggedIn(false)
    }
  }, [token]);

  const handleClick = () => {
    localStorage.clear();
    alert("You have been logged out");
    history.push("/");
    window.location.reload(false);
  }
console.log(name);
  return (
    <>
      <header>
        <div className='logo'>
          <a href="#"><img src={process.env.PUBLIC_URL + "/Assets/Logo/brand.png"} alt='logo' /></a>
        </div>
        {
          open ? <Icon name='close' onClick={() => setOpen(!open)} /> : <Icon name='bars' onClick={() => setOpen(!open)} />
        }
        {
          open && <ToggleNav />
        }
        <nav>
          <div className='nav-brand'>
            <a href="/"> <img src={process.env.PUBLIC_URL + "/Assets/Logo/brand.png"} alt='logo' /></a>
          </div>
          <MenuBar />
          {
          isLoggedIn ?
            <div className="btn-group">
                <Icon name='bell outline' />
                <div class='dropdown-btn'>
                  <Icon name='user outline' />
                  <Dropdown text={name}>
                    <Dropdown.Menu className='dropdown-menu'>
                      <Link to={'/account'}><li className='item-name' style={{ color: "#000" }}><Icon name='user outline' />My Account</li></Link>
                      <Link to={'/history'}><li className='item-name' style={{ color: "#000" }}><Icon name='history' />History</li></Link>
                      <li className='item-name' onClick={handleClick}><Icon name='history'></Icon>Logout</li>
                    </Dropdown.Menu>
                  </Dropdown>
                </div>
              </div>
              :
              <div className="action-group">
                <Link to="/login"><button className="btn-login">LOGIN</button></Link>
                <Link to="/apply"><button className='btn-apply'>APPLY NOW</button></Link>
              </div>
        }
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
