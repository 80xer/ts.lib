import htmlTemplate from "rollup-plugin-generate-html-template";
import babel from "@rollup/plugin-babel";
import scss from "rollup-plugin-scss";
import pkg from "./package.json";

const { name, main, browser } = pkg;
const plugins = [scss(), babel({ babelHelpers: "bundled" })];

export default [
  {
    input: "src/index.js",
    name: name,
    output: {
      name: name,
      file: main,
      format: "umd",
    },
    plugins: plugins,
  },
  {
    input: "src/index.js",
    name: name,
    output: {
      name: name,
      file: browser,
      format: "iife",
    },
    plugins: plugins,
  },
  {
    input: "src/demo/index.js",
    name: "demo",
    output: {
      name: "demo",
      file: "dist/demo/index.js",
      format: "iife",
      sourceMap: true,
    },
    plugins: [
      scss({ output: "dist/demo/style.css" }),
      babel({ babelHelpers: "bundled" }),
      htmlTemplate({
        template: "src/demo/index.html",
        target: "index.html",
        replaceVars: {
          __NAME__: name,
        },
      }),
    ],
  },
];
