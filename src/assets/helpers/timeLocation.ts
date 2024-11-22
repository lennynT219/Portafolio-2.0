/**
 * @description Función que actualiza la hora actual en formato 'HH:mm:ss' en un elemento HTML cada segundo
 * @param {HTMLElement | null} elemento - El elemento HTML donde se mostrará la hora
 */
const getHora = (elemento: HTMLElement | null): void => {
  setInterval(() => {
    const fecha = new Date();
    elemento && (elemento.textContent = fecha.toTimeString().slice(0, 8));
  }, 1000);
};

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
