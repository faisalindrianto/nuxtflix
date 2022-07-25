<script setup lang="ts">
const {
  originalMovies, trendingMovies,
  loadingOriginalMovies, loadingTrendingMovies,
  fetchOriginalMovies, fetchTrendingMovies
} = useMovie()

onMounted(() => {
  fetchOriginalMovies()
  fetchTrendingMovies()
})
</script>

<template>
  <div>
    <landing />
    <div class="container mx-auto px-4 md:px-0 mb-20">
      <movies
        title="Nuxtflix Originals"
        :movies="originalMovies"
        :loading="loadingOriginalMovies"
      />
      <movies
        title="Trending This Week"
        class="mt-12"
        :movies="trendingMovies"
        :loading="loadingTrendingMovies"
      />
    </div>
  </div>
</template>

<style>

</style>
