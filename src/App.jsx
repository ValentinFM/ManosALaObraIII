import { useState } from 'react';
import TodoHeader from './components/TodoHeader.jsx';
import TodoForm from './components/TodoForm.jsx';
import TodoList from './components/TodoList.jsx';
import TodoEmpty from "./components/TodoEmpty.jsx";

function App() {
  const [tasks, setTasks] = useState([]);
  //agregamos tareas
  const addTask = (text) => {
    if (!text.trim()) {
      return;
    }
    const newTask = {
      id: Date.now(),
      text,
      completed: false,
    };
    //nuevas arriba, orden inverso
    setTasks([newTask, ...tasks]);
  };

  //eliminar tareas
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };
  
  //completar tareas
  const toggleTaskCompleted = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };
  return (
    <div className="container">
      <TodoHeader />
      <TodoForm addTask={addTask} />
      {tasks.length === 0 ? 
      (<TodoEmpty />) : 
      (<TodoList tasks={tasks} 
      deleteTask={deleteTask} 
      toggleTaskCompleted={toggleTaskCompleted} 
      />)}
    </div>
  );
}

export default App;
