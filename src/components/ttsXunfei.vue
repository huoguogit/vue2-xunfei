<template>
  <div class="contert">
    <button @click="play">开始合成</button>
    <button @click="pause">停止播放</button>
  </div>
</template>

<script>
import TtsRecorder from "../utils/tts_xunfei/audio.js";
const ttsRecorder = new TtsRecorder();

export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
  data() {
    return { text: "图木塑壳是社会的的大大萨达阿达阿达啊大萨达" };
  },
  methods: {
    play() {
      //要合成的文本
      ttsRecorder.setParams({
        // 文本内容
        text: this.text,
        // 角色
        //  voiceName: '',
        // 语速
        speed: 50,
        // 音量
        voice: 50,
      });
      ttsRecorder.start();
    },
    pause() {
      ttsRecorder.stop();
    },
  },
};
</script>

<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
