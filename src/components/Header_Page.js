import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';

export class Header_Page extends Component{
    constructor(props)
    {
        super(props);
    }

    render() {
        return(
            <div className={"page_header"}>
            <div className="ui container">
                <div className="ui centered vertically padded grid">
                    {this.imgRender()}
                </div>
            </div>
            </div>
        );
    }

    imgRender()
    {
        if(this.props.imgName.toString()==="")
        {
            return(
                <div className="eight wide computer twelve wide tablet sixteen wide mobile column">
                    <div className="wrap_logo">
                        <div className="page__headerLogo"></div>
                    </div>
                    <Link className="page__headerLogo components__start_page" to="/">
                        <img src={"/app/images/logo_belimo.png"} className="page__headerLogoImg main_img" role="presentation"/>
                    </Link>
                    <Link className="ui icon button right floated settings_button" to="/settings">
                        <i className="icon settings"></i>
                    </Link>
                </div>
            );
        }
        else{
            return(
            <div className="eight wide computer twelve wide tablet sixteen wide mobile column">
                <div className="wrap_logo">
                    <Link className="page__headerLogo" to={this.props.imgLink.toString()}>
                        <img src={"/app/images/" + this.props.imgName.toString()} className="page__headerLogoImg main_img" role="presentation"/>
                    </Link>
                </div>
                <Link className="page__headerLogo components__start_page" to="/">
                    <img src={"/app/images/logo_belimo.png"} className="page__headerLogoImg main_img" role="presentation"/>
                </Link>
                <Link className="ui icon button right floated settings_button" to="/settings">
                    <i className="icon settings"></i>
                </Link>
            </div>);
        }
    }
}
export default Header_Page;