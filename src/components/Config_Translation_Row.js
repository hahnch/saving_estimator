import React, { Component } from 'react';
var counterpart = require('counterpart');
var Translate = require('react-translate-component');


export class Config_Translation_Row extends Component{
    constructor(props)
    {
        super(props);
    }

    render(){
        return(
            <div>
                {this.rowRender()}
            </div>
        );
    }

    rowRender()
    {
        let lis = [];

        for (let i=0; i<this.props.dropdownCount; i++) {
            lis.push(
                <div className={"field sixteen wide column"}>
                    <select defaultValue={counterpart.getLocale()} className={"ui dropdown"} onChange={this.handleChange}>
                        {this.optionRender(i)}
                    </select>
                </div>
            );
        }
        return(
            lis
        );
    }

    optionRender(selectId)
    {
        let lis = [];
        for(let i=0; i<this.props.optionCount[selectId];i++)
        {
            lis.push(
                <option value={this.props.optionValue[selectId][i].toString()}>
                   {this.props.optionValue[selectId][i].toString()}
                </option>
            );
        }
        return(lis);
    }

    handleChange(e) {
        counterpart.setLocale(e.target.value);
    }
}
export default Config_Translation_Row;