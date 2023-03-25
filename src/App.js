import "./App.css";
import React, { useCallback, useState }  from 'react';
import { getToDoItemsFromLocalStorage, saveTodoItemsToLocalStorage } from './service/Service';
import ToDoList from "./components/ToDoList";
import AddToDoForm from "./components/AddToDoForm";

function App() {
  const [todoItems, setTodoItems] = useState(getToDoItemsFromLocalStorage('item') || []);

  const handleAddToDo = useCallback((item) => {
    console.log("Adding todo");
    const items = [
      ...todoItems,
      {
        id: item.id,
        content: item.content,
        complete: item.complete
      }
    ];
    setTodoItems(items);
    saveTodoItemsToLocalStorage('item', items);
  }, [todoItems]);

  const handleCheck = (id) => {
    const updatedToDo = todoItems.map((item) => {
      if(id == item.id)
      return {...item, complete:!item.complete};
      return item;
    });
    setTodoItems(updatedToDo);
    saveTodoItemsToLocalStorage('item', updatedToDo);
  }

  const handleDelete = (id) => {
    const updatedToDo = todoItems.filter(item => item.id!=id);
    setTodoItems(updatedToDo);
    saveTodoItemsToLocalStorage('item', updatedToDo);
  }

  const handleEdit = (id, editedInput) => {
    const updatedToDo = todoItems.map((item) => {
      if(id == item.id)
      return {...item, content:editedInput};
      return item;
    });
    setTodoItems(updatedToDo);
    saveTodoItemsToLocalStorage('item', updatedToDo);
  }

  return (
    <div className="background">
      <div className="head-background">
        <h1 className="heading">Your own TO-DO List!</h1>
      </div>
      <div className="todo-list-container">
        <div class="left-divider"></div>
        <div class="Task-Heading">Tasks:</div>
        <ToDoList toDoItems={todoItems} handleCheck={handleCheck} handleDelete={handleDelete} handleEdit={handleEdit}/>
      </div>
      <AddToDoForm onAddToDo={handleAddToDo}/>
    </div>
  );
}

export default App;
