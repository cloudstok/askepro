import React from 'react'
import {Breadcrumb} from 'semantic-ui-react';
import '../Breadcrumb/breadcrumb.scss';

const bcrumbs = ({section}) =>{
    return (
    <crumb icon='right angle' sections ={section} />
    )
}

export default bcrumbs;