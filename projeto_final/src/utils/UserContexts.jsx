import {useState, createContext, useContext} from 'react'

const userContext = createContext(null)

export const UserContextProvider = ({ children }) => {
    const [user, setUser] = useState("")

    return (
        <userContext.Provider value = {{user, setUser}}>
            {children}
        </userContext.Provider>
    )
}

export function useUserContext() {
    return useContext(userContext)
}