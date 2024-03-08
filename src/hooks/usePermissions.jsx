import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { permissions } from '../store/slices/permissions.slice';
import { getPermissions } from '../apis/apsServices';

const usePermissions = (projectId, memberId) => {
  const storedPermissions = useSelector((state) => state.permissions);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchPermissions = async () => {
      try {
        const response = await getPermissions(projectId, memberId);
        const fetchedPermissions = response.data;

        dispatch(permissions(fetchedPermissions));
      } catch (error) {
        console.error('Error fetching permissions:', error);
      }
    };

    fetchPermissions();
  }, [projectId, memberId, dispatch]);

  return storedPermissions;
};

export default usePermissions;
