export  default function AddNewTodo() {
    return (
        <div className="flex items-center justify-between border p-4 rounded-md mb-2">
            <label className="flex items-center">
                <input 
                    type="text"
                    placeholder="Add new todo"
                    className="border p-2 rounded-md w-full"
                />
            </label>
            <button className="bg-blue-500 text-white p-2 rounded-md ml-2">
                Add
            </button>
        </div>
    );
}