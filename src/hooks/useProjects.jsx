import { useEffect } from 'react';
import { getProjects } from '../apis/apsServices';
import { useDispatch, useSelector } from 'react-redux';
import { setProjects } from '../store/slices/project.slice';


const useProjects = () => {
  const { projects, projectIds, filteredProjects } = useSelector((state) => state.project);
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

  
  return {
    projects,
    projectIds,
  };
};

export default useProjects;
