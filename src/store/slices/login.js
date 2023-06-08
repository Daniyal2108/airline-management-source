import { createSlice } from "@reduxjs/toolkit";
 
const loginSlice = createSlice({ 
	name: 'login',
	initialState: { isLoggin: false },
	reducers: {
		login(state) {
			state.isLoggin = true;
		},
		logout(state) {
			state.isLoggin = false;
		},
	}
 });

 export default loginSlice.reducer;
 export const {login, logout} = loginSlice.actions;