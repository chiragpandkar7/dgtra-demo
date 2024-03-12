import React, { useEffect, useState } from 'react';
import { Typography } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import useProjects from '../hooks/useProjects';
import useMembers from '../hooks/useMembers';
import { useDispatch, useSelector } from 'react-redux';
import Switch from '@mui/material/Switch';
import { getPermissions } from '../apis/apsServices';

const ProjectTable = () => {
  const { projects } = useProjects();
  useMembers();
  const selectedMemberId = useSelector((state) => state.members.selectedMemberId);
  const membersProjects = useSelector((state) => state.membersProjects.projects);
  console.log(membersProjects)
  const selectedMembersProjectIds = selectedMemberId
    ? membersProjects[selectedMemberId]?.map((project) => project.projectId) || []
    : [];

  const filteredProjects = projects.filter((project) =>
    selectedMembersProjectIds.includes(project.id)
  );


  let handleSwitch=( access ) =>{
    console.log(access)

  
    const permissionKey = access.field;
  
    const newAccess = access[permissionKey]?.access === 'administrator' ? 'none' : 'administrator';
  

  }
  

  const columns = [
    { field: 'projectName', headerName: 'Project List', width: 300 },
    {
      field: 'docs',
      headerName: 'Docs',
      width: 150,
      renderCell: (params) => {
        const { row } = params;
     
        return <Switch onClick={()=>handleSwitch(row)} checked={row.docs?.access === 'administrator' || row.docs?.access === 'member'} />
      },
  
    },
    {
      field: 'designCollaboration',
      headerName: 'Design Collaboration',
      width: 150,
      renderCell: (params) => {
        const { row } = params;
        
        return <Switch onClick={()=>handleSwitch(row)} checked={row.designCollaboration?.access === 'administrator' || row.designCollaboration?.access === 'member'} />
      },
    },
    {
      field: 'modelCoordination',
      headerName: 'Model Coordination',
      width: 150,
      renderCell: (params) => {
        const { row } = params;
        return<Switch onClick={()=>handleSwitch(row)} checked={row.modelCoordination?.access === 'administrator' || row.modelCoordination?.access === 'member'} />
      },
    },
    {
      field: 'takeoff',
      headerName: 'Takeoff',
      width: 150,
      renderCell: (params) => {
        const { row } = params;
        return <Switch onClick={()=>handleSwitch(row)} checked={row.takeoff?.access === 'administrator' || row.takeoff?.access === 'member'} />
      },
    },
    {
      field: 'autoSpecs',
      headerName: 'AutoSpecs',
      width: 150,
      renderCell: (params) => {
        const { row } = params;
        return <Switch onClick={()=>handleSwitch(row)} checked={row.autoSpecs?.access === 'administrator' || row.autoSpecs?.access === 'member'} />
      },
    },
    {
      field: 'build',
      headerName: 'Build',
      width: 150,
      renderCell: (params) => {
        const { row } = params;
        return <Switch onClick={()=>handleSwitch(row)} checked={row.build?.access === 'administrator' || row.build?.access === 'member'} />
      },
    },
    {
      field: 'costManagement',
      headerName: 'Cost Management',
      width: 150,
      renderCell: (params) => {
        const { row } = params;
        return <Switch onClick={()=>handleSwitch(row)} checked={row.costManagement?.access === 'administrator' || row.costManagement?.access === 'member'} />
      },
    },
    {
      field: 'insight',
      headerName: 'Insight',
      width: 150,
      renderCell: (params) => {
        const { row } = params;
        return<Switch onClick={()=>handleSwitch(row)} checked={row.insight?.access === 'administrator' || row.insight?.access === 'member'} />
      },
    },
  ];

  const rows = filteredProjects.map((project) => {
    const projectPermissions =
      membersProjects[selectedMemberId].find((item) => item.projectId === project.id)?.products || [];

    return {
      id: project.id,
      projectName: project.name,
      docs: projectPermissions.find((item) => item.key === 'docs'),
      designCollaboration: projectPermissions.find((item) => item.key === 'designCollaboration'),
      modelCoordination: projectPermissions.find((item) => item.key === 'modelCoordination'),
      takeoff: projectPermissions.find((item) => item.key === 'takeoff'),
      autoSpecs: projectPermissions.find((item) => item.key === 'autoSpecs'),
      build: projectPermissions.find((item) => item.key === 'build'),
      costManagement: projectPermissions.find((item) => item.key === 'cost'),
      insight: projectPermissions.find((item) => item.key === 'insight'),
      projectAdministration: projectPermissions.find((item) => item.key === 'projectAdministration'),
    };
  });

  return (
    <div style={{ height: '80vh', width: '100%', marginTop: '20px' }} className="main-content">
      <Typography variant="h3">Project Table</Typography>
      {filteredProjects.length > 0 ? (
        <DataGrid checkboxSelection rows={rows} columns={columns} pagination />
      ) : (
        <p>No projects found.</p>
      )}
    </div>
  );
};

export default ProjectTable;
