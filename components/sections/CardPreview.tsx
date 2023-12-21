import { FC, PropsWithChildren } from "react";
import Link from "next/link";
import { CardPreviewInfo, NamePages } from "../../shared/pages-info";

interface CardPreviewProps extends Omit<CardPreviewInfo, "href" | "workInfo"> {
  href: `/works/${NamePages}`;
}

const CardPreview: FC<PropsWithChildren<CardPreviewProps>> = ({
  href,
  title,
  text,
}) => {
  return (
    <Link href={href}>
      <div className="bg-color-card-bg py-8 px-4 rounded flex flex-col gap-2 transition duration-300 hover:scale-105 cursor-pointer">
        <h2 className="font-bold text-2xl text-color-card-headline">{title}</h2>
        <ul className="list-disc list-inside text-color-card-paragraph">
          {text?.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    </Link>
  );
};

export default CardPreview;
