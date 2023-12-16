import { FC, PropsWithChildren } from "react";
import { useRouter } from "next/router";
import pagesInfo, { NamePages } from "../../shared/pages-info";

interface WorkPageProps {}

const WorkPage: FC<PropsWithChildren<WorkPageProps>> = () => {
  const router = useRouter();

  const currentPageHref = router.query["work-id"] as NamePages;
  const pageInfo = pagesInfo.find((page) => page.href === currentPageHref);

  const onBackButtonClickHandler = () => {
    router.back();
  };

  return (
    <main className="container mx-auto">
      <header>
        <button onClick={onBackButtonClickHandler} type="button">
          Назад
        </button>
        <h1>{pageInfo?.title}</h1>
      </header>

      {!pageInfo && <h2>Нет данных о данной работе</h2>}

      {pageInfo?.workInfo.map((workInfo) => {
        const fileSrc = `/work-result/${currentPageHref}/${workInfo.ref}`;

        if (workInfo.type === "image") {
          return (
            <img
              key={workInfo.ref}
              alt={workInfo.ref}
              className="object-contain"
              src={fileSrc}
            />
          );
        }

        if (workInfo.type === "doc") {
          return (
            <a
              key={workInfo.ref}
              href={fileSrc}
              target="_blank"
              rel="noopener noreferrer"
            >
              Скачать {workInfo.ref}
            </a>
          );
        }
        return null;
      })}
    </main>
  );
};

export default WorkPage;
