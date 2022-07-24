<template>
  <div>
    <h6 class="text-xl font-semibold">
      Category Title
    </h6>
    <div class="movies flex overflow-x-auto mt-4 pb-1">
      <movie-card
        v-for="i in 14"
        :key="i"
      />
    </div>
  </div>
</template>

<style scoped>
.movies::-webkit-scrollbar {
  height: 6px;
}

.movies::-webkit-scrollbar-track {
  background: #222222;
}

.movies::-webkit-scrollbar-thumb {
  background: #444444;
  border-radius: 8px;
}

.movies::-webkit-scrollbar-thumb:hover {
  background: #343434;
}
</style>
