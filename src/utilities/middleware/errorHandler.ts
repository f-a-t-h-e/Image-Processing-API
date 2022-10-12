import { ErrorRequestHandler, Response } from "express";
import { StatusCodes } from "http-status-codes";

const errorHandler: ErrorRequestHandler = (err, req, res, next): Response => {
  if (err.errno === -4058) {
    return res
      .status(StatusCodes.NOT_FOUND)
      .send("This image is not found please check the name provided");
  }
  if (err.message) {
    return res
      .status(StatusCodes.BAD_REQUEST)
      .send("Please provide valid inputs");
  }
  return res
    .status(StatusCodes.INTERNAL_SERVER_ERROR)
    .send("Something went wrong");
  next;
};

export default errorHandler;
