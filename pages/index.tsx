import React, { useEffect, useRef, useState } from "react";
import type { NextPage } from "next";
import clsx from "clsx";
import { useAtom } from "jotai";

import pagesInfo from "../shared/pages-info";
import CardPreview from "../components/sections/CardPreview";
import { isMainPageWasVisited } from "../store/global";

const Home: NextPage = () => {
  const cardSectionElement = useRef<HTMLElement>(null);
  const [isScrollDownButtonShown, setIsScrollDownButtonShown] = useState(true);

  const [isFirstPageWasVisited, setIsFirstPageWasVisited] =
    useAtom(isMainPageWasVisited);

  const handleScroll = () => {
    if (window.scrollY >= 100 && !isFirstPageWasVisited) {
      setIsFirstPageWasVisited(true);
    }

    setIsScrollDownButtonShown(window.scrollY < 100);
  };

  useEffect(() => {
    if (isFirstPageWasVisited) {
      cardSectionElement.current?.scrollIntoView();
    }

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const onDownScrollButtonClickHandler = () => {
    cardSectionElement.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <main className="flex flex-col gap-10">
        <section className="w-screen h-screen flex flex-col items-center justify-center gap-10 relative">
          <h1 className="font-bold text-6xl text-color-headline">
            Визуализация данных и инфографика
          </h1>
          <p className="text-color-paragraph text-center max-w-screen-md ">
            Инфографика – это особым образом иллюстрированная информация,
            которая представлена одновременно в виде текстов с добавлением
            различных элементов, таких как диаграммы, графики и различные
            рисунки. Она позволяет представить информацию с помощью различных
            средств, таких как изображения, графики, таблицы, диаграммы, карты и
            блок-схемы. На данный момент инфографика широко используется в
            различных сферах деятельности человека: реклама, маркетинг,
            журналистика, география, образование и тд.
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
          <div
            id="link-content"
            className="container mx-auto flex flex-col justify-center gap-8 "
          >
            {pagesInfo.map(({ href, title, text }) => {
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
      <footer className="bg-color-secondary-bg text-center p-4 text-color-paragraph">
        <h3>
          Подготовил{" "}
          <a
            className="underline hover:text-color-headline"
            target="_blank"
            href="https://t.me/Sergei_Kononov"
          >
            Кононов Сергей
          </a>
        </h3>
      </footer>
    </>
  );
};

export default Home;
