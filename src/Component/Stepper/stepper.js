import React from 'react';
import { useLocation } from 'react-router';
import { Link } from 'react-router-dom';
import { Step } from 'semantic-ui-react';
import '../../Sass/app.scss';

const Stepper = () => {
    const location = useLocation();
    const [result, setResult] = React.useState(null);
    const arr = ["/apply", "/fill", "/upload", "/book", "/payment", "/success"];
    const titleArr = ["Choose Service", "Fill Details", "Upload Documents", "Book an appointment", "Payment", "Success"];
    React.useEffect(() => {
        let final = [];
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] === location.pathname) {
                final.push({ title: titleArr[i], status: true });
                
            }
            else {
                final.push({ title: titleArr[i], status: false });
            }
        }
        console.log(final)
        setResult(final);
    },[]);
    if(!result){
    return "loading";}
    arr.pop('/success');
    return (
        <div className="stepper">
            <Step.Group size='tiny' stackable='tablet' widths="6">
                {result.map((ele, index) => (
                   <Link to={arr[index]}> <Step active={ele.status} >
                        <Step.Content>
                            <Step.Title>{index + 1}</Step.Title>
                            <Step.Description>{ele.title}</Step.Description>
                        </Step.Content>
                    </Step></Link>))}

            </Step.Group>
        </div>
    )
}
export default Stepper;