import { createSlice } from "@reduxjs/toolkit"

const projectSlice =  createSlice({
    name: 'project',
    initialState: {projects: [], projectIds: [] , filteredProjects: []},
    reducers: {
        setProjects: (state, action) => {
            state.projects = action.payload.projects;
            state.projectIds = action.payload.projectIds;
        },
        setFilteredProjects:(state,action) =>{
            state.filteredProjects = action.payload;
        }
    },
});

export const { setProjects,setFilteredProjects } = projectSlice.actions;
export default projectSlice.reducer;