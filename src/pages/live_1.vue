<script setup lang="ts" generic="T extends any, O extends any">
import flvjs from 'flv.js'

const videoPlayer = () => {
  if (flvjs.isSupported()) {
    const videoElement: HTMLVideoElement | null = document.getElementById('live_1_room') as HTMLVideoElement;
    const flvPlayer = flvjs.createPlayer({
      type: 'flv',
      url: 'https://pull.vio.vin/live/live_1.flv',
    });
    flvPlayer.attachMediaElement(videoElement!);
    flvPlayer.load();
    flvPlayer.play();
  } else {
    alert('你的浏览器不支持播放，请更换浏览器')
  }
}

onMounted(() => {
  videoPlayer()
})

</script>

<template>
  <div class="w-full flex flex-row justify-center items-center">
    <div class="w-[85vw] h-full flex justify-center items-center">
      <video style="width: 100%;" id="live_1_room" controls autoplay autofocus :volume="0.3"/>
    </div>
  </div>
</template>
