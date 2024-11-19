function Tasks ({ tasks , onComplete })  {
  return (
    <div>
      <h1>Tasks</h1>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            {task.name}
            <button onClick={() => onComplete(task.id)}>Complete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default Tasks