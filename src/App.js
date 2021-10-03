import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom'
import { Route, Switch } from 'react-router';

import Home from './pages/Home';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';

export function App(){
    return (
        <Router>
            <Switch>
                <Route path="/" exact>
                    <Home/>
                </Route>

                <Route path="/register" exact>
                    <Register/>
                </Route>

                <Route path="/dashboard" exact>
                    <Dashboard/>
                </Route>
            </Switch>
        </Router>
    );
}

export default App;