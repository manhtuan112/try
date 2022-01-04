import React from "react";
import Button from "@atlaskit/button";
import Todo from "./Todo";

const Todolist = ({ todoList, onCheckBtnClick }) => {
  return (
    <>
      {todoList.map((todo) => (
        <Todo key={todo.id} todo={todo} onCheckBtnClick={onCheckBtnClick} />
      ))}
    </>
  );
};

export default Todolist;
