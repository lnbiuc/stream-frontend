<template>
  <div class="h-[50px] flex flex-col justify-center items-center m-4">
    <div class="flex">
      <span class="px-2 py-1 cursor-pointer border-rd" :class="{ 'hover:bg-violet': $route.path === '/', 'bg-violet': $route.path === '/' }" @click="$router.push('/')">
        主直播间
      </span>
      <span class="px-2 py-1 cursor-pointer border-rd" :class="{ 'hover:bg-violet': $route.path === '/live_1', 'bg-violet': $route.path === '/live_1' }" @click="$router.push('live_1')">
        直播间1
      </span>
      <span class="px-2 py-1 cursor-pointer border-rd" :class="{ 'hover:bg-violet': $route.path === '/live_2', 'bg-violet': $route.path === '/live_2' }" @click="$router.push('live_2')">
        直播间2
      </span>
    </div>
  </div>
</template>
