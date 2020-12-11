import { nodeResolve } from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import htmlTemplate from "rollup-plugin-generate-html-template";
import scss from "rollup-plugin-scss";
import { name, src, main, browser } from "./package.json";

const basePlugins = [
  nodeResolve(),
  commonjs({ extensions: [".js", ".ts"] }),
  typescript(),
];
const libPlugins = [...basePlugins, scss()];
const demoPlugins = [
  ...basePlugins,
  scss({ output: "dist/demo/style.css" }),
  htmlTemplate({
    template: "src/demo/index.html",
    target: "index.html",
    replaceVars: {
      __NAME__: name,
    },
  }),
];

export default [
  {
    input: src,
    name: name,
    output: {
      name: name,
      file: main,
      format: "umd",
    },
    plugins: libPlugins,
  },
  {
    input: src,
    name: name,
    output: {
      name: name,
      file: browser,
      format: "iife",
    },
    plugins: libPlugins,
  },
  {
    input: "src/demo/index.ts",
    name: "demo",
    output: {
      name: "demo",
      file: "dist/demo/index.js",
      format: "iife",
      sourceMap: true,
    },
    plugins: demoPlugins,
  },
];
