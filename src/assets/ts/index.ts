import { $ } from '../helpers/selector.ts'
import {
  dragDisplay,
  resetDragState,
  updateTransform
} from '../helpers/display.ts'
import { getHora, getLocation, getSize } from '../helpers/timeLocation.ts'

const mainContainer = $('.main-container')!
const size = $('.size')!
const hora = $('.hora')!
const ubicacion = $('.ubicacion')!

const dragDisplayHandler = (e: MouseEvent) => dragDisplay(e, mainContainer)

updateTransform(mainContainer, window.innerWidth)

// Inicializaciones
size.textContent = getSize()

window.addEventListener('resize', () => {
  updateTransform(mainContainer, window.innerWidth)
  size.textContent = getSize()
})

mainContainer.addEventListener('dragstart', e => e.preventDefault())

mainContainer.addEventListener('mousedown', e => {
  if (e.button === 0) {
    resetDragState()
    mainContainer.style.cursor = 'grabbing'
    mainContainer.addEventListener('mouseover', dragDisplayHandler)
  }
})

mainContainer.addEventListener('mouseup', e => {
  if (e.button === 0) {
    mainContainer.style.cursor = 'grab'
    mainContainer.removeEventListener('mouseover', dragDisplayHandler)
    mainContainer.style.setProperty('--rotate', '0deg')
  }
})

getHora(hora)

const mostrarUbicacion = async () => {
  ubicacion.textContent = getLocation()
}
mostrarUbicacion()
