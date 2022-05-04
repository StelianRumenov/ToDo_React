import React, { useState, useContext, useRef, useEffect } from "react";
import { useGlobalState, GlobalState } from "../GlobalState";
import AddIcon from "@mui/icons-material/Add";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";

export default function FormInput() {
  const { todos } = useGlobalState();

  const setTodos = (newTodos) => {
    GlobalState.set({ todos: newTodos });
  };
  const [todoName, setTodoName] = useState("");
  const todoInput = useRef();

  const addTodo = (e) => {
    e.preventDefault();
    setTodos([...todos, { name: todoName, complete: false }]);
    setTodoName("");
    todoInput.current.focus();
  };

  useEffect(() => {
    todoInput.current.focus();
  }, []);

  return (
    <Box>
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
      >
        <form autoComplete="off" onSubmit={addTodo}>
          <input
            type="text"
            name="todos"
            id="todos"
            ref={todoInput}
            required
            placeholder="What needs to be done?"
            value={todoName}
            onChange={(e) => setTodoName(e.target.value.toLowerCase())}
          />

          <Button type="submit">
            {" "}
            <AddIcon></AddIcon>Add
          </Button>
        </form>
      </Grid>
    </Box>
  );
}
