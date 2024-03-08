import { createSlice } from "@reduxjs/toolkit";


const permissionsSlice = createSlice ({
    name: 'permissions', 
    initialState: {},
    reducers: {
        permissions(state, action) {
            state = action.payload;
        },
    },
});

export const { permissions } = permissionsSlice.actions;
export default permissionsSlice.reducer;