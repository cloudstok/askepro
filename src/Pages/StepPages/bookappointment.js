import React from 'react'
import {Header, Divider, Container, Grid, Form, Select, Input, Label} from 'semantic-ui-react';
import {Calendar} from 'react-calendar';
import Stepper from '../../Component/Stepper/stepper';
import BreadCrumbs from '../../Component/Breadcrumb/breadcrumb';
import Heading from '../../Component/Heading/heading';
import DataCard from '../../Component/Card/card';
import ButtonBar from '../../Component/ButtonBar/buttonbar';
import '../StepPages/stepPage.scss';

const BookAppointment = () =>{
            return (
                <main className='fill-main'>
                <div className='head'>
                <BreadCrumbs section={[
                        {key:'home', content:'Home', link:true },
                        {key:'apply', content:'Apply Now', active:true }
                 ]}/>
                 <Heading/>
                </div>
                <div className='data'>
                <Container className="stepper-container">
                <Stepper/>
                <Divider/>
                <div className="form">
                    <Grid stackable='mobile' centered>
                    <Grid.Row>
                    <Grid.Column width='6'>
                        <label className='date-title'>Choose your preferred date</label>
                        <Calendar
                         showWeekNumbers
                        />
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
                </div>
                </Container>
                <DataCard/>
                </div>
                <ButtonBar/>
                </main>
            )
}
export default BookAppointment;