import React, {useState} from 'react';
import { Grid, Divider, Form, Message   , Container, Select, Input, CardDescription} from 'semantic-ui-react';
import BreadCrumbs from '../../Component/Breadcrumb/breadcrumb';
import ButtonBar from '../../Component/ButtonBar/buttonbar';
import DataCard from '../../Component/Card/card';
import Heading from '../../Component/Heading/heading';
import Stepper from '../../Component/Stepper/stepper';
import '../fillStepper/fillStepper.scss';

function FillStepper(){
    const [name, setName] = ('');

    const OnSubmit = (e) =>{
        e.preventDefault();
    }


        return (
             <main className='fill-main'>
                 <div className='head'>
                 <BreadCrumbs/>
                 <Heading/>
                 </div>
                 <div className='data'>
                <Container className="stepper-container">
                <Stepper/>
                <Divider/>
                <div className="form">  
                <Message
                    icon='close'
                        error
                        content='Please fill all the mandantory fields in order to proceed and complete the application request'
                        />

                    <Grid columns="2" stackable='mobile' fluid>
                        <Grid.Row>
                            <Grid.Column>
                            <Form.Field>
                                <label>Name *</label>
                                <Input placeholder='Enter name'/>
                                </Form.Field>
                            </Grid.Column>                
                            <Grid.Column>
                            <Form.Field>
                                <label>Date of Birth</label>
                                <Input placeholder='Choose date of birth'/>
                                </Form.Field>
                            </Grid.Column>
                            
                            <Grid.Column>
                            <Form.Field>
                                <label>Address Line 1*</label>
                                <Input placeholder='Enter address line 1' />
                                </Form.Field>
                            </Grid.Column>
                            
                            <Grid.Column>
                            <Form.Field>
                                <label>Address Line 2*</label>
                                <Input placeholder='Enter address line 2' />
                                </Form.Field>
                            </Grid.Column>
                            
                            <Grid.Column>
                            <Form.Field>
                                <label>City*</label>
                                <Select placeholder='Select city' />
                                </Form.Field>
                            </Grid.Column>
                            
                            <Grid.Column>
                            <Form.Field>
                                <label>State*</label>
                                <Select placeholder='Select state' />
                                </Form.Field>
                            </Grid.Column>
                            
                            <Grid.Column>
                            <Form.Field>
                                <label>PIN Code</label>
                                <Input placeholder='Enter PIN code' />
                                </Form.Field>
                            </Grid.Column>
                            
                            <Grid.Column>
                            <Form.Field>
                                <label>Country</label>
                                <Select placeholder='Select country' />
                                </Form.Field>
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
export default FillStepper;