import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Home from './Home'
import Login from './Login'
import SignUp from './SignUp'
import NotFound from './NotFound'

const Routes = () => {
    return (
        <div>
            <Switch>
                <Route exact path="/login">
                    <Login/>
                </Route>

                <Route exact path="/signup">
                    <SignUp/>
                </Route>

                <Route exact path="/">
                    <Home/>
                </Route>
                
                <Route>
                    <NotFound/>
                </Route>
            </Switch>
        </div>
    )
}

export default Routes