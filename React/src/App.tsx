import { dummydata } from "./assets/data/todos";

function App() {

  return (
    <main className="py-10 px-2">
    <h1 className="text-center text-3xl font-bold underline">
      My Todo List
    </h1>  
    <div className="max-w-md mx-auto">
      { dummydata.map(todo =>(
        <p key={todo.id} className="bg-gray-200 p-4 rounded mb-2 text-lg">
          {todo.title}
        </p>
      ))}
    </div>
    </main>
  )
}

export default App
