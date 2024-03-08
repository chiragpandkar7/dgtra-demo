import projectReducer from "./slices/project.slice";
import membersProjectsReducer from "./slices/memberProject.slice";
import membersReducer from "./slices/members.slice";
import permissionsReducer from "./slices/permissions.slice";

const reducer = {
    project: projectReducer,
    membersProjects: membersProjectsReducer,
    members: membersReducer,
    permissions: permissionsReducer,
};

export default reducer;