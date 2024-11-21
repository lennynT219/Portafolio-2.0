/**
 * @description Función que retorna la fecha actual en formato 'yyyy-mm-dd'
 * @returns {string} Fecha actual
 * @example getFecha() // '2021-08-01'
 */
const getHora = (): string => {
  const fecha = new Date()
  const horas = fecha.getHours().toString().padStart(2, '0')
  const minutos = fecha.getMinutes().toString().padStart(2, '0')
  const segundos = fecha.getSeconds().toString().padStart(2, '0')
  return `${horas}:${minutos}:${segundos}`
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

const getSize = (): string => {
  return `${window.innerWidth} x ${window.innerHeight}`
}



export { getHora, getLocation, getSize }
