import React, {useReducer} from 'react';

export default ({reducer, initialState, logicFunctions}) => {
// const createDataForContext = ({reducer, initialState, logicFunctions}) => { //OK
// function createDataForContext({reducer, initialState, logicFunctions}) { //OK
    console.log("Vo function createDataForContext");
    const Context = React.createContext();
        
    const Provider = ({children}) => {
        const [state, dispatch] = useReducer(reducer, initialState);
        const logics = {};
        for (let key in logicFunctions) {
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

// export default createDataForContext; //OK
