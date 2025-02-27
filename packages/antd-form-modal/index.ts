import AntdFormModal from "./src/index.vue";
import type { App } from "vue";
import {
  Modal,
  Form,
  FormItem,
  Row,
  Col,
  Input,
  DatePicker,
  RangePicker,
  TimePicker,
  TimeRangePicker,
  Radio,
  RadioGroup,
  Checkbox,
  Button,
  CheckboxGroup,
  Select,
  Cascader,
  InputNumber,
  Upload,
  ConfigProvider,
  Pagination,
  Divider,
} from "ant-design-vue";
const components = [
  Modal,
  Form,
  FormItem,
  Row,
  Col,
  Input,
  DatePicker,
  RangePicker,
  TimePicker,
  TimeRangePicker,
  Radio,
  RadioGroup,
  Checkbox,
  Button,
  CheckboxGroup,
  Select,
  Cascader,
  InputNumber,
  Upload,
  ConfigProvider,
  Pagination,
  Divider,
];
export type * from "./src/type.ts";
export type AntdFormModal = typeof AntdFormModal;

export default {
  install: function (app: App) {
    components.forEach((component: any) => app.use(component));
    app.component("AntdFormModal", AntdFormModal);
  },
};
