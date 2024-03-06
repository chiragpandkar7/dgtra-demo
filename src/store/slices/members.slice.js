import { createSlice } from "@reduxjs/toolkit";

const membersSlice = createSlice ({
    name: 'members',
    initialState: {},
    members:null,
    selectedMemberId: null,
    reducers: {
        setMembersKeyVal(state, action) {
            state.members = action.payload.newMembers;
        },
        setSelectedMemberId(state, action) {
            state.selectedMemberId = action.payload;
        }
    },
});

export const { setMembersKeyVal, setSelectedMemberId } = membersSlice.actions;
export default membersSlice.reducer;