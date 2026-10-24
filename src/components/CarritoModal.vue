<script setup lang="ts">

import {computed, ref} from 'vue'
import type {JuegoCarrito} from '../interfaces/carrito.interface'
import {totalCarrito} from '../data/carrito'

const props = defineProps<{
    juegos: JuegoCarrito[]
}>()

//eventosavisan app.vue
const emit = defineEmits<{
    (x: 'close'): void
    (x: 'remove', gameId: string): void
    (x: 'buy'): void
}>()

//recalcula cuando cambia el carrito os eañade
const total = computed(() => totalCarrito(props.juegos))

const compraRealizada = ref(false)

function comprar(){
    emit('buy')
    compraRealizada.value = true
}

function cerrar(){
    emit('close')
}
</script>


<template>
    <div class="modal-backdrop" @click.self="cerrar">
        <section class="modal">
            <button class="modal__close" aria-label="Cerrar" @click="cerrar">&times;</button>

    
        <!-- Compra hecha vista-->
         <div v-if="compraRealizada">
            <h2 class="modal__title"> Compra Realizada! </h2>
            <p class="modal__text"> Gracias por tu compra en AlexVault</p>
            <button clas="modal__button" @click="cerrar">Cerrar</button>
        </div>

        <!-- vista carritito-->
        <div v-else>
            <h2 class="moda_title">Tu carrito</h2>

            <p v-if="juegos.length === 0" class="modal__text">Tu carrito esta vacio.</p>

            <template v-else>
                <ul class="cart__list">
                    <li v-for="(juego, index) in juegos" :key="index" class="cart__juego">
                        <img :src="juego.cover" :alt="juego.title" class="cart__cover" />
                        <div class="cart__info">
                            <span class="cart__title">{{ juego.title }}
                                <span v-if="juego.preventa" class="cart__tag">PREVENTA</span>
                            </span>
                            <span class="cart__price">{{ juego.price }}</span>
                        </div>
                        <button class="cart__remove" @click="emit('remove', juego.gameId)">Quitar del Carrito</button>
                    </li>
                </ul>

                <div class="cart__total">
                    <span>Total</span>
                    <span>Mex$ {{ total.toFixed(2)}}</span>
                </div>
                
                <button class="modal__button" @click="comprar">Comprar</button>
            </template>
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
 
.modal {
  position: relative;
  width: 100%;
  max-width: 480px;
  max-height: 90vh;
  overflow-y: auto;
  background: #1b2838;
  border-radius: 8px;
  padding: 28px;
  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.6);
  font-family: Arial, sans-serif;
  text-align: left;
}
 
.modal__close {
  position: absolute;
  top: 10px;
  right: 14px;
  background: none;
  border: none;
  color: #8f98a0;
  font-size: 1.8rem;
  line-height: 1;
  cursor: pointer;
}
 
.modal__close:hover {
  color: #ffffff;
}
 
.modal__title {
  margin: 0 0 18px;
  color: #ffffff;
  font-size: 1.4rem;
  font-weight: 700;
}
 
.modal__text {
  color: #c7d5e0;
  margin: 0 0 20px;
}
 
.cart__list {
  list-style: none;
  margin: 0 0 16px;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 10px;
}
 
.cart__item {
  display: flex;
  align-items: center;
  gap: 12px;
  background: #0f141c;
  border-radius: 6px;
  padding: 8px;
}
 
.cart__cover {
  width: 96px;
  aspect-ratio: 460 / 215;
  object-fit: cover;
  border-radius: 3px;
}
 
.cart__info {
  flex: 1;
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: 4px;
}
 
.cart__title {
  color: #ffffff;
  font-size: 0.9rem;
  font-weight: 700;
}
 
.cart__tag {
  margin-left: 6px;
  padding: 2px 6px;
  border-radius: 2px;
  background: rgba(103, 193, 245, 0.15);
  color: #67c1f5;
  font-size: 0.65rem;
  font-weight: 700;
}
 
.cart__price {
  color: #a4d007;
  font-size: 0.85rem;
}
 
.cart__remove {
  background: none;
  border: none;
  color: #66c0f4;
  font-size: 0.8rem;
  cursor: pointer;
}
 
.cart__remove:hover {
  color: #ffffff;
}
 
.cart__total {
  display: flex;
  justify-content: space-between;
  margin-bottom: 16px;
  color: #ffffff;
  font-weight: 700;
}
 
.modal__button {
  width: 100%;
  background: #5c7e10;
  border: none;
  border-radius: 4px;
  color: #ffffff;
  font-size: 1rem;
  font-weight: 700;
  padding: 11px;
  cursor: pointer;
  transition: background 0.2s ease;
}
 
.modal__button:hover {
  background: #76a314;
}
</style>
 