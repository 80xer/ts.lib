/**
 * @param  {} selector
 */
function $(selector: string | HTMLElement) {
  return selector instanceof HTMLElement
    ? selector
    : document.querySelector(selector);
}

export { $ };
