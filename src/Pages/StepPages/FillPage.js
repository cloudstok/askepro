import React, {useState} from 'react';
import { Grid, Divider, Form, Message   , Container, Select, Input, CardDescription, Radio} from 'semantic-ui-react';
import BreadCrumbs from '../../Component/Breadcrumb/breadcrumb';
import ButtonBar from '../../Component/ButtonBar/buttonbar';
import DataCard from '../../Component/Card/card';
import Heading from '../../Component/Heading/heading';
import Stepper from '../../Component/Stepper/stepper';
import '../StepPages/stepPage.scss';

function FillPage(){
        return (
             <div className='fill-main'>
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
                <Message>
                <label><i className='close icon'></i>
                </label>
                <label className='alert'>Please fill all the mandatory fields in order to proceed and complete the application request</label>
                </Message>
                    <Grid columns="2" stackable='tablet'>
                        <Grid.Row>
                            <Grid.Column width={2} className='radio-group'>
                            <Radio label='Self' className='radio-item'/>
                            </Grid.Column>
                        <Grid.Column className='radio-group'>
                        <Radio label='Other' className='radio-item'/>  
                            </Grid.Column> 
                            <Grid.Column>
                            <Form.Field>
                                <label>Name *</label>
                                <Input placeholder='Enter name'/>
                                </Form.Field>
                            </Grid.Column>                
                            <Grid.Column>
                            <Form.Field>
                                <label>Date of Birth</label>
                                <Input
                                    icon={{ name: 'calendar outline', link: true }}
                                        placeholder='Search...'
                                        />
                            </Form.Field>
                            </Grid.Column>
                            <Grid.Column className='radio-group' width={3}>
                            <Radio label='Address 1' className='radio-item'/>
                            </Grid.Column>
                            <Grid.Column className='radio-group'  width={3}>
                            <Radio label='Address 2' className='radio-item'/>  
                            </Grid.Column>
                            <Grid.Column className='radio-group'>
                            <Radio label='Address 3' className='radio-item'/>  
                            </Grid.Column>                                                        <Grid.Column>
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
                </div>
        )
}
export default FillPage;