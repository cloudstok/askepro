import React from 'react'
import { Header, Divider, Container, Grid, Form, Select, Input, Label } from 'semantic-ui-react';
import { Calendar } from 'react-calendar';
import Stepper from '../../Component/Stepper/stepper';
import BreadCrumbs from '../../Component/Breadcrumb/breadcrumb';
import Heading from '../../Component/Heading/heading';
import DataCard from '../../Component/Card/card';
import ButtonBar from '../../Component/ButtonBar/buttonbar';
import '../StepPages/stepPage.scss';
import { useHistory } from 'react-router';

const BookAppointment = () => {
    const [date, setDate] = React.useState(new Date());

    const onDateChange = (newDate) => {
        setDate(newDate);
       let dates=date.toString();
        dates=dates.split(" ")
        console.log(dates);
        if (window.confirm(`Are you sure you want to select ${date} as your appointment`)) {
           
            console.log('Thing was saved to the database.');
          } else {
            
            console.log('Thing was not saved to the database.');
          }
        console.log(newDate);
    }

    const history = useHistory();
    if (!localStorage.getItem("token") && !localStorage.getItem("id"))
        history.push("/login");

    return (
        <main>
            <div className='book-section'>
                <BreadCrumbs section={[
                    { key: 'home', content: 'Home', link: true },
                    { key: 'apply', content: 'Apply Now', active: true }
                ]} />
                <Heading />
                <Grid columns='2' stackable='tablet' className='data'>
                    <Grid.Column width={11}>
                        <Container className="stepper-container">
                            <Stepper />
                            <Divider />
                            <div className="form">
                                <Grid stackable='tablet' centered>
                                    <Grid.Row>
                                        <Grid.Column className='date' width={6}>
                                            <label className='date-title'>Choose your preferred date</label>
                                            <Calendar
                                                onChange={onDateChange}
                                                value={date}
                                                showNeighboringMonth={false}
                                            />
                                        </Grid.Column>
                                    </Grid.Row>
                                </Grid>
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
export default BookAppointment;