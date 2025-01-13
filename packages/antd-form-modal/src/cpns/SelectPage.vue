<template>
  <a-select show-search :options="options" @search="handleSearch" @select="handleSelect" :filterOption="false">
    <template #dropdownRender="{ menuNode: menu }">
      <v-nodes :vnodes="menu" />
      <a-divider style="margin: 4px 0" />
      <a-pagination v-model:current="current" :total @change="handlePageChange" :showSizeChanger="false" :simple="true" style="text-align: center" />
    </template>
  </a-select>
</template>
<script lang="ts" setup>
import type { IRequestFn } from "./type";
import { ref, defineComponent } from "vue";

const props = defineProps<{ requestFn: IRequestFn }>();
const VNodes = defineComponent({
  props: {
    vnodes: {
      type: Object,
      required: true,
    },
  },
  render() {
    return this.vnodes;
  },
});
const options = ref<any[] | undefined>([]);

const current = ref<number>(1);
const total = ref<number>(150);
let keyword: string | undefined = undefined;

const handleSearch = async (key: string) => {
  current.value = 1;
  keyword = key;
  fn();
};
const handlePageChange = (page: number) => {
  console.log("page", page);
  fn();
};
const handleSelect = (value: any, option: any) => {};
const fn = async () => {
  const res = await props.requestFn(keyword, current.value);
  options.value = res.options;
  total.value = res.total;
};
fn();
</script>
