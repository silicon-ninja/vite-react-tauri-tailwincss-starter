import dotenv from "dotenv";
import fs from "fs";
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'


if (fs.existsSync(".env")) {
    console.log("Using .env file to supply config environment variables")
    dotenv.config({ path: ".env" })
}
export const REACT_PORT = process.env["REACT_PORT"]
var PORT: number = +REACT_PORT;



if(!REACT_PORT){
  console.log("React Port is not set in .env file")
    process.exit(1)
}

// https://vitejs.dev/config/
export default defineConfig({
  server:{
    port: PORT,
  },
  plugins: [react()]
  
})
