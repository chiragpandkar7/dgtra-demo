import React from 'react';
import { Typography } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import useProjects from '../hooks/useProjects';
import useMembers from '../hooks/useMembers';

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
  const {projects , rows, projectIds} = useProjects();

  //console.log(members);
  console.log(projectIds);

  return (
    <div style={{ height: '80vh', width: '100%', marginTop: '20px' }} className='main-content'>
      <Typography variant="h3">Project Table</Typography>
      {projects.length > 0 ? (
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