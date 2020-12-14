import TsLib from "../lib/ts.lib";
import "./style.scss";

const $ = selector => document.querySelector(selector);

const grid = new TsLib("#root");
const $body = $("body");
const $target = grid.$target;
$target.innerHTML = "ts.lib";
$body.appendChild(grid.$target);
