<template>
  <header class="sticky top-0 z-50 glass">
    <div class="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
      <div class="flex items-center gap-3">
        <svg width="32" height="32" viewBox="0 0 32 32" class="text-brand-500" aria-hidden="true">
          <defs>
            <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stop-color="#3BAA54" />
              <stop offset="100%" stop-color="#FFC043" />
            </linearGradient>
          </defs>
          <circle cx="16" cy="16" r="14" fill="url(#g)" opacity="0.2"/>
          <path d="M6 20c4-1 6-5 10-10 3 3 5 7 10 8-3 3-7 5-12 6-3-1-5-2-8-4z" fill="url(#g)" />
        </svg>
        <span class="text-lg md:text-xl font-bold tracking-wide">SoravaNext</span>
      </div>

      <nav class="hidden md:flex items-center gap-6">
        <a href="#features" class="text-white/80 hover:text-white transition">Features</a>
        <a href="#how" class="text-white/80 hover:text-white transition">How it works</a>
        <a href="#contact" class="text-white/80 hover:text-white transition">Contact</a>
      </nav>

      <router-link to="/login" class="btn-primary" aria-label="Get Started">
        Get Started
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path d="M5 12h14M13 5l7 7-7 7" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </router-link>
    </div>
  </header>
</template>

<script setup>
</script>
