import React from 'react';
import {Sidebar, Header, Icon, Menu, Segment, Image} from 'semantic-ui-react';
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
        <Icon name='th large' />
      </Menu.Item>
      <Menu.Item as='a' className={value==='history' ? active : ""}>
        <Icon name='file alternate outline' />
      </Menu.Item>
      <Menu.Item as='a' className={value==='clients' ? active : ""}>
        <Icon name='users ' />
      </Menu.Item>
      <Menu.Item as='a' className={value==='appointment' ? active : ""}>
        <Icon name='calendar outline' />
      </Menu.Item>
      <Menu.Item as='a' className={value==='payment' ? active : ""}>
        <Icon name='payment' />
      </Menu.Item>
      <Menu.Item as='a'  className={value==='help' ? active : ""}>
        <Icon name='help' />
      </Menu.Item>
    </div>
    );
}

export default SideBar;