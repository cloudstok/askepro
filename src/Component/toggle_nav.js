import React,{useState, useEffect} from 'react';
import {Link, useHistory} from 'react-router-dom';
import '../Component/togglenav.scss';
import {Icon, Dropdown, Menu} from 'semantic-ui-react';
import MenuBar from './Nav/Nav';

const ToggleNav = () =>{ 
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
     <div className='toggle'>
        <div className='nav-brand'>
        <img src={process.env.PUBLIC_URL+"/Assets/Logo/brand.png"} alt='logo'/>
        </div>
        <MenuBar/>
        {
          isLoggedIn ? (
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
            ) : (
              <div className="action-group">
                <Link to="/login"><button className="btn-login">LOGIN</button></Link>
                <Link to="/register"><button className='btn-apply'>APPLY NOW</button></Link>
              </div>
            )
          }
    </div>
    );
}

export default ToggleNav;