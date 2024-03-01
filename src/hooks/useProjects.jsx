import {useState, useEffect} from 'react'
import { getProjects } from '../apis/apsServices';
 
const useProjects = () => {
    const [projects, setProjects] = useState([]);
    const [projectIds, setProjectIds] = useState([]);
    const fetchProjects = async () => {
        try {
                const response = await getProjects();
                const fetchedProjects = response.data.results;

                const fetchedProjectIds = fetchedProjects.map((project) => project.id);
                setProjectIds(fetchedProjectIds);
                setProjects(fetchedProjects);
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
        projects , rows, projectIds
    };
}

export default useProjects

