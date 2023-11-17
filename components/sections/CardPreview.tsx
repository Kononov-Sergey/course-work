import { FC, PropsWithChildren } from "react";
import Link from "next/link";

export interface CardPreviewProps {
  title: string;
  href: string;
  text?: string;
}

const CardPreview: FC<PropsWithChildren<CardPreviewProps>> = ({
  href,
  title,
  text,
}) => {
  return (
    <Link href={href}>
      <h2>{title}</h2>
      {text && <p>{text}</p>}
    </Link>
  );
};

CardPreview.defaultProps = {
  text: "",
};

export default CardPreview;
