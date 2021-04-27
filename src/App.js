import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home';
import Header from './Components/Header';
import Visa from './Components/Visa';
import Apply from './Components/Apply';
import Footer from './Components/Footer';
import Service from './Pages/Service';
import Accordion from './Components/Accordion';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Company from './Pages/Company';
import Notification from './Components/Notification';
import { Breadcrumb } from 'semantic-ui-react';
import Crumb from './Components/Crumb';
import Login from './Components/Login'; 
import Register from './Components/Register'; 
import Fgpasswd from './Components/Fgpasswd';
import Account from './Pages/Account';
import Accept from './Components/Accept';
import Reject from './Components/Reject';
import Verification from './Components/Verification';
import Admin_dashboard from './Pages/Admin_dashboard';
import View_details from './Pages/View_details';
import Navbar2 from './Components/Navbar2';
  
const App = () => {
  return(
    <>
    <Switch>
     <Route exact path='/'>
        <Header />
        <Home />
        <Visa />
        <Apply />
        <Footer />
        <Notification />
     </Route>
     <Route exact path='/service'>  
        <Header />
        <Service />
        <Crumb />
        <Visa />
        <Accordion />
        <Footer />
     </Route>
     <Route exact path='/about'>  
        <Header />
        <Crumb />
        <About />
        <Footer />
     </Route>
     <Route exact path='/contact'>  
        <Header />
        <Crumb />
        <Contact />
        <Footer />
     </Route>
     <Route exact path='/company'>  
        <Header />
        <Company />
        <Crumb />
        <Footer />
     </Route>
     <Route exact path='/login'>  
       <Login />
     </Route>
     <Route exact path='/register'>  
       <Register />
     </Route>
     <Route exact path='/fgpasswd'>  
       <Fgpasswd />
     </Route>
     <Route exact path='/account'>  
     <Header />
       <Account />
     </Route>
     <Route exact path='/reject'>  
     <Header />
       <Accept />
       <Reject />
       <Verification />
     </Route>
     <Route exact path='/admin'>  
     <Header />
     <Crumb />
     <Admin_dashboard />
     </Route>
     <Route exact path='/view'>  
     <Navbar2 />
     <Crumb />
     <View_details />
     </Route>
     </Switch>

    </> 


  );
}

export default App;
