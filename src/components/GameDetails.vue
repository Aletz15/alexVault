<script setup lang="ts">
// Vista de detalles proximos lanzamientos + miniaturas
// características e influencers
import { ref } from 'vue'
import { getGameById } from '../data/games'

const props = defineProps(['gameId'])
const emit = defineEmits(['back'])

// busca el juego usando el id que le llego
const game = getGameById(props.gameId)

//la lista de miniaturas primero el video y luego las fotos
const mediaList: { type: string; src: string }[] = []
if (game) {
  if (game.video) {
    mediaList.push({ type: 'video', src: game.video })
  }
  for (const foto of game.gallery) {
    mediaList.push({ type: 'image', src: foto })
  }
}

const activeIndex = ref(0)

function verMedia(indice: number) {
  activeIndex.value = indice
}

function volver() {
  emit('back')
}
</script>

<template>
  <section v-if="game" class="detail">
    <button class="detail__back" @click="volver">&#8592; Volver al catálogo</button>

    <p class="detail__breadcrumb">Todos los juegos &gt; Terror &gt; {{ game.title }}</p>
    <h1 class="detail__title">{{ game.title }}</h1>

    <div class="detail__main">
      <!-- reproductor grande yminiaturas -->
      <div class="detail__gallery">
        <div class="detail__player">
          <video
            v-if="mediaList[activeIndex].type === 'video'"
            class="detail__player-media"
            :src="mediaList[activeIndex].src"
            controls
            autoplay
            muted
            loop
          ></video>
          <img
            v-else
            class="detail__player-media"
            :src="mediaList[activeIndex].src"
            :alt="game.title"
          />
        </div>

        <div class="detail__thumbs">
          <button
            v-for="(item, index) in mediaList"
            :key="item.src"
            class="detail__thumb"
            :class="{ 'detail__thumb--active': index === activeIndex }"
            @click="verMedia(index)"
          >
            <span v-if="item.type === 'video'" class="detail__thumb-play">&#9654;</span>
            <img :src="item.type === 'video' ? game.cover : item.src" :alt="game.title" />
          </button>
        </div>
      </div>

      <!-- ficha del juego -->
      <aside class="detail__sidebar">
        <img class="detail__cover" :src="game.cover" :alt="game.title" />

        <p class="detail__tagline">{{ game.tagline }}</p>
        <p class="detail__description">{{ game.description }}</p>

        <dl class="detail__facts">
          <dt>Fecha de lanzamiento:</dt>
          <dd>{{ game.releaseDate }}</dd>
          <dt>Desarrollador:</dt>
          <dd>{{ game.developer }}</dd>
          <dt>Editor:</dt>
          <dd>{{ game.publisher }}</dd>
        </dl>

        <div class="detail__tags">
          <span v-for="tag in game.tags" :key="tag" class="detail__tag">{{ tag }}</span>
        </div>

        <div class="detail__price">{{ game.price }}</div>
      </aside>
    </div>

    <div class="detail__section">
      <h2>Caracteristicas</h2>
      <ul class="detail__features">
        <li v-for="feature in game.features" :key="feature">{{ feature }}</li>
      </ul>
    </div>

    <!-- Si no hay creador de contenido, pues no aparece-->
    <div v-if="game.influencers && game.influencers.length" class="detail__section">
      <h2>Creadores de Contenido</h2>
      <ul class="detail__influencers">
        <li v-for="influencer in game.influencers" :key="influencer.name + influencer.url">
          <a
            :href="influencer.url"
            target="_blank"
            rel="noopener noreferrer"
            class="influencer-chip"
            :class="`influencer-chip--${influencer.platform.toLowerCase()}`"
          >
            <span class="influencer-chip__platform">
              <img
                v-if="influencer.platform.toLowerCase() === 'youtube'"
                src="/icons/youtubeicon.png"
                alt="YouTube"
                class="influencer-chip__icon"
              />
              <template v-else>{{ influencer.platform }}</template>
            </span>
            <span class="influencer-chip__name">{{ influencer.name }}</span>
          </a>
        </li>
      </ul>
    </div>
  </section>

  <p v-else>No se encontró ese juego.</p>
