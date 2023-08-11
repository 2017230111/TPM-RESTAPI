import dbPool from "../utils/db.js";

export const getAllTask = () => {
  const sql =
    "SELECT task_id, user_id, task_name, is_completed, created_at FROM tasks";
  const result = dbPool.query(sql);

  return result;
};

export const createTask = (user_id, task_name, is_completed) => {
  const dateNow = new Date().toJSON().slice(0, 19).replace("T", " ");
  const sql =
    "INSERT INTO tasks (user_id, task_name, is_completed, created_at) VALUES (?,?,?,?)";
  const value = [user_id, task_name, is_completed, dateNow];
  const result = dbPool.query(sql, value);

  return result;
};

export const getTaskById = (id) => {
  const sql =
    "SELECT task_id, user_id, task_name, is_completed, created_at, updated_at FROM tasks WHERE task_id = ?";
  const value = [id];
  const result = dbPool.query(sql, value);

  return result;
};

export const updateTask = (task_name, is_completed, id) => {
  const dateNow = new Date().toJSON().slice(0, 19).replace("T", " ");
  const sql =
    "UPDATE tasks SET task_name = ?, is_completed = ?, updated_at = ? WHERE task_id = ?";
  const value = [task_name, is_completed, dateNow, id];
  const result = dbPool.query(sql, value);

  return result;
};

export const deleteTask = (id) => {
  const sql = "DELETE FROM tasks WHERE task_id = ?";
  const value = [id];
  const result = dbPool.query(sql, value);

  return result;
};
