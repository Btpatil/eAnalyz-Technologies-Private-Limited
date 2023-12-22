import { configureStore } from "@reduxjs/toolkit";
import authRedicer from "../features/auth/authSlice"

export const store = configureStore({
    reducer: {
        auth: authRedicer
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch