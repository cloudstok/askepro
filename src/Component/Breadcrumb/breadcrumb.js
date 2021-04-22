import React from 'react'
import {Breadcrumb} from 'semantic-ui-react';
import '../Breadcrumb/breadcrumb.scss';
const section = [
    {key:'home', content:'Home', link:true },
    {key:'apply', content:'Apply Now', link:true }
];

const BreadCrumbs = () =>{
    return (
    <Breadcrumb icon='right angle' sections ={section} />
    )
}

export default BreadCrumbs;