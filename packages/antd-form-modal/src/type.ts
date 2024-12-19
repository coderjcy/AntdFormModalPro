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
  attrs?: Iobject;
  events?: { [k: string]: Function };
}

// interface IProps extends ModalProps {
interface IProps {
  formItems: IFormItem[];
  title?: string | string[];
  rules?: { [k: string]: RuleObject | RuleObject[] };
  span?: ISpan;
  labelWidth?: string;
  readonly?: boolean;
  data?: Iobject;
  maxHeight?: string;
  minHeight?: string;
  dateValueFormat?: string;
  cancelButtonText?: string;
  confirmButtonText?: string;
  layout?: "horizontal" | "vertical";
  submitCallback?: (formData: Ref<{ [k: string]: any }>) => any;
}
type IProps2 = IProps & ModalProps;

type Iobject = {
  [k: string]: any;
};

export type { IProps, IProps2, IFormItem, Iobject };
