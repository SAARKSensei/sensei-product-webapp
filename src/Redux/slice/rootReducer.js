"use client";

import { combineReducers } from '@reduxjs/toolkit';
import parentReducer from './parentSlice';
import childrenReducer from './childrenSlice';
import currentuserslice from './currentuserslice';


const rootReducer = combineReducers({
    parents: parentReducer,
    children: childrenReducer,
    currentUser: currentuserslice,
});


export default rootReducer;