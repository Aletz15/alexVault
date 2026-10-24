<script setup lang="ts">
import type { ChatMessage } from '../../interfaces/chatmessage.interface.ts'
import ChatBubble from './ChatBubble.vue'

interface Props {
  messages: ChatMessage[]
}

defineProps<Props>()
</script>

<template>
  <div class="chat-messages">
    <div class="chat-messages__list">
      <ChatBubble
        v-for="message in messages"
        :key="message.id"
        :its-mine="message.itsMine"
        :message="message.message"
        :image="message.image"
      />
      <!-- Lo mismo se puede escribir con v-bind="message", que pasa todas las propiedades juntas -->
    </div>
  </div>
</template>

<style scoped>
.chat-messages {
  flex: 1;
  overflow-y: auto;
  padding: 16px;
  background: #131a24;
}

.chat-messages__list {
  display: flex;
  flex-direction: column;
  gap: 8px;
}
</style>