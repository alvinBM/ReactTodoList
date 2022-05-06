import { createContext, useState, useContext, useEffect } from "react";

export const TodosContext = createContext({});

export const TodosProvider = ({children}) => {

  const [todos, setTodos] = useState(null);

  return(
      <TodosContext.Provider value={{todos, setTodos}}>
        {children}
      </TodosContext.Provider>
  )

}

export default function useTodosContext () {
    return useContext(TodosContext);
}