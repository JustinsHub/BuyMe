import React, {useContext} from 'react'
import {Switch, Route} from 'react-router-dom'
import Home from './Home'
import Login from './users/Login'
import SignUp from './users/SignUp'
import NotFound from './NotFound'
import AppContext from './AppContext'
import EnsureLoginRoute from './EnsureLoginRoute'
import Profile from './users/Profile'

const Routes = () => {
    const {login, register} = useContext(AppContext)
    //usecontext here and pass it down to each component
    return (
        <div>
            <Switch>
                <Route exact path="/login">
                    <Login login={login}/>
                </Route>

                <Route exact path="/signup">
                    <SignUp register={register}/>
                </Route>

                 {/* change into private route soon */}
                <Route exact path="/profile">
                <Profile/>
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