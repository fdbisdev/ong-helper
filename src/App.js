import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom'
import { Route, Switch } from 'react-router';

import Home from './pages/Home';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import EditingProfile from './pages/EditingProfile'
import Cases from './pages/Cases';
import AddONG from './pages/AddONG';

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

                <Route path="/editingProfile" exact>
                    <EditingProfile/>
                </Route>

                <Route path="/cases" exact>
                    <Cases/>
                </Route>

                <Route path="/addong" exact>
                    <AddONG />
                </Route>
               
            </Switch>
        </Router>
    );
}

export default App;