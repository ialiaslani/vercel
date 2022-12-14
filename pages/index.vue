<template>
  <NuxtLayout>
    <main class="my-14 py-14 flex items-center justify-center">
      <div @click="active='preview'">
        Counter: {{ active }}
      </div>

      <h1 class="font-extrabold text-8xl bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-cyan-400">Develop.</h1>
      <h1 class="font-extrabold text-8xl bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-400">Preview.</h1>
      <h1 class="font-extrabold text-8xl bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-yellow-400">Ship.</h1>
    </main>
  </NuxtLayout>
</template>

<script setup>
let active = reactive('develop')

const changeActive = () => {
  if(active=== "develop") {
    return "preview"
  } else if(active=== "preview") {
    return "ship"
  } else if(active=== "ship") {
    return "develop"
  }
}

setInterval(() => {
  console.log(active)
  active = changeActive()
},1000)


</script>