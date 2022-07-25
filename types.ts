export interface Movie {
  id: number
  title: string
  description: string
  year: number
  rating: number
  poster: string
}

export interface MovieDetail {
  id: number
  title: string
  description: string
  year: number
  rating: number
  poster: string
  trailer: string
  genre: Array<string>
  duration: number
}
