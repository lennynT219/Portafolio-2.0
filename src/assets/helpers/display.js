/**
 * @description Actualiza la transformación de un elemento
 * @param {HTMLElement} container Elemento contenedor
 * @param {number} ancho Ancho de la ventana
 */
const updateTransform = (container, ancho) => {
  const scale = (ancho * 0.7) / 1872
  container.style.transform = `translate(calc(-50% + var(--x)), calc( -50% + var(--y))) skewX(-48deg) skewY(14deg) scaleX(2) scale(${scale}) rotate(var(--rotate)) translateZ(0)`
}

export { updateTransform }
