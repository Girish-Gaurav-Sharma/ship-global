import React from 'react';
import TaskItem from './TaskItem';
import './Category.css'; 

const Category = ({content}) => {
    const tasks = ['task 1', 'task 2', 'task 3'];

    return (
        <div className="category-container">
            <h3>{key}</h3>
            {tasks.map((task, index) => (
                <TaskItem key={index} task={task} />
            ))}
        </div>
    );
};

export default Category;
