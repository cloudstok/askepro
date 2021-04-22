import React from 'react';
import {Container, Header, Grid, Divider, Form, Button, Input, List} from 'semantic-ui-react';
import Stepper from '../../Component/Stepper/stepper';
import DataCard from '../../Component/Card/card';
import BreadCrumbs from '../../Component/Breadcrumb/breadcrumb';
import Heading from '../../Component/Heading/heading';
import '../UploadDocuments/upload.scss';
import ButtonBar from '../../Component/ButtonBar/buttonbar';

const UploadDocuments = () =>{
            return(
                <main className='fill-main'>
                <div className='head'>
                 <BreadCrumbs/>
                 <Heading/>
                 </div>
                 <div className='data'>
                <Container className="stepper-container">
                <Stepper/>
                <Divider/>
                <div className='upload-form'>
                    <div className='upload-container'>
                            <Form.Field>
                                <label>Scan and upload documents</label>
                                <Input placeholder='Uplaod file(s) from your computer'/>
                                </Form.Field>
                          <Button className='btn-upload'>UPLOAD</Button>
                    </div>
                    <div className='document-list'>
                    <label>Documents Required</label> 
                    <List>
                        <List.Item>
                        <List.Icon name='star'/>
                        <List.Content>Lorem Ipsum is simply dummy text of the printing </List.Content>
                        </List.Item>
                        <List.Item>
                        <List.Icon name='star'/>
                        <List.Content>Lorem Ipsum is simply dummy text of the printing </List.Content>
                        </List.Item>
                        <List.Item>
                        <List.Icon name='star'/>
                        <List.Content>Lorem Ipsum is simply dummy text of the printing </List.Content>
                        </List.Item>
                        <List.Item>
                        <List.Icon name='star'/>
                        <List.Content>Lorem Ipsum is simply dummy text of the printing </List.Content>
                        </List.Item>
                        <List.Item>
                        <List.Icon name='star'/>
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