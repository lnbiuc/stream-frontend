import mpegts from 'mpegts.js'

export function videoPlayer(url: string, elementId: string) {
  if (mpegts.isSupported()) {
    const videoElement: HTMLVideoElement | null = document.getElementById(elementId) as HTMLVideoElement
    const flvPlayer = mpegts.createPlayer({
      type: 'flv',
      url,
      isLive: true,
    }, {
      liveBufferLatencyChasing: true,
      liveBufferLatencyMaxLatency: 0.9,
      liveBufferLatencyMinRemain: 0.2,
    })
    flvPlayer.attachMediaElement(videoElement)
    flvPlayer.load()
    flvPlayer.play()
  }
  else {
    alert('你的浏览器不支持播放，请更换浏览器（iphone不行）')
  }
}
