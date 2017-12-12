/**
 * Created by Christian on 07.11.2017.
 */
import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import ActuatorTechnology_Page from './ActuatorTechnology_Page';
import ValveTightness_Page from './ValveTightness_Page';
import Main_Page from './Main_Page';
import Config_Page from './Config_Page';

class App extends Component {
    render() {
        return (
            <Router>
                <div>
                    <Switch>
                        <Route  exact path='/' component={Main_Page}/>
                        <Route  path='/settings' component={Config_Page}/>
                        <Route  path='/actuatortechnology' component={ActuatorTechnology_Page} />
                        <Route  path='/valvetightness' component={ValveTightness_Page}/>
                    </Switch>
                </div>
            </Router>
        );
    }
}
export default App;