import fs from "fs";
import path from "path";
import { resize } from "../../../utilities/controllers/images";

describe("Image process should resolve or reject", () => {
  it("resizes the image encenadaport.jpg to encenadaport_thumb.jpg", async () => {
    const imagePath = path.join(
      __dirname,
      "..",
      "..",
      "..",
      "..",
      "images",
      "full",
      "encenadaport.jpg"
    );
    const thumb = path.join(
      __dirname,
      "..",
      "..",
      "..",
      "..",
      "images",
      "thumb",
      "encenadaport_thumb.jpg"
    );
    await resize(imagePath, "470", "360", thumb);

    expect(fs.existsSync(thumb)).toBeTrue;
  });
});
