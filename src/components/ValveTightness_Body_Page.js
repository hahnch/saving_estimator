/**
 * Created by Michael on 10.11.2017.
 */
/**
 * Created by Christian on 09.11.2017.
 */
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {Input_Row} from "./Input_Row";
import {Button_Row} from "./Button_Row";


export class ValveTightness_Body_Page extends Component{
    constructor(props)
    {
        super(props);
    }

    render() {
        return(
            <div className="ui container">
                <div className="ui centered vertically padded grid">
                    <div className="row">
                        <div className="eight wide computer twelve wide tablet sixteen wide mobile column aligned center">
                            <div className="ui vertically padded grid center aligned">
                                <Input_Row name={"Ventile"} unit={"Stück"}/>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="eight wide computer twelve wide tablet sixteen wide mobile column aligned center">
                            <div className="ui vertically padded grid center aligned">
                                <Button_Row name={"Hauptkosten: elektrische Energie"} countButton={2} names={["JA", "NEIN"]}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default ValveTightness_Body_Page;