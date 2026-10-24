import type { JuegoCarrito } from '../interfaces/carrito.interface'
import { getGameById } from './games'

export const crearJuegoCarrito = (gameId: string): JuegoCarrito | undefined => {
    const game = getGameById(gameId)
    if(!game) return undefined

    return{
        gameId: game.id,
        title: game.title,
        cover: game.cover,
        price: game.price,
        preventa: game.esProximo ?? false,
    }
}

//convierte precio ejemplo Mex$ 1,199.00 a 1199 para poder sumary quitalacoma
export const precioNumerico = (price:string): number => {
    return Number(price.replace('Mex$','').replace(',',''))
}

//sumar juegoscarrito
export const totalCarrito = (juegos: JuegoCarrito[]): number => {
    let suma = 0

    for (const juego of juegos){
        suma = suma + precioNumerico(juego.price)
    }

    return suma
}

