import { v4 as uuidv4 } from "uuid";
import { useEffect, useState } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import CompletedTasks from "./components/CompletedTasks";
import TaskForm from "./components/TaskForm";
import Navbar from "./components/Navbar";
import TaskList from "./components/Tasklist";

function App() {

  const loadTasksFromLocalStorage = () => {
    const tasksFromStorage = localStorage.getItem("tasks");
    return tasksFromStorage ? JSON.parse(tasksFromStorage) : [];
  };

  const loadCompletedTasksFromLocalStorage = () => {
    const completedTasksFromStorage = localStorage.getItem("completedTasks");
    return completedTasksFromStorage
      ? JSON.parse(completedTasksFromStorage)
      : [];
  };

  const [tasks, setTasks] = useState(loadTasksFromLocalStorage || []);
  const [completedTasks, setCompletedTasks] = useState(
    loadCompletedTasksFromLocalStorage || []
  );

  
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  useEffect(() => {
    localStorage.setItem("completedTasks", JSON.stringify(completedTasks));
  }, [completedTasks]);

 
  const handleAddTask = (newTask) => {
    setTasks((prevTasks) => [
      ...prevTasks,
      { id: uuidv4(), ...newTask, completed: false }, 
    ]);
  };


  const completeTask = (taskId) => {
    setTasks((prevTasks) => {
      const taskToComplete = prevTasks.find((task) => task.id === taskId);

      if (!taskToComplete) return prevTasks; 

      setCompletedTasks((prevCompletedTasks) => [
        ...prevCompletedTasks,
        { ...taskToComplete, completed: true },
      ]); 

      return prevTasks.filter((task) => task.id !== taskId); 
    });
  };

  
  const handleDelete = (taskId) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
  };

  
  const handleDeleteCompleted = (taskId) => {
    console.log("Delete completed task:", taskId);
    setCompletedTasks((prevCompletedTasks) =>
      prevCompletedTasks.filter((task) => task.id !== taskId)
    );
  };

 
  const undoCompleteTask = (taskId) => {
    console.log("Undo task:", taskId);
    const taskToUndo = completedTasks.find((task) => task.id === taskId);
    if (taskToUndo) {
      setCompletedTasks((prevCompletedTasks) =>
        prevCompletedTasks.filter((task) => task.id !== taskId)
      );
      setTasks((prevTasks) => [
        ...prevTasks,
        { ...taskToUndo, completed: false },
      ]);
    }
  };

  return (
    <>
      <Navbar />
      <div className="dashboard">
        <TaskForm onAddTask={handleAddTask} />
        <Routes>
          <Route
            path="/"
            element={
              <TaskList
                tasks={tasks}
                onToggleComplete={completeTask}
                onDelete={handleDelete}
              />
            }
          />
          <Route
            path="/completed"
            element={
              <CompletedTasks
                tasks={completedTasks} 
                onToggleComplete={undoCompleteTask}
                onDelete={handleDeleteCompleted}
              />
            }
          />
        </Routes>
      </div>
    </>
  );
}

export default App;
