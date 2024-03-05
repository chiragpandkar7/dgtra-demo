import React from 'react';
import { Typography } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import useProjects from '../hooks/useProjects';

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
  const {projects , rows, projectIds, selectedMemberId} = useProjects();

  const filteredProjects = selectedMemberId
    ? projects.filter((project) => projectIds[selectedMemberId].includes(project.id))
    : projects;


  console.log(projectIds);

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
