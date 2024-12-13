<template>
  <a-config-provider :locale="zhCN" :theme="{ algorithm: _theme }">
    <a-form
      ref="formRef"
      :model="formData"
      :rules="rules"
      :layout
      :labelWrap="true"
      :style="{ '--label-width': labelWidth }"
      :disabled="readonly"
      @finish="handleSubmit"
      v-bind="$attrs"
    >
      <a-row>
        <template v-for="item in formItems" :key="item.prop">
          <a-col :span="item.span ?? span" v-if="item.type === 'custom-full'">
            <slot :name="item.prop" :formData="formData" :config="item"></slot>
          </a-col>
          <template v-else>
            <a-col :span="item.span ?? span" v-if="dynamicItem[item.prop] ?? true">
              <a-form-item
                v-if="dynamicItem[item.prop] ?? true"
                :label="item.label"
                :name="item.prop"
                :required="item.required"
                :style="{ '--label-width': item.labelWidth ?? labelWidth }"
              >
                <!-- 文本输入 -->
                <template v-if="item.type === 'input'">
                  <a-input
                    v-model:value="formData[item.prop]"
                    allowClear
                    :placeholder="`请输入${item.label}`"
                    v-bind="item.attrs"
                    v-on="item.events ?? {}"
                  />
                </template>
                <!-- 文本域输入 -->
                <template v-else-if="item.type === 'textarea'">
                  <a-textarea
                    v-model:value="formData[item.prop]"
                    :autoSize="{ minRows: 3 }"
                    allowClear
                    :placeholder="`请输入${item.label}`"
                    v-bind="item.attrs"
                    v-on="item.events ?? {}"
                  />
                </template>
                <!-- 日期时间选择 -->
                <a-date-picker
                  v-else-if="item.type === 'date' || item.type === 'datetime'"
                  v-model:value="formData[item.prop]"
                  :showTime="item.type === 'datetime'"
                  :valueFormat="dateValueFormat"
                  :format="formatMap[item.type]"
                  v-bind="item.attrs"
                  v-on="item.events ?? {}"
                />
                <a-range-picker
                  v-else-if="item.type === 'daterange' || item.type === 'datetimerange'"
                  v-model:value="formData[item.prop]"
                  :showTime="item.type === 'datetimerange'"
                  :valueFormat="dateValueFormat"
                  :format="formatMap[item.type]"
                  v-bind="item.attrs"
                  v-on="item.events ?? {}"
                />
                <a-time-picker
                  v-else-if="item.type === 'time'"
                  v-model:value="formData[item.prop]"
                  format="HH:mm"
                  valueFormat="HH:mm"
                  v-bind="item.attrs"
                  v-on="item.events ?? {}"
                />
                <a-time-range-picker
                  v-else-if="item.type === 'timerange'"
                  v-model:value="formData[item.prop]"
                  format="HH:mm"
                  valueFormat="HH:mm"
                  v-bind="item.attrs"
                  v-on="item.events ?? {}"
                />
                <!-- 数字输入 -->
                <template v-else-if="item.type === 'number'">
                  <a-input-number
                    v-model:value="formData[item.prop]"
                    style="width: 100%"
                    :placeholder="`请输入${item.label}`"
                    v-bind="item.attrs"
                    v-on="item.events ?? {}"
                  />
                </template>
                <!-- 级联选择 -->
                <template v-else-if="item.type === 'cascader'">
                  <a-cascader
                    v-model:value="formData[item.prop]"
                    expand-trigger="hover"
                    :placeholder="`请选择${item.label}`"
                    v-bind="item.attrs"
                    v-on="item.events ?? {}"
                  />
                </template>
                <!-- 下拉选择 -->
                <template v-else-if="item.type === 'select'">
                  <a-select v-model:value="formData[item.prop]" :placeholder="`请选择${item.label}`" v-bind="item.attrs" v-on="item.events ?? {}">
                  </a-select>
                </template>
                <!--  图片上传 -->
                <template v-else-if="item.type === 'image'">
                  <a-upload
                    v-model:file-list="formData[item.prop]"
                    list-type="picture-card"
                    @preview="handlePreview"
                    :beforeUpload="() => false"
                    v-bind="item.attrs"
                  >
                    <div v-if="(formData[item.prop]?.length ?? 0) < (item.attrs?.maxCount ?? Number.MAX_SAFE_INTEGER)">
                      <PlusOutlined />
                      <div style="margin-top: 8px">上传图片</div>
                    </div>
                  </a-upload>

                  <a-modal :open="previewInfo.visible" :title="previewInfo.title" :footer="null" @cancel="handlePreviewCancel">
                    <img style="width: 100%" :src="previewInfo.image" />
                  </a-modal>
                </template>
                <!-- 文件上传 -->
                <template v-else-if="item.type === 'file'">
                  <a-upload v-model:file-list="formData[item.prop]" :beforeUpload="() => false" v-bind="item.attrs">
                    <a-button
                      >上传文件
                      <template #icon>
                        <UploadOutlined />
                      </template>
                    </a-button>
                  </a-upload>
                </template>
                <!-- radio选择 -->
                <template v-else-if="item.type === 'radio'">
                  <a-radio-group v-model:value="formData[item.prop]" style="margin-left: 20px" v-bind="item.attrs" v-on="item.events ?? {}" />
                </template>
                <!-- checkbox选择 -->
                <template v-else-if="item.type === 'checkbox'">
                  <a-checkbox-group v-model:value="formData[item.prop]" v-bind="item.attrs" v-on="item.events ?? {}" />
                </template>
                <!-- 自定义 -->
                <template v-else-if="item.type === 'custom'">
                  <slot :name="item.prop" :formData="formData" :config="item"></slot>
                </template>
              </a-form-item>
            </a-col>
          </template>
        </template>
      </a-row>
      <slot name="other" :formData="formData"></slot>
    </a-form>
  </a-config-provider>
