import React from 'react';
import {Container, Header, Grid, Divider, Form, Button, Input, List} from 'semantic-ui-react';
import Stepper from '../../Component/Stepper/stepper';
import DataCard from '../../Component/Card/card';
import BreadCrumbs from '../../Component/Breadcrumb/breadcrumb';
import Heading from '../../Component/Heading/heading';
import ButtonBar from '../../Component/ButtonBar/buttonbar';
import '../StepPages/stepPage.scss';
import { useHistory } from 'react-router';

const UploadDocuments = () =>{
    const history= useHistory();
    if (!localStorage.getItem("token") && !localStorage.getItem("id"))
    history.push("/login");

            return(
                <main>
                <div className='apply-section'>
                <BreadCrumbs section={[
                        {key:'home', content:'Home', link:true },
                        {key:'apply', content:'Apply Now', active:true }
                 ]}/>
                 <Heading/>
                 <Grid className='data' columns='2' stackable='tablet'>
                 <Grid.Column width={11}>
                <Container className="stepper-container">
                <Stepper/>
                <Divider/>
                <div className='upload-form'>
                    <Grid column='2' stackable='tablet' centered>   
                    <Grid.Row className='upload-container'>
                        <Grid.Column width={8}>
                            <Form.Field>
                                <label>Scan and upload documents</label>
                                <Input type='file' id="file-btn" style={{display:"none"}}/>
                                <div className='file'>
                                <label for='file-btn'>Uplaod file(s) from your computer</label>
                                </div>
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
                </Grid.Column>
                <Grid.Column width={5}>
                <DataCard/>
                </Grid.Column>
                </Grid>
                </div>
                <ButtonBar/>
                </main>
            );
}
export default UploadDocuments;