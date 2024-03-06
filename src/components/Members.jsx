import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setSelectedMemberId } from '../store/slices/members.slice';

const MembersPanel = () => {

    const membersKeyValue = useSelector((state) => state.members.members); // Accessing the correct part of the Redux store
    const dispatch = useDispatch();

    const handleMemberClick = (memberId) => {
        dispatch(setSelectedMemberId(memberId));
    }

    return (
        <div className="left-panel">
            <h2>Members</h2>
            <ul>
                {membersKeyValue && Object.entries(membersKeyValue).map(([memberId, memberName], index) => (
                    <li key={index} onClick={() => handleMemberClick(memberId)}>
                        {memberName}  
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default MembersPanel;
