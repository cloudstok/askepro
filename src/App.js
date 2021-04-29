import {useState} from 'react';
import {BrowserRouter as Router, Link, Switch, Route, useLocation} from 'react-router-dom';
import ApplyStepper from "./Pages/StepPages/Apply_page";
import FillPage from './Pages/StepPages/FillPage';
import ButtonBar from '././Component/ButtonBar/buttonbar';
import DataCard from '././Component/Card/card'
import './Sass/app.scss';
import UploadDocuments from './Pages/StepPages/upload';
import BookAppointment from './Pages/StepPages/bookappointment';
import Payment from './Pages/StepPages/payment';
import {Nav} from './Component/Nav/Nav';
import {ManageNav} from '../src/Component/Nav/manageNav';
import Success from './Pages/StepPages/SuccessPage';
import History from './Pages/Manage/history';
import ManageClients from './Pages/Manage/ManageClients';
import ManagePayments from './Pages/Manage/ManagePayment';
import ManageApplication from './Pages/Manage/ManageApplication';
import ManageAppointments from './Pages/Manage/ManageAppointment';
import SideBar from './Component/Nav/Sidebar';
import Header from './Component/Main-Component/Header';
import Home from './Pages/Main/Home';
import Visa from './Component/Main-Component/Visa';
import Notification from './Component/Main-Component/Notification';
import Apply from './Component/Main-Component/Apply';
import Footer from './Component/Main-Component/Footer';
import ToggleNav from './Component/toggle_nav';
import Service from './Pages/Main/Service';
import Accordion from './Component/Main-Component/Accordion';
import About from './Pages/Main/About';
import Contact from './Pages/Main/Contact';
import Company from './Pages/Main/Company';
import Crumb from './Component/Main-Component/Crumb';
import Login1 from './Component/Main-Component/Login'; 
import Login2 from './Component/Main-Component/Register'; 
import Login3 from './Component/Main-Component/Fgpasswd'; 
import Reset from './Component/Main-Component/Reset';
import Account from './Pages/Main/Account';
import Accept from './Component/Main-Component/Accept';
import Reject from './Component/Main-Component/Reject';
import Verification from './Component/Main-Component/Verification';
import Admin_dashboard from './Pages/Main/Admin_dashboard';
import View_details from './Pages/Main/View_details';
import BreadCrumbs from './Component/Breadcrumb/breadcrumb';




//const PATHS_FOR_NAV_1 = {
  //"/": null,
 // "/apply": null,
//}
function App() {

  //const pathname = useLocation();
  return (
    <>
    <Router>
      <div className='main'>
        <div className='wrapper'>
         
          <Switch>
         
            <Route exact path="/">
                <Home />
                <Visa />
                <Apply />
                <Footer />
                 <Notification />
            </Route>
            <Route exact path='/service'>  
                <Crumb />
                <Service />        
                <Visa />
                <Accordion />
                <Footer />
             </Route>
                <Route exact path='/about'>  
                    <Crumb />
                    <About />
                    <Footer />
                </Route>
                <Route exact path='/contact'>  
                    <Crumb />
                    <Contact />
                    <Footer />
                </Route>
                <Route exact path='/company'>  
                    <Company />
                    <Crumb />
                    <Footer />
                </Route>
                <Route exact path='/login1'>  
                  <Login1 />
                </Route>
                <Route exact path='/login2'>  
                  <Login2 />
                </Route>
                <Route exact path='/login3'>  
                  <Login3 />
                </Route>
                <Route exact path='/reset'>  
                  <Reset />
                </Route>
                <Route exact path='/account'>  
                  <Account />
                </Route>
                <Route exact path='/reject'>  
                  <Accept />
                  <Reject />
                  <Verification />
                </Route>
                
                <Route exact path='/admin'>  
                <Admin_dashboard />
                </Route>
                <Route exact path='/view'>  
                <Crumb />
                <View_details />
                </Route>
                
            <Route exact path='/apply'><ApplyStepper/></Route>
            <Route exact path='/fill'><FillPage/></Route>
            <Route exact path='/upload'><UploadDocuments/></Route>
            <Route exact path='/book'><BookAppointment/></Route>
            <Route exact path='/payment'><Payment/></Route>
            <Route exact path='/Managenav'><ManageNav/></Route>
            <Route exact path='/Success'><Success/></Route>
            <Route exact path='/sidebar'><SideBar/></Route>
            <Route exact path='/history'><History title='History'/></Route>
            <Route exact path='/clients'><ManageClients title='Manage Clients'/></Route>
            <Route exact path='/payments'><ManagePayments title='Manage Payments'/></Route>
            <Route exact path='/application'><ManageApplication title='Manage Applications'/></Route>
            <Route exact path='/appointment'><ManageAppointments title='Manage Appointments'/></Route>
            <Route exact path='/toggle'><ToggleNav/></Route>
          </Switch>
        </div>
      </div>
      </Router>      
      </>
  );
}

export default App;
