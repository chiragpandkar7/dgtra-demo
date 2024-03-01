import React from 'react';
import useMembers from '../hooks/useMembers';

const MembersPanel = () => {
    const { members } = useMembers();

    return (
        <div className="left-panel">
            <h2>Members</h2>
            <ul>
                {members.map((member, index) => (
                    <li key={index}>{member}</li>
                ))}
            </ul>
        </div>
    );
};

export default MembersPanel;
