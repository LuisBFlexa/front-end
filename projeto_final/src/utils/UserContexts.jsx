import {useState, createContext, useContext, useEffect} from 'react'
import { api } from './api/api'
import Cookies from "js-cookie"


function setDefaultHeaders (email, authentication_token) {
    api.defaults.headers.common["X-User-Email"] = email;
    api.defaults.headers.common["X-User-Token"] = authentication_token
}

function setCookies(email, authentication_token) {
    Cookies.set("email", email, {expires: 1});
    Cookies.set("authentication_token", authentication_token, {expires: 1});
}

const userContext = createContext(null)

export const UserContextProvider = ({ children }) => {
    const [user, setUser] = useState("")

    async function login( { email, password }) {
        return api.post('/users/login', {email, password}).then((response) => {
            setUser(response.data);
            setDefaultHeaders(user.email, user.authentication_token);
            setCookies(response.data.email, response.data.authentication_token);
            alert("Login realizado com sucesso")
        })
    }

    function logout() {
        setUser(null);
        setDefaultHeaders("","");
        Cookies.remove("email");
        Cookies.remove("authentication_token");
        alert("Deslogado")
    }
    
    useEffect(() => {
        const email = Cookies.get("email");
        const authentication_token = Cookies.get("authentication_token");
        if (email && authentication_token) {
            setDefaultHeaders(email, authentication_token);
            api.get('/users/show', { params: {"user": {"email": email}}})
            .then((response) => {
                setUser(response.data)
            }).catch((err) => {
                console.log(err.response)
            })
        }}, [])

        
    return (
        <userContext.Provider value = {{user, login, logout}}>
            {children}
        </userContext.Provider>
    )
}

export function useUserContext() {
    return useContext(userContext)
}