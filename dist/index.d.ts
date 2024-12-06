import { App } from 'vue';
import { ComponentOptionsMixin } from 'vue';
import { ComponentProvideOptions } from 'vue';
import { DefineComponent } from 'vue';
import { FormInstance } from 'ant-design-vue';
import { ModalProps } from 'ant-design-vue/es/modal/Modal';
import { PublicProps } from 'vue';
import { Ref } from 'vue';
import { RuleObject } from 'ant-design-vue/es/form/interface';

declare const __VLS_component: DefineComponent<__VLS_PublicProps, {
formRef: Ref<FormInstance | undefined, FormInstance | undefined>;
formData: Ref<Iobject, Iobject>;
}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {
submit: (...args: any[]) => void;
close: (...args: any[]) => void;
}, string, PublicProps, Readonly<__VLS_PublicProps> & Readonly<{
onSubmit?: ((...args: any[]) => any) | undefined;
onClose?: ((...args: any[]) => any) | undefined;
}>, {
title: string;
span: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24;
labelWidth: string;
readonly: boolean;
minHeight: string;
dateValueFormat: string;
cancelButtonText: string;
confirmButtonText: string;
layout: "horizontal" | "vertical";
}, {}, {}, {}, string, ComponentProvideOptions, false, {}, any>;

declare const __VLS_defaults: {
    modelValue: boolean;
};

declare type __VLS_PublicProps = {
    modelValue?: typeof __VLS_defaults['modelValue'];
} & typeof __VLS_typeProps;

declare function __VLS_template(): {
    slots: Partial<Record<string, (_: {
        formData: Iobject;
        config: IFormItem;
    }) => any>> & Partial<Record<string, (_: {
        formData: Iobject;
        config: IFormItem;
    }) => any>> & {
        title?(_: {}): any;
        other?(_: {
            formData: Iobject;
        }): any;
    };
    refs: {
        formRef: unknown;
    };
    attrs: Partial<{}>;
};

declare type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;

declare let __VLS_typeProps: IProps;

declare type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};

export declare type AntdFormModal = typeof _default_2;

declare const _default: {
    install: (app: App) => void;
};
export default _default;

declare const _default_2: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;

export declare interface IFormItem {
    label: string;
    prop: string;
    type: IFormItemType;
    required?: boolean;
    labelWidth?: string;
    span?: ISpan;
    initialValue?: any;
    show?: (formData: Ref<{
        [k: string]: any;
    }>) => boolean;
    attrs?: {
        [k: string]: any;
    };
    events?: {
        [k: string]: Function;
    };
}

declare type IFormItemType = "input" | "select" | "number" | "date" | "daterange" | "time" | "timerange" | "datetime" | "datetimerange" | "textarea" | "checkbox" | "radio" | "file" | "image" | "cascader" | "custom" | "custom-full";

export declare type Iobject = {
    [k: string]: any;
};

export declare interface IProps {
    formItems: IFormItem[];
    title?: string;
    rules?: {
        [k: string]: RuleObject | RuleObject[];
    };
    span?: ISpan;
    labelWidth?: string;
    readonly?: boolean;
    data?: {
        [k: string]: any;
    };
    maxHeight?: string;
    minHeight?: string;
    dateValueFormat?: string;
    cancelButtonText?: string;
    confirmButtonText?: string;
    layout?: "horizontal" | "vertical";
    submitCallback?: (formData: Ref<{
        [k: string]: any;
    }>) => any;
}

export declare type IProps2 = IProps & ModalProps;

declare type ISpan = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24;

export { }
