import { createSlice } from "@reduxjs/toolkit";

const membersSlice = createSlice ({
    name: 'members',
    initialState: {},
    reducers: {
        setMembersKeyVal(state, action) {
            state = action.payload;
        },
    },
});

export const { setMembersKeyVal } = membersSlice.actions;
export default membersSlice.reducer;