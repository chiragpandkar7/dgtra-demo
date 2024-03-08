import React, { useEffect, useState } from 'react';
import { Typography } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import useProjects from '../hooks/useProjects';
import useMembers from '../hooks/useMembers';
import { useSelector } from 'react-redux';
import Switch from '@mui/material/Switch';
import { getPermissions } from '../apis/apsServices';

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
  const { projects } = useProjects();
  useMembers();
  const selectedMemberId = useSelector((state) => state.members.selectedMemberId);
  const membersProjects = useSelector((state) => state.membersProjects.projects);

  const selectedMembersProjectIds = selectedMemberId ? membersProjects[selectedMemberId] || [] : [];

  const filteredProjects = projects.filter((project) => selectedMembersProjectIds.includes(project.id));

  const [projectsWithPermissions, setProjectsWithPermissions] = useState({});

  useEffect(() => {
    const fetchProjectsWithPermissions = async () => {
      try {
        const projectsWithPermissions = await Promise.all(
          filteredProjects.map(async (project) => {
            const permissionsResponse = await getPermissions(project.id, selectedMemberId);
            const permissions = permissionsResponse.data.products;
            console.log(permissionsResponse);
            return {
              projectId: project.id,
              permissions,
            };
          })
        );

        const projectPermissionsMap = {};
        projectsWithPermissions.forEach((project) => {
        projectPermissionsMap[project.projectId] = project.permissions;
        console.log(projectPermissionsMap);
    });

    setProjectsWithPermissions(projectPermissionsMap);
      } catch (error) {
        console.error('Error fetching permissions:', error);
      }
    };

    if (selectedMemberId && filteredProjects.length > 0) {
      fetchProjectsWithPermissions();
    }
  }, [selectedMemberId, filteredProjects]);

  const rows = filteredProjects.map((project, index) => ({
    id: index + 1,
    projectName: project.name,
    docs:projectsWithPermissions[project.id]?projectsWithPermissions[project.id][2].access:" "
    // <Switch checked={Boolean(project.docs)} />
    ,
    designCollaboration: projectsWithPermissions[project.id]?projectsWithPermissions[project.id][3].access:" "
    // <Switch checked={Boolean(project.designCollaboration)} />
    ,
    modelCoordination: projectsWithPermissions[project.id]?projectsWithPermissions[project.id][5].access:" "
    // <Switch checked={Boolean(project.modelCoordination)} />
    ,
    takeoff: projectsWithPermissions[project.id]?projectsWithPermissions[project.id][6].access:" "
    // <Switch checked={Boolean(project.takeoff)} />
    ,
    autoSpecs: projectsWithPermissions[project.id]?projectsWithPermissions[project.id][7].access:" "
    // <Switch checked={Boolean(project.autoSpecs)} />
    ,
    build: projectsWithPermissions[project.id]?projectsWithPermissions[project.id][4].access:" "
    // <Switch checked={Boolean(project.build)} />
    ,
    costManagement: projectsWithPermissions[project.id]?projectsWithPermissions[project.id][8].access:" "
    // <Switch checked={Boolean(project.costManagement)} />
    ,
    insight: projectsWithPermissions[project.id]?projectsWithPermissions[project.id][2].access:" "
    // <Switch checked={Boolean(project.insight)} />,
  }));

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
