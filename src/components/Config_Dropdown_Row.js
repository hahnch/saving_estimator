import React, { Component } from 'react';

export class Config_Dropdown_Row extends Component{
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
                    <select className={"ui dropdown"}>
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
}
export default Config_Dropdown_Row;