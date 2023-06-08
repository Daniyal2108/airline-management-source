import { createSlice } from "@reduxjs/toolkit";
 
const airplaneSlice = createSlice({ 
	name: 'airplane',
	initialState: { data: [], obj: null },
	reducers: {
		getAirplaneData(state, actions) {
			const clientObject = actions.payload;
            const existingObj = state.data.find(obj => obj.airplane_id === clientObject.airplane_id);
            const index = state.data.findIndex(obj => obj.airplane_id === clientObject.airplane_id);
            if (existingObj) {
                state.data[index] = clientObject;
            } else {
                state.data.push(clientObject);
            }
		},
        delAirplaneData(state, actions) {
            const id = actions.payload;
            state.data = state.data.filter(obj => obj.airplane_id !== id );
        },
        editAirplaneData(state, actions) {
            const id = actions.payload;
            if (id === null) {
                state.obj = null;
                return;
            }   
            const findedobj = state.data.find(obj => obj.airplane_id === id);
            state.obj =  findedobj;
        }
		
	}
 });

 export default airplaneSlice.reducer;
 export const {delAirplaneData, editAirplaneData, getAirplaneData} = airplaneSlice.actions;