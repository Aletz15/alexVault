<script setup lang="ts">
// Botón "Categorías" + panel desplegable con los tiles
import { ref } from 'vue'
import { categories } from '../data/categories'

defineProps<{
  activeCategoryId: string
}>()

const emit = defineEmits<{
  (x: 'select-category', id: string): void
}>()

// El panel empieza cerrado, se abre con el botón "Categorías"
const categoriasAbiertas = ref(false)

function alternarCategorias() {
  categoriasAbiertas.value = !categoriasAbiertas.value
}

// Avisa al padre qué categoría se eligió y cierra el panel
function seleccionarCategoria(id: string) {
  emit('select-category', id)
  categoriasAbiertas.value = false
}
</script>

<template>
  <div>
    <!-- Fondo oscuro del panel, clickearlo también lo cierra -->
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
  </div>
</template>

<style scoped>
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

/* ancho de la pantalla */
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

/* Animación de "desplegado hacia abajo" al abrir/cerrar */
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

/* hover solo hace zoom a la imagen */
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
</style>