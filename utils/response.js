export const successResponse = (res, message, data, code = 200) => {
  res.send({
    data,
    message,
    code,
  });
};

export const errorResponse = (res, message, code = 404) => {
  res.send({
    message,
    code,
  });
};
