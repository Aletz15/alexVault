<script setup lang="ts">
// Barra de arriba: logo, nombre del sitio y botón de cuenta
import type { User } from '../interfaces/user.interface'

// usuario es null cuando nadie ha iniciado sesión (modo invitado)
const props = defineProps<{
  usuario: User | null
  cantidadCarrito: number
}>()

const emit = defineEmits<{
  (x: 'open-auth'): void
  (x: 'logout'): void
}>()

// Si ya hay sesión, el icono no abre la ventana de login
function clickCuenta() {
  if (!props.usuario) {
    emit('open-auth')
  }
}
</script>

<template>
  <header class="topbar">
    <div class="topbar__brand">
      <!-- Logo y nombre llevan al catálogo (ruta /) -->
      <RouterLink to="/" class="topbar__home">
        <img src="/icons/Alogo.png" alt="AlexVault" class="topbar__logo" />
        <span class="topbar__name">AlexVault</span>
      </RouterLink>

      <div class="topbar__account">
        <button class="topbar__login" aria-label="Iniciar sesión o registrarse" @click="clickCuenta">
          <img src="/icons/user.svg" alt="" class="topbar__login-icon" />
        </button>

        <!-- Solo se muestra con sesión iniciada -->
        <span v-if="usuario" class="topbar__username">{{ usuario.username }}</span>

        <!--Carrito-->
        <!-- Lleva a la ruta /carrito (si no hay sesión, el router no deja pasar) -->
        <RouterLink to="/carrito" class="topbar__cart" aria-label="Abrir carrito">
          <img src="/icons/cart.svg" alt="" class="topbar__cart-icon" />
          <span v-if="cantidadCarrito > 0" class="topbar__cart-count">{{ cantidadCarrito }}</span>
        </RouterLink>


        <button v-if="usuario" class="topbar__logout" @click="emit('logout')">Cerrar sesión</button>
      </div>
    </div>
  </header>
</template>

<style scoped>
.topbar {
  height: 88px;
  background: #0f141c;
  display: flex;
  align-items: center;
}

.topbar__brand {
  max-width: 1300px;
  width: 100%;
  margin: 0 auto;
  padding: 0 20px;
  display: flex;
  align-items: center;
  gap: 14px;
}

/* RouterLink se convierte en <a>: le quitamos el subrayado y juntamos logo + nombre */
.topbar__home {
  display: flex;
  align-items: center;
  gap: 14px;
  text-decoration: none;
}

.topbar__logo {
  height: 52px;
  width: 52px;
  object-fit: contain;
  filter: brightness(0) invert(1);
}

.topbar__name {
  color: #ffffff;
  font-family: Arial, sans-serif;
  font-size: 1.7rem;
  font-weight: 700;
  letter-spacing: 0.5px;
}

/* margin-left: auto empuja todo el bloque de cuenta hasta la derecha */
.topbar__account {
  margin-left: auto;
  display: flex;
  align-items: center;
  gap: 10px;
}

.topbar__login {
  background: none;
  border: none;
  padding: 6px;
  display: flex;
  cursor: pointer;
  opacity: 0.75;
  transition: opacity 0.2s ease;
}

.topbar__login:hover {
  opacity: 1;
}

.topbar__login-icon {
  height: 30px;
  width: 30px;
}

.topbar__cart {
  position: relative;
  text-decoration: none;
  background: none;
  border: none;
  padding: 6px;
  display: flex;
  cursor: pointer;
  opacity: 0.75;
  transition: opacity 0.2s ease;
}

.topbar__cart:hover {
  opacity: 1;
}

.topbar__cart-icon {
  height: 26px;
  width: 26px;
}

/* El numerito encima del carrito */
.topbar__cart-count {
  position: absolute;
  top: -2px;
  right: -4px;
  min-width: 18px;
  height: 18px;
  padding: 0 4px;
  box-sizing: border-box;
  border-radius: 9px;
  background: #66c0f4;
  color: #0f141c;
  font-family: Arial, sans-serif;
  font-size: 0.7rem;
  font-weight: 700;
  line-height: 18px;
  text-align: center;
}

.topbar__username {
  max-width: 160px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  color: #c7d5e0;
  font-family: Arial, sans-serif;
  font-size: 0.95rem;
  font-weight: 700;
}

.topbar__logout {
  background: none;
  border: none;
  padding: 0 0 0 6px;
  color: #66c0f4;
  font-family: Arial, sans-serif;
  font-size: 0.8rem;
  cursor: pointer;
}

.topbar__logout:hover {
  color: #ffffff;
}
</style>