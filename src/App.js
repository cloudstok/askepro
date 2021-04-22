import {BrowserRouter as Router, Link, Switch, Route} from 'react-router-dom';
import ApplyStepper from "./Pages/ApplyPage/Apply_page";
import FillStepper from './Pages/fillStepper/fillStepper';
import ButtonBar from '././Component/ButtonBar/buttonbar';
import DataCard from '././Component/Card/card'
import './Sass/app.scss';
import UploadDocuments from './Pages/UploadDocuments/upload';
import BookAppointment from './Pages/BookAppointment/bookappointment';
import Payment from './Pages/Payment/payment';
import {Nav} from './Component/Nav/Nav';
import BreadCrumbs from './Component/Breadcrumb/breadcrumb';
import Success from './Pages/SuccessPage/SuccessPage';
import History from './Pages/History/history';
function App() {
  return (
      <Router>
      <div className='main'>
        <Nav/>
        <div className='wrapper'>
          <Switch>
            <Route exact path='/'><h1>Welcome to AskePro</h1></Route>
            <Route exact path='/apply'><ApplyStepper/></Route>
            <Route exact path='/fill'><FillStepper/></Route>
            <Route exact path='/upload'><UploadDocuments/></Route>
            <Route exact path='/book'><BookAppointment/></Route>
            <Route exact path='/payment'><Payment/></Route>
            <Route exact path='/Success'><Success/></Route>
            <Route exact path='/history'><History/></Route>
          </Switch>
        </div>
      </div>
      </Router>      
  );
}

export default App;
