import { useEffect } from 'react';
import { getProjects } from '../apis/apsServices';
import { useDispatch, useSelector } from 'react-redux';
import { setProjects } from '../store/slices/project.slice';

const useProjects = () => {
  const { projects, projectIds } = useSelector((state) => state.project);
  const dispatch = useDispatch();
    console.log("inside useProjects")
  const fetchProjects = async () => {
    try {
      const response = await getProjects();
      const fetchedProjects = response.data.results;

      const fetchedProjectIds = fetchedProjects.map((project) => project.id);

      dispatch(setProjects({ projects: fetchedProjects, projectIds: fetchedProjectIds }));
    } catch (error) {
      console.error('Error fetching projects:', error);
    }
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  const rows = projects.map((project, index) => ({
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

  return {
    projects,
    rows,
    projectIds,
  };
};

export default useProjects;
