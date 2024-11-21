/**
 * @description 
 *
 *
 */
const $ = (selector: string): HTMLElement | null => document.querySelector(selector)
const $$ = (selector: any) => document.querySelectorAll(selector)

export { $, $$ }
