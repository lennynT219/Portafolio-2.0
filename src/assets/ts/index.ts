import { $ } from '../helpers/selector.ts'
import { dragDisplay, resetDragState, updateTransform } from '../helpers/display.ts'
import { getHora, getLocation, getSize } from '../helpers/timeLocation.ts'

const mainContainer = $('.main-container')

/**
 * @description Permite mantener la misma referencia para los eventos
 */
const dragDisplayHandler = (e: MouseEvent) => dragDisplay(e, mainContainer!)

window.addEventListener('resize', () => updateTransform(mainContainer!, window.innerWidth))
updateTransform(mainContainer!, window.innerWidth)

mainContainer?.addEventListener('dragstart', e => e.preventDefault())

mainContainer?.addEventListener('mousedown', e => {
  if (e.button === 0) {
    resetDragState()
    mainContainer.style.cursor = 'grabbing'
    mainContainer.addEventListener('mouseover', dragDisplayHandler)
  }
})

mainContainer?.addEventListener('mouseup', e => {
  if (e.button === 0) {
    mainContainer.style.cursor = 'grab'
    mainContainer.removeEventListener('mouseover', dragDisplayHandler)
    mainContainer.style.setProperty('--rotate', '0deg')
  }
})

const hora = $('.hora')
hora!.textContent = getHora()

const ubicacion = $('.ubicacion')
const mostrarUbicacion = async () => {
  ubicacion!.textContent = await getLocation()
}
mostrarUbicacion()

const size = $('.size')
size!.textContent = getSize()
