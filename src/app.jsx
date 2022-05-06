import * as React from "react";
import {useEffect} from "react";
import { TodoForm } from "./components/todo-form";
import { TodoList } from "./components/todo-list";
import { TodosContext } from "./todo-context";
import "./index.scss";

const todosTemplate = [
  {
    id: 0,
    label: "1. Fix todos not showing",
    checked: false
  },
  {
    id: 1,
    label: "2. Show checkboxes in a vertical list/column instead of a row",
    checked: false
  },
  {
    id: 2,
    label: "3. Fix the ability to add a new task",
    checked: false
  }
];

export const App = () => {
  const [todos, setTodos] = React.useState([]);

  useEffect(() => {
      function loadTodos() {
          setTodos(todosTemplate)
      }
      loadTodos();
  }, [])

  return (
    <div className="root">
      <TodosContext.Provider value={{ todos, setTodos }}>
        <TodoList />
        <TodoForm />
      </TodosContext.Provider>
    </div>
  );
};
