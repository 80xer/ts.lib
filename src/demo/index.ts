import tsLib from "../lib/ts.lib";
import "./style.scss";

const $ = selector => document.querySelector(selector);

const grid = tsLib("#root");
const $body = $("body");
grid.target.innerHTML = "ts.lib";
$body.appendChild(grid.target);
