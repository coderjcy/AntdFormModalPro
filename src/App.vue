<template>
  <div class="home">
    <a-config-provider :locale="zhCN">
      <antdFormModal
        v-model="aaa"
        :formItems="[
          {
            type: 'date',
            label: '123',
            prop: '123',
            required: true,
          },
        ]"
      />
    </a-config-provider>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
const aaa = ref(true);
import antdFormModal from "../packages/antd-form-modal/src/index.vue";
import zhCN from "ant-design-vue/es/locale/zh_CN";
</script>

<style scoped lang="less"></style>
