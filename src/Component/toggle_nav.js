import React,{useState} from 'react';
import '../Component/togglenav.scss';
import {Icon, Dropdown} from 'semantic-ui-react';

const ToggleNav = () =>{ 
    return (
     <div className='toggle'>
        <div className='nav-brand'>
        <img src={process.env.PUBLIC_URL+"Assets/Logo/brand.png"} alt='logo'/>
        </div>
        <ul>
            <li>Home</li>
            <li>About</li>
            <li>Service</li>
            <li>Contact</li>
        </ul>
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
    </div>
    );
}

export default ToggleNav;