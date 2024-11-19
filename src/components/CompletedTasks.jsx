function CompletedTasks({ tasks = [], onToggleComplete, onDelete }) {
  console.log("Completed tasks", tasks);
  const completedTasks = tasks.filter((task) => task && task.completed);
  return (
    <div>
      <h1> Completed Tasks</h1>
      {completedTasks.length === 0 ? (
        <p> No completed tasks yet. </p>
      ) : (
        <ul className="completedTasksList">
          {completedTasks.map((task) => {
            console.log("task", task);

            return (
              <li key={task.id} className="completedTaskCard">
                <div className="taskDetails">
                  <h2 className="taskTitle">{task.title || "Untitled Task"}</h2>
                  <p className="taskDescription">
                    {task.description || "No description available"}
                  </p>
                  <p className="taskDueDate">
                    Completed on: {task.dueDate ? task.dueDate : "N/A"}
                  </p>
                </div>
                <div className="taskActions">
                  <button
                    className="taskButton undoButton"
                    onClick={() => onToggleComplete(task?.id)}
                  >
                    Undo
                  </button>
                  <button
                    className="taskButton deleteButton"
                    onClick={() => onDelete(task.id)}
                  >
                    Delete
                  </button>
                </div>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
export default CompletedTasks;
