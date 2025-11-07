<template>
  <div class="flex-1 min-w-[200px]">
    <p class="text-sm text-white/70">{{ label }}</p>
    <div class="mt-2 flex items-end gap-2">
      <span class="text-3xl font-extrabold">{{ displayValue }}</span>
      <span v-if="suffix" class="text-white/70">{{ suffix }}</span>
    </div>
    <div class="mt-3 h-1.5 rounded-full bg-white/10">
      <div class="h-1.5 rounded-full bg-brand-500" :style="{ width: barWidth }"></div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue"
const props = defineProps({
  label: String,
  value: { type: Number, required: true },
  suffix: String
})
const displayValue = ref(0)
const barWidth = ref("0%")
onMounted(() => {
  const target = props.value
  const steps = 24
  let i = 0
  const tick = setInterval(() => {
    i++
    displayValue.value = Math.round((i / steps) * target)
    barWidth.value = `${Math.min(100, (displayValue.value / Math.max(target, 1)) * 100)}%`
    if (i >= steps) clearInterval(tick)
  }, 30)
})
</script>
