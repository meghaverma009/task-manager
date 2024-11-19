// import { useEffect, useState } from "react";
// import "./App.css";
// import { Routes, Route } from "react-router-dom";
// import CompletedTasks from "./components/completedTasks";
// import TaskForm from "./components/TaskForm";
// import Navbar from "./components/Navbar";
// import TaskList from "./components/Tasklist";

// function App() {
//   // Load tasks from localStorage or initialize with empty arrays
//   const loadTasksFromLocalStorage = () => {
//     const tasksFromStorage = localStorage.getItem("tasks");
//     return tasksFromStorage ? JSON.parse(tasksFromStorage) : [];
//   };

//   const loadCompletedTasksFromLocalStorage = () => {
//     const completedTasksFromStorage = localStorage.getItem("completedTasks");
//     return completedTasksFromStorage
//       ? JSON.parse(completedTasksFromStorage)
//       : [];
//   };

//   const [tasks, setTasks] = useState(loadTasksFromLocalStorage || []);
// const [completedTasks, setCompletedTasks] = useState(
//   loadCompletedTasksFromLocalStorage || []
// );

//   // Save tasks to localStorage whenever they change
//   useEffect(() => {
//     localStorage.setItem("tasks", JSON.stringify(tasks));
//   }, [tasks]);

//   useEffect(() => {
//     localStorage.setItem("completedTasks", JSON.stringify(completedTasks));
//   }, [completedTasks]);

//   // Add a new task
//   const handleAddTask = (newTask) => {
//     setTasks((prevTasks) => [
//       ...prevTasks,
//       { id: Date.now(), ...newTask, completed: false }, // Add unique ID
//     ]);
//   };

//   // Mark a task as completed
//   const completeTask = (taskId) => {
//     setTasks((prevTasks) => {
//       const taskToComplete = prevTasks.find((task) => task.id === taskId);

//       if (!taskToComplete) return prevTasks; // Return the existing tasks if the task isn't found

//       setCompletedTasks((prevCompletedTasks) => [
//         ...prevCompletedTasks,
//         { ...taskToComplete, completed: true },
//       ]); // Add the completed task to completedTasks

//       return prevTasks.filter((task) => task.id !== taskId); // Remove the completed task from tasks
//     });
//   };

//   // Delete a task
//   const handleDelete = (taskId) => {
//     setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
//   };

//   // Undo a completed task
//   const undoCompleteTask = (taskId) => {
//     const taskToUndo = completedTasks.find((task) => task.id === taskId);
//     if (taskToUndo) {
//       setCompletedTasks(completedTasks.filter((task) => task.id !== taskId));
//       setTasks([...tasks, { ...taskToUndo, completed: false }]);
//     }
//   };

//   return (
//     <>
//       <Navbar />
//       <div className="dashboard">
//         <TaskForm onAddTask={handleAddTask} />
//         <Routes>
//           <Route
//             path="/"
//             element={
//               <TaskList
//                 tasks={tasks}
//                 onToggleComplete={completeTask}
//                 onDelete={handleDelete}
//               />
//             }
//           />
{
  /* <Route
  path="/completed"
  element={
    <CompletedTasks
      tasks={completedTasks || []} // Ensure it's never null
      onToggleComplete={undoCompleteTask}
      onDelete={(taskId) =>
        setCompletedTasks(
          completedTasks.filter((task) => task.id !== taskId)
        )
      }
    />
  }
/> */
}
{
  /* <Route path="/completed"
element={
  <CompletedTasks
  tasks={tasks}
  onToggleComplete={handleToggleComplete}
  onDelete={handleDelete}
/>
} */
}
//         </Routes>
//       </div>
//     </>
//   );
// }

// export default App;

// import { useEffect, useState } from "react";
// import "./App.css";
// import { Routes, Route } from "react-router-dom";
// import CompletedTasks from "./components/completedTasks";
// import TaskForm from "./components/TaskForm";
// import Navbar from "./components/Navbar";
// import TaskList from "./components/Tasklist";

// function App() {
//   // Load tasks from localStorage or initialize with empty arrays
//   const loadTasksFromLocalStorage = () => {
//     const tasksFromStorage = localStorage.getItem("tasks");
//     return tasksFromStorage ? JSON.parse(tasksFromStorage) : [];
//   };

//   const loadCompletedTasksFromLocalStorage = () => {
//     const completedTasksFromStorage = localStorage.getItem("completedTasks");
//     return completedTasksFromStorage
//       ? JSON.parse(completedTasksFromStorage)
//       : [];
//   };

//   const [tasks, setTasks] = useState(loadTasksFromLocalStorage || []);
//   const [completedTasks, setCompletedTasks] = useState(
//     loadCompletedTasksFromLocalStorage || []
//   );

