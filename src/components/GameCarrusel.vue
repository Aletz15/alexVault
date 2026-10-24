<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue'
import { hasVideo } from '../data/games'

const props = defineProps<{
  title: string
  games: any[]
  backgroundImage: string
  titleFont: string
}>()

// en que posicion del arreglo va y guardar posicion y objeto
const currentIndex = ref(0)
const currentGame = ref(props.games[0])

// referencia directa al <video> del HTML para poder llamar a .play() / .pause()
const videoRef = ref<HTMLVideoElement | null>(null)

function irAlJuego(indice: number) {
  // loop esto hace que si te pasas del ultimo juego, regreses al primero (y al reves)
  const total = props.games.length
  if (indice >= total) indice = 0
  if (indice < 0) indice = total - 1

  currentIndex.value = indice
  currentGame.value = props.games[indice]

  reiniciarContador()

  // 
  setTimeout(() => {
    if (hasVideo(currentGame.value)) {
      reproducirVideoActual()
    }
  }, 50)
}

function siguienteJuego() {
  irAlJuego(currentIndex.value + 1)
}

function juegoAnterior() {
  irAlJuego(currentIndex.value - 1)
}

// --- control del video ---

function reproducirVideoActual() {
  if (!videoRef.value) return
  videoRef.value.currentTime = 0
  videoRef.value.play()
}

// para pausar con click en el video
function clickEnVideo() {
  if (!videoRef.value) return
  if (videoRef.value.paused) {
    videoRef.value.play()
  } else {
    videoRef.value.pause()
  }
}

onMounted(() => {
  if (hasVideo(currentGame.value)) {
    reproducirVideoActual()
  }
  iniciarContador()
})

// contador para pasar de juego automaticamente cada 20 segundos

const autoplayActivado = ref(true)
const segundosRestantes = ref(20)
let intervalo: number | undefined

function iniciarContador() {
  intervalo = window.setInterval(() => {
    if (!autoplayActivado.value) return

    segundosRestantes.value = segundosRestantes.value - 1

    if (segundosRestantes.value <= 0) {
      siguienteJuego()
    }
    // 1 segundo
  }, 1000)
}

function reiniciarContador() {
  segundosRestantes.value = 10
}

onBeforeUnmount(() => {
  if (intervalo) window.clearInterval(intervalo)
})
</script>

<template>
  <section class="carousel">
    <!-- Fondo fijo de la categoría: hijo directo de .carousel, que ahora -->
    <!-- ocupa TODO el ancho de la pantalla (ya no tiene max-width). -->
    <div
      class="carousel__backdrop"
      :style="{ backgroundImage: `url(${backgroundImage})` }"
    ></div>

    <div class="carousel__inner">
      <h1 class="carousel__title" :style="{ fontFamily: titleFont }">{{ title }}</h1>

      <div class="carousel__stage">
        <button class="carousel__arrow" @click="juegoAnterior">&#10094;</button>

        <!-- Panel izquierdo video del juego actual -->
        <div class="carousel__preview">
          <span class="carousel__badge">
            Vista previa {{ hasVideo(currentGame) ? 'del tráiler' : '' }} | {{ currentGame.title.toUpperCase() }}
          </span>

          <video
            v-if="hasVideo(currentGame)"
            ref="videoRef"
            class="carousel__media"
            :src="currentGame.video ?? undefined"
            unmuted
            loop
            playsinline
            @click="clickEnVideo"
          ></video>

          <img v-else class="carousel__media" :src="currentGame.cover" :alt="currentGame.title" />
        </div>

        <!-- Panel derecho abre tarjeta clickeable que abre el GameDetails del cada juego-->
        <RouterLink
          :to="{ name: 'juego', params: { gameId: currentGame.id } }"
          class="carousel__card"
        >
          <img class="carousel__card-image" :src="currentGame.cover" :alt="currentGame.title" />

          <div class="carousel__card-tags">
            <span v-for="tag in currentGame.tags" :key="tag" class="carousel__tag">{{ tag }}</span>
          </div>

          <p class="carousel__card-description">{{ currentGame.description }}</p>

          <div class="carousel__card-footer">
            <span>Fecha de lanzamiento: {{ currentGame.releaseDate }}</span>
            <span class="carousel__price">{{ currentGame.price }}</span>
          </div>
        </RouterLink>

        <button class="carousel__arrow" @click="siguienteJuego">&#10095;</button>
      </div>

      <!-- puntos para el carusel uno por juego -->
      <div class="carousel__dots">
        <button
          v-for="(game, index) in games"
          :key="game.id"
          class="carousel__dot"
          :class="{ 'carousel__dot--active': index === currentIndex }"
          @click="irAlJuego(index)"
        ></button>
      </div>

      <div class="carousel_autoplay">
        <span v-if="autoplayActivado">Proximo juego dentro de {{ segundosRestantes }}s...</span>
        <label>
          <input type="checkbox" v-model="autoplayActivado" />
          Avance automático
        </label>
      </div>
    </div>
  </section>
