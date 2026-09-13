import type { Todo } from "../type/todo";

interface todoItemProps {
    todo: Todo;
    onCompleteChange(id: number, completed: boolean): void;
    onDelete(id: number): void;
}

export default function TodoItem({ todo, onCompleteChange, onDelete }: todoItemProps) {
  return (
    <div className="flex items-center justify-between border p-4 rounded-md mb-2">
        <label className="flex items-center">
            <input
                type="checkbox"
                checked={todo.completed}
                onChange={(e) => onCompleteChange(todo.id, e.target.checked)}
            />
            <span className={todo.completed ? "text-gray-500 line-through" : ""}>
            {todo.title}
            </span>
        </label>
        <button
            onClick={() => onDelete(todo.id)}
            className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-md text-sm"
        >
            Delete
        </button>
    </div>
  );
}