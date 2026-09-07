<script setup lang="ts">
import { ref, computed } from 'vue'
import GameCarrusel from './components/GameCarrusel.vue'
import GameDetail from './components/GameDetails.vue'
import UpcomingReleases from './components/UpcomingReleases.vue'
import RecommendedGames from './components/RecommendedGames.vue'
import { games, getGameById, getTopScored } from './data/games'
import { categories } from './data/categories'

// Navegación entre las dos vistas
const selectedGameId = ref<string | null>(null)

function openGame(id: string) {
  selectedGameId.value = id
}

function backToCatalog() {
  selectedGameId.value = null
}

// Cuál de las 3 categorías está activa (empieza en Novedades, que arranca vacía)
const activeCategoryId = ref(categories[0].id)

//Panel tiles empieza cerrado, se abre con el boton "Categorías"
const categoriasAbiertas = ref(false)

function alternarCategorias() {
  categoriasAbiertas.value = !categoriasAbiertas.value
}

// Selecciona una categoria y cierra el panel de categoria
function seleccionarCategoria(id: string) {
  activeCategoryId.value = id
  categoriasAbiertas.value = false
}

//los dos juegos en novedades
const activeSection = computed(() => {
  const cat = categories.find((c) => c.id === activeCategoryId.value)!
  return {
    title: cat.title,
    backgroundImage: cat.heroBackgroundImage,
    titleFont: cat.titleFont,
    games: games.filter((g) => g.category === cat.id),
  }
})

// Cards de proximos lanzamientos para la sección de Novedades
const proximosLanzamientos = [
  {
    gameId: 'ocarina-of-time-remake',
    image: getGameById('ocarina-of-time-remake')?.cover ?? '',
    badge: 'PROXIMAMENTE',
    footerTitle: 'El clásico, reconstruido',
    footerSubtitle: getGameById('ocarina-of-time-remake')?.price ?? '',
  },
  {
    gameId: 'persona-4-revival',
    image: getGameById('persona-4-revival')?.cover ?? '',
    badge: 'PROXIMAMENTE',
    footerTitle: 'Lo más deseado',
    footerSubtitle: getGameById('persona-4-revival')?.price ?? '',
  },
]

// Fila de mejor puntuados para Novedades
const juegosMejorPuntuados = getTopScored(6)
</script>


<!--Vue destruye completamente el componente que ya no se muestra y, si vuelve a cumplirse la condición, lo crea de cero otra vez. "De cero" const currentIndex = ref(0) vuelve a arrancar en 0
/<GameCarrusel v-if="!selectedGameId" @select-game="openGame" /> 
<GameDetail v-else :game-id="selectedGameId" @back="backToCatalog" />
-->
<!-- v-show no destruye nada-->
<template>
  <main class="app">
    <!-- Barra de arriba vacía por ahora (aquí luego va tu logo y nombre) -->
    <header class="topbar">
      <div class="topbar__brand">
        <img src="/icons/Alogo.png" alt="AlexVault" class="topbar__logo" />
        <span class="topbar__name">AlexVault</span>
      </div>
    </header>

    <div v-show="!selectedGameId" :class="{ 'catalog-view': activeCategoryId === 'novedades' }">
      <!-- Fondo oscurodel panel clickearlo tambien lo cierra -->
      <div
        v-if="categoriasAbiertas"
        class="categories-backdrop"
        @click="categoriasAbiertas = false"
      ></div>

      <div class="categories-nav">
        <div class="categories-bar">
          <button class="categories-toggle" @click="alternarCategorias">
            Categorías
            <span class="caret" :class="{ 'caret--open': categoriasAbiertas }">&#9662;</span>
          </button>
        </div>

        <!-- Panel de ancho completo que se despliega hacia abajo, como en Steam -->
        <Transition name="dropdown">
          <nav v-if="categoriasAbiertas" class="category-panel">
            <div class="category-panel__inner">
              <button
                v-for="cat in categories"
                :key="cat.id"
                class="category-tile"
                :class="{ 'category-tile--active': cat.id === activeCategoryId }"
                @click="seleccionarCategoria(cat.id)"
              >
                <div
                  class="category-tile__bg"
                  :style="{ backgroundImage: `url(${cat.backgroundImage})` }"
                ></div>
                <span class="category-tile__label">{{ cat.title }}</span>
              </button>
            </div>
          </nav>
        </Transition>
      </div>

      <!-- solo mostramos el título como placeholder. -->
      <h1
        v-if="activeSection.games.length === 0"
        class="placeholder-title"
        :style="{ fontFamily: activeSection.titleFont }"
      >
        {{ activeSection.title }}
      </h1>

      <!-- Seccion NOVEDADES -->
      <!-- Cards de proximos lanzamientos, solo en Novedades -->
      <UpcomingReleases
        v-if="activeCategoryId === 'novedades'"
        :items="proximosLanzamientos"
        @select-game="openGame"
      />

      <!-- Fila de mejor puntuados,solo en NOVEDADES -->
      <RecommendedGames
        v-if="activeCategoryId === 'novedades'"
        :games="juegosMejorPuntuados"
        title="Mejor puntuados"
        @select-game="openGame"
      />

      <!-- Si tiene juegos, muestra el carrusel completo (video + tarjeta). -->
      <GameCarrusel
        v-else
        :key="activeSection.title"
        :title="activeSection.title"
        :games="activeSection.games"
        :background-image="activeSection.backgroundImage"
        :title-font="activeSection.titleFont"
        @select-game="openGame"
      />
    </div>
    <GameDetail
      v-if="selectedGameId"
      :game-id="selectedGameId"
      @back="backToCatalog"
      @select-game="openGame"
    />
  </main>
