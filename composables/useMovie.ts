import { Movie } from '@/types'
import { useMovieState } from '@/store'

const useMovie = () => {
  const movieState = useMovieState()

  const originalMovies = ref<Movie[]>([])
  const loadingOriginalMovies = ref(false)

  const trendingMovies = ref<Movie[]>([])
  const loadingTrendingMovies = ref(false)

  const detailMovie = ref({})
  const loadingDetailMovie = ref(false)

  const fetchOriginalMovies = () => {
    loadingOriginalMovies.value = true
    loadingOriginalMovies.value = false
  }

  const fetchTrendingMovies = () => {
    loadingTrendingMovies.value = true
    loadingTrendingMovies.value = false
  }

  const fetchDetailMovie = () => {
    loadingDetailMovie.value = true
    loadingDetailMovie.value = false
  }

  const addToFavorite = (movie: Movie) => {
    movieState.favoriteMovies.push(movie)
  }

  const removeFromFavorite = (id: number) => {
    movieState.favoriteMovies = movieState.favoriteMovies.filter(el => el.id !== id)
  }

  return {
    originalMovies,
    loadingOriginalMovies,
    trendingMovies,
    loadingTrendingMovies,
    detailMovie,
    loadingDetailMovie,

    fetchOriginalMovies,
    fetchTrendingMovies,
    fetchDetailMovie,
    addToFavorite,
    removeFromFavorite
  }
}

export default useMovie
