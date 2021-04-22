import React from 'react';
import { Container, Step, Grid, Radio, Icon, Divider, Header} from 'semantic-ui-react';
import BreadCrumbs from '../../Component/Breadcrumb/breadcrumb';
import ButtonBar from '../../Component/ButtonBar/buttonbar';
import Heading from '../../Component/Heading/heading';
import Stepper from '../../Component/Stepper/stepper';
import './apply_page.scss';

function ApplyStepper(){
    return (
    <main>
    <BreadCrumbs section={[
                        {key:'home', content:'Home', link:true },
                        {key:'apply', content:'Apply Now', link:true }
                 ]}/>
     <Heading/>
     <Container className="stepper-container" stackable='mobile'>
      <Stepper/>
      <Divider/>
      <div className="form">
            <Grid columns='3' stackable='mobile'>
                <Grid.Row>
                    <Grid.Column>
                    <Radio label='Company Formation Services'/>
                    </Grid.Column>
                    <Grid.Column>
                    <Radio label='Local Sponsership Services'/>
                    </Grid.Column>
                    <Grid.Column>
                    <Radio label='Office Arguments'/>
                    </Grid.Column>
                    <Grid.Column>
                    <Radio label='Visa Services'/>
                    </Grid.Column>
                    <Grid.Column>
                    <Radio label='Attestation Services'/>
                    </Grid.Column>
                    <Grid.Column>
                    <Radio label='Translation Services'/>
                    </Grid.Column>
                    <Grid.Column>
                    <Radio label='Dubai Economical Services'/>
                    </Grid.Column>
                    <Grid.Column>
                    <Radio label='Trakhees Services'/>
                    </Grid.Column>
                    <Grid.Column>
                    <Radio label='Company Stamp'/>
                    </Grid.Column>
                    <Grid.Column>
                    <Radio label='Amer Services'/>
                    </Grid.Column>
                    <Grid.Column>
                    <Radio label='Tasheel Services'/>
                    </Grid.Column>
                    <Grid.Column>
                    <Radio label='Emirates ID'/>
                    </Grid.Column>
                    <Grid.Column>
                    <Radio label='Medical Services'/>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
            </div>
            </Container>
            <ButtonBar/>
            </main> 
    )
}
export default ApplyStepper;