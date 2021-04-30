import {useState} from 'react';
import {BrowserRouter as Router, Link, Switch, Route, useLocation} from 'react-router-dom';
import ApplyStepper from "./Pages/StepPages/Apply_page";
import FillPage from './Pages/StepPages/FillPage';
import './Sass/app.scss';
import UploadDocuments from './Pages/StepPages/upload';
import BookAppointment from './Pages/StepPages/bookappointment';
import Payment from './Pages/StepPages/payment';
import {Nav} from './Component/Nav/Nav';
import ManageNav from '../src/Component/Nav/manageNav';
import Success from './Pages/StepPages/SuccessPage';
import Header from './Component/Main-Component/Header';
import History from './Pages/Manage/history';
import ManageClients from './Pages/Manage/ManageClients';
import ManagePayments from './Pages/Manage/ManagePayment';
import ManageApplication from './Pages/Manage/ManageApplication';
import ManageAppointments from './Pages/Manage/ManageAppointment';
import SideBar from './Component/Nav/Sidebar';
import Home from './Pages/Main/Home';
import ToggleNav from './Component/toggle_nav';
import Service from './Pages/Main/Service';
import About from './Pages/Main/About';
import Contact from './Pages/Main/Contact';
import Company from './Pages/Main/Company';
import Crumb from './Component/Main-Component/Crumb';
import Login from './Component/Main-Component/Login'; 
import Register from './Component/Main-Component/Register'; 
import Fgpasswd from './Component/Main-Component/Fgpasswd'; 
import Reset from './Component/Main-Component/Reset';
import Account from './Pages/Main/Account';
import Accept from './Component/Main-Component/Accept';
import Reject from './Component/Main-Component/Reject';
import Verification from './Component/Main-Component/Verification';
import Admin_dashboard from './Pages/Main/Admin_dashboard';
import View_details from './Pages/Main/View_details';


function App() {
  const [token, setToken] =  useState();

  

  return (
    <>
    <Router>
            <Nav/>
            <Switch>
                <Route exact path='/service'><Service /></Route>
                <Route exact path='/about'><About /></Route>
                <Route exact path='/contact'><Contact /></Route>
                <Route exact path='/company'><Company /></Route>
                <Route exact path='/login'><Login /></Route>
                <Route exact path='/register'><Register /></Route>
                <Route exact path='/fgpasswd'><Fgpasswd /></Route>
                <Route exact path='/reset'><Reset /></Route>
                <Route exact path='/account'><Account /></Route>
                <Route exact path='/reject'><Accept /><Reject /><Verification /></Route>    
                <Route exact path='/admin' component={Admin_dashboard}/>
                <Route exact path='/view' component={View_details}/> 
                <Route exact path='/apply' component={ApplyStepper}/>
                <Route exact path='/fill' component={FillPage}/>
                <Route exact path='/upload' component={UploadDocuments}/>
                <Route exact path='/book' component={BookAppointment}/>
                <Route exact path='/payment' component={Payment}/>
                <Route exact path='/Success' component={Success}/>
                <Route exact path='/history'><History title='History'/></Route>
                <Route exact path='/clients'><ManageClients title='Manage Clients'/></Route>
                <Route exact path='/payments'><ManagePayments title='Manage Payments'/></Route>
                <Route exact path='/application'><ManageApplication title='Manage Applications'/></Route>
                <Route exact path='/appointment'><ManageAppointments title='Manage Appointments'/></Route>
                <Route exact path="/" component={Home} />
          </Switch>
      </Router>      
      </>
  );
}

export default App;
