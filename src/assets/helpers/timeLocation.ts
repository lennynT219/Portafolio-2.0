/**
 * @description Función que actualiza la hora actual en formato 'HH:mm:ss' en un elemento HTML cada segundo
 * @param {HTMLElement | null} elemento - El elemento HTML donde se mostrará la hora
 * @returns {void}
 * @example getHora(document.getElementById('hora'))
 */
const getHora = (elemento: HTMLElement | null): void => {
  setInterval(() => {
    const fecha = new Date()
    elemento != null && (elemento.textContent = fecha.toTimeString().slice(0, 8))
  }, 1000)
}

/**
 * @description Función que retorna la ubicación del usuario basado en su IP.
 * @returns {Promise<string>} Ubicación del usuario
 * @example getLocation() // 'Bogotá, Colombia'
 */
const getLocation = async (): Promise<string> => {
  try {
    const res = await fetch('https://ipapi.co/json/')
    const data = await res.json()
    return `${data.city}, ${data.country_name}`
  } catch (err) {
    console.error(err)
    return 'No se pudo obtener la ubicación'
  }
}

// const getLocation = (): string => {
//   return 'Bogotá, Colombia'
// }

/**
 * @description Función que retorna el tamaño de la ventana del navegador
 * @returns {string} Tamaño de la ventana del navegador
 * @example getSize() // '1920 x 1080'
 */
const getSize = (): string => {
  return `${window.innerWidth} x ${window.innerHeight}`
}

/**
 * @description Función que retorna la fecha en formato 'Mes Año'
 * @param {Date} fecha - Fecha a formatear
 * @returns {string} Fecha en formato 'Mes Año'
 * @example formatFecha(new Date()) // 'Julio 2021'
 */
const formatFecha = (fecha: Date): string => {
  const format = Intl.DateTimeFormat('es-Es', { year: 'numeric', month: 'long' })
    .format(fecha)
    .replace(' de', ' ')
    .replace(/^\w/, c => c.toUpperCase())
  return format
}

export { getHora, getLocation, getSize, formatFecha }
