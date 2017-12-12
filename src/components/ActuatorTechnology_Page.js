/**
 * Created by Christian on 09.11.2017.
 */
import React, { Component } from 'react';
import {ActuatorTechnology_Body_Page} from "./ActuatorTechnology_Body_Page";
import Header_Page from "./Header_Page";


export class ActuatorTechnology_Page extends Component{
    constructor(props)
    {
        super(props);
    }

    render() {
        return(
            <div>
                <Header_Page imgName="Icon-energy-efficiency-pos-white.jpg" imgLink="actuatortechnology"/>
                <ActuatorTechnology_Body_Page/>
            </div>
        );
    }
}
export default ActuatorTechnology_Page;