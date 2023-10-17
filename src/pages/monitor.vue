<script setup lang="ts">
import { isClient } from '@vueuse/shared'
import { UseDraggable as Draggable } from '../composables/drag'
import flvjs from "flv.js";
const innerWidth = isClient ? window.innerWidth : 200
import { onMounted } from 'vue'
const videoPlayer = () => {
  if (flvjs.isSupported()) {
    // main
    const videoElement_main = document.getElementById('m_main_room');
    const flvPlayer_main = flvjs.createPlayer({
      type: 'flv',
      url: 'https://pull.vio.vin/live/main.flv',
    });
    flvPlayer_main.attachMediaElement(videoElement_main);
    flvPlayer_main.load();
    flvPlayer_main.play();

    // live_1
    const videoElement_live_1 = document.getElementById('m_live_1_room');
    const flvPlayer_live_1 = flvjs.createPlayer({
      type: 'flv',
      url: 'https://pull.vio.vin/live/live_1.flv',
    });
    flvPlayer_live_1.attachMediaElement(videoElement_live_1);
    flvPlayer_live_1.load();
    flvPlayer_live_1.play();


  } else {
    alert('你的浏览器不支持播放，请更换浏览器')
  }
}

onMounted(() => {
  videoPlayer()
})
</script>

<template>
  <Draggable
      p="x-2 y-2"
      border="~ gray-400/30 rounded"
      shadow="~ hover:lg"
      class="fixed bg-$vp-c-bg select-none cursor-move z-24"
      :initial-value="{ x: 0, y: 0 }"
      :prevent-default="true"
      storage-key="vueuse-draggable-pos-v1"
      storage-type="session"
  >
    <div ref="size_v1">
      <div class="mb-1">
        主直播间
      </div>
      <div class="text-xs">
        <video style="width: 100%;" id="m_main_room" controls autoplay autofocus :volume="0.3"/>
      </div>
    </div>
  </Draggable>

  <Draggable
      p="x-2 y-2"
      border="~ gray-400/30 rounded"
      shadow="~ hover:lg"
      class="fixed bg-$vp-c-bg select-none cursor-move z-24"
      :initial-value="{ x: 150, y: 150 }"
      :prevent-default="true"
      storage-key="vueuse-draggable-pos-v1"
      storage-type="session"
  >
    <div ref="size_v1">
      <div class="mb-1">
        直播间1
      </div>
      <div class="text-xs">
        <video style="width: 100%;" id="m_live_1_room" controls autoplay autofocus :volume="0.3"/>
      </div>
    </div>
  </Draggable>
</template>
