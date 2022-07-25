import { useMessage, useDialog } from 'naive-ui'
import { Movie } from '@/types'
import { useMovieState } from '@/store'

const useMovie = () => {
  const API_KEY = '108efceeba60bbfe517bdccf3edf0026'
  const movieState = useMovieState()
  const message = useMessage()
  const dialog = useDialog()

  const originalMovies = ref<Movie[]>([])
  const loadingOriginalMovies = ref(false)

  const trendingMovies = ref<Movie[]>([])
  const loadingTrendingMovies = ref(false)

  const detailMovie = ref({})
  const loadingDetailMovie = ref(false)

  const findFavorite = (id: number) => {
    return movieState.favoriteMovies.some(movie => movie.id === id)
  }

  const fetchOriginalMovies = () => {
    const endpoint = `https://api.themoviedb.org/3/discover/tv?api_key=${API_KEY}`

    loadingOriginalMovies.value = true

    $fetch(endpoint).then((result: any) => {
      console.log(result)
      originalMovies.value = result.results.map((el: any) => ({
        id: el.id,
        title: el.name,
        description: el.overview,
        year: el.first_air_date,
        rating: el.vote_average,
        poster: `https://image.tmdb.org/t/p/original/${el.poster_path}`
      }))
      loadingOriginalMovies.value = false
    }).catch((err) => {
      console.log(err)
      loadingOriginalMovies.value = false
    })
  }

  const fetchTrendingMovies = () => {
    const endpoint = `https://api.themoviedb.org/3/trending/all/week?api_key=${API_KEY}`

    loadingTrendingMovies.value = true

    $fetch(endpoint).then((result: any) => {
      console.log(result)
      trendingMovies.value = result.results.map((el: any) => ({
        id: el.id,
        title: el.original_title,
        description: el.overview,
        year: el.first_air_date,
        rating: el.vote_average,
        poster: `https://image.tmdb.org/t/p/original/${el.poster_path}`
      }))
      loadingTrendingMovies.value = false
    }).catch((err) => {
      console.log(err)
      loadingTrendingMovies.value = false
    })
  }

  const fetchDetailMovie = () => {
    loadingDetailMovie.value = true
    loadingDetailMovie.value = false
  }

  const addToFavorite = (movie: Movie) => {
    movieState.favoriteMovies.push(movie)
    message.success('Added to favorites!')
  }

  const removeFromFavorite = (id: number) => {
    dialog.info({
      title: 'Delete',
      content: 'Delete from favorites?',
      positiveText: 'Confirm',
      negativeText: 'Cancel',
      positiveButtonProps: {
        type: 'default'
      },
      onPositiveClick: () => {
        movieState.favoriteMovies = movieState.favoriteMovies.filter(el => el.id !== id)
        message.success('Removed from favorites!')
      }
    })
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
    removeFromFavorite,
    findFavorite
  }
}

export default useMovie
