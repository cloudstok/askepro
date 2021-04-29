import React from 'react';
import {Card, Divider, Header} from 'semantic-ui-react';
import '../../Sass/app.scss';

const DataCard =  () =>{
        return( 
            <div className='company-card'>
                <div className='card-heading'>
                <h5>Company Formation Services</h5>
                </div>
                <div className='card-content'>
                 <table>
                    <tr>
                        <td>Processing Time:</td>
                        <td><label>Upto 5 Days</label></td> 
                    </tr>
                    <tr>
                        <td>Stay Period:</td>
                        <td><label>14 Days</label></td> 
                    </tr>
                    <tr>
                        <td>Validity:</td>
                        <td><label>58 Days</label></td> 
                    </tr>
                    <tr>
                        <td>Entry:</td>
                        <td><label>Single</label></td> 
                    </tr>
                </table> 
                <Divider/>
                <div className='total'>
                <label className='fees'>Fees</label> <label>350 AED</label>
                </div>
                </div>
            </div>
         )
}
export default DataCard;
