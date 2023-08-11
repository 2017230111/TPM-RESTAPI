import * as TaskRepo from "../repository/tasks.js";
import { errorResponse, successResponse } from "../utils/response.js";

export const getAllTask = async (req, res, next) => {
  try {
    const [result] = await TaskRepo.getAllTask();

    successResponse(res, "Ok", result);
  } catch (error) {
    next(error);
  }
};

export const createTask = async (req, res, next) => {
  try {
    const user_id = req.body.user_id;
    const taskName = req.body.task_name;
    const isCompleted = req.body.is_completed;

    const [result] = await TaskRepo.createTask(user_id, taskName, isCompleted);

    successResponse(res, "Data berhasil ditambah", result.insertId);
  } catch (error) {
    next(error);
  }
};

export const getTaskById = async (req, res, next) => {
  try {
    const id = req.params.id;

    const [result] = await TaskRepo.getTaskById(id);

    if (result.length > 0) {
      successResponse(res, "Ok", result[0]);
    } else {
      errorResponse(res, "Data tidak ditemukan", 404);
    }
  } catch (error) {
    next(error);
  }
};

export const deleteTask = async (req, res, next) => {
  try {
    const id = req.params.id;
    await TaskRepo.deleteTask(id);

    return res.json({
      code: 200,
      message: "Data berhasil dihapus",
    });
  } catch (error) {
    next(error);
  }
};

export const updateTask = async (req, res, next) => {
  try {
    const id = req.params.id;
    const taskName = req.body.task_name;
    const is_completed = req.body.task_name;

    await TaskRepo.updateTask(taskName, is_completed, id);

    res.json({
      code: 200,
      message: "Data berhasil diubah",
    });
  } catch (error) {
    next(error);
  }
};
