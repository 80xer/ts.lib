import sum from "../index";
import "./style.scss";

const $ = (selector) => document.querySelector(selector);

const a = sum(3, 5);
const $body = $("body");
const $root = $("#root");
$root.appendChild(document.createTextNode(a));
$body.appendChild($root);
