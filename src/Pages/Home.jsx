import React from "react";
import { Container } from "semantic-ui-react";

const Home = () => {
  return (
    <div className="cover">
      <main className="wrapper">
        {/* <!-- //second division// --> */}

        <div className="home">
     
  
       
       <div className="home-content">
              
           <h1>Mainland Company Registration in UAE</h1>
           <p>
             Lorem Ipsum is simply dummy text of the printing and typesetting
             industry. Lorem Ipsum has been the industry’s
           </p>
           <button type="button" className="same-btn">
            <strong> APPLY NOW </strong>
           </button>
           
         </div>
       
       
         
         <div className="home-bg">
           <img
             src="/assets/images/login-bg.png" style={{ width:'100%', height:'90vh'}}
           />
         </div>
   </div>
   
        <Container>
          <div className="service">
          <h1 className="headingOne">Our Services</h1> 
          
          </div>
          <div className="underline_img">
          <img src="assets/images/path.png" />
          </div>
         
         
          </Container>
        
     

     
      </main>
    </div>
    
  );
};

export default Home;
