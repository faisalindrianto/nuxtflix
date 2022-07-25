<script setup lang="ts">
import { useElementHover } from '@vueuse/core'

const movieCard = ref()
const isHovered = useElementHover(movieCard)
</script>

<template>
  <div ref="movieCard" class="movie">
    <nuxt-link
      to="/detail/12"
    >
      <n-image
        src="https://image.tmdb.org/t/p/original//q2IlzP9bQNDdGLlX9jtms5MaOCh.jpg"
        width="160"
        preview-disabled
      />
    </nuxt-link>
    <div
      v-if="isHovered"
      class="drawer transition-all duration-300 ease-in p-2"
    >
      <span class="text-sm font-medium">Judul Lengkap Yang Super Panjang</span>
      <div class="flex items-center">
        <span class="text-xs">2018</span>
        <mdicon
          class="ml-auto mr-1 text-yellow-400 mb-1.5"
          size="16"
          name="star"
        />
        <span class="text-xs font-semibold">6.7</span>
      </div>
      <div class="flex mt-1">
        <nuxt-link
          to="/detail/12"
          class="mr-auto"
        >
          <n-button>
            Detail
          </n-button>
        </nuxt-link>
        <n-button text>
          <mdicon name="heart-outline" />
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
