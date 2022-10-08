import React, {useReducer, createContext} from 'react';
import {View, StyleSheet} from 'react-native';

const createDataForContext = ({reducer, initialState, logicFunctions}) => {
    console.log("Vo function createDataForContext");
    const Context = createContext()
    // console.log(logicFunctions);
    // console.log("Vo 1");
    
    const functionCreate = ()=>{
        const [state, dispatch] = useReducer(reducer, initialState); 
        const logics = {};
        // console.log("===============logicFunctions:");
        // console.log(logicFunctions);
        // console.log("===============logicFunctions:");
        for (const key in logicFunctions) {
            logics[key] = logicFunctions[key](dispatch);
        }
        const Provider = ({children}) => (
            <Context.Provider value={{ state, ...logics }}>
                {children}
            </Context.Provider>
        );
        return Provider;
    }

    return {Context, functionCreate};
}

export default createDataForContext;
