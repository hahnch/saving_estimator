import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {Header_Page} from './Header_Page';
import {Body_Config_Page} from "./Body_Config_Page";


export class Config_Page extends Component{
    constructor(props)
    {
        super(props);
    }

    render() {
        return(
            <div>
                <Header_Page imgName="" imgLink=""/>
                <Body_Config_Page/>
            </div>
        );
    }
}
export default Config_Page;
