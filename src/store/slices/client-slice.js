import { createSlice } from "@reduxjs/toolkit";
 
const clientSlice = createSlice({ 
	name: 'client',
	initialState: { data: [], obj: null },
	reducers: {
		getClientData(state, actions) {
			const clientObject = actions.payload;
            const existingObj = state.data.find(obj => obj.client_id === clientObject.client_id);
            const index = state.data.findIndex(obj => obj.client_id === clientObject.client_id);
            if (existingObj) {
                state.data[index] = clientObject;
            } else {
                state.data.push(clientObject);
            }
		},
        delClientData(state, actions) {
            const id = actions.payload;
            state.data = state.data.filter(obj => obj.client_id !== id );
        },
        editClientData(state, actions) {
            const id = actions.payload;
            if (id === null) {
                state.obj = null;
                return;
            }   
            const findedobj = state.data.find(obj => obj.client_id === id);
            state.obj =  findedobj;
        }
		
	}
 });

 export default clientSlice.reducer;
 export const {getClientData,delClientData, editClientData} = clientSlice.actions;