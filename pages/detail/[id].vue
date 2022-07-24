<script setup lang="ts">
const router = useRouter()
</script>

<template>
  <div class="container mx-auto px-4 md:px-0 my-20">
    <n-button
      text
      class="mb-16"
      @click="router.back()"
    >
      <mdicon name="arrow-left" class="mr-2" size="18" />
      <span>Back To List</span>
    </n-button>
    <div class="flex flex-col md:flex-row">
      <div class="mr-8 mb-8 md:mb-0">
        <h6 class="font-semibold text-3xl">
          Movie Title
        </h6>
        <p class="text-base mt-4 lg:w-2/3">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore aut veritatis qui velit iusto unde incidunt eum quae perspiciatis ullam tenetur, magni ducimus id saepe amet fugiat minus sunt ipsum nostrum quaerat rerum reprehenderit quia est?
        </p>
        <div class="flex mt-8">
          <n-button
            class="mr-4"
          >
            <span class="mr-2">Play Trailer</span>
            <mdicon name="play" />
          </n-button>
          <n-button text>
            <mdicon name="heart-outline" />
          </n-button>
        </div>
        <table class="mt-8">
          <tr
            v-for="i in 6"
            :key="i"
          >
            <td class="min-w-20 font-semibold pr-8 py-1">
              Detail
            </td>
            <td class="font-light">
              Detail Lorem
            </td>
          </tr>
        </table>
      </div>
      <div class="ml-0 md:ml-auto">
        <n-image
          class="hidden md:block ml-auto"
          src="https://image.tmdb.org/t/p/original//q2IlzP9bQNDdGLlX9jtms5MaOCh.jpg"
          width="320"
          preview-disabled
        />
      </div>
    </div>
    <movies />
  </div>
</template>
