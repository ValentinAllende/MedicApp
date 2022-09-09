import {createContext, useCallback, useContext, useMemo, useState} from 'react';

export const AuthContext = createContext();
//funcion autenticadora:
export function AuthContextProvider({children}){
    const [isAuth, setAuth] = useState(localStorage.getItem('auth-token'))

    const login = useCallback(()=>{
        localStorage.setItem('session', true)
        setAuth(true)
    },[])

    const logout = useCallback(()=>{
        localStorage.clear();
        setAuth(false)
    },[])

    const value = useMemo(()=>({
        login,
        logout,
        isAuth
    }),[login, logout, isAuth])

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}


//creamos el contexto: retornando el contexto creado anteriormente

export function useAuthContext() {
    return useContext(AuthContext)
}