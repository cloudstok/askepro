import React from 'react';
import { Card, Divider, Header } from 'semantic-ui-react';
import '../../Sass/app.scss';
import { useHistory } from "react-router";

const DataCard = () => {
    const [services, setService] = React.useState(null);
    const subCatId= localStorage.getItem("applicationId");
    const service_url = `${process.env.REACT_APP_BASE_URL}/serviceCategory/subCat/${subCatId}`;
   
  
    React.useEffect(() => {
        getServices();
    }, []);

    const getServices = async () => {
        const service = await (await fetch(service_url, { method: "GET" })).json();
        console.log(service);
        const serviceData = {
            name: service.data.name,
          reqDocs: service.data.reqDocs,
          overview: service.data.overview,
          processT: service.data.processT,
          stayPeriod: service.data.stayPeriod,
          validity: service.data.validity,
          entry: service.data.entry,
          price: service.data.price
        };
        setService(serviceData);

    };

    if(!services){
        return (<div/>)
    }
    return (
        <div className='company-card'>
            <div className='card-heading'>
                <h5>{services.name}</h5>
            </div>
            { services?       <div className='card-content'>
                {/* <table>
                    <tr>
                        <td>Processing Time:</td>
                        <td><label>{services.processT}</label></td>
                    </tr>
                    <tr>
                        <td>Stay Period:</td>
                        <td><label>{services.stayPeriod}</label></td>
                    </tr>
                    <tr>
                        <td>Validity:</td>
                        <td><label>{services.validity}</label></td>
                    </tr>
                    <tr>
                        <td>Entry:</td>
                        <td><label>{services.entry}</label></td>
                    </tr>
                </table> 
                <Divider />*/}
     <div className='total'>
                    <label className='fees'>Fees</label> <label>{services.price} AED</label>
                </div>
                            </div>:<></>}

        </div>
    )
}
export default DataCard;
