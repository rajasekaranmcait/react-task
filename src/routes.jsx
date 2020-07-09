import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Components/home';
import Info from './Components/info';

class Routes extends Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route exact path="/"> <Home /></Route>
                    <Route exact path="/info/:item" render={(props) => <Info {...props} />} />
                </Switch>
            </Router>
        )
    }
}
export default Routes;