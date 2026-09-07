<script setup lang="ts">
// Fila de juegos "mejor puntuados" para la sección Novedades.

defineProps<{
  games: any[]
  title?: string
}>()

const emit = defineEmits(['select-game'])
</script>

<template>
  <section class="recommended">
    <h2 class="recommended__title">{{ title ?? 'Recomendado para ti' }}</h2>

    <div class="recommended__row">
      <button
        v-for="game in games"
        :key="game.id"
        class="recommended__item"
        @click="emit('select-game', game.id)"
      >
      <!-- Div para que se vea la minitarjeta  -->
        <div class="recommended__thumb-wrap">
          <img class="recommended__thumb" :src="game.cover" :alt="game.title" />
        </div>

        <!-- Tarjeta que aparece al pasar el mouse por encima -->
        <div class="recommended__hover">
          <img class="recommended__hover-cover" :src="game.cover" :alt="game.title" />
          <div class="recommended__hover-body">
            <p class="recommended__hover-title">{{ game.title }}</p>
            <p class="recommended__hover-date">Disponible: {{ game.releaseDate }}</p>
            <p class="recommended__hover-score">Puntuación: {{ game.score }}/100</p>
            <div class="recommended__hover-tags">
              <span v-for="tag in game.tags.slice(0, 3)" :key="tag">{{ tag }}</span>
            </div>
          </div>
        </div>
      </button>
    </div>
  </section>
</template>

<style scoped>
.recommended {
  position: relative;
  z-index: 1;
  max-width: 1300px;
  margin: 0 auto;
  padding: 0 20px 60px;
}

.recommended__title {
  color: #ffffff;
  font-family: Arial, sans-serif;
  font-size: 1.4rem;
  font-weight: 700;
  margin: 0 0 16px;
  text-align: left;
}

.recommended__row {
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
}

.recommended__item {
  position: relative;
  flex: 0 0 180px;
  height: 100px;
  padding: 0;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  background: none;
}

/* Div para que se vea el contenedor de la minitarjeta*/
.recommended__thumb-wrap {
  width: 100%;
  height: 100%;
  overflow: hidden;
  border-radius: 4px;
}

.recommended__thumb {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 4px;
  display: block;
  outline: 2px solid transparent;
  outline-offset: 2px;
  transition: transform 0.15s ease, outline-color 0.15s ease;
}

.recommended__item:hover .recommended__thumb {
  transform: scale(1.08);   
  outline-color: #66c0f4;
}

/* Mini tarjeta*/
.recommended__hover {
  position: absolute;
  bottom: calc(100% + 8px);
  left: 50%;
  transform: translateX(-50%) translateY(4px);
  width: 280px;
  background: #1b2838;
  border-radius: 4px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.5);
  z-index: 50;
  overflow: hidden;
  text-align: left;
  opacity: 0;
  visibility: hidden;
  pointer-events: none;
  transition: opacity 0.15s ease, transform 0.15s ease;
}

.recommended__item:hover .recommended__hover {
  opacity: 1;
  visibility: visible;
  transform: translateX(-50%) translateY(0);
}

.recommended__hover-cover {
  width: 100%;
  aspect-ratio: 460 / 215;
  object-fit: cover;
  display: block;
}

.recommended__hover-body {
  padding: 10px 12px;
}

.recommended__hover-title {
  color: #ffffff;
  font-weight: 700;
  font-size: 0.95rem;
  margin: 0 0 6px;
}

.recommended__hover-date {
  color: #8f98a0;
  font-size: 0.75rem;
  margin: 0 0 4px;
}

.recommended__hover-score {
  color: #a4d007;
  font-weight: 700;
  font-size: 0.8rem;
  margin: 0 0 8px;
}

.recommended__hover-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
}

.recommended__hover-tags span {
  background: rgba(103, 193, 245, 0.15);
  color: #67c1f5;
  font-size: 0.7rem;
  padding: 3px 7px;
  border-radius: 2px;
}

@media (max-width: 800px) {
  .recommended__row {
    justify-content: center;
  }
}
</style>