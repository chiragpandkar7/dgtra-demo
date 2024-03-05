import { createSlice } from "@reduxjs/toolkit";


const membersProjectsSlice = createSlice ({
    name: 'membersProjects',
    initialState: {},
    reducers: {
        setMembersProjects(state, action) {
            state = action.payload;
        },
    },
});

export const { setMembersProjects } = membersProjectsSlice.actions;
export default membersProjectsSlice.reducer;