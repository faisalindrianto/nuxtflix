import { defineStore } from 'pinia'
import { Movie } from '@/types'

export const useMovieState = defineStore('user', {
  state: () => {
    return {
      favoriteMovies: <Movie[]>[]
    }
  }
})
