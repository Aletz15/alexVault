import type { UpcomingItem } from '../interfaces/upcoming.interface.ts'
import { getGameById, getTopScored } from './games'

// Cards de próximos lanzamientos para la sección de Novedades
export const proximosLanzamientos: UpcomingItem[] = [
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
export const juegosMejorPuntuados = getTopScored(6)