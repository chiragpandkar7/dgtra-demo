import { useEffect, useState } from 'react'
import { getMembers } from '../apis/apsServices';
import { useSelector } from 'react-redux';

function removeDuplicates(arr) {
  let unique = [];
  arr.forEach(element => {
    if (!unique.includes(element)) {
      unique.push(element);
    }
  });
  return unique;
}

const useMembers = () => {
  const projectIds = useSelector((state) => state.project.projectIds);
  const [members, setMembers] = useState([]);
  const fetchMembers = async () => {
    try {
      const fetchedMembers = await Promise.all(
        projectIds.map(async (projectId) => {
          const response = await getMembers(projectId);
          return response.data.results.map((member) => member.name);
        })
      );

      const flattenedMembers = removeDuplicates(fetchedMembers.flat());

      setMembers(flattenedMembers);
    } catch (error) {
      console.error('Error fetching members:', error);
    }
  };

  useEffect(() => {
    if (projectIds) {
      fetchMembers();
    }
  }, [projectIds]);

  return {
    members,
  };


}

export default useMembers