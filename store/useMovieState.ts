import { defineStore } from 'pinia'

export const useMovieState = defineStore('user', {
  state: () => {
    return {
      favoriteMovies: []
    }
  }
})
