import React, { useContext } from 'react';
import { TaskListContext } from '../context/TaskListContext';
import Task from './Task';
import { v1 as uuid } from 'uuid';

const TaskList = () => {
  const { tasks } = useContext(TaskListContext);
  return (
    <div>
      {tasks.length ? (
        <ul className="list">
          {tasks.map((task) => {
            return <Task task={task} key={uuid()} />;
          })}
        </ul>
      ) : (
        <div className="no-tasks">There are currently no tasks</div>
      )}
    </div>
  );
};

export default TaskList;
