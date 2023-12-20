import { FC, PropsWithChildren } from "react";
import { useRouter } from "next/router";
import { useAtom } from "jotai";

import pagesInfo, { NamePages } from "../../shared/pages-info";
import { isMainPageWasVisited } from "../../store/global";

interface WorkPageProps {}

const WorkPage: FC<PropsWithChildren<WorkPageProps>> = () => {
  const router = useRouter();

  const currentPageHref = router.query["work-id"] as NamePages;
  const pageInfo = pagesInfo.find((page) => page.href === currentPageHref);

  const [, setIsFirstPageWasVisited] = useAtom(isMainPageWasVisited);

  const onBackButtonClickHandler = () => {
    setIsFirstPageWasVisited(true);
    router.back();
  };

  return (
    <main className="container mx-auto relative py-10">
      <header className="text-center mb-10">
        <h1 className="font-bold text-6xl text-color-headline">
          {pageInfo?.title}
        </h1>
        <button
          className="shadow fixed text-xl text-color-button-text top-10 left-10 bg-color-button-bg px-4 py-2 rounded-3xl transition duration-300 hover:scale-105"
          onClick={onBackButtonClickHandler}
          type="button"
        >
          Назад
        </button>
      </header>

      {!pageInfo && <h2>Нет данных о данной работе</h2>}

      <section className="flex items-center justify-center flex-col gap-4">
        {pageInfo?.workInfo.map((workInfo) => {
          const fileSrc = `/work-result/${currentPageHref}/${workInfo.ref}`;

          if (workInfo.type === "image") {
            return (
              <img
                key={workInfo.ref}
                alt={workInfo.ref}
                className="max-h-screen p-4 order-first shadow-2xl"
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
                className="cursor-pointer text-xl text-color-button-text bg-color-button-bg px-4 py-2 rounded"
              >
                Скачать {workInfo.ref}
              </a>
            );
          }
          return null;
        })}
      </section>
    </main>
  );
};

export default WorkPage;
