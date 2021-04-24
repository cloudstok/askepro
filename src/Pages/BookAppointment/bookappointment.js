import React from 'react'
import '../BookAppointment/bookappointment.scss';
import {Header, Divider, Container, Grid, Form, Select, Input, Label} from 'semantic-ui-react';
import Stepper from '../../Component/Stepper/stepper';
import '../BookAppointment/bookappointment.scss';
import BreadCrumbs from '../../Component/Breadcrumb/breadcrumb';
import Heading from '../../Component/Heading/heading';
import DataCard from '../../Component/Card/card';
import ButtonBar from '../../Component/ButtonBar/buttonbar';
const BookAppointment = () =>{
            return (
                <main className='fill-main'>
                <div className='head'>
                <BreadCrumbs section={[
                        {key:'home', content:'Home', link:true },
                        {key:'apply', content:'Apply Now', link:true }
                 ]}/>
                 <Heading/>
                </div>
                <div className='data'>
                <Container className="stepper-container">
                <Stepper/>
                <Divider/>
                <div className="form">
                    <Grid stackable='mobile' centered columns='1'>
                    <Grid.Row>
                    <Grid.Column>
                        <label>Choose your preferred date</label>
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