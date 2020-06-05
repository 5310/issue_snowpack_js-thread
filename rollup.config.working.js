import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import json from '@rollup/plugin-json'
import typescript from 'rollup-plugin-typescript2'


export default {
  input: 'index.ts',
  output: {
    dir: 'web_modules',
    format: 'esm',
  },
  plugins: [
    resolve(),
    commonjs(),
    json(),
    typescript(),
  ],
}
