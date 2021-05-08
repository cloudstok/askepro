import React, { useState } from 'react';
import { useHistory } from 'react-router';
import { Grid, Divider, Form, Message, Container, Select, Input, CardDescription, Radio } from 'semantic-ui-react';
import BreadCrumbs from '../../Component/Breadcrumb/breadcrumb';
import ButtonBar from '../../Component/ButtonBar/buttonbar';
import DataCard from '../../Component/Card/card';
import Heading from '../../Component/Heading/heading';
import Stepper from '../../Component/Stepper/stepper';
import '../StepPages/stepPage.scss';

function FillPage() {
    const handleTypeChange = (event, { value }) => { setType(value) };
    const handleAliasChange = (event, { value }) => { setAlias(value) };
    const history = useHistory();
    const [name, setName] = React.useState(null);
    const [dob, setDob] = React.useState(null);
    const [type, setType] = React.useState(null);
    const [alias, setAlias] = React.useState(null);
    const [lineOne, setLineOne] = React.useState(null);
    const [lineTwo, setLineTwo] = React.useState(null);
    const [state, setState] = React.useState(null);
    const [city, setCity] = React.useState(null);
    const [country, setCountry] = React.useState(null);
    const [pincode, setPincode] = React.useState(null);
    if (!localStorage.getItem("token") && !localStorage.getItem("id"))
        history.push("/login");
    const requestId = localStorage.getItem("applicationId");
    const url = `${process.env.REACT_APP_BASE_URL}/service/fill/${requestId}`
    const handleSubmitForm = async (event) => {
        event.preventDefault();
        const jsonPostData = {
            "name": name,
            "dob": dob,
            "type": type,
            "address":
            {
                "alias": alias,
                "addressLineOne": lineOne,
                "addressLineTwo": lineTwo,
                "state": state,
                "city": city,
                "pincode": pincode,
                "country": country
            }
        }
        console.log(jsonPostData);
        const result = await (await fetch(url, {
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(jsonPostData)
        })).json();
        console.log(result);
        history.push("/upload");


    }
    return (
        <main>
            <div className='fill-section'>
                <BreadCrumbs section={[
                    { key: 'home', content: 'Home', link: true },
                    { key: 'apply', content: 'Apply Now', active: true }
                ]} />
                <Heading />
                <Grid className='data' columns='2' stackable='tablet'>
                    <Grid.Column width={11}>
                        <Container className="stepper-container">
                            <Stepper />
                            <Divider />
                            <div className="form">
                                <Message>
                                    <label><i className='close icon'></i>
                                    </label>
                                    <label className='alert'>Please fill all the mandatory fields in order to proceed and complete the application request</label>
                                </Message>
                                <Grid columns="2" stackable='tablet'>
                                    <Grid.Row>
                                        <Grid.Column width={2} className='radio-group'>
                                            <Radio label='Self' name='type' id='self' value='self' checked={type === 'self'} onChange={handleTypeChange} className='radio-item' name='choice' />
                                        </Grid.Column>
                                        <Grid.Column className='radio-group'>
                                            <Radio label='Other' name='type' id="other" value='other' checked={type === 'other'} onChange={handleTypeChange} className='radio-item' name='choice' />
                                        </Grid.Column>
                                        <Grid.Column>
                                            <Form.Field>
                                                <label>Name *</label>
                                                <Input onChange={(event) => setName(event.target.value)} name='name' placeholder='Enter name' />
                                            </Form.Field>
                                        </Grid.Column>
                                        <Grid.Column>
                                            <Form.Field>
                                                <label>Date of Birth</label>
                                                <Input type='date' onChange={(event) => setDob(event.target.value)} name='dob'
                                                    //icon={{ name: 'calendar outline', link: true }}
                                                    placeholder='Search...'
                                                />
                                            </Form.Field>
                                        </Grid.Column>
                                        <Grid.Column className='radio-group' width={2}>
                                            <Radio label='Home' name='Address' value='Home' checked={alias === 'Home'} onChange={handleAliasChange} id='Address1' className='radio-item' />
                                        </Grid.Column>
                                        <Grid.Column className='radio-group' width={14}>
                                            <Radio label='Office' name='Address' value='Office' checked={alias === 'Office'} onChange={handleAliasChange} id='Address2' className='radio-item' />
                                        </Grid.Column>
                                        <Grid.Column>
                                            <Form.Field>
                                                <label>Address Line 1*</label>
                                                <Input onChange={(event) => setLineOne(event.target.value)} name='lineOne' placeholder='Enter address line 1' />
                                            </Form.Field>
                                        </Grid.Column>

                                        <Grid.Column>
                                            <Form.Field>
                                                <label>Address Line 2*</label>
                                                <Input onChange={(event) => setLineTwo(event.target.value)} name='lineTwo' placeholder='Enter address line 2' />
                                            </Form.Field>
                                        </Grid.Column>

                                        <Grid.Column>
                                            <Form.Field>
                                                <label>City*</label>
                                                <Input onChange={(event) => setCity(event.target.value)} name='city' placeholder='Select city' />
                                            </Form.Field>
                                        </Grid.Column>

                                        <Grid.Column>
                                            <Form.Field>
                                                <label>State*</label>
                                                <Input onChange={(event) => setState(event.target.value)} name='state' placeholder='Select state' />
                                            </Form.Field>
                                        </Grid.Column>

                                        <Grid.Column>
                                            <Form.Field>
                                                <label>PIN Code</label>
                                                <Input onChange={(event) => setPincode(event.target.value)} name='pincode' placeholder='Enter PIN code' />
                                            </Form.Field>
                                        </Grid.Column>

                                        <Grid.Column>
                                            <Form.Field>
                                                <label>Country</label>
                                                <Input onChange={(event) => setCountry(event.target.value)} name='country' placeholder='Select country' />
                                            </Form.Field>
                                        </Grid.Column>
                                    </Grid.Row>
                                </Grid>
                            </div>
                            <div className="upload_save" style={{ textAlign: 'center' }}>
                                <button className="same-btn" onClick={handleSubmitForm} value="submit">Save</button>
                            </div>
                        </Container>
                    </Grid.Column>
                    <Grid.Column width={5}>
                        <DataCard />
                    </Grid.Column>
                </Grid>
            </div>
            <ButtonBar />
        </main>
    )
}
export default FillPage;