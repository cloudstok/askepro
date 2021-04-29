import React from 'react';
import {Sidebar, Header, Icon, Menu, Segment, Image} from 'semantic-ui-react';
import {Link} from 'react-router-dom';
import '../../Sass/nav.scss';
const SideBar = ({value, active}) => {
return (
    <div className='sidebar'
      as={Menu}
      animation='overlay'
      icon='labeled'
      inverted
      vertical
      visible
      width='thin'
    >
      <Menu.Item as='a' className={value==='dashboard' ? active : ""}>
      <Link to='/admin'><Icon name='th large' /></Link>
      </Menu.Item>
      <Menu.Item as='a' className={value==='history' ? active : ""}>
      <Link to='/history'><Icon name='file alternate outline' /></Link>
      </Menu.Item>
      <Menu.Item as='a' className={value==='clients' ? active : ""}>
      <Link to='/clients'><Icon name='users '/></Link>
      </Menu.Item>
      <Menu.Item as='a' className={value==='appointment' ? active : ""}>
      <Link to='/appointment'> <Icon name='calendar outline' /></Link>
      </Menu.Item>
      <Menu.Item as='a' className={value==='payment' ? active : ""}>
      <Link to='/payments'><Icon name='payment' /></Link>
      </Menu.Item>
      <Menu.Item as='a'  className={value==='help' ? active : ""}>
      <Link to='/'><Icon name='help' /></Link>
      </Menu.Item>
    </div>
    );
}

export default SideBar;