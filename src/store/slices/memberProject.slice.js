import { createSlice } from "@reduxjs/toolkit";


const membersProjectsSlice = createSlice ({
    name: 'membersProjects',
    initialState: {},
    projects:null,
    reducers: {
        setMembersProjects(state, action) {
            state.projects = action.payload.newMembersProjects;
        },
        updateMemberPermission(state, action) {
            const { projectId} = action.payload;
            
          },
    },
});

export const { setMembersProjects } = membersProjectsSlice.actions;
export default membersProjectsSlice.reducer;