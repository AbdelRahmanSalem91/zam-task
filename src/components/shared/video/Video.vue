<template>
  <video class="video-shadow" :src="NeedsVideo" muted loop autoplay></video>
</template>

<script>
import NeedsVideo from "../../../assets/images/needs-vid.mp4";
export default {
  name: "Video",
  data: function () {
    return { NeedsVideo: NeedsVideo };
  },
};
</script>

<style scoped>
video {
  border-radius: 50px;
  position: relative;
  z-index: 100;
  width: 100%;
}
</style>