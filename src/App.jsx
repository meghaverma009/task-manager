import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TaskForm from './components/TaskForm'
import Navbar from './components/Navbar'
import TaskList from './components/Tasklist'



function App() {


  const loadTasksFromLocalStorage = () => {
    const tasksFromStorage = localStorage.getItem('tasks');
    return tasksFromStorage ? JSON.parse(tasksFromStorage) : [];
  };

  const [tasks, setTasks] = useState(loadTasksFromLocalStorage);

  // Save tasks to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  // Add a task
  const handleAddTask = (newTask) => {
    setTasks((prevTasks) => [
      ...prevTasks,
      { id: Date.now(), ...newTask }, // Ensure each task has a unique ID
    ]);
  };

  // Toggle the task completion status
  const handleToggleComplete = (taskId) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId
          ? { ...task, completed: !task.completed }
          : task
      )
    );
  };

  // Delete a task
  const handleDelete = (taskId) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
  };
  
  return (
    <>

    <Navbar/>
    <div className='dashboard'>
    <TaskForm onAddTask={handleAddTask} />
    <TaskList tasks={tasks} onToggleComplete={handleToggleComplete} onDelete={handleDelete} />
    </div>
  
    </>
  )
}

export default App