</template>

<style scoped>
.detail {
  max-width: 1200px;
  margin: 0 auto;
  padding: 24px 20px 60px;
  color: #c7d5e0;
  font-family: Arial, sans-serif;
}

.detail__back {
  background: none;
  border: none;
  color: #66c0f4;
  cursor: pointer;
  font-size: 0.9rem;
  margin-bottom: 12px;
  padding: 0;
}

.detail__breadcrumb {
  font-size: 0.8rem;
  color: #8f98a0;
  margin: 0 0 4px;
}

.detail__title {
  font-size: 2rem;
  color: #fff;
  margin: 0 0 16px;
}

.detail__main {
  display: flex;
  gap: 20px;
  align-items: flex-start;
}

.detail__gallery {
  flex: 2;
}

.detail__player {
  background: #000;
  border-radius: 4px;
  overflow: hidden;
  aspect-ratio: 16 / 9;
}

.detail__player-media {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.detail__thumbs {
  display: flex;
  gap: 8px;
  margin-top: 8px;
  overflow-x: auto;
}

.detail__thumb {
  position: relative;
  border: 2px solid transparent;
  padding: 0;
  cursor: pointer;
  border-radius: 3px;
  overflow: hidden;
  flex: 0 0 110px;
  height: 62px;
  background: #000;
}

.detail__thumb img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  opacity: 0.75;
}

.detail__thumb--active {
  border-color: #66c0f4;
}

.detail__thumb--active img {
  opacity: 1;
}

.detail__thumb-play {
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  background: rgba(0, 0, 0, 0.35);
  z-index: 1;
}

.detail__sidebar {
  flex: 1;
  background: #1b2838;
  border-radius: 4px;
  padding: 16px;
}

.detail__cover {
  width: 100%;
  aspect-ratio: 460 / 215;
  object-fit: cover;
  border-radius: 3px;
  margin-bottom: 12px;
}

.detail__tagline {
  font-style: italic;
  color: #67c1f5;
  margin: 0 0 8px;
}

.detail__description {
  font-size: 0.85rem;
  line-height: 1.5;
  margin: 0 0 14px;
}

.detail__facts {
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 4px 8px;
  font-size: 0.8rem;
  margin: 0 0 14px;
}

.detail__facts dt {
  color: #8f98a0;
}

.detail__facts dd {
  margin: 0;
  color: #fff;
}

.detail__tags {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin-bottom: 14px;
}

.detail__tag {
  background: rgba(103, 193, 245, 0.15);
  color: #67c1f5;
  font-size: 0.75rem;
  padding: 4px 8px;
  border-radius: 2px;
}

.detail__price {
  font-size: 1.1rem;
  font-weight: bold;
  color: #a4d007;
}

.detail__section {
  margin-top: 32px;
  text-align: left;
}

.detail__section h2 {
  font-size: 1.2rem;
  color: #fff;
  border-bottom: 1px solid #3c4a58;
  padding-bottom: 8px;
  margin-bottom: 14px;
}

.detail__features {
  list-style: disc;
  padding-left: 20px;
  display: grid;
  gap: 8px;
  font-size: 0.9rem;
  text-align: left;
}

.detail__influencers {
  list-style: none;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

/* boton de creador de contenido nombrey plataforma con el color cada red*/
.influencer-chip {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 8px 14px;
  border-radius: 20px;
  text-decoration: none;
  color: #fff;
  font-size: 0.85rem;
  background: #2a2f3a;
  transition: transform 0.15s ease, box-shadow 0.15s ease;
}

.influencer-chip:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.35);
}

.influencer-chip__platform {
  font-weight: 700;
  text-transform: uppercase;
  font-size: 0.7rem;
  opacity: 0.85;
}

.influencer-chip__icon {
  width: 16px;
  height: auto;
  display: block;
}

.influencer-chip__name {
  font-weight: 500;
}

.influencer-chip--youtube {
  background: #350a0a80;
}

.influencer-chip--twitch {
  background: #6441a5;
}

.influencer-chip--tiktok {
  background: #000000;
}

@media (max-width: 800px) {
  .detail__main {
    flex-direction: column;
  }
}
</style>