</template>

<style scoped>
.carousel {
  position: relative;
  z-index: 0;
  overflow: hidden;
  color: #c7d5e0;
  font-family: Arial, sans-serif;
  min-height: 88.9svh;
}

.carousel__inner {
  position: relative;
  z-index: 1;
  max-width: 1300px;
  margin: 0 auto;
  padding: 100px 20px 40px;
}

.carousel__backdrop {
  position: absolute;
  inset: 0;
  z-index: -1;
  background-size: cover;
  background-position: center 50%;
  background-attachment: fixed;
  filter: blur(5px) brightness(0.45) saturate(1.3);
  transform: scale(1.15);
  transition: background-image 0.6s ease;

  /* Gradiente */
  -webkit-mask-image: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 1) 0%,
    rgba(0, 0, 0, 1) 80%,
    rgba(0, 0, 0, 0) 100%
  );
  mask-image: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 1) 0%,
    rgba(0, 0, 0, 1) 80%,
    rgba(0, 0, 0, 0) 100%
  );
}

.carousel__title {
  position: relative;
  z-index: 1;
  text-align: center;
  font-size: 3rem;
  letter-spacing: 6px;
  margin-bottom: 56px;
  color: #ffffff;
}

.carousel__stage {
  position: relative;
  z-index: 1;
  display: flex;
  align-items: stretch;
  gap: 12px;
}

.carousel__arrow {
  background: transparent;
  border: none;
  color: #66c0f4;
  font-size: 1.6rem;
  cursor: pointer;
}

.carousel__preview {
  position: relative;
  flex: 2;
  background: #000;
  border-radius: 4px;
  overflow: hidden;
  height: 420px;
  box-sizing: border-box;
}

.carousel__media {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  cursor: pointer;
  display: block;
}

.carousel__badge {
  position: absolute;
  top: 12px;
  left: 12px;
  background: rgba(0, 0, 0, 0.65);
  padding: 6px 10px;
  font-size: 0.8rem;
  border-radius: 2px;
}

.carousel__card {
  flex: 1;
  height: 420px;
  box-sizing: border-box;
  overflow: hidden;
  background: #1b2838;
  border-radius: 4px;
  padding: 16px;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  gap: 10px;
  text-decoration: none;
  color: inherit;
}

.carousel__card-image {
  width: 100%;
  aspect-ratio: 460 / 215;
  object-fit: cover;
  display: block;
  border-radius: 3px;
}

.carousel__card-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  max-height: 66px;
  overflow: hidden;
}

.carousel__tag {
  background: rgba(103, 193, 245, 0.15);
  color: #67c1f5;
  font-size: 0.75rem;
  padding: 4px 8px;
  border-radius: 2px;
}

.carousel__card-description {
  font-size: 0.85rem;
  line-height: 1.4;
  color: #8f98a0;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
  overflow: hidden;
}

.carousel__card-footer {
  margin-top: auto;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 10px;
  font-size: 0.8rem;
  min-height: 34px;
}

.carousel__card-footer span:first-child {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
}

.carousel__price {
  color: #a4d007;
  font-weight: bold;
}

.carousel__dots {
  position: relative;
  z-index: 1;
  display: flex;
  justify-content: center;
  gap: 6px;
  margin-top: 20px;
}

.carousel__dot {
  width: 9px;
  height: 9px;
  border-radius: 50%;
  border: none;
  background: #3c4a58;
  cursor: pointer;
}

.carousel__dot--active {
  background: #66c0f4;
}

.carousel_autoplay {
  position: relative;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: right;
  gap: 14px;
  margin-top: 16px;
  font-size: 0.8rem;
  color: #8f98a0;
}

.carousel_autoplay span{
    position: absolute;
    left:50%;
    transform: translateX(-50%);
}

@media (max-width: 800px) {
  .carousel__stage {
    flex-direction: column;
  }
}
</style>