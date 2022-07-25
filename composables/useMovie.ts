import { useMessage, useDialog, useLoadingBar } from 'naive-ui'
import { Movie, MovieDetail } from '@/types'
import { useMovieState } from '@/store'

const useMovie = () => {
  const API_KEY = '108efceeba60bbfe517bdccf3edf0026'
  const movieState = useMovieState()
  const message = useMessage()
  const dialog = useDialog()
  const loadingBar = useLoadingBar()
  const router = useRouter()

  const topMovies = ref<Movie[]>([])
  const loadingTopMovies = ref(false)

  const trendingMovies = ref<Movie[]>([])
  const loadingTrendingMovies = ref(false)

  const detailMovie = ref(<MovieDetail>{})

  const findFavorite = (id: number) => {
    return movieState.favoriteMovies.some(movie => movie.id === id)
  }

  const fetchTopMovies = () => {
    const endpoint = `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}`

    loadingTopMovies.value = true

    $fetch(endpoint).then((result: any) => {
      topMovies.value = result.results.map((el: any) => ({
        id: el.id,
        title: el.original_title,
        description: el.overview,
        year: el.first_air_date,
        rating: el.vote_average,
        poster: `https://image.tmdb.org/t/p/original/${el.poster_path}`
      }))
      loadingTopMovies.value = false
    }).catch((err) => {
      console.log(err)
      loadingTopMovies.value = false
    })
  }

  const fetchTrendingMovies = () => {
    const endpoint = `https://api.themoviedb.org/3/trending/movie/week?api_key=${API_KEY}`

    loadingTrendingMovies.value = true

    $fetch(endpoint).then((result: any) => {
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

  const fetchDetailMovie = (id: number) => {
    const endpoint = `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}`

    loadingBar.start()

    $fetch(endpoint).then((result: any) => {
      detailMovie.value = {
        id: result.id,
        title: result.original_title,
        description: result.overview,
        year: result.release_date,
        rating: result.vote_average,
        poster: `https://image.tmdb.org/t/p/original/${result.poster_path}`,
        trailer: '',
        genre: result.genres.map((el: any) => el.name),
        duration: result.runtime
      }
      loadingBar.finish()
    }).catch(() => {
      message.error("Can't find movie")
      loadingBar.error()

      setTimeout(() => {
        router.back()
      }, 500)
    })
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

  const randomMovie = computed(() => trendingMovies.value[Math.floor(Math.random() * trendingMovies.value.length)])

  return {
    topMovies,
    loadingTopMovies,
    trendingMovies,
    loadingTrendingMovies,
    detailMovie,
    randomMovie,

    fetchTopMovies,
    fetchTrendingMovies,
    fetchDetailMovie,
    addToFavorite,
    removeFromFavorite,
    findFavorite
  }
}

export default useMovie