//   // Save tasks to localStorage whenever they change
//   useEffect(() => {
//     localStorage.setItem("tasks", JSON.stringify(tasks));
//   }, [tasks]);

//   useEffect(() => {
//     localStorage.setItem("completedTasks", JSON.stringify(completedTasks));
//   }, [completedTasks]);

//   // Add a new task
//   const handleAddTask = (newTask) => {
//     setTasks((prevTasks) => [
//       ...prevTasks,
//       { id: Date.now(), ...newTask, completed: false }, // Add unique ID
//     ]);
//   };

//   // Mark a task as completed
//   const completeTask = (taskId) => {
//     setTasks((prevTasks) => {
//       const taskToComplete = prevTasks.find((task) => task.id === taskId);

//       if (!taskToComplete) return prevTasks; // Return the existing tasks if the task isn't found

//       setCompletedTasks((prevCompletedTasks) => [
//         ...prevCompletedTasks,
//         { ...taskToComplete, completed: true },
//       ]); // Add the completed task to completedTasks

//       return prevTasks.filter((task) => task.id !== taskId); // Remove the completed task from tasks
//     });
//   };

//   // Delete a task from tasks
//   const handleDelete = (taskId) => {
//     setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
//   };

//   // Delete a completed task
//   const handleDeleteCompleted = (taskId) => {
//     setCompletedTasks((prevCompletedTasks) => {
//       // Filter out the task that needs to be deleted (delete only the task with matching id)
//       return prevCompletedTasks.filter((task) => task.id !== taskId);
//     });
//   };

//   // Undo a completed task
//   const undoCompleteTask = (taskId) => {
//     const taskToUndo = completedTasks.find((task) => task.id === taskId);
//     if (taskToUndo) {
//       setCompletedTasks((prevCompletedTasks) =>
//         prevCompletedTasks.filter((task) => task.id !== taskId)
//       );
//       setTasks([...tasks, { ...taskToUndo, completed: false }]);
//     }
//   };

//   return (
//     <>
//       <Navbar />
//       <div className="dashboard">
//         <TaskForm onAddTask={handleAddTask} />
//         <Routes>
//           <Route
//             path="/"
//             element={
//               <TaskList
//                 tasks={tasks}
//                 onToggleComplete={completeTask}
//                 onDelete={handleDelete}
//               />
//             }
//           />
//           <Route
//             path="/completed"
//             element={
//               <CompletedTasks
//                 tasks={completedTasks || []} // Ensure it's never null
//                 onToggleComplete={undoCompleteTask}
//                 onDelete={handleDeleteCompleted} // Correct delete handler for completed tasks
//               />
//             }
//           />
//         </Routes>
//       </div>
//     </>
//   );
// }

// export default App;
import { v4 as uuidv4 } from "uuid";
import { useEffect, useState } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import CompletedTasks from "./components/completedTasks";
import TaskForm from "./components/TaskForm";
import Navbar from "./components/Navbar";
import TaskList from "./components/Tasklist";

function App() {
  // Load tasks from localStorage or initialize with empty arrays
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

  // Save tasks to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  useEffect(() => {
    localStorage.setItem("completedTasks", JSON.stringify(completedTasks));
  }, [completedTasks]);

  // Add a new task
  const handleAddTask = (newTask) => {
    setTasks((prevTasks) => [
      ...prevTasks,
      { id: uuidv4(), ...newTask, completed: false }, // Add unique ID
    ]);
  };

  // Mark a task as completed
  const completeTask = (taskId) => {
    setTasks((prevTasks) => {
      const taskToComplete = prevTasks.find((task) => task.id === taskId);

      if (!taskToComplete) return prevTasks; // Return the existing tasks if the task isn't found

      setCompletedTasks((prevCompletedTasks) => [
        ...prevCompletedTasks,
        { ...taskToComplete, completed: true },
      ]); // Add the completed task to completedTasks

      return prevTasks.filter((task) => task.id !== taskId); // Remove the completed task from tasks
    });
  };

  // Delete a task from tasks
  const handleDelete = (taskId) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
  };

  // Delete a completed task
  const handleDeleteCompleted = (taskId) => {
    console.log("Delete completed task:", taskId);
    setCompletedTasks((prevCompletedTasks) =>
      prevCompletedTasks.filter((task) => task.id !== taskId)
    );
  };

  // Undo a completed task
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
                tasks={completedTasks} // Pass only completed tasks
                onToggleComplete={undoCompleteTask} // Undo completion handler
                onDelete={handleDeleteCompleted} // Correct delete handler for completed tasks
              />
            }
          />
        </Routes>
      </div>
    </>
  );
}

export default App;
