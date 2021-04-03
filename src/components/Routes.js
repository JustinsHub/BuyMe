import React, {useContext} from 'react'
import {Switch, Route} from 'react-router-dom'
import Home from './Home'
import Login from './users/Login'
import SignUp from './users/SignUp'
import NotFound from './NotFound'
import AppContext from './AppContext'

const Routes = () => {
    const {addUser} = useContext(AppContext)
    //usecontext here and pass it down to each component
    return (
        <div>
            <Switch>
                <Route exact path="/login">
                    <Login/>
                </Route>

                <Route exact path="/signup">
                    <SignUp addUser={addUser}/>
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