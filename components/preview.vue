<script setup lang="ts">
const active = ref(false)

const show = () => {
  active.value = true
}

const close = () => {
  active.value = false
}

defineExpose({
  show,
  close
})
</script>

<template>
  <div>
    <n-drawer v-model:show="active" height="90%" placement="bottom">
      <n-drawer-content>
        <template #header>
          <div class="flex items-center">
            <h6>Preview Trailer</h6>
            <mdicon
              name="close"
              class="ml-auto cursor-pointer"
              @click="close"
            />
          </div>
        </template>
        <iframe
          type="text/html"
          style="background-color: #000;"
          class="w-full h-full"
          src="//www.youtube.com/embed/WgU7P6o-GkM?autoplay=1&amp;origin=https%3A%2F%2Fwww.themoviedb.org&amp;hl=en&amp;modestbranding=1&amp;fs=1&amp;autohide=1"
          frameborder="0"
        />
      </n-drawer-content>
    </n-drawer>
  </div>
</template>

<style>
.n-drawer-header__main {
  width: 100%;
}
</style>
