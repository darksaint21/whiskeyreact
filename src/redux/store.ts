// store is like a mini temp in the middle database

import {configureStore} from '@reduxjs/toolkit';
import {reducer} from './slices/RootSLices'

export const store =configureStore({
    reducer,
    devTools: true,
})