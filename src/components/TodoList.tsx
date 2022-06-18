// src/components/TodoList.tsx

import { FC } from "react";
import { useReactiveVar /*, useQuery*/ } from "@apollo/client";

import todoVar from "../store/todo";
import TodoItem from "./TodoItem";

const TodoList: FC = () => {
  //   const { data } = useQuery(GET_TODOS); // 서버와의 통신을 위해서는 useQuery를 사용한다.
  const todos = useReactiveVar(todoVar);

  return (
    <section>
      {todos.map((todo) => (
        <TodoItem todo={todo} key={`todo_${todo.id}`} />
      ))}
    </section>
  );
};

export default TodoList;
