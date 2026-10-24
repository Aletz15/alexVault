<script setup lang="ts">
import TopBar from './components/TopBar.vue'
import ChatWidget from './components/chat/ChatWidget.vue'
import AuthModal from './components/AuthModal.vue'
import AgregadoModal from './components/AddedCart.vue'
import { useSesion } from './composables/usesesion'
import { useCarrito } from './composables/usecarrito'

// La sesión y el carrito viven en composables (como useContador), así cualquier página los puede usar
const { usuarioActual, authAbierto, mensajeAuth, abrirAuth, cerrarAuth, iniciarSesion, cerrarSesion } =
  useSesion()
const { carrito, juegoAgregado, cerrarAgregado, vaciarCarrito } = useCarrito()

function salir() {
  cerrarSesion()
  vaciarCarrito()
  cerrarAgregado()
}
</script>

<template>
  <main class="app">
    <TopBar
      :usuario="usuarioActual"
      :cantidad-carrito="carrito.length"
      @open-auth="abrirAuth"
      @logout="salir"
    />

    <!-- Aquí se muestra la página de la ruta: catálogo, detalle de un juego o carrito -->
    <RouterView />

    <!-- Chat de soporte flotante (simulado) -->
    <ChatWidget />

    <AuthModal
      v-if="authAbierto"
      :aviso="mensajeAuth"
      @close="cerrarAuth"
      @logueado="iniciarSesion"
    />

    <!-- Ventana "¡Agregado a tu carrito!" -->
    <AgregadoModal
      v-if="juegoAgregado"
      :juego="juegoAgregado"
      :cantidad="carrito.length"
      @close="cerrarAgregado"
    />
  </main>
</template>

<style>
body {
  margin: 0;
  background: #171a21;
}

.app {
  min-height: 100vh;
}
</style>