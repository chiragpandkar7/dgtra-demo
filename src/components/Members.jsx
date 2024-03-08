import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setSelectedMemberId } from '../store/slices/members.slice';

const MembersPanel = () => {

    const membersKeyValue = useSelector((state) => state.members.members);
    const dispatch = useDispatch();

    const handleMemberClick = (memberId) => {
        dispatch(setSelectedMemberId(memberId));
    }
    const selectedMemberId = useSelector((state) => state.members.selectedMemberId);
    return (
        <div className="left-panel">
            <h2>Members</h2>
            <ul>
                {membersKeyValue && Object.entries(membersKeyValue).map(([memberId, memberName], index) => (
                    <li key={index} onClick={() => handleMemberClick(memberId)}
                    style={{
                        color: selectedMemberId === memberId ? 'blue' : 'black',
                        cursor: 'pointer',
                      }}>
                        {memberName}  
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default MembersPanel;
