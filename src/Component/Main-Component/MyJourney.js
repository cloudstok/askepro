import React from "react";
import { Grid } from "semantic-ui-react";
export const MyJourney = () => {
  return (
    <div>
      <div className="my_journey">
        <h1 className="headingOne">Our Journey </h1>
        <Grid>
          <Grid.Row>
            <Grid.Column>
              <Year number='2002'/>
              <Year number='2003'/>
              <Year number='2004'/>
              <Year number='200 5'/>
              <Year />
              <Year />
              <Year />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    </div>
  );
};

export const Year = (props) => {
  return (
    <div className="content_list_item">
      <span>{props.number}</span>
    </div>
  );
};
