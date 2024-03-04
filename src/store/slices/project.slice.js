import { createSlice } from "@reduxjs/toolkit"

const projectSlice =  createSlice({
    name: 'project',
    initialState: {projects: [], projectIds: [] },
    reducers: {
        setProjects: (state, action) => {
            state.projects = action.payload.projects;
            state.projectIds = action.payload.projectIds;
        },
    },
});

export const { setProjects } = projectSlice.actions;
export default projectSlice.reducer;