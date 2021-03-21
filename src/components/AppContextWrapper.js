import React from 'react'
import AppContext from './AppContext'

const AppContextWrapper = ({children}) => {
    return (
        <div>
            <AppContext.Provider>
            {children}
            </AppContext.Provider>
        </div>
    )
}

export default AppContextWrapper