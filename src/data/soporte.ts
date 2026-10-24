// Respuestas automaticas simuladas del chat de soporte 
//igual que heroes.ts: la interfaz datos funcion
export interface RespuestaSoporte {
  palabras: string[] // mensaje contiene palabra
  respuesta: string // simulado contesta
}

// Las más especificas van primero y los saludos al final
const respuestas: RespuestaSoporte[] = [
  {
    palabras: ['comprar', 'compra', 'pagar', 'pago', 'compro'],
    respuesta:
      'Puedes explorar la tienda como invitado, pero para comprar un juego necesitas iniciar sesión o crear una cuenta.',
  },
  {
    palabras: ['registro', 'registrar', 'registrarme', 'crear cuenta', 'cuenta'],
    respuesta:
      'Para crear una cuenta toca el icono de usuario de la esquina superior derecha y elige "Regístrate". Necesitas un correo que no esté registrado.',
  },
  {
    palabras: ['contraseña', 'sesion', 'login', 'entrar'],
    respuesta:
      'Para iniciar sesión usa el correo y la contraseña con los que te registraste. Si te marca error, revisa que no tengas mayúsculas o espacios de más.',
  },
  {
    palabras: ['gracias'],
    respuesta: '¡De nada! Si necesitas algo más, aqui estoy.',
  },
  {
    palabras: ['hola', 'buenas', 'buenos'],
    respuesta: 'Hola!, ¿En que te puedo ayudarte?',
  },
]

const respuestaPorDefecto =
  'No estoy seguro de haber entendido. Puedes preguntarme por compras, tu cuenta, tu contraseña, reembolsos o precios.'

// Busca la primera respuesta cuyas palabras aparezcan en el mensaje
export const getRespuestaSoporte = (texto: string): string => {
  // Pasamos el mensaje a minúsculas para comparar
  const mensaje = texto.toLowerCase()

  const encontrada = respuestas.find((r) => r.palabras.some((palabra) => mensaje.includes(palabra)))

  return encontrada?.respuesta ?? respuestaPorDefecto
}