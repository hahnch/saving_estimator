import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {Input_Row} from "./Input_Row";
import {Button_Row} from "./Button_Row";
import {Config_Dropdown_Row} from "./Config_Dropdown_Row";
import {Config_Translation_Row} from "./Config_Translation_Row";
var Translate = require('react-translate-component');

export class Body_Config_Page extends Component{
    constructor(props)
    {
        super(props);
    }

    render() {
        return(
            <div className="ui container">
                <div className="ui centered vertically padded grid">
                    <div className="eight wide computer twelve wide tablet sixteen wide mobile column aligned center">
                        <form className={"ui form"}>
                            <div className="ui vertically padded grid center aligned">
                                <div className="row">
                                    <div className="sixteen wide column">
                                        <div className={"row_text"}>
                                            <span>Region und Sprache auswählen</span>
                                        </div>
                                    </div>
                                    <div className="sixteen wide column row_input_align">
                                        <div className={"ui padded segment"}>
                                            <Config_Dropdown_Row dropdownCount={1} optionCount={[1]} optionValue={[["Europe"]]}/>
                                            <Config_Translation_Row dropdownCount={1} optionCount={[2]} optionValue={[["English","Deutsch"]]}/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </form>
                        <form className={"ui form"}>

                            <div className="ui vertically padded grid center aligned">
                                <div className="row">
                                    <div className="sixteen wide column">
                                        <div className={"row_text"}>
                                            <Translate content={"label.currency"}/>
                                        </div>
                                    </div>
                                    <div className="sixteen wide column row_input_align">
                                        <div className={"ui padded segment"}>
                                            <Config_Dropdown_Row dropdownCount={1} optionCount={[2]} optionValue={[["EUR","CHF"]]}/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}
export default Body_Config_Page;