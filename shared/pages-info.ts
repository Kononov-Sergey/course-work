export type NamePages =
  | "lab-1"
  | "invariant-independent-work-1"
  | "variable-independent-work-1"
  | "lab-2"
  | "invariant-independent-work-2"
  | "variable-independent-work-2";

export type WorkInfo = {
  type: "image" | "doc";
  ref: string;
};

export interface CardPreviewInfo {
  title: string;
  href: NamePages;
  text?: string[];
  workInfo: WorkInfo[];
}

const PagesInfo: CardPreviewInfo[] = [
  {
    title: "Лабораторная работа №1",
    href: "lab-1",
    text: [
      "Анализ выбора инструмента для создания инфографики",
      "Инфографика в png формате",
    ],
    workInfo: [
      { type: "image", ref: "Инфографика история HTML Кононов С.В.png" },
      { type: "doc", ref: "Отчёт лаб 1 Кононов С.В.docx" },
    ],
  },
  {
    title: "Инвариантная самостоятельная работа №1",
    href: "invariant-independent-work-1",
    text: [
      "Инфографика по теме 'Алгоритм'",
      "Инфографика по теме 'Процесс принятия решений. Этапы принятия решений'",
    ],
    workInfo: [],
  },
  {
    title: "Вариативная самостоятельная работа №1",
    href: "variable-independent-work-1",
    text: ["Разбор особенностей трех инфографик"],
    workInfo: [],
  },

  {
    title: "Лабораторная работа №2",
    href: "lab-2",
    text: [
      "Тема ЛР Сравнительный анализ языков C, C++, C Sharp",
      "Визуализация данных по средствам таблицы",
      "Визуализация данных по средствам диаграммы или схемы",
      "Визуализация данных по средствам временной шкалы",
      "Визуализация данных по средствам пиктограммы ",
    ],
    workInfo: [],
  },
  {
    title: "Инвариантная самостоятельная работа №2",
    href: "invariant-independent-work-2",
    text: [
      "Коллекция различных типов визуализированных данных на тему 'Ваше обучение в бакалавриате'",
    ],
    workInfo: [],
  },
  {
    title: "Вариативная самостоятельная работа №2",
    href: "variable-independent-work-2",
    text: [
      "Коллекция различных типов визуализированных данных в соответствии с темой выпускной квалификационной работы студента",
      "Коллекция различных типов визуализированных данных на социальную тему о студентах",
    ],
    workInfo: [],
  },
];

export default PagesInfo;
