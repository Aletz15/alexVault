<script setup lang="ts">
// Vista (página) del catálogo: categorías + contenido de la categoría activa
import { ref, computed } from 'vue'
import CategoriesNav from '../components/CategoriesNav.vue'
import GameCarrusel from '../components/GameCarrusel.vue'
import UpcomingReleases from '../components/UpcomingReleases.vue'
import RecommendedGames from '../components/RecommendedGames.vue'
import { games } from '../data/games.ts'
import { categories } from '../data/categories.ts'
import { proximosLanzamientos, juegosMejorPuntuados } from '../data/novedades.ts'

// categoria esta activaempieza en novedades
const activeCategoryId = ref(categories[0].id)

function seleccionarCategoria(id: string) {
  activeCategoryId.value = id
}

// datos de la categoria activa tit fond fuente juegos
const activeSection = computed(() => {
  const cat = categories.find((c) => c.id === activeCategoryId.value)!
  return {
    title: cat.title,
    backgroundImage: cat.heroBackgroundImage,
    titleFont: cat.titleFont,
    games: games.filter((g) => g.category === cat.id),
  }
})
</script>

<template>
  <div :class="{ 'catalog-view': activeCategoryId === 'novedades' }">
    <CategoriesNav
      :active-category-id="activeCategoryId"
      @select-category="seleccionarCategoria"
    />

    <!-- Si la categoria no tiene juegos, solo mostramos el título como placeholder. -->
    <h1
      v-if="activeSection.games.length === 0" class="placeholder-title" :style="{ fontFamily: activeSection.titleFont }">
      {{ activeSection.title }}
    </h1>

    <!-- Seccion NOVEDADES: cards de proximos lanzamientos -->
    <UpcomingReleases
      v-if="activeCategoryId === 'novedades'"
      :items="proximosLanzamientos"
    />

    <!-- fila de mejor puntuados solo en NOVEDADES -->
    <RecommendedGames
      v-if="activeCategoryId === 'novedades'"
      :games="juegosMejorPuntuados"
      title="Mejor puntuados"
    />

    <!-- Si tiene juegos, muestra el carrusel completo (video + tarjeta). -->
    <GameCarrusel
      v-else
      :key="activeSection.title"
      :title="activeSection.title"
      :games="activeSection.games"
      :background-image="activeSection.backgroundImage"
      :title-font="activeSection.titleFont"
    />
  </div>
</template>

<style scoped>
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