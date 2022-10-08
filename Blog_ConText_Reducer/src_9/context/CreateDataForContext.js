import React, {useReducer} from 'react';
import {View, StyleSheet} from 'react-native';

const CreateDataForContext = ({Context, reducer, initialState, logicFunctions, children}) => {
    console.log("Vo CreateDataForContext");
    const [state, dispatch] = useReducer(reducer, initialState); 
    /* OK
    const addOneBlog = logicFunctions.addOneBlog(dispatch);
    const removeOneBlog = logicFunctions.removeOneBlog(dispatch);
    return (
        <Context.Provider value={{ state, addOneBlog, removeOneBlog }}>
            {children}
        </Context.Provider>
    );*/
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

export default CreateDataForContext;
