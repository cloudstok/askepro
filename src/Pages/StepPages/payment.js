import React from 'react';
import { useHistory } from 'react-router';
import {Container, Header, Divider, Grid, Radio} from 'semantic-ui-react';
import BreadCrumbs from '../../Component/Breadcrumb/breadcrumb';
import Heading from '../../Component/Heading/heading';
import Stepper from '../../Component/Stepper/stepper';
import '../StepPages/stepPage.scss';

const Payment = () =>{
   const history=useHistory();
    if (!localStorage.getItem("token") && !localStorage.getItem("id"))
    history.push("/login");

    return (    
        <main>   
        <div className='payment-section'>
        <BreadCrumbs section={[
                        {key:'home', content:'Home', link:true },
                        {key:'apply', content:'Apply Now', active:true }
                 ]}/>
        <Heading/>
        <Container className="stepper-container">
        <Stepper/>
        <Divider/>
        <div className='form'>
        <label className='payment-header'>Summary</label>
        <div className='payment-container'>
        <h3>Company Formation Services</h3>
        <Grid columns='5' fluid stackable='tablet'>
        <Grid.Row>
        <Grid.Column>
        <label className='heading'>
            Processing Time
        </label>
        <label className='value'>
            Upto 5 days
        </label>
        </Grid.Column>
        <Grid.Column>
        <label className='heading'>
            Stay Period
        </label>
        <label className='value'>
           14 days
        </label>
        </Grid.Column>
        <Grid.Column>
        <label className='heading'>
          Validity
        </label>
        <label className='value'>
            58 Days
        </label>
        </Grid.Column>
        <Grid.Column>
        <label className='heading'>
            Entry
        </label>
        <label className='value'>
            Single
        </label>
        </Grid.Column>
        <Grid.Column>
        <label className='heading fees'>
            Fees
        </label>
        <label className='value total'>
            350 AED
        </label>
        </Grid.Column>
        </Grid.Row>
        </Grid>
        </div>
        <label className='payment-header'>Choose payment method</label>
        <Grid columns='3' stackable='mobile'>
                <Grid.Row>
                    <Grid.Column>
                    <Radio label='Pay via Debit Card' name='paymentGroup' id="dc" />
                    </Grid.Column>
                    <Grid.Column>
                    <Radio label='Pay via Credit Card' name='paymentGroup' id="cc"/>
                    </Grid.Column>
                    <Grid.Column>
                    <Radio label='Pay via Net Banking' name='paymentGroup' id="upi"/>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
            <label className='notice'>Final price mentioned in the summary will be deducted from the account provided</label>
        </div>
        </Container>
        </div>
        </main>
    )
}
export default Payment