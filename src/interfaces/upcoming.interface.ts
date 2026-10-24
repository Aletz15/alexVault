// Forma de cada card de "Próximos lanzamientos" (antes estaba dentro de UpcomingReleases.vue)
export interface UpcomingItem {
  gameId: string
  image: string
  badge?: string
  footerTitle: string
  footerSubtitle: string
}