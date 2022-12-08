import React, {createContext , useState , useEffect} from 'react'

interface dataContext {
  todo:any,
  setTodo:(data:any) => void
}

export const TodoContext = React.createContext<dataContext>({
  todo:null,
  setTodo:()=>{}
});

export const TodoProvider = (props:any) => {
  const [todo , setTodo] = useState<any>()

  useEffect(() => {
      localStorage.setItem('todo',JSON.stringify(todo));
  },[todo])
  useEffect(() => {
    const todoValue = localStorage.getItem('todo')
    if (todoValue !== null) {
      setTodo(JSON.parse(todoValue));
    }
  }, []);
  return(
    <TodoContext.Provider value={{todo,setTodo}}>
      {props.children}
    </TodoContext.Provider>
  )
} 