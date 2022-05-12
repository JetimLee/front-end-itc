import path from "path";
import { promises as fs } from "fs";

export default function writeData(data, filename) {
  //process.cwd() gets the current working directory
  const storagePath = path.join(process.cwd(), "data", filename);
  return fs.writeFile(storagePath, data);
}
