import React, { Component } from 'react';

export class Input_Row extends Component{
    constructor(props)
    {
        super(props);
    }

    render(){
        return(
            <div className="row">
                <div className="sixteen wide column">
                    <div className={"row_text"}>
                        <span>{this.props.name.toString()}</span>
                    </div>
                </div>
                <div className="row_input_align">
                    <div className={"ui right labeled input"}>
                        <input type={"number"} min={0}/>
                        <div className="ui basic label">
                            {this.props.unit.toString()}
                        </div>
                    </div>

                </div>
            </div>
        );
    }
}
export default Input_Row;