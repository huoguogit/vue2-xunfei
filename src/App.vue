<template>
  <div id="app">
    <!-- 语音合成按钮-->
    <tts></tts>
    <!-- 语音听写按钮 -->
    <!-- <iat></iat> -->
  </div>
</template>

<script>
import tts from "./components/ttsXunfei.vue";
import iat from "./components/IatXunfei.vue";
export default {
  name: "App",
  components: {
    tts,
    iat,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
