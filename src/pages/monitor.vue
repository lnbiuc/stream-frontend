<script setup lang="ts">
import { ref } from 'vue'
import { isClient } from '@vueuse/shared'
import mpegts from 'mpegts.js'
import { UseDraggable as Draggable } from '../components/useDraggable/component'

const handle_main = ref<HTMLElement | null>(null)
const handle_live_1 = ref<HTMLElement | null>(null)
const handle_live_2 = ref<HTMLElement | null>(null)
const handle_live_3 = ref<HTMLElement | null>(null)
const innerWidth = isClient ? window.innerWidth : 200
const innerHeight = isClient ? window.innerHeight : 200

const defaultPosition = ref({
  main: {
    x: 0,
    y: 50,
    width: innerWidth / 2.4,
    index: 0,
    isOpen: true,
    name: '主直播间',
  },
  live_1: {
    x: innerWidth / 2,
    y: 50,
    width: innerWidth / 2.4,
    index: 1,
    isOpen: true,
    name: '直播间1',
  },
  live_2: {
    x: 0,
    y: innerHeight / 2,
    width: innerWidth / 2.4,
    index: 2,
    isOpen: true,
    name: '直播间2',
  },
  live_3: {
    x: innerWidth / 2,
    y: innerHeight / 2,
    width: innerWidth / 2.4,
    index: 3,
    isOpen: true,
    name: '直播间3',
  },
})

function videoPlayer() {
  if (mpegts.isSupported()) {
    // main
    if (defaultPosition.value.main.isOpen) {
      const videoElement_Main: HTMLVideoElement | null = document.getElementById('main_room') as HTMLVideoElement
      const flvPlayer_main = mpegts.createPlayer({
        type: 'flv',
        url: 'https://pull.vio.vin/live/main.flv',
      })
      flvPlayer_main.attachMediaElement(videoElement_Main)
      flvPlayer_main.load()
      flvPlayer_main.play()
    }

    // live_1
    if (defaultPosition.value.live_1.isOpen) {
      const videoElement_live_1: HTMLVideoElement | null = document.getElementById('live_1_room') as HTMLVideoElement
      const flvPlayer_live_1 = mpegts.createPlayer({
        type: 'flv',
        url: 'https://pull.vio.vin/live/live_1.flv',
      })
      flvPlayer_live_1.attachMediaElement(videoElement_live_1)
      flvPlayer_live_1.load()
      flvPlayer_live_1.play()
    }

    // live_2
    if (defaultPosition.value.live_2.isOpen) {
      const videoElement_live_2: HTMLVideoElement | null = document.getElementById('live_2_room') as HTMLVideoElement
      const flvPlayer_live_2 = mpegts.createPlayer({
        type: 'flv',
        url: 'https://pull.vio.vin/live/live_2.flv',
      })
      flvPlayer_live_2.attachMediaElement(videoElement_live_2)
      flvPlayer_live_2.load()
      flvPlayer_live_2.play()
    }

    // live_3
    if (defaultPosition.value.live_3.isOpen) {
      const videoElement_live_3: HTMLVideoElement | null = document.getElementById('live_3_room') as HTMLVideoElement
      const flvPlayer_live_3 = mpegts.createPlayer({
        type: 'flv',
        url: 'https://pull.vio.vin/live/live_3.flv',
      })
      flvPlayer_live_3.attachMediaElement(videoElement_live_3)
      flvPlayer_live_3.load()
      flvPlayer_live_3.play()
    }
  }
  else {
    alert('你的浏览器不支持播放，请更换浏览器（iphone不行）')
  }
}

onMounted(() => {
  videoPlayer()
})

function openLiveWindow(index: number) {
  switch (index) {
    case 0:
      defaultPosition.value.main.isOpen = !defaultPosition.value.main.isOpen
      break
    case 1:
      defaultPosition.value.live_1.isOpen = !defaultPosition.value.live_1.isOpen
      break
    case 2:
      defaultPosition.value.live_2.isOpen = !defaultPosition.value.live_2.isOpen
      break
    case 3:
      defaultPosition.value.live_3.isOpen = !defaultPosition.value.live_3.isOpen
      break
  }
  videoPlayer()
}
</script>

