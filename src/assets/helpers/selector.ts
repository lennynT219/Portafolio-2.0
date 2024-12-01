/**
 * @description: Seleccione un elemento HTML por su selector
 * @param {string} selector - Selector del elemento HTML
 * @returns {HTMLElement | null} Elemento HTML seleccionado
 * @example const elemento = $(selector)
 */
const $ = (selector: string): HTMLElement | null => document.querySelector(selector)

/**
 * @description: Seleccione múltiples elementos HTML por su selector
 * @param {string} selector - Selector de los elementos HTML
 * @returns {NodeListOf<HTMLElement>} Elementos HTML seleccionados
 * @example const elementos = $$(selector)
 */
const $$ = (selector: string): NodeListOf<HTMLElement> => document.querySelectorAll(selector)

export { $, $$ }