</template>

<style>
body {
  margin: 0;
  background: #171a21;
}

.app {
  min-height: 100vh;
}

/* Barra de arriba: logo + nombre del sitio*/
.topbar {
  height: 88px;
  background: #0f141c;
  display: flex;
  align-items: center;
}

.topbar__brand {
  max-width: 1300px;
  width: 100%;
  margin: 0 auto;
  padding: 0 20px;
  display: flex;
  align-items: center;
  gap: 14px;
}

.topbar__logo {
  height: 52px;
  width: 52px;
  object-fit: contain;
  filter: brightness(0) invert(1);
}

.topbar__name {
  color: #ffffff;
  font-family: Arial, sans-serif;
  font-size: 1.7rem;
  font-weight: 700;
  letter-spacing: 0.5px;
}

.categories-nav {
  position: relative;
  z-index: 30;
  background: #1b2838;
}

.categories-backdrop {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.6);
  z-index: 20;
}

.categories-bar {
  max-width: 1300px;
  height: 46px;
  margin: 0 auto;
  padding: 0 20px;
  display: flex;
  align-items: center;
}

.categories-toggle {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  background: none;
  border: none;
  color: #66c0f4;
  font-family: Arial, sans-serif;
  font-size: 0.95rem;
  font-weight: bold;
  letter-spacing: 0.3px;
  cursor: pointer;
  padding: 8px 0;
}

.categories-toggle:hover {
  color: #ffffff;
}

.caret {
  display: inline-block;
  font-size: 0.7rem;
  transition: transform 0.2s ease;
}

.caret--open {
  transform: rotate(180deg);
}

/* ancho de la pantalla*/
.category-panel {
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  background: #1b2838;
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.5);
}

.category-panel__inner {
  max-width: 1300px;
  margin: 0 auto;
  padding: 20px;
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
}

/* Animacion de "desplegado hacia abajo" al abrir/cerrar */
.dropdown-enter-active,
.dropdown-leave-active {
  transition: opacity 0.2s ease, transform 0.2s ease;
}

.dropdown-enter-from,
.dropdown-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}

.category-tile {
  position: relative;
  flex: none;
  width: 190px;
  height: 100px;
  padding: 0;
  border: 2px solid transparent;
  border-radius: 6px;
  overflow: hidden;
  background-color: #2a2f3a;
  cursor: pointer;
  transition: border-color 0.2s ease;
}

.category-tile--active {
  border-color: #66c0f4;
}

/* hover solo hace zoom a la imagen*/
.category-tile__bg {
  position: absolute;
  inset: 0;
  background-size: cover;
  background-position: center;
  transition: transform 0.35s ease;
}

.category-tile:hover .category-tile__bg {
  transform: scale(1.12);
}

.category-tile__label {
  position: absolute;
  left: 50%;
  top: 62%;
  transform: translate(-50%, -50%);
  z-index: 1;
  background: #ffffff;
  color: #111111;
  font-family: Arial, sans-serif;
  font-weight: 700;
  font-size: 0.75rem;
  letter-spacing: 0.3px;
  padding: 5px 12px;
  border-radius: 2px;
  white-space: nowrap;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.35);
}

.catalog-view {
  position: relative;
  background: radial-gradient(
    circle 500px at 50% 400px,
    rgba(70, 130, 200, 0.45),
    transparent 70%
  ),
  #171a21;
}

.placeholder-title {
  max-width: 1300px;
  margin: 60px auto;
  padding: 0 20px;
  text-align: center;
  font-size: 3rem;
  letter-spacing: 6px;
  color: #ffffff;
  font-family: Arial, sans-serif;
}
</style>