<script setup lang="ts">
import { useElementHover } from '@vueuse/core'
import { Movie } from '@/types'

const { findFavorite, addToFavorite, removeFromFavorite } = useMovie()

const movieCard = ref()
const isHovered = useElementHover(movieCard)

interface movieCardProps {
  movie: Movie
}

const props = defineProps<movieCardProps>()
</script>

<template>
  <div ref="movieCard" class="movie">
    <nuxt-link
      :to="`/detail/${props.movie.id}`"
    >
      <n-image
        :src="props.movie.poster"
        width="160"
        preview-disabled
      />
    </nuxt-link>
    <div
      v-if="isHovered"
      class="drawer transition-all duration-300 ease-in p-2"
    >
      <span class="text-sm font-medium">{{ props.movie.title }}</span>
      <div class="flex items-center">
        <span class="text-xs">2018</span>
        <mdicon
          class="ml-auto mr-1 text-yellow-400 mb-1.5"
          size="16"
          name="star"
        />
        <span class="text-xs font-semibold">{{ props.movie.rating }}</span>
      </div>
      <div class="flex mt-1">
        <nuxt-link
          :to="`/detail/${props.movie.id}`"
          class="mr-auto"
        >
          <n-button>
            Detail
          </n-button>
        </nuxt-link>
        <n-button
          text
          @click=" findFavorite(props.movie.id)
            ? removeFromFavorite(props.movie.id)
            : addToFavorite(props.movie)
          "
        >
          <mdicon
            v-if="findFavorite(props.movie.id)"
            name="heart"
            class="text-red-500"
          />
          <mdicon
            v-else
            name="heart-outline"
          />
        </n-button>
      </div>
    </div>
  </div>
</template>

<style>
.drawer {
  position: absolute;
  bottom: 0;
  background: rgb(12, 12, 12, 0.6);
  width: 100%;
}

.movie {
  max-width: 160px;
  width: 160px;
  flex-shrink: 0;
  margin-right: 12px;
  position: relative;
}
</style>
