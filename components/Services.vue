<script setup lang="ts">
import serviceData from '../serviceData.json'
import type { ServiceData, SubVariant } from '~/types'

// Your existing code
const images = [
  '/assets/images/face.png',
  '/assets/images/epilation.png',
  '/assets/images/massage.png',
  '/assets/images/body.png',
]

const selectedDiv = ref<number | null>(null)
const selectedVariantIndex = ref<number | null>(null)
const divTexts = ref<ServiceData[]>(serviceData)
const serviceNames = Object.keys(divTexts.value[0])

function toggleSubVariantOptions(subVariant: SubVariant) {
  // Check if showOptions is defined, if not, initialize it to true
  if (typeof subVariant.showOptions === 'undefined') {
    subVariant.showOptions = true
  }
  else {
    // Toggle the value of showOptions
    subVariant.showOptions = !subVariant.showOptions
  }
}

function selectDiv(divNumber: number) {
  selectedDiv.value = divNumber
}

function toggleSubVariants(idx: number) {
  selectedVariantIndex.value = selectedVariantIndex.value === idx ? null : idx
}

onMounted(() => {
  selectDiv(1)
  selectedVariantIndex.value = 0
})
</script>

<template>
  <h2 class="font-bold text-2xl text-center mt-8">
    Налични Услуги
  </h2>
  <div class="bg-violet-100 py-4 my-4">
    <div class="container mx-auto">
      <div class="flex gap-4">
        <div
          v-for="divNumber in 4"
          :key="divNumber"
          :class="{ 'bg-blue-200': selectedDiv === divNumber }"
          class="cursor-pointer p-4 rounded-full"
          @click="selectDiv(divNumber)"
        >
          <img
            class="w-20 h-20"
            :src="`http://localhost:3000/_nuxt/${images[divNumber - 1]}`"
            alt="Снимка на Естетичен център Adoree"
          >
        </div>
      </div>
    </div>
  </div>
  <div class="container mx-a">
    <template v-if="selectedDiv">
      <div v-if="divTexts[0][serviceNames[selectedDiv - 1]]" class="grid grid-cols-2 gap-4">
        <ul class="col-span-1">
          <li v-for="(variant, idx) in divTexts[0][serviceNames[selectedDiv - 1]].variants" :key="idx">
            <strong class="cursor-pointer" @click="toggleSubVariants(idx)">{{ variant.name }}</strong> - {{ `${variant.price}лв.` }}
          </li>
        </ul>

        <ul class="col-span-1">
          <template v-for="(variant, idx) in divTexts[0][serviceNames[selectedDiv - 1]].variants" :key="idx">
            <ul v-if="variant.subVariants && selectedVariantIndex === idx">
              <li v-for="(subVariant, subIdx) in variant.subVariants" :key="subIdx">
                <strong class="cursor-pointer" @click="toggleSubVariantOptions(subVariant)">
                  {{ subVariant.name }} - {{ `${subVariant.price}лв.` }}
                </strong>

                <ul v-if="subVariant.showOptions">
                  <li v-for="(option, optIdx) in subVariant.options" :key="optIdx">
                    {{ option.name }} - {{ `${option.price}лв.` }}
                  </li>
                </ul>
              </li>
            </ul>
          </template>
        </ul>
      </div>
    </template>
  </div>
</template>
