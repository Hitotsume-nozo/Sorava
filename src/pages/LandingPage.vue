<template>
  <main class="bg-hero-gradient">
    <!-- Hero -->
    <section class="relative overflow-hidden">
      <div class="absolute inset-0 pointer-events-none">
        <div class="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-brand-500/10 blur-3xl"></div>
        <div class="absolute -bottom-24 -right-24 w-[32rem] h-[32rem] rounded-full bg-accent-500/10 blur-3xl"></div>
      </div>

      <div class="mx-auto max-w-7xl px-6 pt-20 pb-16 text-center">
        <h1 class="text-4xl md:text-6xl font-extrabold leading-tight">
          The marketplace where agriculture thrives
        </h1>
        <p class="mt-6 text-lg md:text-xl text-white/80 max-w-3xl mx-auto">
          Discover farm inputs, sell produce, manage logistics, and settle payments—securely and beautifully.
        </p>
        <div class="mt-8 flex flex-wrap items-center justify-center gap-4">
          <router-link to="/login" class="btn-primary">
            Get Started
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M5 12h14M13 5l7 7-7 7" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </router-link>
          <a href="#features" class="btn-secondary">Explore Features</a>
        </div>

        <div class="mt-14 grid md:grid-cols-3 gap-6">
          <div class="glass rounded-2xl p-6">
            <div class="flex items-center gap-3">
              <IconLeaf />
              <h3 class="font-semibold">Sourcing & Listings</h3>
            </div>
            <p class="mt-3 text-white/70">Curated listings for seeds, fertilizers, equipment, and produce.</p>
          </div>
          <div class="glass rounded-2xl p-6">
            <div class="flex items-center gap-3">
              <IconTruck />
              <h3 class="font-semibold">Logistics-ready</h3>
            </div>
            <p class="mt-3 text-white/70">Track shipments, optimize routes, and coordinate deliveries.</p>
          </div>
          <div class="glass rounded-2xl p-6">
            <div class="flex items-center gap-3">
              <IconShield />
              <h3 class="font-semibold">Secure Payments</h3>
            </div>
            <p class="mt-3 text-white/70">Escrow, payouts, and transparent settlement workflows.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Feature Grid -->
    <section id="features" class="mx-auto max-w-7xl px-6 py-16">
      <div class="grid lg:grid-cols-3 gap-8">
        <FeatureCard title="Smart Catalog" desc="Rich product metadata, quality checks, and availability." />
        <FeatureCard title="Auctions & Bids" desc="Run time-bound auctions with fair, transparent pricing." />
        <FeatureCard title="Events & Alerts" desc="Real-time updates using your event bus and gateways." />
        <FeatureCard title="Inventory & Forecasts" desc="Track stock, monitor demand, and plan ahead." />
        <FeatureCard title="Compliance" desc="Traceability and audit logs mapped to your services layer." />
        <FeatureCard title="Analytics" desc="Dashboards for trends, performance, and marketplace health." />
      </div>
    </section>

    <!-- Stats -->
    <section class="mx-auto max-w-7xl px-6">
      <div class="glass rounded-2xl p-8 flex flex-wrap justify-between gap-8">
        <StatBar label="Active suppliers" :value="1240" />
        <StatBar label="Verified buyers" :value="3280" />
        <StatBar label="Daily listings" :value="860" />
        <StatBar label="On-time deliveries" :value="97" suffix="%"/>
      </div>
    </section>

    <!-- How it works -->
    <section id="how" class="mx-auto max-w-7xl px-6 py-16">
      <div class="grid md:grid-cols-3 gap-8">
        <StepCard step="1" title="Discover">
          Browse verified listings curated by the marketplace services.
        </StepCard>
        <StepCard step="2" title="Transact">
          Secure payment and settlement via the gateway layer.
        </StepCard>
        <StepCard step="3" title="Deliver">
          Logistics and tracking integrated with your event system.
        </StepCard>
      </div>
    </section>

    <!-- Testimonials -->
    <section class="mx-auto max-w-7xl px-6 pb-16">
      <Testimonials />
    </section>

    <!-- CTA -->
    <section class="mx-auto max-w-7xl px-6 pb-24">
      <div class="glass rounded-2xl p-10 text-center">
        <h3 class="text-2xl font-bold">Ready to grow with SoravaNext?</h3>
        <p class="mt-3 text-white/80">Create your account and start sourcing or selling today.</p>
        <router-link to="/login" class="btn-primary mt-6">Get Started</router-link>
      </div>
    </section>
  </main>
</template>

<script setup>
import FeatureCard from "../components/FeatureCard.vue"
import StatBar from "../components/StatBar.vue"
import StepCard from "../components/StepCard.vue"
import Testimonials from "../components/Testimonials.vue"

import IconLeaf from "../components/icons/IconLeaf.vue"
import IconTruck from "../components/icons/IconTruck.vue"
import IconShield from "../components/icons/IconShield.vue"
</script>
