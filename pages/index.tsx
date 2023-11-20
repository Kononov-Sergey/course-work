import React, { useEffect, useRef, useState } from "react";
import type { NextPage } from "next";
import clsx from "clsx";
import CardPreview, {
  CardPreviewProps,
} from "../components/sections/CardPreview";

const folderList: CardPreviewProps[] = [
  {
    title: "Лабораторная работа №1",
    href: "lab-1",
    text: [
      "Анализ выбора инструмента для создания инфографики",
      "Инфографика в png формате",
    ],
  },
  {
    title: "Инвариантная самостоятельная работа №1",
    href: "invariant-independent-work-1",
    text: [
      "Инфографика по теме 'Алгоритм'",
      "Инфографика по теме 'Процесс принятия решений. Этапы принятия решений'",
    ],
  },
  {
    title: "Вариативная самостоятельная работа №1",
    href: "variable-independent-work-1",
    text: ["Разбор особенностей трех инфографик"],
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
  },
  {
    title: "Инвариантная самостоятельная работа №2",
    href: "invariant-independent-work-2",
    text: [
      "Коллекция различных типов визуализированных данных на тему 'Ваше обучение в бакалавриате'",
    ],
  },
  {
    title: "Вариативная самостоятельная работа №2",
    href: "variable-independent-work-2",
    text: [
      "Коллекция различных типов визуализированных данных в соответствии с темой выпускной квалификационной работы студента",
      "Коллекция различных типов визуализированных данных на социальную тему о студентах",
    ],
  },
];

const Home: NextPage = () => {
  const cardSectionElement = useRef<HTMLElement>(null);
  const [isScrollDownButtonShown, setIsScrollDownButtonShown] = useState(true);

  const handleScroll = () => {
    setIsScrollDownButtonShown(window.scrollY < 100);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const onDownScrollButtonClickHandler = () => {
    cardSectionElement.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <main className="flex flex-col gap-10">
      <section className="w-screen h-screen flex flex-col items-center justify-center gap-10 relative">
        <h1 className="font-bold text-6xl text-color-headline">
          Визуализация данных и инфографика
        </h1>
        <p className="text-color-paragraph text-center max-w-screen-md ">
          Инфографика – это особым образом иллюстрированная информация, которая
          представлена одновременно в виде текстов с добавлением различных
          элементов, таких как диаграммы, графики и различные рисунки. Она
          позволяет представить информацию с помощью различных средств, таких
          как изображения, графики, таблицы, диаграммы, карты и блок-схемы. На
          данный момент инфографика широко используется в различных сферах
          деятельности человека: реклама, маркетинг, журналистика, география,
          образование и тд.
        </p>
        <button
          type="button"
          className={clsx(
            "absolute bottom-10 rounded-full bg-color-button-bg p-2 transition duration-300 hover:scale-110",
            isScrollDownButtonShown ? "opacity-100" : "opacity-0"
          )}
          onClick={onDownScrollButtonClickHandler}
        >
          <img src="/expand-more-arrow.svg" alt="scroll down" />
        </button>
      </section>
      <section
        ref={cardSectionElement}
        className="min-w-screen min-h-screen flex items-center justify-center bg-color-secondary-bg p-8"
      >
        <div className="container mx-auto flex flex-col justify-center gap-8 ">
          {folderList.map(({ href, title, text }) => {
            return (
              <CardPreview
                key={href}
                href={`/works/${href}`}
                title={title}
                text={text}
              />
            );
          })}
        </div>
      </section>
    </main>
  );
};

export default Home;
