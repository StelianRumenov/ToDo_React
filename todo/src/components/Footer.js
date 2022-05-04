import React, { useContext, useState } from "react";
import { useGlobalState, GlobalState } from "../GlobalState";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";

export default function Footer() {
  const [checkAll, setCheckAll] = useState(false);
  const { todos } = useGlobalState();

  const setTodos = (newTodos) => {
    GlobalState.set({ todos: newTodos });
  };

  const handleCheckAll = () => {
    const newTodos = [...todos];
    newTodos.forEach((todo) => {
      todo.complete = !checkAll;
    });
    setTodos(newTodos);
    setCheckAll(!checkAll);
  };

  const newTodosComplete = () => {
    return todos.filter((todo) => todo.complete === false);
  };

  const deleteTodo = () => {
    setTodos(newTodosComplete());
    setCheckAll(false);
  };

  return (
    <Grid
      container
      direction="row-reverse"
      justifyContent="flex-end"
      alignItems="center"
    >
      {todos.length === 0 ? (
        <h2>Congratulations! Nothings To Do</h2>
      ) : (
        <div className="row">
          <label htmlFor="all">
            <input
              type="checkbox"
              name="all"
              id="all"
              onChange={handleCheckAll}
              checked={checkAll}
            />
            SELECT ALL
          </label>
          <p>You have {newTodosComplete().length} remaining</p>
          <Button
            size="small"
            variant="outlined"
            color="error"
            id="delete"
            onClick={deleteTodo}
          >
            Delete
          </Button>
        </div>
      )}
    </Grid>
  );
}
