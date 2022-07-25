<script setup lang="ts">
import { Movie } from '@/types'

interface landingProps {
  loading: boolean
  movie: Movie
}

const props = defineProps<landingProps>()
</script>

<template>
  <div
    class="landing w-full relative mb-16"
    :style="`background-image: linear-gradient(rgba(0, 0, 0, 0.3), rgba(15, 15, 20)), url(${props.movie.poster})`"
  >
    <div class="container mx-auto px-4 md:px-0">
      <div class="main-landing">
        <h6 class="text-3xl font-semibold my-8">
          {{ props.movie.title }}
        </h6>
        <p class="text-base">
          {{ props.movie.description }}
        </p>
        <n-button
          class="mt-8"
        >
          <span class="mr-2">Watch</span>
          <mdicon name="play" />
        </n-button>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.landing {
  min-height: 50vh;
  padding-top: 80px;

  background-repeat: no-repeat;
  background-size: cover;
}

.main-landing {
  max-width: 600px;
}
</style>
