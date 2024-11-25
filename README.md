1. 添加下列代码到 /src/components.d.ts 文件中

   ```typescript
   import type { AntdFormModal } from "antd-form-modal-pro";
   declare module "vue" {
     export interface GlobalComponents {
       AntdFormModal: AntdFormModal;
     }
   }
   export {};
   ```

2. 添加下列代码到 /src/main.ts 文件中

   ```javascript
   import { createApp } from "vue";
   import App from "./App.vue";
   import AntdFormModal from "antd-form-modal-pro";
   import "antd-form-modal-pro/style.css";
   createApp(App).use(AntdFormModal).mount("#app");
   ```

3. props 类型

   ```typescript
   interface IProps extends ModalProps {
     formItems: IFormItem[];
     title?: string;
     rules?: { [k: string]: RuleObject | RuleObject[] };
     span?: ISpan;
     labelWidth?: string;
     readonly?: boolean;
     data?: { [k: string]: any };
     maxHeight?: string;
     minHeight?: string;
     dateValueFormat?: string;
     submitCallback?: (formData: Ref<{ [k: string]: any }>) => any;
   }
   ```

4. formItems 类型

   ```typescript
   interface IFormItem {
     label: string;
     prop: string;
     type: IFormItemType;
     required?: boolean;
     labelWidth?: string;
     span?: ISpan;
     initialValue?: any;
     show?: (formData: Ref<{ [k: string]: any }>) => boolean;
     attrs?: { [k: string]: any };
     events?: { [k: string]: Function };
     children?: IFormItem[];
   }
   type IFormItemType =
     | "input"
     | "select"
     | "number"
     | "date"
     | "daterange"
     | "time"
     | "timerange"
     | "datetime"
     | "datetimerange"
     | "textarea"
     | "checkbox"
     | "radio"
     | "file"
     | "image"
     | "cascader"
     | "custom"
     | "custom-full";
   type ISpan = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24;
   ```

5. 示例

   ```typescript
   <template>
     <div class="home">
       <antd-form-modal v-model="isShow" :formItems></antd-form-modal>
     </div>
   </template>

   <script setup lang="ts">
   import { ref } from "vue";
   const isShow = ref(false);
   const formItems = [
     {
       label: "姓名",
       prop: "12",
       type: "select",
       labelWidth: "100px",
       attrs: {
         placeholder: "请选择",
         options: [
           { label: "a", value: "a" },
           { label: "b", value: "b" },
         ],
         // 监听事件的第一种方法,会额外返回formData对象
         "@change": (formData, ...args) => {
           console.log("formData", formData);
           console.log("args", args);
         },
       },
       events: {
         // 监听事件的第二种方法
         change: (...args) => {
           console.log("args", args);
         },
       },
     },
     // ......
   ];
   </script>
   ```
