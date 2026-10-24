<script setup lang="ts">
// Ventana que alterna entre "Iniciar sesión" y "Crear cuenta"
import { ref } from 'vue'
import FormLogin from './FormLogin.vue'
import FormRegistro from './FormRegistro.vue'
import type { User } from '../interfaces/user.interface'

// Aviso debes inisiar sersion
defineProps<{
  aviso?: string
}>()

// Eventos que le avisa al padre app
const emit = defineEmits<{
  (x: 'close'): void
  (x: 'logueado', user: User): void
}>()

// Qué formulario se ve. Al abrir empieza en el inicio de sesión
const modo = ref<'login' | 'registro'>('login')

function cerrar() {
  emit('close')
}

// El usuario que encontró FormLogin se lo pasamos a App.vue
function alIniciarSesion(user: User) {
  emit('logueado', user)
}
</script>

<template>
  <!-- Clic en el fondo oscuro cierra la ventana (.self = solo si el clic fue en el fondo) -->
  <div class="modal-backdrop" @click.self="cerrar">
    <section class="modal">
      <button class="modal__close" aria-label="Cerrar" @click="cerrar">&times;</button>

      <p v-if="aviso" class="modal__aviso">{{ aviso }}</p>

      <FormLogin v-if="modo === 'login'" @logueado="alIniciarSesion" @registro="modo = 'registro'" />
      <FormRegistro v-else @login="modo = 'login'" />
    </section>
  </div>
</template>

<!-- Los formularios son componentes hijos: :deep() hace que estos estilos también les lleguen a ellos -->
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
  max-width: 460px;
  max-height: 90vh;
  overflow-y: auto;
  background: #1b2838;
  border-radius: 8px;
  padding: 28px;
  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.6);
  font-family: Arial, sans-serif;
  text-align: left;
}

.modal__aviso {
  margin: 0 0 16px;
  padding: 10px 12px;
  border-radius: 4px;
  background: rgba(102, 192, 244, 0.15);
  color: #66c0f4;
  font-size: 0.85rem;
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

.modal :deep(.modal__title) {
  margin: 0 0 18px;
  color: #ffffff;
  font-size: 1.4rem;
  font-weight: 700;
}

.modal :deep(.modal__text) {
  color: #c7d5e0;
  margin: 0 0 20px;
}

.modal :deep(.modal__form) {
  display: flex;
  flex-direction: column;
  gap: 14px;
}

.modal :deep(.modal__row) {
  display: flex;
  gap: 12px;
}

.modal :deep(.modal__row .modal__field) {
  flex: 1;
  min-width: 0;
}

.modal :deep(.modal__field) {
  display: flex;
  flex-direction: column;
  gap: 6px;
  color: #c7d5e0;
  font-size: 0.85rem;
  font-weight: 700;
}

.modal :deep(.modal__field input) {
  background: #0f141c;
  border: 1px solid #2f4257;
  border-radius: 4px;
  color: #ffffff;
  font-size: 0.95rem;
  padding: 10px;
  color-scheme: dark;
}

.modal :deep(.modal__field input:focus) {
  outline: none;
  border-color: #66c0f4;
}

.modal :deep(.modal__error) {
  margin: 0;
  color: #ff6b6b;
  font-size: 0.9rem;
}

.modal :deep(.modal__submit) {
  margin-top: 6px;
  background: #66c0f4;
  border: none;
  border-radius: 4px;
  color: #0f141c;
  font-size: 1rem;
  font-weight: 700;
  padding: 11px;
  cursor: pointer;
  transition: background 0.2s ease;
}

.modal :deep(.modal__submit--full) {
  width: 100%;
}

.modal :deep(.modal__submit:hover) {
  background: #8ed2ff;
}

.modal :deep(.modal__switch) {
  margin: 4px 0 0;
  color: #8f98a0;
  font-size: 0.85rem;
  text-align: center;
}

.modal :deep(.modal__link) {
  background: none;
  border: none;
  padding: 0;
  color: #66c0f4;
  font-size: inherit;
  font-weight: 700;
  cursor: pointer;
}

.modal :deep(.modal__link:hover) {
  color: #ffffff;
}
</style>