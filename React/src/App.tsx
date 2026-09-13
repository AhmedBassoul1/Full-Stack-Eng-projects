import { useState } from "react";
import { dummydata } from "./assets/data/todos";
import TodoItem from "./components/todoItem";
import AddNewTodo from "./components/addnewtodo";

function App() {

  const [todos, setTodos] = useState(dummydata);

function setTodoComplete(id: number, completed: boolean) {
  setTodos(prevTodos => prevTodos.map(todo =>
    todo.id === id ? { ...todo, completed } : todo
  ));
}

function addtodo(title: string) {
  setTodos(prevTodos => [{id: prevTodos.length + 1, title, completed: false}, ...prevTodos]);
}
  return (
    <main className="space-y-10 py-10 px-2">
    <h1 className="text-center text-3xl font-bold underline">
      My Todo List
    </h1>
    <AddNewTodo
    onSubmit={addtodo}
    />  
    <div className="max-w-md mx-auto">
      { todos.map(todo =>(
      <TodoItem key={todo.id} todo={todo} onCompleteChange={setTodoComplete}/>
      ))}
    </div>
    </main>
  )
}

export default App
