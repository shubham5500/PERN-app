import express from "express";
import { pool } from "./db.js";
import cors from "cors";
import errorMiddleware from "./error.middleware.js";
const port = process.env.PORT || 8001;

const app = express();
app.use(express.json());
app.use(cors());

// post a todo
app.post("/todos", async (req, res) => {
  const { description } = req.body;
  const newTodo = await pool.query(
    "INSERT INTO todo (description) VALUES($1) RETURNING *",
    [description]
  );

  res.json(newodo.rows[0]);
});

// get all todos
app.get("/todos", async (req, res) => {
  const todos = await pool.query(`SELECT * FROM todo`);
  return res.send(todos.rows);
});

// get a todo

app.get("/todos/:todoId", async (req, res) => {
  const todoId = req.params.todoId;
  console.log({ todoId });
  const todo = await pool.query(`SELECT * FROM todo WHERE todo_id = $1`, [
    todoId,
  ]);
  return res.send(todo.rows);
});

// update a todo

app.put("/todos/:todoId", async (req, res) => {
  const todoId = req.params.todoId;
  const { description } = req.body;
  const upatedResult = await pool.query(
    "UPDATE todo SET description = $1 WHERE todo_id = $2 RETURNING *",
    [description, todoId]
  );

  return res.send(upatedResult.rows)
});

// delete a todo

app.use(errorMiddleware);

app.listen(port, () => {
  console.log("Listening on port " + port);
});
