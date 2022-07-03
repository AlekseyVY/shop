import { configureStore } from '@reduxjs/toolkit'
import {cardReducer} from "./reducers/cardDataReducer";

export const store = configureStore({
    reducer: {
        card: cardReducer.reducer,
    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
