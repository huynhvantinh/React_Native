import React, {useReducer, createContext} from 'react';
import {View, StyleSheet} from 'react-native';

//const createDataForContext = ({reducer, initialState, logicFunctions}) => {
function createDataForContext({reducer, initialState, logicFunctions}) {
    console.log("Vo function createDataForContext");
    const Context = createContext();
        
    const Provider = ({children}) => {
        const [state, dispatch] = useReducer(reducer, initialState);
        const logics = {};
        for (const key in logicFunctions) {
            logics[key] = logicFunctions[key](dispatch);
        }
        return (
            <Context.Provider value={{ state, ...logics }}>
                {children}
            </Context.Provider>
        );
    }

    return {Context, Provider};
}

export default createDataForContext;
