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
import Sidebar from './Component/Nav/Sidebar';
import SideBar from './Component/Nav/Sidebar';
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
          <Nav/>
          <Switch>
            <Route exact path="/"><h1>Welcome to AskePro</h1></Route>
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
          </Switch>
        </div>
      </div>
      </Router>      
      </>
  );
}

export default App;
