import {createContext, React, useContext, useState} from 'react'

export const Context = createContext();

export const ContextProvider = ({children}) =>{

    const [currency, setcurrency] = useState("usd");
    const [selectedCoin, setselectedCoin] = useState();
    const [historyRange, sethistoryRange] = useState("7");
    const [allCoinsOrder, setallCoinsOrder] = useState("market_cap_asc");

    return (
        <Context.Provider value={{
            currency, setcurrency, selectedCoin, setselectedCoin, historyRange, sethistoryRange,allCoinsOrder, setallCoinsOrder 
        }}>
            {children}
        </Context.Provider>
    )
}

export const ContextState = () =>{
    return useContext(Context);
}
