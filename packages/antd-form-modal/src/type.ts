import type { RuleObject } from "ant-design-vue/es/form/interface";
import type { ModalProps } from "ant-design-vue/es/modal/Modal";
import type { Ref } from "vue";
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
type Iobject = {
  [k: string]: any;
};
export type { IProps, IFormItem, Iobject };