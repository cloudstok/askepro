import React from "react";
import { Grid, Segment } from "semantic-ui-react";

const Requst_file = () => {
  return (
    <>
      <Grid columns>
        <div className="Request_bg">
          <Grid.Column>
            <div className="request3">
              <p>
                Dummy text , appointment with AMER executive in Dubai Media City
              </p>
              <Grid column={2}>
                <Grid.Row>
                  <span className="date_time">23 Jan 2021, 11:00 - 12:00</span>

                  <p className="para6">View Details</p>
                </Grid.Row>
              </Grid>
            </div>
          </Grid.Column>
        </div>
       
       
      </Grid>
    </>
  );
};

export default Requst_file;
