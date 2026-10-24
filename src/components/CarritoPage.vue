<script setup lang="ts">
// Página "Tu carrito de compra" (ruta /carrito): lista de juegos + total estimado.
// Lee el carrito directo del composable, ya no recibe props del padre.
import { ref } from 'vue'
import { useCarrito } from '../composables/usecarrito'

const { carrito: juegos, total, quitarDelCarrito, vaciarCarrito, comprarCarrito } = useCarrito()

const compraRealizada = ref(false)

function comprar() {
  comprarCarrito()
  compraRealizada.value = true
}
</script>

<template>
  <section class="page">
    <!-- Vista de compra hecha -->
    <div v-if="compraRealizada" class="page__done">
      <h1 class="page__title">¡Compra realizada!</h1>
      <p class="page__text">Gracias por tu compra en AlexVault</p>
      <RouterLink to="/" class="btn btn--azul">Volver al catálogo</RouterLink>
    </div>

    <!-- Vista del carrito -->
    <template v-else>
      <p class="page__breadcrumb">
        <RouterLink to="/" class="page__crumb">Inicio</RouterLink>
        &gt; Tu carrito de compra
      </p>

      <h1 class="page__title">
        Tu carrito de compra ({{ juegos.length }} {{ juegos.length === 1 ? 'artículo' : 'artículos' }})
      </h1>

      <!-- Carrito vacío -->
      <div v-if="juegos.length === 0">
        <p class="page__text">Tu carrito está vacío.</p>
        <RouterLink to="/" class="btn btn--gris">Seguir comprando</RouterLink>
      </div>

      <div v-else class="page__layout">
        <div class="page__left">
          <ul class="page__list">
            <li v-for="juego in juegos" :key="juego.gameId" class="item">
              <img :src="juego.cover" :alt="juego.title" class="item__cover" />

              <div class="item__info">
                <span class="item__name">{{ juego.title }}</span>
                <span v-if="juego.preventa" class="item__tag">PREVENTA</span>
              </div>

              <div class="item__right">
                <span class="item__price">{{ juego.price }}</span>
                <button class="item__remove" @click="quitarDelCarrito(juego.gameId)">Eliminar</button>
              </div>
            </li>
          </ul>

          <div class="page__actions">
            <RouterLink to="/" class="btn btn--gris">Seguir comprando</RouterLink>
            <button class="btn btn--azul" @click="comprar">Continuar con el pago</button>
            <button class="page__clear" @click="vaciarCarrito">Eliminar todos los artículos</button>
          </div>
        </div>

        <!-- Cuadro del total estimado -->
        <aside class="total-box">
          <div class="total-box__row">
            <span>Total estimado</span>
            <span class="total-box__amount">Mex$ {{ total.toFixed(2) }}</span>
          </div>
          <p class="total-box__note">
            Los impuestos de venta se calcularán durante el pago (si es aplicable).
          </p>
          <button class="btn btn--azul btn--full" @click="comprar">Continuar con el pago</button>
        </aside>
      </div>
    </template>
  </section>
</template>

<style scoped>
.page {
  max-width: 1200px;
  margin: 0 auto;
  padding: 24px 20px 60px;
  color: #c7d5e0;
  font-family: Arial, sans-serif;
  text-align: left;
}

.page__breadcrumb {
  margin: 0 0 4px;
  font-size: 0.8rem;
  color: #8f98a0;
}

.page__crumb {
  color: #ffffff;
  text-decoration: none;
}

.page__crumb:hover {
  text-decoration: underline;
}

.page__title {
  margin: 0 0 20px;
  color: #ffffff;
  font-size: 1.8rem;
  font-weight: 700;
  letter-spacing: 0;
}

.page__text {
  margin: 0 0 20px;
  color: #c7d5e0;
}

.page__done {
  padding-top: 20px;
}

.page__layout {
  display: flex;
  gap: 20px;
  align-items: flex-start;
}

.page__left {
  flex: 2;
  min-width: 0;
}

.page__list {
  list-style: none;
  margin: 0 0 16px;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.item {
  display: flex;
  align-items: center;
  gap: 16px;
  background: rgba(15, 20, 28, 0.85);
  border-radius: 4px;
  padding: 14px;
}

.item__cover {
  width: 200px;
  aspect-ratio: 460 / 215;
  object-fit: cover;
  border-radius: 3px;
  flex: none;
}

.item__info {
  flex: 1;
  min-width: 0;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
}

.item__name {
  color: #ffffff;
  font-size: 1.1rem;
  font-weight: 700;
}

.item__tag {
  padding: 2px 6px;
  border-radius: 2px;
  background: rgba(103, 193, 245, 0.15);
  color: #67c1f5;
  font-size: 0.65rem;
  font-weight: 700;
}

.item__right {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 12px;
}

.item__price {
  color: #ffffff;
  font-weight: 700;
  white-space: nowrap;
}

.item__remove,
.page__clear {
  background: none;
  border: none;
  padding: 0;
  color: #8f98a0;
  font-size: 0.8rem;
  text-decoration: underline;
  cursor: pointer;
}

.item__remove:hover,
.page__clear:hover {
  color: #ffffff;
}

.page__actions {
  display: flex;
  align-items: center;
  gap: 12px;
  flex-wrap: wrap;
}

.page__clear {
  margin-left: auto;
}

/* .btn sirve tanto para <button> como para <RouterLink> (que se convierte en <a>) */
.btn {
  display: inline-block;
  border: none;
  border-radius: 3px;
  color: #ffffff;
  font-size: 0.9rem;
  padding: 10px 18px;
  text-align: center;
  text-decoration: none;
  cursor: pointer;
  transition: background 0.2s ease;
}

.btn--gris {
  background: #3a4352;
}

.btn--gris:hover {
  background: #4b5567;
}

.btn--azul {
  background: #1a9fff;
}

.btn--azul:hover {
  background: #4db5ff;
}

.btn--full {
  width: 100%;
}

.total-box {
  flex: 1;
  background: rgba(15, 20, 28, 0.85);
  border-radius: 4px;
  padding: 18px;
}

.total-box__row {
  display: flex;
  justify-content: space-between;
  margin-bottom: 12px;
  color: #ffffff;
  font-size: 0.9rem;
}

.total-box__amount {
  font-size: 1.05rem;
  font-weight: 700;
}

.total-box__note {
  margin: 0 0 16px;
  font-size: 0.8rem;
  line-height: 1.4;
  color: #c7d5e0;
}

@media (max-width: 800px) {
  .page__layout {
    flex-direction: column;
  }

  .page__left,
  .total-box {
    width: 100%;
    box-sizing: border-box;
  }

  .item {
    flex-wrap: wrap;
  }

  .item__cover {
    width: 100%;
  }

  .item__right {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 100%;
  }

  .page__clear {
    margin-left: 0;
  }
}
</style>