export type Personajes = Personaje[]

export interface Personaje {
  _id: number
  films: string[]
  shortFilms: any[]
  tvShows: string[]
  videoGames: string[]
  parkAttractions: string[]
  allies: any[]
  enemies: any[]
  sourceUrl: string
  name: string
  imageUrl?: string
  createdAt: string
  updatedAt: string
  url: string
  __v: number
}

