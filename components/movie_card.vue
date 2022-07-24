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
      <span>Judul Lengkap Yang Super Panjang</span>
      <div class="flex mt-2">
        <n-button
          class="mr-auto"
        >
          Detail
        </n-button>
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
