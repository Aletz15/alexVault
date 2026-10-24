import { ref, computed } from 'vue'
import type { JuegoCarrito } from '../interfaces/carrito.interface'
import { crearJuegoCarrito, totalCarrito } from '../data/carrito'
import { useSesion } from './usesesion'

//carrito de compras lista
// (fuera de la función, igual que en useSesion, para que el carrito sea el mismo en toda la app)
const carrito = ref<JuegoCarrito[]>([])

// El juego que se acaba de agregar. Si tiene valor, se ve la ventana "¡Agregado a tu carrito!"
const juegoAgregado = ref<JuegoCarrito | null>(null)

export const useCarrito = () => {
  const { usuarioActual, avisarLogin } = useSesion()

  //recalcula cuando cambia el carrito o se añade
  const total = computed(() => totalCarrito(carrito.value))

  function agregarAlCarrito(gameId: string) {
    if (!usuarioActual.value) {
      avisarLogin()
      return
    }

    // Si ya está en el carrito no lo repetimos, solo volvemos a mostrar la ventana
    const yaEsta = carrito.value.find((juego) => juego.gameId === gameId)
    if (yaEsta) {
      juegoAgregado.value = yaEsta
      return
    }

    const juego = crearJuegoCarrito(gameId)
    if (juego) {
      carrito.value.push(juego)
      juegoAgregado.value = juego
    }
  }

  function cerrarAgregado() {
    juegoAgregado.value = null
  }

  function quitarDelCarrito(gameId: string) {
    carrito.value = carrito.value.filter((juego) => juego.gameId !== gameId)
  }

  function vaciarCarrito() {
    carrito.value = []
  }

  function comprarCarrito() {
    carrito.value = []
  }

  return {
    carrito,
    juegoAgregado,
    total,
    agregarAlCarrito,
    cerrarAgregado,
    quitarDelCarrito,
    vaciarCarrito,
    comprarCarrito,
  }
}