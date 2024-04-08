<script setup lang="ts">
import { onMounted, ref } from 'vue'

const items = [
  'https://studio24.bg/pictures/studios/1/1280/thumbs/0x346/19949.jpg',
  'https://studio24.bg/pictures/studios/1/1280/thumbs/0x346/66295.jpg',
  'https://studio24.bg/pictures/studios/1/1280/thumbs/0x346/19952.jpg',
  'https://studio24.bg/pictures/studios/1/1280/thumbs/0x346/19944.jpg',
  'https://studio24.bg/pictures/studios/1/1280/thumbs/0x346/19946.jpg',
]

const carouselRef = ref()

onMounted(() => {
  setInterval(() => {
    if (!carouselRef.value)
      return

    if (carouselRef.value.page === carouselRef.value.pages)
      return carouselRef.value.select(0)

    carouselRef.value.next()
  }, 3000)
})
</script>

<template>
  <UCarousel
    ref="carouselRef"
    v-slot="{ item }"
    :items="items"
    :ui="{ item: 'pr-1' }"
    class="overflow-hidden h-xl "
    indicators
  >
    <img :src="item" class="w-full" draggable="false">
  </UCarousel>
</template>
