/**
 * Created by Christian on 09.11.2017.
 */
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {Header_Page} from './Header_Page';
import {Body_Page} from './Body_Page';
import Main_Body from "./Main_Body";


export class Main_Page extends Component{
    constructor(props)
    {
        super(props);
    }

    render() {
        return(
                <div>
                    <Header_Page imgName="" imgLink=""/>
                    <Main_Body/>
                </div>
        );
    }
}
export default Main_Page;