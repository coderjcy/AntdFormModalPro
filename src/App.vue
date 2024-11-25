<template>
  <div class="home">
    <antd-form-modal v-model="eee" :form-items="[]" />

    <div @click="eee = !eee">123123</div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const eee = ref(false);
</script>

<style scoped lang="less"></style>
