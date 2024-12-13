<template>
  <div class="home"></div>
</template>

<script setup>
import { ref } from "vue";
const aaa = ref(true);
import antdFormModal from "../packages/antd-form-modal/src/index.vue";
import zhCN from "ant-design-vue/es/locale/zh_CN";
// import "dayjs/locale/zh-cn";

var getFinalState = function (nums, k, multiplier) {
  for (let i = 0; i < k; i++) {
    // const min =
  }
};

getFinalState([2, 1, 3, 5, 6], 5, 2);
</script>

<style scoped lang="scss">
.home {
  background: red;
}
</style>
