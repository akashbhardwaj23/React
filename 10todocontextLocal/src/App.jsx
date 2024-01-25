import { useEffect, useState } from "react";
import "./App.css";
import { ToDoProvider } from "./context";
import TodoForm from "./components/ToDoForm";
import TodoItem from "./components/ToDoItem";

function App() {
  const [todos, setToDos] = useState([]);

  const addToDo = (todo) => {
    setToDos((oldtodos) => [{ id: Date.now(), ...todo }, ...oldtodos]);
  };

  const updateToDo = (id, todo) => {
    setToDos((prev) =>
      prev.map((prevTodo) => (prevTodo.id === id ? todo : prevTodo))
    );
  };

  const deleteToDo = (id) => {
    setToDos((prev) => prev.filter((todo) => todo.id !== id));
  };

  // const toggleComplete = (id) => {
  //   setToDos((prev) => prev.map((value) => value.id === id ? value.completed == "true":value))
  // }

  // OR

  const toggleComplete = (id) => {
    setToDos((prev) =>
      prev.map((value) =>
        value.id === id ? { ...value, completed: !value.completed } : value
      )
    );
  };

  // If you are in react you can access the local storage because its does not do server side rendering
  useEffect(() => {
    const todos1 = JSON.parse(localStorage.getItem("todos"));
    if (todos1 && todos1.length > 0) {
      setToDos(todos1);
    }
  }, []);

  useEffect(() => {

    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <ToDoProvider
      value={{ todos, addToDo, updateToDo, deleteToDo, toggleComplete }}
    >
      <div className="bg-[#172842] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">
            Manage Your Todos
          </h1>
          <div className="mb-4">
            {/* Todo form goes here */}
            <TodoForm />
          </div>
          <div className="flex flex-wrap gap-y-3">
            {/*Loop and Add TodoItem here */}
            {todos.map((todo) => (
              <div key={todo.id}
              className="w-full">
               < TodoItem  todo = {todo}/>
              </div>
            ))}
          </div>
        </div>
      </div>
    </ToDoProvider>
  );
}

export default App;
