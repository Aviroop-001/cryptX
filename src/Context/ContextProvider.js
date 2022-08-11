import {createContext, React, useContext, useState} from 'react'

export const Context = createContext();

export const ContextProvider = ({children}) =>{

    const [currency, setcurrency] = useState('usd');
    const [selectedCoin, setselectedCoin] = useState();

    return (
        <Context.Provider value={{
            currency, setcurrency, selectedCoin, setselectedCoin
        }}>
            {children}
        </Context.Provider>
    )
}

export const ContextState = () =>{
    return useContext(Context);
}
