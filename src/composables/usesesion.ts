import { ref } from 'vue'
import type { User } from '../interfaces/user.interface'

// Estas variables están FUERA de la función a propósito: así todos los componentes
// (y el router) que llamen a useSesion() comparten la misma sesión.
// Si estuvieran dentro, cada componente tendría la suya.

// Usuario con sesión iniciada (null = modo invitado)
const usuarioActual = ref<User | null>(null)

// Ventana de inicio de sesión / registro
const authAbierto = ref(false)

// Aviso que se muestra arriba del formulario
const mensajeAuth = ref('')

export const useSesion = () => {
  function abrirAuth() {
    mensajeAuth.value = ''
    authAbierto.value = true
  }

  // para si intentas comprar en modo invitado
  function avisarLogin() {
    mensajeAuth.value = 'Debes iniciar sesion o registrarte para poder comprar'
    authAbierto.value = true
  }

  function cerrarAuth() {
    authAbierto.value = false
  }

  // Llega el usuario desde AuthModal: lo guardamos y cerramos la ventana
  function iniciarSesion(user: User) {
    usuarioActual.value = user
    authAbierto.value = false
  }

  function cerrarSesion() {
    usuarioActual.value = null
  }

  return {
    usuarioActual,
    authAbierto,
    mensajeAuth,
    abrirAuth,
    avisarLogin,
    cerrarAuth,
    iniciarSesion,
    cerrarSesion,
  }
}