<template>
  <div class="glass rounded-2xl p-6">
    <div class="flex items-center gap-3">
      <div class="w-10 h-10 rounded-full bg-brand-500/20 flex items-center justify-center font-bold">{{ step }}</div>
      <h3 class="font-semibold">{{ title }}</h3>
    </div>
    <p class="mt-3 text-white/70"><slot /></p>
  </div>
</template>

<script setup>
defineProps({
  step: { type: [String, Number], required: true },
  title: { type: String, required: true }
})
</script>
