<script setup lang="ts">
const {
  topMovies, trendingMovies, randomMovie,
  loadingTopMovies, loadingTrendingMovies,
  fetchTopMovies, fetchTrendingMovies
} = useMovie()

onMounted(() => {
  fetchTopMovies()
  fetchTrendingMovies()
})

</script>

<template>
  <div>
    <landing
      v-if="randomMovie"
      :loading="loadingTopMovies"
      :movie="randomMovie"
    />
    <div class="container mx-auto px-4 md:px-0 mb-20">
      <movies
        title="Trending This Week"
        :movies="trendingMovies"
        :loading="loadingTrendingMovies"
      />
      <movies
        title="Top Movies"
        :movies="topMovies"
        :loading="loadingTopMovies"
        class="mt-12"
      />
    </div>
  </div>
</template>

<style>

</style>
