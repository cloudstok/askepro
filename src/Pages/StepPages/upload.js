import React from 'react';
import { Container, Header, Grid, Divider, Form, Button, Input, List } from 'semantic-ui-react';
import Stepper from '../../Component/Stepper/stepper';
import DataCard from '../../Component/Card/card';
import BreadCrumbs from '../../Component/Breadcrumb/breadcrumb';
import Heading from '../../Component/Heading/heading';
import ButtonBar from '../../Component/ButtonBar/buttonbar';
import '../StepPages/stepPage.scss';
import { useHistory } from 'react-router';

const UploadDocuments = () => {
    const [fileName, setfilename] = React.useState("");
    const [file, setFile] = React.useState(null);
    const submitDocs = [];
    const history = useHistory();
    if (!localStorage.getItem("token") && !localStorage.getItem("id"))
        history.push("/login");

    const [services, setService] = React.useState(null);
    const slug = localStorage.getItem("serviceSlug");
    const service_url = `${process.env.REACT_APP_BASE_URL}/serviceCategory/${slug}`;


    React.useEffect(() => {
        getServices();
    }, []);

    const getServices = async () => {
        const service = await (await fetch(service_url, { method: "GET" })).json();
        const serviceData = {
            reqDocs: service.data.serviceDetail.reqDocs,
        };
        setService(serviceData);

    };
    if (!services) {
        return (<div />)
    }
    const requestId = localStorage.getItem("applicationId");
    const url = `${process.env.REACT_APP_BASE_URL}/service/upload/${requestId}`;
    const uploadWithFormData = async () => {
        const formData = new FormData();
        formData.append("file", file);
        formData.append("name", fileName);

        const result = await (await fetch(url, {
            method: 'PUT',
            headers: {
                'Content-Type': 'multipart/form-data'
            },
            data: formData
        })).json();
        console.log(result);
        if (result.status === 1)
            submitDocs.push(fileName);
    }

    return (
        <main>
            <div className='apply-section'>
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
                            <div className='upload-form'>
                                <Grid column='2' stackable='tablet' centered>
                                    <Grid.Row className='upload-container'>
                                    <Grid.Column width={4}>
                                            <Form.Field>

                                                <label for="docs">Choose a documnet</label>

                                                <select name="docs" id="docs">
                                                {services.reqDocs.map((ele) =><option value={ele}>{ele}</option>)}
                    
                                                </select>
                                                <input type="submit" value="Submit" onClick={(event) => setfilename(event.target.value)}></input>
                                            </Form.Field>
                                        </Grid.Column>
                                        <Grid.Column width={4}>
                                            <Form.Field>
                                                <label>Scan and upload documents</label>
                                                <Input type='file' name='file' onChange={(event) => setFile(event.target.files[0])} id="file-btn" style={{ display: "none" }} />
                                                <div className='file'>
                                                    <label for='file-btn'>Upload file from your computer</label>
                                                </div>
                                            </Form.Field>
                                        </Grid.Column>
                                        
                                        <Grid.Column>
                                            <Button className='btn-upload' onClick={() => uploadWithFormData}>UPLOAD</Button>
                                        </Grid.Column>
                                    </Grid.Row>
                                </Grid>
                                <div className='document-list'>
                                    <label>Documents Required</label>
                                    <List>
                                        {services.reqDocs.map((ele) => <List.Item>
                                            <List.Icon name='square' />
                                            <List.Content>{ele}</List.Content>
                                        </List.Item>)}
                                    </List>
                                </div>
                                <div className='document-list'>
                                    <label>Documents Subitted</label>
                                    <List>
                                        {submitDocs.map((ele) => <List.Item>
                                            <List.Icon name='square' />
                                            <List.Content>{ele}</List.Content>
                                        </List.Item>)}
                                    </List>
                                </div>
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
    );
}
export default UploadDocuments;