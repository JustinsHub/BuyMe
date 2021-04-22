import React, {useContext} from 'react'
import AppContext from './AppContext'
import {Route, Redirect} from 'react-router-dom'

const EnsureLoginRoute = ({exact, path, children}) => {
    const {currentUser} = useContext(AppContext)

    //must have a token registered id to currentUser in order to have authorization
    //must return in order to execute redirect
    //fix redirect for user (must log in twice in order to access. Why?)
    if(!currentUser) { 
    return <Redirect exact to ="/login"/>
    }

    return (
        <div>
            <Route exact={exact} path={path}>
            {children}
            </Route>
        </div>
    )
}

export default EnsureLoginRoute