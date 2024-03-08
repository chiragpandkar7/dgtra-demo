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
        },
        setMembersPermissions(state, action) {
            state.permissions = action.payload.products;
        }
    },
});

export const { setMembersKeyVal, setSelectedMemberId,setMembersPermissions } = membersSlice.actions;
export default membersSlice.reducer;