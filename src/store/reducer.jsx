import projectReducer from "./slices/project.slice";
import membersProjectsReducer from "./slices/memberProject.slice";
import membersReducer from "./slices/members.slice";

const reducer = {
    project: projectReducer,
    membersProjects: membersProjectsReducer,
    members: membersReducer
};

export default reducer;