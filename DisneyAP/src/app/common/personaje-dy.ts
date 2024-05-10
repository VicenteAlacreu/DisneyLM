

export interface PersonajeDy {
    info: Info
    data: Data
  }
  
  export interface Info {
    count: number
    totalPages: number
    previousPage: any
    nextPage: any
  }
  
  export interface Data {
    _id: number
    films: string[]
    shortFilms: any[]
    tvShows: string[]
    videoGames: string[]
    parkAttractions: any[]
    allies: any[]
    enemies: any[]
    sourceUrl: string
    name: string
    imageUrl: string
    createdAt: string
    updatedAt: string
    url: string
    __v: number
  }
  