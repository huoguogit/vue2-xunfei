<template>
  <div class="conter">
    <button @click="translationStart">开始</button>
    <button @click="translationEnd">停止</button>
  </div>
</template>

<script>
import IatRecorder from "../utils//lat_xunfei/IatRecorder.js";
const iatRecorder = new IatRecorder("en_us", "mandarin", "9abbbfb0"); //小语种-中文方言-appId

export default {
  data() {
    return {};
  },
  mounted() {},
  computed: {},
  methods: {
    translationStart() {
      iatRecorder.start();
    },
    translationEnd() {
      iatRecorder.onTextChange = (text) => {
        let inputText = text;
        this.searchData = inputText.substring(0, inputText.length - 1);
        //文字处理，因为不知道为什么识别输出的后面都带‘。’，这个方法是去除字符串最后一位
        console.log(this.searchData);
      };
      iatRecorder.stop();
    },
  },
};
</script>
<style scoped></style>
