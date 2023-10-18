export type HeaderInterface<T> = {
  key: keyof T | "actions";
  title: string;
  align?: "end" | "start" | "center";
  sortable?: boolean;
}
