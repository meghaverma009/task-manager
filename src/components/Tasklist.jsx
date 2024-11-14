function TaskList({ tasks, onToggleComplete, onDelete }) {
  return (
    <div className="taskList">
      <ul>
        {tasks && tasks.length > 0 && tasks.map(task => (
          <li key={task.id} className="taskCard">
            <div className="taskCardContent">
              <h2 className="taskTitle">{task.title}</h2>
              <p className="taskDescription">{task.description}</p>
              <p className="taskDueDate">Due: {task.dueDate}</p>
            </div>
            <div className="taskActions">
              <button className="taskButton completeButton" onClick={() => onToggleComplete(task.id)}>
                {task.completed ? 'Undo' : 'Complete'}
              </button>
              <button className="taskButton deleteButton" onClick={() => onDelete(task.id)}>Delete</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TaskList;
