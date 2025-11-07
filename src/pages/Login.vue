<template>
  <main class="min-h-[70vh] bg-hero-gradient flex items-center justify-center px-6 py-16">
    <div class="w-full max-w-md glass rounded-2xl p-8">
      <h1 class="text-2xl font-bold text-center">Welcome back</h1>
      <p class="mt-2 text-center text-white/70">Sign in to your SoravaNext account</p>

      <form class="mt-6 space-y-4" @submit.prevent="onSubmit">
        <div>
          <label for="email" class="block mb-2 text-sm text-white/70">Email</label>
          <input
            id="email"
            type="email"
            class="input"
            placeholder="you@example.com"
            v-model.trim="email"
            autocomplete="email"
            required
            :aria-invalid="emailError ? 'true' : 'false'"
          />
          <p v-if="emailError" class="mt-1 text-sm text-red-300">{{ emailError }}</p>
        </div>

        <div>
          <label for="password" class="block mb-2 text-sm text-white/70">Password</label>
          <input
            id="password"
            type="password"
            class="input"
            placeholder="••••••••"
            v-model="password"
            autocomplete="current-password"
            required
            :aria-invalid="passwordError ? 'true' : 'false'"
          />
          <p v-if="passwordError" class="mt-1 text-sm text-red-300">{{ passwordError }}</p>
        </div>

        <button type="submit" class="btn-primary w-full" :disabled="!canSubmit">
          Sign In
        </button>

        <div class="mt-4 flex items-center justify-between text-sm text-white/70">
          <a href="#" class="underline hover:text-white/90">Forgot password?</a>
          <a href="#" class="underline hover:text-white/90">Create account</a>
        </div>

        <p class="mt-4 text-xs text-white/60">
          Note: This demo performs client-side validation only. For production, integrate with your auth service behind the gateway layer and set secure cookies (HttpOnly, SameSite=strict).
        </p>
      </form>
    </div>
  </main>
</template>

<script setup>
import { computed, ref } from "vue"

const email = ref("")
const password = ref("")

const emailError = computed(() => {
  if (!email.value) return "Email is required."
  const ok = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)
  return ok ? "" : "Please enter a valid email."
})

const passwordError = computed(() => {
  if (!password.value) return "Password is required."
  const long = password.value.length >= 8
  const num = /\d/.test(password.value)
  const upper = /[A-Z]/.test(password.value)
  return long && num && upper ? "" : "Use at least 8 chars with a number and uppercase letter."
})

const canSubmit = computed(() => !emailError.value && !passwordError.value)

function onSubmit() {
  if (!canSubmit.value) return
  alert("Signed in (demo). Connect to your auth service next.")
}
</script>
