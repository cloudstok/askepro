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
import Login1 from './Components/Login1'; 
import Login2 from './Components/Login2'; 
import Login3 from './Components/Login3'; 


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
        <About />
        <Crumb />
        <Footer />
     </Route>
     <Route exact path='/contact'>  
        <Header />
        <Contact />
        <Crumb />
        <Footer />
     </Route>
     <Route exact path='/company'>  
        <Header />
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
     </Switch>

    </> 


  );
}

export default App;
