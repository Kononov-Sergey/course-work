import { FC, PropsWithChildren } from "react";
import Link from "next/link";

export interface CardPreviewProps {
  title: string;
  href: string;
  text?: string[];
}

const CardPreview: FC<PropsWithChildren<CardPreviewProps>> = ({
  href,
  title,
  text,
}) => {
  return (
    <Link href={href}>
      <div className="bg-color-card-bg py-8 px-4 rounded flex flex-col gap-2 transition duration-300 hover:scale-105">
        <h2 className="font-bold text-2xl text-color-card-headline">{title}</h2>
        <ul className="list-disc list-inside text-color-card-paragraph">
          {text?.map((item) => (
            <li>{item}</li>
          ))}
        </ul>
      </div>
    </Link>
  );
};
CardPreview.defaultProps = {
  text: [],
};

export default CardPreview;
