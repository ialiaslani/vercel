<template>
  <NuxtLayout>
    <main class="my-14 py-14 flex items-center justify-center">
      <h1 
      class="transition duration-1000 font-extrabold text-8xl"
       :class="active === 'develop' ? 'bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-cyan-400' : ''"
       >Develop.</h1>
      <h1 
      class="transition duration-1000 font-extrabold text-8xl"
        :class="active === 'preview' ? 'bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-400' : ''"
      >Preview.</h1>
      <h1 
      class="transition duration-1000 font-extrabold text-8xl"
        :class="active === 'ship' ? 'bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-yellow-400' : ''"
      >Ship.</h1>
    </main>
  </NuxtLayout>
</template>

<script setup>
const active = ref("develop");

const changeActive = () => {
  if(active.value === "develop") {
    return "preview"
  } else if(active.value === "preview") {
    return "ship"
  } else if(active.value === "ship") {
    return "develop"
  }
}

setInterval(() => {
  active.value = changeActive()
},1500)


</script>