export default function TaskItem({ task, onToggle, onDelete }) {
  return (
    <li className={\`flex justify-between items-center p-2 border rounded \${task.completed ? 'bg-green-100' : ''}\`}>
      <div
        className={\`cursor-pointer flex-1 \${task.completed ? 'line-through text-gray-500' : ''}\`}
        onClick={() => onToggle(task.id)}
      >
        {task.title}
      </div>
      <button onClick={() => onDelete(task.id)} className="text-red-500 font-bold px-2">X</button>
    </li>
  );
}
