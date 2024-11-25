/**
 * @description Actualiza la transformación de un elemento
 * @param {HTMLElement} container Elemento contenedor
 * @param {number} ancho Ancho de la ventana
 */
const updateTransform = (container: HTMLElement, ancho: number) => {
  const scale = (ancho * 0.5) / 1878
  container.style.transform = `translate(calc(-50% + var(--x)), calc( -50% + var(--y))) skewX(-48deg) skewY(14deg) scaleX(2.9) scaleY(1.3) scale(${scale}) rotate(var(--rotate)) translateZ(0)`
}

let pointFinal = 0
let contador = 0

/**
 * @description Actualiza la rotación del contenedor basado en la posición actual del mouse.
 * @param e Evento de mouse.
 * @param mainContainer Contenedor principal que será transformado.
 */
const dragDisplay = (e: MouseEvent, mainContainer: HTMLElement) => {
  contador += pointFinal > e.x ? 1 : -1
  mainContainer.style.setProperty('--rotate', `${contador}deg`)
  pointFinal = e.x
}

/**
 * @description Reinicia el estado de los valores internos.
 */
const resetDragState = () => {
  pointFinal = 0
  contador = 0
}

export { updateTransform, dragDisplay, resetDragState }
