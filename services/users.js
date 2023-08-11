import * as UserRepo from "../repository/users.js";
import { successResponse, errorResponse } from "../utils/response.js";

export const getAllUser = async (request, response, next) => {
  try {
    const [result] = await UserRepo.getData();
    successResponse(response, "Ok", result);
  } catch (error) {
    next(error);
  }
};

export const createUser = async (request, response, next) => {
  try {
    let name = request.body.name;
    let email = request.body.email;
    let password = request.body.password;
    const [result] = await UserRepo.createData(name, email, password);

    successResponse(response, "Berhasil menambahkan data", result.insertId);
  } catch (error) {
    next(error);
  }
};

export const getUserByUserId = async (req, res, next) => {
  try {
    const id = req.params.id;

    const [result] = await UserRepo.getDataById(id);
    if (result.length > 0) {
      successResponse(res, "Ok", result[0]);
    } else {
      errorResponse(res, "Data tidak ditemukan", 404);
    }
  } catch (error) {
    next(error);
  }
};

export const deleteUser = async (req, res) => {
  const id = req.params.id;
  try {
    await UserRepo.deleteData(id);

    return res.json({
      code: 200,
      message: "Data berhasil di hapus",
    });
  } catch (error) {
    res.status(500).json(error);
  }
};

export const updateUser = async (req, res, next) => {
  try {
    const id = req.params.id;
    const name = req.body.name;
    const email = req.body.email;
    await UserRepo.updateData(name, email, id);

    return res.json({
      code: 200,
      message: "Data berhasil di ubah",
    });
  } catch (error) {
    next(error);
  }
};
