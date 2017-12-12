/**
 * Created by Christian on 09.11.2017.
 */
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {Button_Row} from "./Button_Row";
import { Link } from 'react-router-dom';
var Translate = require('react-translate-component');

export class Main_Body extends Component{
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
                            <div className="main_body_margin">
                                <div className="ui vertically padded grid center aligned">
                                    <div className="row">
                                        <div className="wrap_logo">
                                            <Link to="/valvetightness">
                                                <img src="/app/images/Icon-valves-pos.jpg" className="main_img_box_left" role="presentation"/>
                                            </Link>
                                            <Link to="/actuatortechnology">
                                                <img src="/app/images/Icon-energy-efficiency-pos.jpg" className="main_img_box_right" role="presentation"/>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="ui vertically padded grid center aligned">
                                <div className="row">
                                    <div className="sixteen wide column">
                                        <div className={"row_text"}>
                                            <Translate content="label.chooseTool"/>
                                        </div>
                                    </div>
                                    <div className="sixteen wide column">
                                        <div className="ui buttons row_button">
                                            <Link className={"ui button"} to="/valvetightness">
                                                <Translate content={"toolnames.valve"}/>
                                            </Link>
                                            <Link className={"ui button"} to="/actuatortechnology">
                                                <Translate content={"toolnames.actuator"}/>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default Main_Body;