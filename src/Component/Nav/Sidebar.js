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
      <Menu.Item as='a'  className={value==='dashboard' ? active : ""}>
      <Link to='/admin'><Icon name='th large' /> </Link>
      </Menu.Item>
      <Menu.Item as='a' className={value==='application' ? active : ""}>
      <Link to='/admin/application'><Icon name='file alternate outline' /></Link>
      </Menu.Item>
      <Menu.Item as='a' className={value==='clients' ? active : ""}>
      <Link to='/admin/clients'><Icon name='users '/></Link>
      </Menu.Item>
      <Menu.Item as='a' className={value==='appointment' ? active : ""}>
      <Link to='/admin/appointment'> <Icon name='calendar outline' /></Link>
      </Menu.Item>
      <Menu.Item as='a' className={value==='payment' ? active : ""}>
      <Link to='/admin/payments'><Icon name='payment' /></Link>
      </Menu.Item>
      <Menu.Item as='a'  className={value==='faq' ? active : ""}>
      <Link to='/admin/faq'><Icon name='tasks' /></Link>
      </Menu.Item>
      <Menu.Item as='a'  className={value==='query' ? active : ""}>
      <Link to='/admin/query'><Icon name='envelope' /></Link>
      </Menu.Item>
    </div>
    );
}

export default SideBar;