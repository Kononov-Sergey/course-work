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
    workInfo: [
      {
        type: "doc",
        ref: "Инфографика по теме «Алгоритм» Кононов Сергей.pdf",
      },
      {
        type: "doc",
        ref: "Процесс принятия решений. Этапы принятия решений Кононов Сергей.pdf",
      },
    ],
  },
  {
    title: "Вариативная самостоятельная работа №1",
    href: "variable-independent-work-1",
    text: ["Разбор особенностей трех инфографик"],
    workInfo: [
      { type: "image", ref: "8a15434a8a13c5d165c9d49027b7bc1b.jpg" },
      {
        type: "image",
        ref: "1019556856_0_101_998_666_2072x0_60_0_0_5a62567cee3ad6e547e99550da9658e7.png",
      },
      {
        type: "image",
        ref: "Синий Предприниматель Личности Бизнес Инфографика_page-0001.jpg",
      },
      { type: "doc", ref: "ВСР 1 Кононов Сергей.docx" },
    ],
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
    workInfo: [
      {
        type: "image",
        ref: "ЛР2 Временная шкала Кононов Сергей_page-0001.jpg",
      },
      {
        type: "image",
        ref: "ЛР2 диаграмма Кононов Сергей.png",
      },
      { type: "doc", ref: "ЛР2 Кононов Сергей.docx" },
      {
        type: "image",
        ref: "ЛР2 пиктограмма Кононов Сергей.png",
      },
    ],
  },
  {
    title: "Инвариантная самостоятельная работа №2",
    href: "invariant-independent-work-2",
    text: [
      "Коллекция различных типов визуализированных данных на тему 'Ваше обучение в бакалавриате'",
    ],
    workInfo: [
      { type: "image", ref: "ИСР2 временная дорога Кононов Сергей.png" },
      { type: "image", ref: "ИСР2 карта Кононов Сергей.png" },
      {
        type: "image",
        ref: "ИСР2 Подача Заявки в Университет Инфографика Процесса.png",
      },
      {
        type: "image",
        ref: "ИСР2 Результаты зачисления диаграмма Кононов Сергей.png",
      },
      { type: "image", ref: "ИСР 2 планирование Кононов Сергей.png" },
    ],
  },
  {
    title: "Вариативная самостоятельная работа №2",
    href: "variable-independent-work-2",
    text: [
      "Коллекция различных типов визуализированных данных в соответствии с темой выпускной квалификационной работы студента",
      "Коллекция различных типов визуализированных данных на социальную тему о студентах",
    ],
    workInfo: [
      { type: "image", ref: "жизнь студента.jpeg" },
      { type: "image", ref: "Как жить на такую степендию.png" },
      { type: "image", ref: "нужно следить за здоровьем.jpeg" },
      { type: "image", ref: "образование 21 века.jpg" },
      { type: "image", ref: "организация дистанта.jpg" },
      { type: "image", ref: "Педагог будущего.jpg" },
      { type: "image", ref: "что может сделать студента счастливым.jpg" },
    ],
  },
];

export default PagesInfo;
