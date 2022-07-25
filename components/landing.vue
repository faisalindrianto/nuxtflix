<script setup lang="ts">
const trailerPreview = ref()
</script>

<template>
  <div
    class="landing w-full relative mb-16"
    style="background-image: linear-gradient(rgba(0, 0, 0, 0.3), rgba(15, 15, 20)), url('https://image.tmdb.org/t/p/original//q2IlzP9bQNDdGLlX9jtms5MaOCh.jpg')"
  >
    <div class="container mx-auto px-4 md:px-0">
      <div class="main-landing">
        <h6 class="text-3xl font-semibold my-8">
          Movie Titles
        </h6>
        <p class="text-base">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum totam animi quam minus fugit aspernatur voluptatum repellat asperiores aut? Voluptate pariatur veniam quasi at explicabo labore dolor, a odit magnam cupiditate iusto facere. Error culpa blanditiis commodi odio. Expedita id tempore molestias aliquid aspernatur iusto quaerat numquam nihil.
        </p>
        <div class="flex mt-8">
          <n-button
            class="mr-4"
            @click="trailerPreview.show()"
          >
            <span class="mr-2">Play Trailer</span>
            <mdicon name="play" />
          </n-button>
          <n-button text>
            <mdicon name="heart-outline" />
          </n-button>
        </div>
      </div>
    </div>

    <preview ref="trailerPreview" />
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
