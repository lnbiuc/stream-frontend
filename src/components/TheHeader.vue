<template>
  <div class="h-[50px] flex flex-row justify-between items-center">
    <div>
    </div>
    <div class="flex">
      <span class="mx-1 px-2 py-1 cursor-pointer border-rd" :class="{ 'hover:bg-violet': $route.path === '/', 'bg-violet': $route.path === '/' }" @click="$router.push('/')">
        主直播间
      </span>
      <span class="px-2 py-1 cursor-pointer border-rd" :class="{ 'hover:bg-violet': $route.path === '/live_1', 'bg-violet': $route.path === '/live_1' }" @click="$router.push('live_1')">
        直播间1
      </span>
      <span class="px-2 py-1 cursor-pointer border-rd" :class="{ 'hover:bg-violet': $route.path === '/live_2', 'bg-violet': $route.path === '/live_2' }" @click="$router.push('live_2')">
        直播间2
      </span>
      <span class="px-2 py-1 cursor-pointer border-rd" :class="{ 'hover:bg-violet': $route.path === '/live_3', 'bg-violet': $route.path === '/live_3' }" @click="$router.push('live_3')">
        直播间3
      </span>
      <span class="px-2 py-1 cursor-pointer border-rd" :class="{ 'hover:bg-violet': $route.path === '/monitor', 'bg-violet': $route.path === '/monitor' }" @click="$router.push('monitor')">
        监控室
      </span>
      <span class="px-2 py-1 cursor-pointer border-rd" :class="{ 'hover:bg-violet': $route.path === '/live_4', 'bg-violet': $route.path === '/live_4' }" @click="$router.push('live_4')">
        直播间4
      </span>
    </div>
    <div class="flex flex-row justify-center items-center">
      <a class="px-2 py-1 cursor-pointer border-rd hover:bg-violet" target="_blank" href="https://drive.vio.vin/">直播录像</a>
      <button @click="toggleDark()" class="m-4 icon-btn">
        <div class="i-carbon-sun dark:i-carbon-moon" />
      </button>
    </div>
  </div>
</template>
<script setup lang="ts">
</script>
