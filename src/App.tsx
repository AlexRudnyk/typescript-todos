import { TodosList } from "./components/TodosList";
import { AddTodo } from "./components/AddTodo";
import { IItem } from "./types/todo";
import { useState } from "react";
import { nanoid } from "nanoid";

export const App: React.FC = () => {
  const [todos, setTodos] = useState<IItem[]>([]);

  const addTodoHandler = (todo: IItem) => {
    setTodos((prev) => {
      return [
        ...prev,
        {
          id: nanoid(),
          title: todo.title,
        },
      ];
    });
  };

  const deleteTodoHandler = (id: string) => {
    setTodos((prev) => {
      return prev.filter((todo) => {
        return todo.id !== id;
      });
    });
  };

  return (
    <>
      <AddTodo onAddTodo={addTodoHandler} />
      <TodosList delete={deleteTodoHandler} todos={todos} />
    </>
  );
};
