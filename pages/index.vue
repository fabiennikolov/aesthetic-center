<script setup lang="ts">
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
  <div class="bg-white">
    <div class="carousel-container">
      <div class="h-sm flex overflow-x-hidden carousel-wrapper">
        <img src="~/assets/images/1.webp" class="w-full" draggable="false" alt="Carousel Item">
        <img src="~/assets/images/11.webp" class="w-full" draggable="false" alt="Carousel Item">
        <img src="~/assets/images/12.webp" class="w-full" draggable="false" alt="Carousel Item">
        <img src="~/assets/images/4.webp" class="w-full" draggable="false" alt="Carousel Item">
        <img src="~/assets/images/2.webp" class="w-full" draggable="false" alt="Carousel Item">
      </div>
    </div>

    <div class="container mt-4 px-4 sm:px-0">
      <div class="sm:flex justify-between">
        <div class="mx-auto">
          <h1 class="text-3xl font-semibold">
            Център за естетична и холистична медицина Adoree
          </h1>
          <address class="mt-2">
            София, бул. Патриарх Евтимий 1, в клиника Юниордент, етаж 1
          </address>
        </div>
        <a class="block bg-[#6e5f9d] text-white border-violet-500 border-2 rounded-md h-fit w-fit px-2 py-2" href="https://studio24.bg/tsentar-za-estetichna-i-holistichna-meditsina-adoree-s1280?m&" target="_blank" alt="Линк за резервация"><button>Запази Час</button></a>
      </div>
    </div>
    <Services class="sm:mb-12" />
    <About />
    <Location />
  </div>
</template>
