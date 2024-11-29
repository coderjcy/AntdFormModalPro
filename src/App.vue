<template>
  <div class="home">
    <!-- <antd-form-modal v-model="eee" :formItems="formItems"></antd-form-modal> -->
    <antd-form-modal v-model="eee" :formItems="[{ label: "12", prop: "123", type: "input" }]"></antd-form-modal>

    <div @click="eee = !eee">123123</div>
  </div>
</template>

<script setup lang="ts">
import antdFormModal from "../packages/antd-form-modal/src/index.vue";
import { IFormItem } from "../packages/antd-form-modal/src/type";
import { ref } from "vue";

const eee = ref(false);

// type a = "aa" | "ee";

// interface Ia {
//   eee: a;
// }

// let o: Ia;
// o = {
//   eee: "a1a",
// };
// const formItems = [{ label: "12", prop: "123", type: "input" as "input" }];
const formItems = [{ label: "12", prop: "123", type: "input" }];
// const formItems: IFormItem[] = [{ label: "12", prop: "123", type: "select" }]; \\
</script>

<style scoped lang="less"></style>
