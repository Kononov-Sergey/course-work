import React from "react";
import type { NextPage } from "next";
import CardPreview, {
  CardPreviewProps,
} from "../components/sections/CardPreview";

const folderList: CardPreviewProps[] = [
  {
    title: "Вариативная самостоятельная работа №1",
    href: "variable-independent-work-1",
  },
  {
    title: "Вариативная самостоятельная работа №2",
    href: "variable-independent-work-2",
  },
  {
    title: "Инвариантная самостоятельная работа №1",
    href: "invariant-independent-work-2",
  },
  {
    title: "Инвариантная самостоятельная работа №2",
    href: "invariant-independent-work-2",
  },
  {
    title: "Лабораторная работа №1",
    href: "lab-2",
  },
  {
    title: "Лабораторная работа №2",
    href: "lab-2",
  },
];

const Home: NextPage = () => {
  return (
    <div>
      <h1 className="text-4xl">Визуализация данных и инфографика</h1>
      {folderList.map(({ href, title }) => {
        return <CardPreview key={href} href={href} title={title} />;
      })}
    </div>
  );
};

export default Home;
