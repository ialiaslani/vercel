<template>
  <NuxtLayout>
    <div class="p-14">You're In Page {{ route.params.name }}</div>
  </NuxtLayout>

</template>

<script setup>
const route = useRoute()
console.log(route)
</script>

<style scoped>

</style>