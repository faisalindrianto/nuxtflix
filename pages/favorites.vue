<script setup lang="ts">
import { useMovieState } from '@/store'

const movieState = useMovieState()
</script>

<template>
  <div class="container mx-auto px-4 md:px-0 my-20">
    <h6 class="font-semibold text-3xl my-12">
      Your Favorites
    </h6>

    <div
      v-if="movieState.favoriteMovies.length"
      class="flex flex-wrap"
    >
      <movie-card
        v-for="movie in movieState.favoriteMovies"
        :key="movie.id"
        :movie="movie"
      />
    </div>

    <div v-else>
      <span class="text-gray-400 text-xl">There are no favorites movie yet</span>
    </div>
  </div>
</template>