</template>

<script setup lang="ts">
import { ref, computed, watch } from "vue";
import { UploadOutlined, PlusOutlined } from "@ant-design/icons-vue";
import zhCN from "ant-design-vue/es/locale/zh_CN";
import { theme } from "ant-design-vue";

import type { IProps, Iobject } from "./type.js";
import type { FormInstance } from "ant-design-vue";
import "dayjs/locale/zh-cn";

const { darkAlgorithm, defaultAlgorithm } = theme;
const formatMap = {
  date: "YYYY-MM-DD",
  datetime: "YYYY-MM-DD HH:mm:ss",
  daterange: "YYYY-MM-DD",
  datetimerange: "YYYY-MM-DD HH:mm:ss",
  time: "HH:mm:ss",
  timerange: "HH:mm:ss",
};
const props = withDefaults(defineProps<IProps>(), {
  labelWidth: "100px",
  readonly: false,
  span: 24,
  dateValueFormat: "x",
  layout: "horizontal",
});
const emit = defineEmits(["submit", "close"]);
const formRef = ref<FormInstance>();
const formData = ref<Iobject>({});
const dynamicItem = ref<Iobject>({});

const setupForm = () => {
  const data: Iobject = {};
  for (const item of props.formItems) {
    data[item.prop] = item.initialValue;
    if (item.attrs && typeof item.attrs === "object") {
      for (const key in item.attrs) {
        if (key.startsWith("@")) {
          const _key = "on" + key.charAt(1).toUpperCase() + key.slice(2);
          const _fn = item.attrs[key];
          item.attrs[_key] = (...args: any) => _fn(formData.value, ...args);
          delete item.attrs[key];
        }
      }
    }
    if (item.show) {
      dynamicItem.value[item.prop] = computed(() => {
        const show = item.show!(formData);
        if (!show) formData.value[item.prop] = undefined;
        return show;
      });
    }
  }
  formData.value = data;
};

const handleSubmit = async () => {
  const res = props.submitCallback && (await props.submitCallback!(formData));
  if (res !== false) {
    emit("submit", { ...formData.value });
  }
};
const getBase64 = (file: File) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });
};
const previewInfo = ref({
  visible: false,
  image: "",
  title: "",
});
const handlePreviewCancel = () => {
  previewInfo.value.visible = false;
  previewInfo.value.title = "";
};
const handlePreview = async (file: any) => {
  if (!file.url && !file.preview) file.preview = await getBase64(file.originFileObj);
  previewInfo.value.image = file.url || file.preview;
  previewInfo.value.visible = true;
  previewInfo.value.title = file.name || file.url.substring(file.url.lastIndexOf("/") + 1);
};
watch(
  () => props.data,
  (newData) => {
    if (newData && Object.keys(newData).length) Object.keys(formData.value).forEach((key) => (formData.value[key] = newData[key]));
    else for (const item of props.formItems) formData.value[item.prop] = item.initialValue;
  }
);
defineExpose({
  formRef,
  formData,
});
const _theme = ref(defaultAlgorithm);
const watchTheme = () => {
  const targetNode = document.querySelector("body") as any;
  if ([...targetNode.classList].includes("dark")) _theme.value = darkAlgorithm;
  const observer = new MutationObserver((mutationsList, observer) => {
    for (let mutation of mutationsList)
      if (mutation.attributeName === "class") _theme.value = [...targetNode.classList].includes("dark") ? darkAlgorithm : defaultAlgorithm;
  });
  const config = { attributes: true, attributeFilter: ["class"] };
  observer.observe(targetNode, config);
};
setupForm();
watchTheme();
</script>

<style scoped>
.ant-form {
  overflow: auto;
  padding-right: 10px;
}
:deep(.ant-picker) {
  width: 100% !important;
}
:deep(.ant-form-item-label) {
  width: var(--label-width);
}

:deep(.ant-input-number-input[disabled]) {
  color: rgba(0, 0, 0, 0.25);
}

:deep(input[disabled]),
:deep(.ant-select-disabled .ant-select-selector),
:deep(textarea[disabled]),
:deep(.ant-radio-wrapper-disabled) {
  color: rgba(0, 0, 0, 0.8) !important;
}

:deep(.ant-radio-checked.ant-radio-disabled .ant-radio-inner) {
  border-color: #1677ff !important;
  background: #1677ff !important;
}
:deep(.ant-radio-checked.ant-radio-disabled .ant-radio-inner::after) {
  background-color: #fff !important;
}
</style>
<style>
.dark input[disabled],
.dark .ant-select-disabled .ant-select-selector,
.dark textarea[disabled],
.dark .ant-radio-wrapper-disabled {
  color: #999 !important;
}
</style>
