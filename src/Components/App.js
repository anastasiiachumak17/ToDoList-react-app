import React, { useState } from "react";
import './App.css';
import imageSrc from '../assets/image.gif';
function App() {
    // State hooks
    const [newTask, setNewTask] = useState('');
    const [tasks, setTasks] = useState([]);

    // Helper func to track completed status
    const toggleDone = (id) => {
        setTasks((oldList) =>
            oldList.map((task) =>
                task.id === id ? { ...task, done: !task.done } : task
            )
        );
    };

    // Helper func
    const addTask = () => {
        if (newTask.trim() !== '') {
            const task = {
                id: Math.floor(Math.random() * 1000),
                value: newTask,
                done: false
            };

            setTasks(oldList => [...oldList, task]);
            setNewTask('');
        }
    };

    const deleteTask = (id) => {
        const newArray = tasks.filter(task => task.id !== id);
        setTasks(newArray);
    };

    return (
        <div className='App'>
            <img src={imageSrc} alt="Description of the image" />
            <h1>Todo-List</h1>


            <input
                type='text'
                placeholder='Add task'
                value={newTask}
                onChange={e => setNewTask(e.target.value)}
            />
            <button onClick={addTask}>Add task</button>

            <ul>
                {tasks.map(task => (
                    <li key={task.id}>
                        <span style={{ textDecoration: task.done ? 'line-through' : 'none' }}>
                            {task.value}
                        </span>
                        <button className='action-button' onClick={() => toggleDone(task.id)}>
                            {task.done ? 'Undo' : 'Done'}
                        </button>
                        <button className='action-button' onClick={() => deleteTask(task.id)}>
                            Delete
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default App;
