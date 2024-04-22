<script setup lang="ts">
const selectedIndex = ref < number | null > (null)

function selectImage(index: number) {
  selectedIndex.value = index
}

onMounted(() => {
  selectedIndex.value = 0
})
</script>

<template>
  <h2 class="font-bold text-2xl text-center mt-8 text-black dark:text-black">
    Налични Услуги
  </h2>
  <div class="bg-violet-100 py-4 my-4">
    <div class="container mx-auto">
      <div class="grid grid-cols-2 md:grid-cols-4 justify-center items-center w-fit mx-a gap-12">
        <div
          :class="{ 'bg-blue-200': selectedIndex === 0 }"
          class="p-4 rounded-full cursor-pointer"
          @click="selectImage(0)"
        >
          <img
            class="sm:w-20 sm:h-20 w-24"
            src="/assets/images/face.png"
            alt="Снимка на Естетичен център Adoree"
          >
        </div>
        <!-- Second image -->
        <div
          :class="{ 'bg-blue-200': selectedIndex === 1 }"
          class="p-4 rounded-full cursor-pointer"
          @click="selectImage(1)"
        >
          <img
            class="sm:w-20 sm:h-20 w-24"
            src="/assets/images/epilation.png"
            alt="Снимка на Естетичен център Adoree"
          >
        </div>
        <!-- Third image -->
        <div
          :class="{ 'bg-blue-200': selectedIndex === 2 }"
          class="p-4 rounded-full cursor-pointer"
          @click="selectImage(2)"
        >
          <img
            class="sm:w-20 sm:h-20 w-24"
            src="/assets/images/massage.png"
            alt="Снимка на Естетичен център Adoree"
          >
        </div>
        <!-- Fourth image -->
        <div
          :class="{ 'bg-blue-200': selectedIndex === 3 }"
          class="p-4 rounded-full cursor-pointer"
          @click="selectImage(3)"
        >
          <img
            class="sm:w-20 sm:h-20 w-24"
            src="/assets/images/body.png"
            alt="Снимка на Естетичен център Adoree"
          >
        </div>
      </div>
      <template v-if="selectedIndex !== null">
        <div class="sm:text-center mt-4 px-4 text-black dark:text-black">
          <p v-if="selectedIndex === 0">
            В нашата клиника предлагаме разнообразие от процедури за естетично подобряване на кожата на
            лицето, които се фокусират както върху външния вид, така и върху здравето на кожата. Ние вярваме
            в холистичния подход към красотата, който обхваща не само външния вид, но и общото
            благосъстояние на кожата и организма.
          </p>
          <p v-else-if="selectedIndex === 1">
            Ние предлагаме иновативни процедури за епилация с кола маска, които осигуряват бързи, ефективни
            и безболезнени резултати. Нашата екипна настройка и професионален подход ви гарантират комфорт и
            доверие по време на процедурата.

            Възползвайте се от нашите услуги за различни зони на тялото, включително лице, ръце, крака и
            интимни зони. Нашите лицензирани терапевти използват най-съвременните техники и продукти, за да
            осигурят гладка и нежна кожа, без да причиняват дразнене или увреждане на кожата.

            Запазете своя час сега и се насладете на удоволствието от гладка, безупречна кожа с нашите
            професионални услуги за епилация с кола маска.
          </p>
          <p v-else-if="selectedIndex === 2">
            Отдайте се на изключително усещане за релаксация и подобрение на кожата си с нашата
            професионална услуга за апаратен антицелулитен масаж и термомасаж на цялото тяло. Тази
            комбинирана терапия от 40 до 45 минути не само ще ви помогне да се освободите от натрупаните
            токсини и напрежение, но и ще подобри кръвообращението и тонуса на кожата ви.
          </p>
          <p v-else-if="selectedIndex === 3">
            Поглезете сетивата си и поддайте се на релаксация и подмладяване с нашите иновативни терапии за
            тяло. Възползвайте се от широка гама от опции, които обхващат различни методи и технологии,
            предназначени да ви помогнат да се освободите от целулита, да тонизирате кожата и да подобрите
            общото си здраве и благосъстояние.
          </p>
        </div>
      </template>
    </div>
  </div>
</template>
