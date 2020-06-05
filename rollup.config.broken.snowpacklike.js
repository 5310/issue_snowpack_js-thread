import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import json from '@rollup/plugin-json'
import typescript from 'rollup-plugin-typescript2'


export default {
  input: "index.ts",
  output: {
    dir: "web_modules",
    format: "esm",
  },
  plugins: [
    resolve({
      mainFields: ["browser:module", "module", "browser", "main"],
      extensions: [".mjs", ".cjs", ".js", ".json"],
      // whether to prefer built-in modules (e.g. `fs`, `path`) or local ones with the same names
      preferBuiltins: true,
    }),
    commonjs(),
    json(),
    typescript(),
    require("rollup-plugin-node-polyfills")(),
  ],
};
