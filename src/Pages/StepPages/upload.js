import React from 'react';
import {Container, Header, Grid, Divider, Form, Button, Input, List} from 'semantic-ui-react';
import Stepper from '../../Component/Stepper/stepper';
import DataCard from '../../Component/Card/card';
import BreadCrumbs from '../../Component/Breadcrumb/breadcrumb';
import Heading from '../../Component/Heading/heading';
import ButtonBar from '../../Component/ButtonBar/buttonbar';
import '../StepPages/stepPage.scss';

const UploadDocuments = () =>{
            return(
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
                <div className='upload-form'>
                    <Grid column='2' stackable='tablet' centered>   
                    <Grid.Row className='upload-container'>
                        <Grid.Column width={8}>
                            <Form.Field>
                                <label>Scan and upload documents</label>
                                <Input placeholder='Uplaod file(s) from your computer'/>
                                </Form.Field>
                                </Grid.Column>
                            <Grid.Column>
                          <Button className='btn-upload'>UPLOAD</Button>
                          </Grid.Column>
                          </Grid.Row>
                          </Grid> 
                    <div className='document-list'>
                    <label>Documents Required</label> 
                    <List>
                        <List.Item>
                        <List.Icon name='square'/>
                        <List.Content>Lorem Ipsum is simply dummy text of the printing </List.Content>
                        </List.Item>
                        <List.Item>
                        <List.Icon name='square'/>
                        <List.Content>Lorem Ipsum is simply dummy text of the printing </List.Content>
                        </List.Item>
                        <List.Item>
                        <List.Icon name='square'/>
                        <List.Content>Lorem Ipsum is simply dummy text of the printing </List.Content>
                        </List.Item>
                        <List.Item>
                        <List.Icon name='square'/>
                        <List.Content>Lorem Ipsum is simply dummy text of the printing </List.Content>
                        </List.Item>
                        <List.Item>
                        <List.Icon name='square'/>
                        <List.Content>Lorem Ipsum is simply dummy text of the printing </List.Content>
                        </List.Item>
                    </List>        
                    </div>
                    </div>
                </Container>
                <DataCard/>
                </div>
                <ButtonBar/>
                </main>
            );
}
export default UploadDocuments;