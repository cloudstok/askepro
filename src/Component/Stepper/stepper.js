import React from 'react';
import {Step} from 'semantic-ui-react';
import '../Stepper/stepper.scss';

const Stepper = () =>{
        return (
                <div className="stepper">
                <Step.Group size='small' stackable='tablet'>
                <Step active>
                    <Step.Content>
                    <Step.Title>1</Step.Title>
                    <Step.Description>Choose Service</Step.Description>
                    </Step.Content>
                </Step>

                <Step>
                    <Step.Content>
                    <Step.Title>2</Step.Title>
                    <Step.Description>Fill Details</Step.Description>
                    </Step.Content>
                </Step>
                <Step>
                    <Step.Content>
                    <Step.Title>3</Step.Title>
                    <Step.Description>Upload Documents</Step.Description>
                    </Step.Content>
                </Step>
                <Step>
                    <Step.Content>
                    <Step.Title>4</Step.Title>
                    <Step.Description>Book an appointment</Step.Description>
                    </Step.Content>
                </Step>
                <Step>
                    <Step.Content>
                    <Step.Title>5</Step.Title>
                    <Step.Description>Payment</Step.Description>
                    </Step.Content>
                </Step>
                <Step>
                    <Step.Content>
                    <Step.Title>6</Step.Title>
                    <Step.Description>Success</Step.Description>
                    </Step.Content>
                </Step>
                </Step.Group>
                </div>
        )
}
export default Stepper;