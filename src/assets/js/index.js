import { $ } from '../helpers/selector.js'
import { updateTransform } from '../helpers/display.js'

const mainContainer = $('.main-container')

window.addEventListener('resize', () => {
  updateTransform(mainContainer, window.innerWidth)
})
updateTransform(mainContainer, window.innerWidth)

mainContainer?.addEventListener('dragstart', e => e.preventDefault())
mainContainer?.addEventListener('mousedown', e => {
  if (e.button === 0) {
    mainContainer.style.cursor = 'grabbing'
  }
})

mainContainer?.addEventListener('mouseup', e => {
  if (e.button === 0) {
    mainContainer.style.cursor = 'grab'
  }
})
