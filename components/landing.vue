<script setup lang="ts">
const trailerPreview = ref()
</script>

<template>
  <div
    class="landing w-full"
    style="background: url('http://placekitten.com/150/120') no-repeat cover !important"
  >
    <div class="container mx-auto px-4 md:px-0 mb-16">
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
}

.main-landing {
  max-width: 600px;
}
</style>
