import path from "path";
import babel from "rollup-plugin-babel";
import typescript from "rollup-plugin-typescript";
import typescript2 from "rollup-plugin-typescript2";

// config for using rollup typescript
// export default {
//   input: "./main.ts",

//   output: [
//     {
//       file: `test.js`,
//       format: "esm"
//     }
//   ],

//   plugins: [typescript()]
// };

// typescript using babel
// export default {
//   input: "./main.ts",

//   output: [
//     {
//       file: path.resolve(__dirname, "dist", 'bundle.rollup.js'),
//       format: "esm"
//     }
//   ],

//   plugins: [
//     babel({
//       exclude: "node_modules/**",
//       // https://github.com/Tomekmularczyk/react-package-rollup/blob/with-typescript/rollup.config.js
//       extensions: [".js", ".ts", ".tsx"]
//     })
//   ]
// };

// config for using rollup typescript
export default {
  input: "./src/main.ts",

  output: [
    {
      file: path.resolve(__dirname, "dist", 'bundle.rollup.js'),
      format: "esm"
    }
  ],

  plugins: [typescript2()]
};