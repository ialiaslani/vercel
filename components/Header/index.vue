<template>
  <header class="flex items-center justify-between h-20 mas-w-6xl mx-auto px-5">
    <!-- Logo -->
    <NuxtLink to="/">
      <HeaderIcon />
    </NuxtLink>

    <!-- Nav -->
    <ul class="flex items-center justify-between mas-w-6xl mx-auto lg:px-0">
      <template v-for="(n, i) in nav" :key="n.text">
        <li class="px-5">
          <NuxtLink :to="n.link">
            {{n.text}}
          </NuxtLink>
        </li>
      </template>
    </ul>

    <!-- Signups -->
    <div class="flex items-center justify-between mas-w-6xl mx-auto lg:px-0">
      <template v-for="(n, i) in signups" :key="n.text">
        <NuxtLink :to="n.link">
          <button class="px-5 py-2" :class="n.link === 'signup' ? 'bg-black text-white rounded' : ''">
            {{n.text}}
          </button>
        </NuxtLink>
      </template>
    </div>

  </header>
</template>


<script setup>
const nav = [
  {
    text: "Features",
    link: "features",
  },
  {
    text: "Docs",
    link: "docs",
  },
  {
    text: "Templates",
    link: "templates",
  },
  {
    text: "Customers",
    link: "customers",
  },
  {
    text: "Enterprise",
    link: "enterprise",
  },
  {
    text: "Enterprise",
    link: "enterprise",
  },
]

const signups = [
  {
    text: "Contact",
    link: "contact",
  },
  {
    text: "Login",
    link: "login",
  },
  {
    text: "Sign Up",
    link: "signup",
  }
]
</script>