<template>
  <div class="live-list">
    <p v-for="i in defaultPosition" class="cursor-default" @click="openLiveWindow(i.index)">
      {{ i.name }}  |  {{ i.isOpen ? '关闭' : '打开' }}
    </p>
  </div>
  <div v-if="defaultPosition.main.isOpen">
    <Draggable
      v-slot="{ x, y }"
      p="x-2 y-2"
      border="~ gray-400/30 rounded"
      shadow="~ hover:lg"
      class="fixed z-24 select-none bg-$vp-c-bg"
      :initial-value="{ x: defaultPosition.main.x, y: defaultPosition.main.y }"
      :prevent-default="true"
      :handle="handle_main"
      storage-key="vueuse-draggable-pos-main"
      storage-type="session"
    >
      <div :style="{ width: `${defaultPosition.main.width}px` }">
        <div ref="handle_main" class="mb-2 flex flex-row cursor-move justify-between">
          <div style="transform: scale(1.2)">
            🏠
          </div>
          <div>
            主直播间
          </div>
          <div class="flex flex-col cursor-pointer justify-center overflow-hidden" @click="defaultPosition.main.isOpen = !defaultPosition.main.isOpen">
            <a class="i-carbon-close mr-1 icon-btn" style="transform: scale(1.7)" />
          </div>
        </div>
        <div class="text-xs">
          <video id="main_room" style="width: 100%;" controls autoplay :volume="0" />
        </div>
      </div>
    </Draggable>
  </div>

  <div v-if="defaultPosition.live_1.isOpen">
    <Draggable
      v-slot="{ x, y }"
      p="x-2 y-2"
      border="~ gray-400/30 rounded"
      shadow="~ hover:lg"
      class="fixed z-24 select-none bg-$vp-c-bg"
      :initial-value="{ x: defaultPosition.live_1.x, y: defaultPosition.live_1.y }"
      :prevent-default="true"
      :handle="handle_live_1"
      storage-key="vueuse-draggable-pos-live-1"
      storage-type="session"
    >
      <div :style="{ width: `${defaultPosition.main.width}px` }">
        <div ref="handle_live_1" class="mb-2 flex flex-row cursor-move justify-between">
          <div style="transform: scale(1.2)">
            🎞
          </div>
          <div>
            直播间1
          </div>
          <div class="flex flex-col cursor-pointer justify-center overflow-hidden" @click="defaultPosition.live_1.isOpen = !defaultPosition.live_1.isOpen">
            <a class="i-carbon-close mr-1 icon-btn" style="transform: scale(1.7)" />
          </div>
        </div>
        <div class="text-xs">
          <video id="live_1_room" style="width: 100%;" controls autoplay :volume="0" />
        </div>
      </div>
    </Draggable>
  </div>

  <div v-if="defaultPosition.live_2.isOpen">
    <Draggable
      v-slot="{ x, y }"
      p="x-2 y-2"
      border="~ gray-400/30 rounded"
      shadow="~ hover:lg"
      class="fixed z-24 select-none bg-$vp-c-bg"
      :initial-value="{ x: defaultPosition.live_2.x, y: defaultPosition.live_2.y }"
      :prevent-default="true"
      :handle="handle_live_2"
      storage-key="vueuse-draggable-pos-live-2"
      storage-type="session"
    >
      <div :style="{ width: `${defaultPosition.main.width}px` }">
        <div ref="handle_live_2" class="mb-2 flex flex-row cursor-move justify-between">
          <div style="transform: scale(1.2)">
            🎞
          </div>
          <div>
            直播间2
          </div>
          <div class="flex flex-col cursor-pointer justify-center overflow-hidden" @click="defaultPosition.live_2.isOpen = !defaultPosition.live_2.isOpen">
            <a class="i-carbon-close mr-1 icon-btn" style="transform: scale(1.7)" />
          </div>
        </div>
        <div class="text-xs">
          <video id="live_2_room" style="width: 100%;" controls autoplay :volume="0" />
        </div>
      </div>
    </Draggable>
  </div>

  <div v-if="defaultPosition.live_3.isOpen">
    <Draggable
      v-slot="{ x, y }"
      p="x-2 y-2"
      border="~ gray-400/30 rounded"
      shadow="~ hover:lg"
      class="fixed z-24 select-none bg-$vp-c-bg"
      :initial-value="{ x: defaultPosition.live_3.x, y: defaultPosition.live_3.y }"
      :prevent-default="true"
      :handle="handle_live_3"
      storage-key="vueuse-draggable-pos-live-3"
      storage-type="session"
    >
      <div :style="{ width: `${defaultPosition.main.width}px` }">
        <div ref="handle_live_3" class="mb-2 flex flex-row cursor-move justify-between">
          <div style="transform: scale(1.2)">
            🎞
          </div>
          <div>
            直播间3
          </div>
          <div class="flex flex-col cursor-pointer justify-center overflow-hidden" @click="defaultPosition.live_3.isOpen = !defaultPosition.live_3.isOpen">
            <a class="i-carbon-close mr-1 icon-btn" style="transform: scale(1.7)" />
          </div>
        </div>
        <div class="text-xs">
          <video id="live_3_room" style="width: 100%;" controls autoplay :volume="0" />
        </div>
      </div>
    </Draggable>
  </div>
</template>

<style scoped>
.live-list {
  position: fixed;
  bottom: 0;
  right: 0;
  padding: 10px;
}
</style>
