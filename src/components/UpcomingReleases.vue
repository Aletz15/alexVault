<script setup lang="ts">
import type { UpcomingItem } from '../interfaces/upcoming.interface.ts'

defineProps<{
  items: UpcomingItem[]
  title?: string
}>()
</script>

<template>
  <section class="upcoming">
    <h2 class="upcoming__title">{{ title ?? 'Proximos lanzamientos' }}</h2>

    <div class="upcoming__grid">
      <RouterLink
        v-for="item in items"
        :key="item.gameId"
        :to="{ name: 'juego', params: { gameId: item.gameId } }"
        class="upcoming__card"
      >
        <div class="upcoming__image-wrap">
          <img class="upcoming__image" :src="item.image" :alt="item.footerTitle" />

          <span v-if="item.badge" class="upcoming__badge">
            <span class="upcoming__badge-star">&#9733;</span>
            {{ item.badge }}
          </span>
        </div>

        <div class="upcoming__footer">
          <span class="upcoming__footer-title">{{ item.footerTitle }}</span>
          <span class="upcoming__footer-subtitle">{{ item.footerSubtitle }}</span>
        </div>
      </RouterLink>
    </div>
  </section>
</template>

<style scoped>
.upcoming {
  position: relative;
  z-index: 1;
  max-width: 1300px;
  margin: 0 auto;
  padding: 0 20px 40px;
}

.upcoming__title {
  color: #ffffff;
  font-family: Arial, sans-serif;
  font-size: 1.4rem;
  font-weight: 700;
  margin: 0 0 16px;
  text-align: left;
}

.upcoming__grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
}

.upcoming__card {
  position: relative;
  display: flex;
  flex-direction: column;
  background: #1b2838;
  border: none;
  border-radius: 6px;
  overflow: hidden;
  cursor: pointer;
  padding: 0;
  text-align: left;
  text-decoration: none;
  color: inherit;
  font-family: Arial, sans-serif;
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.35);
  transition: transform 0.25s ease, box-shadow 0.25s ease;
}

.upcoming__card:hover {
  transform: translateY(-3px);
  box-shadow: 0 10px 22px rgba(0, 0, 0, 0.45);
}

.upcoming__image-wrap {
  position: relative;
  width: 100%;
  aspect-ratio: 16 / 9;
  overflow: hidden;
  background: #000;
}

.upcoming__image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  transition: transform 0.35s ease;
}

.upcoming__card:hover .upcoming__image {
  transform: scale(1.04);
}

.upcoming__badge {
  position: absolute;
  top: 12px;
  left: 12px;
  display: inline-flex;
  align-items: center;
  gap: 6px;
  background: rgba(0, 0, 0, 0.75);
  color: #fff;
  font-size: 0.7rem;
  font-weight: bold;
  letter-spacing: 0.4px;
  padding: 6px 10px;
  border-radius: 2px;
  text-transform: uppercase;
}

.upcoming__badge-star {
  color: #ffd700;
  font-size: 0.75rem;
}

.upcoming__footer {
  display: flex;
  flex-direction: column;
  gap: 2px;
  padding: 14px 18px;
  background: rgba(60, 100, 135, 0.55);
}

.upcoming__footer-title {
  color: #ffffff;
  font-size: 1rem;
  font-weight: 600;
}

.upcoming__footer-subtitle {
  color: #cfe4f5;
  font-size: 0.85rem;
}

@media (max-width: 800px) {
  .upcoming__grid {
    grid-template-columns: 1fr;
  }
}
</style>