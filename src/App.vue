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
import axios from "axios";
const config: IProps2 = {
  // title: "标题",
  width: "500px",
  title: ["new", "edit", "info"],
  formItems: [
    {
      type: "select",
      label: "123",
      prop: "a",
      pagination: async (keyword, page) => {
        const { data: res } = await axios.post("http://192.168.1.153:48081/instructType/getInstructTypeListByPage", {
          page,
          pageSize: 10,
          typeName: keyword,
        });

        return { options: res.data.list?.map((item: any) => ({ label: item.typeName, value: item.id })) || [], total: res.data.total };
      },
    },
    {
      type: "select",
      label: "123",
      prop: "b",
      attrs: {
        options: [
          {
            label: "啊啊啊",
            value: "123",
          },
          {
            label: "请问",
            value: "332",
          },
        ],
      },
    },
  ],
};
const ee = ref<InstanceType<typeof antdFormModal>>();
</script>

<style scoped lang="scss">
.home {
  background: red;
}
</style>
