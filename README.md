1. ### 属性（因为组件中最外层为 a-model，可以直接在组件上设置原生 a-model 的属性）

   | 属性名                | 描述                                              |                              类型                              | 默认  | 必传 |
   | :-------------------- | :------------------------------------------------ | :------------------------------------------------------------: | :---: | :--: |
   | model-value / v-model | 是否展示                                          |                            boolean                             |       |  ✅  |
   | formItems             | 表单列的配置描述，具体项见[下表]                  |                          IFormItem[]                           |       |  ✅  |
   | rules                 | 表单验证规则                                      |                             object                             |       |      |
   | span                  | 每个表单项所占据的份数（每行分为 24 份）          |                         ISpan， (1~24)                         |  24   |      |
   | labelWidth            | label 标签的宽度                                  |                             string                             | 100px |      |
   | minHeight             | 表单的最小高度                                    |                             string                             | 300px |      |
   | maxHeight             | 表单的最大高度，超出最大高度变为滚动              |                             string                             |       |      |
   | dateValueFormat       | 日期组件值的格式化规则                            | string[具体格式](https://day.js.org/docs/zh-CN/display/format) |   x   |      |
   | readonly              | 表单是否只读                                      |                            boolean                             | false |      |
   | title                 | 弹窗标题                                          |                             string                             | 表单  |      |
   | confirmButtonText     | 提交按钮的文字内容                                |                             string                             | 保存  |      |
   | cancellButtonText     | 取消按钮的文字内容                                |                             string                             | 取消  |      |
   | data                  | 表单内容回显数据                                  |                             object                             |       |      |
   | submitCallback        | 提交表单前的回调函数，函数返回 false 取消提交操作 |                     (formData) => boolean                      |       |      |

2. ### formItems 属性

   | 属性名       | 描述                           |                                                                           类型                                                                           | 默认 | 必传 |
   | ------------ | ------------------------------ | :------------------------------------------------------------------------------------------------------------------------------------------------------: | ---- | :--- |
   | type         | 表单项类型                     | input、textarea、select、number、checkbox、radio、cascader、date、daterange、time、timerange、datetime、datetimerange、file、image 、custom、custom-full |      | ✅   |
   | prop         | 属性字段                       |                                                                          string                                                                          |      | ✅   |
   | label        | 表单项 label                   |                                                                          string                                                                          |      |      |
   | labelWidth   | label 标签的宽度               |                                                                          string                                                                          |      |      |
   | required     | 是否必须填写                   |                                                                         boolean                                                                          |      |      |
   | span         | 表单项占据的份数               |                                                                      ISpan， (1~24)                                                                      |      |      |
   | initialValue | 初始默认值                     |                                                                           any                                                                            |      |      |
   | show         | 控制该表单项是否展示的计算函数 |                                                               (formData: Ref) => boolean;                                                                |      |      |
   | attrs        | 表单项上需要绑定的原生属性     |                                                                          object                                                                          |      |      |
   | events       | 表单项需要监听的原生事件       |                                                                          object                                                                          |      |      |

3. ### 事件

   | **事件名** | **说明**                         | **类型**           |
   | ---------- | -------------------------------- | ------------------ |
   | submit     | 提交表单并且关闭弹窗后的回调函数 | (formData) => void |

4. ### 实例属性（Exposes）

   | **属性名** | **说明**               | **类型** |
   | ---------- | ---------------------- | -------- |
   | formData   | 表单数据               | object   |
   | formRef    | 组件中的 a-form 的实例 | object   |

5. ### 添加下列代码到 /src/components.d.ts 文件中（用于类型提示）

   ```typescript
   import type { AntdFormModal } from "antd-form-modal-pro";
   declare module "vue" {
     export interface GlobalComponents {
       AntdFormModal: AntdFormModal;
     }
   }
   export {};
   ```

6. ### 添加下列代码到 /src/main.ts 文件中

   ```javascript
   import { createApp } from "vue";
   import App from "./App.vue";
   import AntdFormModal from "antd-form-modal-pro";
   import "antd-form-modal-pro/style.css";
   createApp(App).use(AntdFormModal).mount("#app");
   ```

7. ### 示例
8. ```html
   <template>
     <div class="home">
       <antd-form-modal v-model="isShow" :formItems>
         <template #test2="{formData,config}">
           <input v-model="formData.test2" />
         </template>

         <template #test3="{formData,config}">
           <div>123</div>
         </template>
       </antd-form-modal>
     </div>
   </template>
   ```

   ```typescript
   <script setup lang="ts">
   import { ref } from "vue";
   const isShow = ref(false);
   const formItems = [
     {
   		label: "测试show",
       prop: "test",
       type: "input",
     },
     {
       label: "姓名",
       prop: "12",
       type: "select",
       labelWidth: "100px",
       show:(formData)=>{
         return formData.value.test === 'pass'
       }
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
     {
       type:'custom', //
       label:'测试2',
       prop:'test2', // 这里的prop作为插槽名
     },
     {
       type:'custom-full',   // 类型为custom-full时，label部分也会消失，该部分完全自定义，所以无需设置label属性
       prop:'test3',
     },
     // ......
   ];
   </script>
   ```
