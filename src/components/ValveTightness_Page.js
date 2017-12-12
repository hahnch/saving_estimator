/**
 * Created by Christian on 09.11.2017.
 */
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {Input_Row} from "./Input_Row";
import {Button_Row} from "./Button_Row";
import Header_Page from "./Header_Page";
import {ValveTightness_Body_Page} from "./ValveTightness_Body_Page";


export class ValveTightness_Page extends Component{
    constructor(props)
    {
        super(props);
    }

    render() {
        return(
            <div>
                <Header_Page imgName="Icon-valves-pos-white.jpg" imgLink="/valvetightness"/>
                <ValveTightness_Body_Page/>
            </div>
        );
    }
}
export default ValveTightness_Page;