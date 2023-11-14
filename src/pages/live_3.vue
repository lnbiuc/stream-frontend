<script setup lang="ts" generic="T extends any, O extends any">

onMounted(() => {
  videoPlayer('https://pull.vio.vin/live/live_3.flv', 'live_3_room')
})

</script>

<template>
  <div class="w-full flex flex-row justify-center items-center">
    <div class="w-[85vw] h-full flex justify-center items-center">
      <video style="width: 100%;" id="live_3_room" controls autoplay autofocus :volume="0"/>
    </div>
  </div>
</template>
