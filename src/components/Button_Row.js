import React, { Component } from 'react';

export class Button_Row extends Component{
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
                <div className="sixteen wide column">
                    <div className="ui buttons row_button">
                        {this.rowRender()}
                    </div>
                </div>
            </div>
        );
    }

    rowRender()
    {
        let lis = [];

        for (let i=0; i<this.props.countButton; i++) {
            lis.push(
                <button className={"ui button"}>
                    <span>{this.props.names[i].toString()}</span>
                </button>
            );
        }
        return(
            lis
        )
    }
}
export default Button_Row;