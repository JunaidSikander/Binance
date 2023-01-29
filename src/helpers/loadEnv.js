import dotenv from "dotenv"
import * as url from 'url';
import * as path from "path";

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = url.fileURLToPath(new URL('.', import.meta.url));

export default function loadEnv() {
  const envPath = path.resolve(__dirname, '../', '.env')
  console.log("L", envPath);
  dotenv.config({path: envPath})
}
