<script setup lang="ts">
// Chat de soporte flotante (simulado): una burbuja en la esquina que abre el chat
import { ref } from 'vue'
import ChatMessages from './ChatMessages.vue'
import MessageBox from './MessageBox.vue'
import { useChat } from '../../composables/usechat'

// El estado y las funciones del chat vienen del composable
const { messages, escribiendo, onMessage } = useChat()

// El chat empieza cerrado; la burbuja lo abre y lo cierra
const abierto = ref(false)

function alternarChat() {
  abierto.value = !abierto.value
}
</script>

<template>
  <div class="chat-widget">
    <Transition name="chat">
      <section v-if="abierto" class="chat-panel">
        <header class="chat-panel__header">
          <div>
            <span class="chat-panel__title">Soporte AlexVault</span>
            <span class="chat-panel__status">{{ escribiendo ? 'escribiendo...' : 'En línea' }}</span>
          </div>
          <button class="chat-panel__close" aria-label="Cerrar chat" @click="alternarChat">&times;</button>
        </header>

        <ChatMessages :messages="messages" />
        <!-- notacion kebab-case del prof: sendMessage se escucha como @send-message -->
        <MessageBox @send-message="onMessage($event)" />
      </section>
    </Transition>

    <!-- Burbuja flotante -->
    <button class="chat-toggle" aria-label="Abrir chat de soporte" @click="alternarChat">
      {{ abierto ? '✕' : '💬' }}
    </button>
  </div>
</template>

<style scoped>
/* fixed: se queda en la esquina aunque hagas scroll. z-index 40: arriba de la página, debajo de la ventana de login (50) */
.chat-widget {
  position: fixed;
  right: 24px;
  bottom: 24px;
  z-index: 40;
  font-family: Arial, sans-serif;
}

.chat-toggle {
  width: 60px;
  height: 60px;
  border: none;
  border-radius: 50%;
  background: #66c0f4;
  color: #0f141c;
  font-size: 1.6rem;
  cursor: pointer;
  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.5);
  transition: background 0.2s ease, transform 0.2s ease;
}

.chat-toggle:hover {
  background: #8ed2ff;
  transform: scale(1.06);
}

/* El panel aparece arriba de la burbuja */
.chat-panel {
  position: absolute;
  right: 0;
  bottom: 72px;
  display: flex;
  flex-direction: column;
  width: 340px;
  max-width: calc(100vw - 48px);
  height: 460px;
  max-height: calc(100vh - 120px);
  background: #1b2838;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 12px 32px rgba(0, 0, 0, 0.55);
}

.chat-panel__header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 16px;
  background: #0f141c;
}

.chat-panel__title {
  display: block;
  color: #ffffff;
  font-weight: 700;
}

.chat-panel__status {
  display: block;
  margin-top: 2px;
  color: #66c0f4;
  font-size: 0.75rem;
}

.chat-panel__close {
  background: none;
  border: none;
  color: #8f98a0;
  font-size: 1.6rem;
  line-height: 1;
  cursor: pointer;
}

.chat-panel__close:hover {
  color: #ffffff;
}

/* Animación al abrir / cerrar */
.chat-enter-active,
.chat-leave-active {
  transition: opacity 0.2s ease, transform 0.2s ease;
}

.chat-enter-from,
.chat-leave-to {
  opacity: 0;
  transform: translateY(10px);
}
</style>