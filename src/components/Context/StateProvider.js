// Data layer - a component which is used to let every other component update the data/values provided to it
// initialState - is how the data/value originally/initially looks like
// reducer - a component which is used to manipulate the data/values

import React, { createContext, useContext, useReducer } from 'react'

// Prepares the Data layer
export const StateContext = createContext();

// Wrap the app and provide the Data layer
export const StateProvider = ({ reducer, initialState, children}) => 
<StateContext.Provider value = {useReducer(reducer, initialState)}>
    {children}
</StateContext.Provider>;

// Pull the information from the data layer
export const useStateValue = () => useContext(StateContext);