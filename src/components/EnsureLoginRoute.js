import React, {useContext} from 'react'
import AppContext from './AppContext'
import {Route, Redirect} from 'react-router-dom'

const EnsureLoginRoute = ({exact, path, children}) => {
    const {currentUser} = useContext(AppContext)

    if(!currentUser) { 
    <Redirect to='/login'/>
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