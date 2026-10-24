// Cada categoria contiene dos imagenes de fondo distintas
// - backgroundImage la que se ve en el tile chiquito de categorias v
// - heroBackgroundImage la que se ve desenfocada

export interface Category {
  id: string
  title: string
  backgroundImage: string
  heroBackgroundImage: string
  titleFont: string
}

export const categories: Category[] = [
  {
    id: 'novedades',
    title: 'NOVEDADES',
    backgroundImage: '/games/categories/novedades.jpg',
    heroBackgroundImage: '/games/categories/novedades-hero.jpg',
    titleFont: "'Orbitron', sans-serif",
  },
  {
    id: 'terror',
    title: 'TERROR',
    backgroundImage: 'https://store.fastly.steamstatic.com/categories/image/category/survival?cc=MX&l=latam',
    heroBackgroundImage: '/games/categories/terrorhero.jpg',
    titleFont: "'Nosifer', system-ui",
  },
  {
    id: 'aventura',
    title: 'AVENTURA',

    //backgroundImage: 'https://store.akamai.steamstatic.com/categories/image/tags/1702?cc=MX&l=latam',
    backgroundImage: '/games/categories/aventura.jpg',
    heroBackgroundImage: '/games/categories/aventurahero.jpg',
    titleFont: "'Cinzel', serif",
  },
  {
    id: 'jrpg',
    title: 'JRPG',

    backgroundImage: '/games/categories/jrpg.jpg',
    heroBackgroundImage: '/games/categories/jrpghero.jpg',
    titleFont: "'Cinzel Decorative', serif",
  },
]