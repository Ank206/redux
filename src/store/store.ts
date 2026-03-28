import {configureStore} from "@reduxjs/toolkit"
import counterReducers from "../slices/buttonSlice" 

export const store = configureStore({
	reducer:{
		counter: counterReducers
	}
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export type AppStore = typeof store
