<script setup lang="ts">
const router = useRouter()
const route = useRoute()
const { fetchDetailMovie, detailMovie } = useMovie()
const { findFavorite, addToFavorite, removeFromFavorite } = useMovie()

const id = route.params.id
const trailerPreview = ref()

onMounted(() => {
  fetchDetailMovie(+id)
})
</script>

<template>
  <div
    class="relative w-full background-cover"
    :style="`background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(15, 15, 20)), url(${detailMovie.poster})`"
  >
    <div class="container mx-auto px-4 md:px-0 my-20">
      <n-button
        text
        class="mb-16"
        @click="router.back()"
      >
        <mdicon name="arrow-left" class="mr-2" size="18" />
        <span>Back To List</span>
      </n-button>
      <div
        v-if="detailMovie"
        class="flex flex-col md:flex-row"
      >
        <div class="mr-8 mb-8 md:mb-0">
          <h6 class="font-semibold text-3xl">
            {{ detailMovie.title }}
          </h6>
          <p class="text-base mt-4 lg:w-2/3">
            {{ detailMovie.description }}
          </p>
          <div class="flex mt-8">
            <n-button
              class="mr-4"
              @click="trailerPreview.show()"
            >
              <span class="mr-2">Play Trailer</span>
              <mdicon name="play" />
            </n-button>
            <n-button
              text
              @click=" findFavorite(detailMovie.id)
                ? removeFromFavorite(detailMovie.id)
                : addToFavorite(detailMovie)
              "
            >
              <mdicon
                v-if="findFavorite(detailMovie.id)"
                name="heart"
                class="text-red-500"
              />
              <mdicon
                v-else
                name="heart-outline"
              />
            </n-button>
          </div>
          <table class="mt-8">
            <tr>
              <td class="min-w-20 font-semibold pr-8 py-1">
                Release Date
              </td>
              <td class="font-light">
                {{ detailMovie.year }}
              </td>
            </tr>
            <tr>
              <td class="min-w-20 font-semibold pr-8 py-1">
                Rating
              </td>
              <td class="font-light">
                {{ detailMovie.rating }}
              </td>
            </tr>
            <tr v-if="detailMovie.genre">
              <td class="min-w-20 font-semibold pr-8 py-1">
                Genre
              </td>
              <td class="font-light">
                {{ detailMovie.genre.join(', ') }}
              </td>
            </tr>
            <tr>
              <td class="min-w-20 font-semibold pr-8 py-1">
                Duration
              </td>
              <td class="font-light">
                {{ detailMovie.duration }} Minutes
              </td>
            </tr>
          </table>
        </div>
        <div class="ml-0 md:ml-auto">
          <n-image
            class="hidden md:block ml-auto"
            :src="detailMovie.poster"
            width="320"
            preview-disabled
          />
        </div>
      </div>
    </div>

    <preview ref="trailerPreview" />
  </div>
</template>

<style>
.background-cover{
  margin-top: -120px;
  padding-top: 120px;

  background-size: cover;
  background-position: top center;
}
</style>
