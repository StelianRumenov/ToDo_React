import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";

export default function ToDo({ todo, id, checkComplete, handleEditTodos }) {
  const [onEdit, setOnEdit] = useState(false);
  const [editValue, setEditValue] = useState(todo.name);

  const handleOnEdit = () => {
    setOnEdit(true);
  };

  const handleSave = (id) => {
    setOnEdit(false);
    if (editValue) {
      handleEditTodos(editValue, id);
    } else {
      setEditValue(todo.name);
    }
  };

  if (onEdit) {
    return (
      <div style={{ padding: "5px", marginRight: "35px" }}>
        <Card variant="outlined">
          <li>
            <CardActions>
              <input
                type="text"
                id="editValue"
                value={editValue}
                name="editValue"
                onChange={(e) => setEditValue(e.target.value.toLowerCase())}
              />
              <Button onClick={() => handleSave(id)} size="small">
                Save
              </Button>
            </CardActions>
          </li>
        </Card>
      </div>
    );
  } else {
    return (
      <div style={{ padding: "5px", marginRight: "35px" }}>
        <Card variant="outlined">
          <li>
            <CardActions>
              <label htmlFor={id} className={todo.complete ? "active" : ""}>
                <input
                  type="checkbox"
                  id={id}
                  checked={todo.complete}
                  onChange={() => checkComplete(id)}
                />

                {todo.name}
              </label>
              <Button
                disabled={todo.complete}
                onClick={handleOnEdit}
                size="small"
              >
                Edit
              </Button>
            </CardActions>
          </li>
        </Card>
      </div>
    );
  }
}
