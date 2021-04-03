import React, {useState} from 'react'
import AppContext from './AppContext'

const AppContextWrapper = ({children}) => {
    const [currentUser, setCurrentUser] = useState([])

    const addUser = (user) => {
        setCurrentUser(state => [...currentUser, {...user}])
    }
    //add values here
    return (
        <div>
            <AppContext.Provider value={{currentUser, addUser}}>
            {children}
            </AppContext.Provider>
        </div>
    )
}

export default AppContextWrapper