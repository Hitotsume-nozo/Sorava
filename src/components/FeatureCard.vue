<template>
  <div class="glass rounded-2xl p-6 hover:scale-[1.01] transition-transform">
    <h3 class="font-semibold text-lg">{{ title }}</h3>
    <p class="mt-2 text-white/70">{{ desc }}</p>
  </div>
</template>

<script setup>
defineProps({
  title: { type: String, required: true },
  desc: { type: String, required: true }
})
</script>
