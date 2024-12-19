<template>
  <div class="home">
    <button @click="ee!.create()">new</button>
    <button @click="ee!.update({ a: '123' })">edit</button>
    <button @click="ee!.info({ a: '123' })">Info</button>
    <antdFormModal ref="ee" v-bind="config"></antdFormModal>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
import antdFormModal from "../packages/antd-form-modal/src/index.vue";
import type { IProps2 } from "../packages/antd-form-modal/src/type.ts";

const config: IProps2 = {
  // title: "标题",
  width: "500px",
  title: ["new", "edit", "info"],
  formItems: [{ type: "input", label: "123", prop: "a" }],
};
const ee = ref<InstanceType<typeof antdFormModal>>();
</script>

<style scoped lang="scss">
.home {
  background: red;
}
</style>
