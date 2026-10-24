<script setup lang="ts">
import { ref } from 'vue'

// Evento que le avisa al padre (SoporteView). Es la otra forma de escribir defineEmits que usa el profe.
const emits = defineEmits<{
  sendMessage: [text: string]
}>()

const message = ref('')

const sendMessage = () => {
  // Si está vacío (o solo espacios) no enviamos nada
  if (!message.value.trim()) return

  emits('sendMessage', message.value)
  message.value = ''
}
</script>

<template>
  <div class="message-box">
    <input
      v-model="message"
      type="text"
      placeholder="Escribe tu mensaje aqui..."
      class="message-box__input"
      @keypress.enter="sendMessage"
    />
    <button class="message-box__button" @click="sendMessage">Enviar</button>
  </div>
</template>

<style scoped>
.message-box {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 12px 16px;
  background: #0f141c;
}

.message-box__input {
  flex: 1;
  background: #1b2838;
  border: 1px solid #2f4257;
  border-radius: 20px;
  color: #ffffff;
  font-size: 0.95rem;
  padding: 10px 16px;
}

.message-box__input:focus {
  outline: none;
  border-color: #66c0f4;
}

.message-box__button {
  background: #66c0f4;
  border: none;
  border-radius: 20px;
  color: #0f141c;
  font-size: 0.9rem;
  font-weight: 700;
  padding: 10px 18px;
  cursor: pointer;
  transition: background 0.2s ease;
}

.message-box__button:hover {
  background: #8ed2ff;
}
</style>