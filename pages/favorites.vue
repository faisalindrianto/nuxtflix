<script setup lang="ts">
</script>

<template>
  <div class="container mx-auto px-4 md:px-0 my-20">
    <h6 class="font-semibold text-3xl my-12">
      Your Favorites
    </h6>

    <n-grid cols="1 s:2 m:6 xl:9" :y-gap="8" responsive="screen">
      <n-grid-item
        v-for="i in 12"
        :key="i"
      >
        <movie-card />
      </n-grid-item>
    </n-grid>
  </div>
</template>
