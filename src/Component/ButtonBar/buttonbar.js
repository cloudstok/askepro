import React from 'react';
import {Button} from 'semantic-ui-react';
import '../ButtonBar/buttonbar.scss';

const ButtonBar =  () =>{
        return (
            <div className="button-group">
                <Button size='big'>Prev</Button>
                <Button size='big'>Next</Button>
            </div>
        )
}
export default ButtonBar;