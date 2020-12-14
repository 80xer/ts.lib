/**
 * @param  {string|HTMLElement} selector
 * @returns HTMLElement
 */
function $(selector: string | HTMLElement): HTMLElement {
  return selector instanceof HTMLElement
    ? (selector as HTMLElement)
    : (document.querySelector(selector) as HTMLElement);
}

export { $ };
