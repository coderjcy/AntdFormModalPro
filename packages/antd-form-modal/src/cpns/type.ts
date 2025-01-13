import type { SelectProps } from "ant-design-vue";

type IRequestFn = (
  keyword: string | undefined,
  page: number
) => Promise<{
  options: SelectProps["options"];
  total: number;
}>;

export type { IRequestFn };
