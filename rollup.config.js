import peerDepsExternal from "rollup-plugin-peer-deps-external"
import commonjs from "@rollup/plugin-commonjs"
import postcss from "rollup-plugin-postcss"
import resolve from "@rollup/plugin-node-resolve"
import babel from "@rollup/plugin-babel"
import pkg from "./package.json"

const extensions = [".js", ".jsx", ".ts", ".tsx"]

export default {
    input: "./src/index.ts",

    plugins: [
        peerDepsExternal(),

        // Allows node_modules resolution
        resolve({ extensions }),

        // Allow bundling cjs modules. Rollup doesn't understand cjs
        commonjs(),

        // Extract css into separate file
        postcss({ extract: true }),

        // Compile TypeScript/JavaScript files
        babel({
            extensions,
            babelHelpers: "bundled",
            include: ["src/**/*"],
            exclude: ["src/**/*.test.*"],
        }),
    ],

    output: [
        {
            file: pkg.main,
            format: "cjs",
            sourcemap: true,
        },
        {
            file: pkg.module,
            format: "esm",
            sourcemap: true,
        },
    ],
}
