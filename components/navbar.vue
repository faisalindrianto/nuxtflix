<script setup lang="ts">
const floatingNavbar = ref(false)
const route = useRoute()

onMounted(() => {
  window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
      floatingNavbar.value = true
    } else {
      floatingNavbar.value = false
    }
  })
})
</script>

<template>
  <div class="navbar">
    <header
      :class="{'bg-black w-full fixed bg-opacity-90 transition-all duration-300 ease-in' : floatingNavbar}"
    >
      <div class="flex items-center container mx-auto h-16 px-4 md:px-0">
        <nuxt-link to="/">
          <n-image
            height="36"
            src="/assets/images/nuxtflix.png"
            preview-disabled
            class="mr-2"
          />
        </nuxt-link>
        <nuxt-link
          to="/"
          class="ml-auto mr-8"
          :class="route.path === '/' ? 'text-white' : 'text-gray-400'"
        >
          Movies
        </nuxt-link>
        <nuxt-link
          to="/favorites"
          :class="route.path === '/favorites' ? 'text-white' : 'text-gray-400'"
        >
          Favorites
        </nuxt-link>
      </div>
    </header>
  </div>
</template>

<style>
.navbar {
  position: absolute;
  width: 100%;
  z-index: 3;
}
</style>
