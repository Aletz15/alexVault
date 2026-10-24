<script setup lang="ts">
interface Props {
  message: string
  itsMine: boolean
  image?: string
}

defineProps<Props>()
</script>

<template>
  <!-- Mensaje mío: a la derecha -->
  <div v-if="itsMine" class="row row--mine">
    <div class="bubble bubble--mine">{{ message }}</div>
  </div>

  <!-- Mensaje recibido: a la izquierda (v-else para que no se repita) -->
  <div v-else class="row">
    <div class="bubble bubble--other">
      <span>{{ message }}</span>
      <img v-if="image" :src="image" alt="Imagen del mensaje" class="bubble__image" />
    </div>
  </div>
</template>

<style scoped>
.row {
  display: flex;
}

.row--mine {
  justify-content: flex-end;
}

.bubble {
  max-width: 75%;
  padding: 8px 12px;
  border-radius: 12px;
  font-family: Arial, sans-serif;
  font-size: 0.95rem;
  line-height: 1.4;
  white-space: pre-wrap;
  word-break: break-word;
}

.bubble--mine {
  background: #66c0f4;
  color: #0f141c;
}

.bubble--other {
  background: #2a3f5a;
  color: #c7d5e0;
}

.bubble__image {
  display: block;
  width: 200px;
  height: 200px;
  object-fit: cover;
  border-radius: 6px;
  margin-top: 8px;
}
</style>