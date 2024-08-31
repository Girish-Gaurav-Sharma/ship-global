import React from 'react';
import './TaskItem.css';

const TaskItem = ({ task }) => {
    return (
        <div className="task-item">
            <span>{task}</span>
            <div className="task-actions">
                <button className="action-btn">&#8592;</button>
                <button className="action-btn">&#8594;</button>
            </div>
        </div>
    );
};

export default TaskItem;
