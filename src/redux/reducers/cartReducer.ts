import { createAction, createReducer } from "@reduxjs/toolkit";

const initialState: any  = [];

export const addItem = createAction('ADD_ITEM');
export const removeItem = createAction('REMOVE_ITEM');
export const incrementItem = createAction('INCREMENT_QTD')

export default createReducer(initialState, {
    [addItem.type]: (state, action) => [...state, action.payload],
    [removeItem.type]: (state, action) => state.filter((item: any) => item.id !== action.payload)
})