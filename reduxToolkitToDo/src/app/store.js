import {configureStore} from '@reduxjs/toolkit'
import todoRducer from '../features/todo/todoSlice'

export const store = configureStore({
    reducer: todoRducer

}) 