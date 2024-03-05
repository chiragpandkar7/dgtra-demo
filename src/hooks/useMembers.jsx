import { useEffect, useState } from 'react'
import { getMembers } from '../apis/apsServices';
import { useSelector, useDispatch } from 'react-redux';
import { setMembersProjects } from '../store/slices/memberProject.slice';
import { setMembersKeyVal } from '../store/slices/members.slice';


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
  const dispatch = useDispatch();
  const fetchMembers = async () => {
    try {
      const newMembersProjects = {};
      const newMembers = {};

      const fetchedMembers = await Promise.all(
        projectIds.map(async (projectId) => {
          const response = await getMembers(projectId);

          const members = response.data.results;
          members.forEach((member) => {
            const memberId = member.autodeskId;
            const memberName = member.name;

            if(newMembersProjects[memberId]) {
              newMembersProjects[memberId].push(projectId);
            } else {
              newMembersProjects[memberId] = [projectId];
            }

            if(!newMembers[memberId]) {
              newMembers[memberId] = memberName;
            }
          })

          return response.data.results.map((member) => member.name);
        })
      );

      const flattenedMembers = removeDuplicates(fetchedMembers.flat());
      dispatch(setMembersProjects({newMembersProjects}))
      dispatch(setMembersKeyVal({newMembers}))
      setMembers(flattenedMembers);
      console.log(newMembers)
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