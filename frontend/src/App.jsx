import { useState } from 'react';
import TaskItem from './components/TaskItem';

const initialTasks = [
  { id: 1, title: 'Buy groceries', completed: false },
  { id: 2, title: 'Read a book', completed: true },
];

export default function App() {
  const [tasks, setTasks] = useState(initialTasks);
  const [title, setTitle] = useState('');
  const [filter, setFilter] = useState('all');

  const handleAddTask = () => {
    if (title.trim() === '') return alert('Task title is required.');
    const newTask = {
      id: Date.now(),
      title: title.trim(),
      completed: false,
    };
    setTasks([...tasks, newTask]);
    setTitle('');
  };

  const handleToggle = (id) => {
    setTasks(tasks.map(t => t.id === id ? { ...t, completed: !t.completed } : t));
  };

  const handleDelete = (id) => {
    setTasks(tasks.filter(t => t.id !== id));
  };

  const filteredTasks = tasks.filter(task => {
    if (filter === 'all') return true;
    if (filter === 'completed') return task.completed;
    if (filter === 'pending') return !task.completed;
  });

  return (
    <div className="max-w-xl mx-auto mt-10 p-4">
      <h1 className="text-2xl font-bold mb-4">Task Manager</h1>

      <div className="flex gap-2 mb-4">
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Add a new task"
          className="flex-grow p-2 border rounded"
        />
        <button onClick={handleAddTask} className="bg-blue-500 text-white px-4 py-2 rounded">Add</button>
      </div>

      <div className="mb-4">
        <button onClick={() => setFilter('all')} className="mr-2 px-3 py-1 border rounded">All</button>
        <button onClick={() => setFilter('completed')} className="mr-2 px-3 py-1 border rounded">Completed</button>
        <button onClick={() => setFilter('pending')} className="px-3 py-1 border rounded">Pending</button>
      </div>

      <ul className="space-y-2">
        {filteredTasks.map(task => (
          <TaskItem key={task.id} task={task} onToggle={handleToggle} onDelete={handleDelete} />
        ))}
      </ul>
    </div>
  );
}
