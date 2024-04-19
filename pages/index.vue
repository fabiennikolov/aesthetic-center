<script setup lang="ts">
const items = [
  'http://localhost:3000/_nuxt/assets/images/2.webp',
  'http://localhost:3000/_nuxt/assets/images/1.webp',
  'http://localhost:3000/_nuxt/assets/images/12.webp',
  'http://localhost:3000/_nuxt/assets/images/4.webp',
  'http://localhost:3000/_nuxt/assets/images/11.webp',
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
  <div>
    <UCarousel
      ref="carouselRef"
      v-slot="{ item }"
      :items="items"
      :ui="{ item: 'sm:pr-1' }"
      class="overflow-hidden"
      indicators
    >
      <img :src="item" class="w-full" draggable="false" alt="Carousel Item">
    </UCarousel>

    <div class="container mt-4 px-4 sm:px-0">
      <div class="mx-auto max-w-xl">
        <h1 class="text-3xl font-semibold">
          Център за естетична и холистична медицина Adoree
        </h1>
        <address class="mt-2">
          София, бул. Патриарх Евтимий 1, в клиника Юниордент, етаж 1
        </address>
      </div>
    </div>
    <Services class="sm:mb-12" />
    <About />
    <Location />
  </div>
</template>
