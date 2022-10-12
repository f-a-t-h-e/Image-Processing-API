import "express-async-errors";

import express, { Request, Response } from "express";
import imagesRouter from "./utilities/router/images";
import { StatusCodes } from "http-status-codes";
import errorHundler from "./utilities/middleware/errorHandler";
const app = express();

const port = 3000 as number;

app.use(express.json());

// Serve placeholders
app.use("/api/images", imagesRouter);

app.get("/", (req: Request, res: Response): Response => {
  return res.status(200).send("<h1>Image Processing API</h1>");
});

app.use((req: Request, res: Response): Response => {
  {
    return res.status(StatusCodes.NOT_FOUND).send("<h1>Page not Found</h1>");
  }
});

app.use(errorHundler);

app.listen(port, (): void =>
  console.log(`Example app listening on port ${port}!`)
);

export default app;
