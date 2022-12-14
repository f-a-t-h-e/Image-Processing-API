import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import fs from "fs";
import sharp from "sharp";
import path from "path";

interface Query {
  name?: string;
  width?: string;
  height?: string;
}

const resize = (
  imagePath: string,
  width: string,
  height: string,
  thumb: string
) => {
  const widthN = Number(width);
  const heightN = Number(height);
  return sharp(imagePath)
    .resize({
      width: widthN,
      height: heightN,
    })
    .toFile(thumb);
};

export async function getImage(req: Request, res: Response): Promise<unknown> {
  const { name, width, height }: Query = req.query;
  if (!name) {
    return res.status(StatusCodes.OK).send("please provide name");
  }
  const imagePath = path.join(
    __dirname,
    "..",
    "..",
    "..",
    "images",
    "full",
    `${name}.jpg`
  );
  if (!width || !height) {
    return res.status(StatusCodes.OK).sendFile(imagePath);
  }

  const thumb = path.join(
    __dirname,
    "..",
    "..",
    "..",
    "images",
    "thumb",
    `${name}_thumb-${width}-${height}.jpg`
  );

  if (!fs.existsSync(thumb)) {
    await resize(imagePath, width, height, thumb);
    return res.status(StatusCodes.CREATED).sendFile(thumb);
  }

  return res.status(StatusCodes.OK).sendFile(thumb);
}

export { resize };
