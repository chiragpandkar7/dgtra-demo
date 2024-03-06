import React from 'react';
import { Typography } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import useProjects from '../hooks/useProjects';
import useMembers from '../hooks/useMembers';
import {  useSelector } from 'react-redux';


const columns = [
  { field: 'projectName', headerName: 'Project List', width: 300 },
  { field: 'docs', headerName: 'Docs', width: 150 },
  { field: 'designCollaboration', headerName: 'Design Collaboration', width: 150 },
  { field: 'modelCoordination', headerName: 'Model Coordination', width: 150 },
  { field: 'takeoff', headerName: 'Takeoff', width: 150 },
  { field: 'autoSpecs', headerName: 'AutoSpecs', width: 150 },
  { field: 'build', headerName: 'Build', width: 150 },
  { field: 'costManagement', headerName: 'Cost Management', width: 150 },
  { field: 'insight', headerName: 'Insight', width: 150 },
];


const ProjectTable = () => {
  const {projects , projectIds} = useProjects();
  useMembers();
  const selectedMemberId = useSelector((state)=>state.members.selectedMemberId);
  const membersProjects = useSelector((state) => state.membersProjects.projects)
  
  const selectedMembersProjectIds = selectedMemberId ? membersProjects[selectedMemberId] || [] : [];
  
  const filteredProjects =  [];
  //const dispatch = useDispatch();
  for (let i = 0; i < selectedMembersProjectIds.length; i++) {
    const projectId = selectedMembersProjectIds[i];

    const matchingProject = projects.find(project => project.id === projectId);

    if (matchingProject) {
        filteredProjects.push(matchingProject);
    }
  }


  console.log(filteredProjects);
  //dispatch(setProjects({ filteredProjects: filteredProjects}));
  const rows = filteredProjects.map((project, index) => ({
    id: index + 1,
    projectName: project.name,
    docs: true,
    designCollaboration: true,
    modelCoordination: true,
    takeoff: true,
    autoSpecs: true,
    build: true,
    costManagement: true,
    insight: true,
  }));
  return (
    <div style={{ height: '80vh', width: '100%', marginTop: '20px' }} className='main-content'>
      <Typography variant="h3">Project Table</Typography>
      {filteredProjects.length > 0 ? (
        <DataGrid
          checkboxSelection
          rows={rows}
          columns={columns}
          pagination
        />
      ) : (
        <p>No projects found.</p>
      )}

    </div>
  );
};

export default ProjectTable;
