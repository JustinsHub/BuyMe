import React, {useContext} from 'react'
import {Switch, Route} from 'react-router-dom'
import Home from './Home'
import Login from './users/Login'
import SignUp from './users/SignUp'
import NotFound from './NotFound'
import AppContext from './AppContext'
import EnsureLoginRoute from './EnsureLoginRoute'
import Profile from './users/Profile'
import ProfileEdit from './users/ProfileEdit'
import AccessError from './users/AccessError'

const Routes = () => {
    const {login, register, currentUser} = useContext(AppContext)
    return (
        <div>
            <Switch>
                <Route exact path="/login">
                    <Login login={login} user={currentUser}/>
                </Route>

                <Route exact path="/signup">
                    <SignUp register={register} user={currentUser}/>
                </Route>

                <EnsureLoginRoute exact path="/profile">
                    <Profile currentUser={currentUser}/>
                </EnsureLoginRoute>

                <EnsureLoginRoute exact path="/profile/edit">
                    <ProfileEdit currentUser={currentUser}/>
                </EnsureLoginRoute>

                <Route exact path="/">
                    <Home/>
                </Route>
            
                <Route exact path="/access/error">
                    <AccessError/>
                </Route>

                <Route>
                    <NotFound/>
                </Route>
            </Switch>
        </div>
    )
}

export default Routes