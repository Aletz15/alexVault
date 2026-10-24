<script setup lang="ts">
// Ventana "¡Agregado a tu carrito!" que sale al presionar el botón de comprar / preventa
import type { JuegoCarrito } from '../interfaces/carrito.interface'

//juego q se agrega y cuantos en carrito(2)
defineProps<{
  juego: JuegoCarrito
  cantidad: number
}>()

// evento que le avisa al padre app
const emit = defineEmits<{
  (x: 'close'): void
}>()
</script>

<template>
  <!-- click fuera se cierra -->
  <div class="modal-backdrop" @click.self="emit('close')">
    <section class="agregado">
      <button class="agregado__close" aria-label="Cerrar" @click="emit('close')">&times;</button>

      <h2 class="agregado__title">¡Agregado a tu carrito!</h2>

      <div class="agregado__item">
        <img :src="juego.cover" :alt="juego.title" class="agregado__cover" />

        <div class="agregado__info">
          <span class="agregado__name">{{ juego.title }}</span>
          <span v-if="juego.preventa" class="agregado__tag">PREVENTA</span>
        </div>

        <span class="agregado__price">{{ juego.price }}</span>
      </div>

      <div class="agregado__buttons">
        <button class="agregado__btn agregado__btn--gris" @click="emit('close')">
          Seguir comprando
        </button>
        <!-- routerlink a /carrito y de paso cierra esta ventana -->
        <RouterLink to="/carrito" class="agregado__btn agregado__btn--azul" @click="emit('close')">
          Ver mi carrito ({{ cantidad }})
        </RouterLink>
      </div>
    </section>
  </div>
</template>

<style scoped>
.modal-backdrop {
  position: fixed;
  inset: 0;
  z-index: 50;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
}

.agregado {
  position: relative;
  width: 100%;
  max-width: 620px;
  background: #2a3341;
  border-radius: 4px;
  padding: 20px;
  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.6);
  font-family: Arial, sans-serif;
  text-align: left;
}

.agregado__close {
  position: absolute;
  top: 12px;
  right: 16px;
  background: none;
  border: none;
  color: #ffffff;
  font-size: 1.8rem;
  line-height: 1;
  cursor: pointer;
}

.agregado__close:hover {
  color: #66c0f4;
}

.agregado__title {
  margin: 0 0 16px;
  color: #ffffff;
  font-size: 1.3rem;
  font-weight: 700;
}

.agregado__item {
  display: flex;
  align-items: center;
  gap: 14px;
  background: #1a2230;
  border-radius: 4px;
  padding: 12px;
  margin-bottom: 18px;
}

.agregado__cover {
  width: 200px;
  aspect-ratio: 460 / 215;
  object-fit: cover;
  border-radius: 3px;
  flex: none;
}

.agregado__info {
  flex: 1;
  min-width: 0;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
}

.agregado__name {
  color: #ffffff;
  font-size: 1.05rem;
  font-weight: 700;
}

.agregado__tag {
  padding: 2px 6px;
  border-radius: 2px;
  background: rgba(103, 193, 245, 0.15);
  color: #67c1f5;
  font-size: 0.65rem;
  font-weight: 700;
}

.agregado__price {
  color: #ffffff;
  font-weight: 700;
  white-space: nowrap;
}

.agregado__buttons {
  display: flex;
  gap: 12px;
}

/* sirve para <button> y para <RouterLink> (que se convierte en <a>) */
.agregado__btn {
  flex: 1;
  box-sizing: border-box;
  text-align: center;
  text-decoration: none;
  border: none;
  border-radius: 3px;
  color: #ffffff;
  font-size: 0.95rem;
  padding: 11px;
  cursor: pointer;
  transition: background 0.2s ease;
}

.agregado__btn--gris {
  background: #3a4352;
}

.agregado__btn--gris:hover {
  background: #4b5567;
}

.agregado__btn--azul {
  background: #1a9fff;
}

.agregado__btn--azul:hover {
  background: #4db5ff;
}

@media (max-width: 600px) {
  .agregado__item {
    flex-direction: column;
    align-items: stretch;
  }

  .agregado__cover {
    width: 100%;
  }

  .agregado__buttons {
    flex-direction: column;
  }
}
</style>