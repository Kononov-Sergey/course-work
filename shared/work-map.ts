import { NamePages } from "./pages-info";

export type WorkInfo = {
  type: "image" | "doc";
  ref: string;
};

const workMap = new Map<NamePages, WorkInfo[]>([
  [
    "lab-1",
    [
      { type: "image", ref: "Инфографика история HTML Кононов С.В.png" },
      { type: "doc", ref: "Отчёт лаб 1 Кононов С.В.docx" },
    ],
  ],
  ["invariant-independent-work-1", []],
  ["variable-independent-work-1", []],
  ["lab-2", []],
  ["invariant-independent-work-2", []],
  ["variable-independent-work-2", []],
]);

export default workMap;
