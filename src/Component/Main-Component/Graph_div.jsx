import React, { Component } from 'react'
import { Menu, Grid,Form,Button } from 'semantic-ui-react'

export default class Graph_div extends Component {
  state = {}
  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state
    return (

<div className="revenue_data">
<Grid doubling columns={3}>
<Grid.Row>
<Grid.Column>
<div className="Revenue">
<Menu.Item
          name='Clients'
          active={activeItem === 'clients'}
          onClick={this.handleItemClick}
        >
     <h6>Clients Overview</h6>
     </Menu.Item>
</div>
</Grid.Column>
<Grid.Column>
<div className="Revenue">
<Menu.Item
          name='applications'
          active={activeItem === 'application'}
          onClick={this.handleItemClick}
        >
     <h6>Applications Overview</h6>
     </Menu.Item>
</div>
</Grid.Column>
<Grid.Column>
<div className="Revenue">
<Menu.Item
          name='revenue'
          active={activeItem === 'revenue'}
          onClick={this.handleItemClick}
        >
     <h6>Revenue Overview</h6>
     </Menu.Item>
</div>
</Grid.Column>
</Grid.Row>
</Grid>
<div className="filter">
    <Grid stackable columns>
        <Grid.Row>
            <Grid.Column width={11}>
    <Form>
<Form.Group widths='equal'>
<Form.Field label='Choose Service' control='select'>
        <option value='service1'>Service1</option>
        <option value='service2'>Service2</option>
      </Form.Field>
      </Form.Group>
      </Form>
      </Grid.Column>
      <Grid.Column width={3}>
      <Button.Group>
    <Button className="grey_btn">Year</Button>
    <Button className="grey_btn">Month</Button>
{/*     <Button className="grey_btn">Week</Button> */}
  </Button.Group>
  </Grid.Column>
  <Grid.Column width={2}>
  <Form>
      <Form.Group>
      <Form.Field label='Choose Year'  className="select2"  control='select'>
        <option value='2019'>2019</option>
        <option value='2020'>2020</option>
        <option value='2021'>2021</option>
      </Form.Field>
    </Form.Group>
    </Form>
    </Grid.Column>
    </Grid.Row>
    </Grid>
</div>
</div>

)
}
}


