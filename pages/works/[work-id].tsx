import { FC, PropsWithChildren } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import workMap from "../../shared/work-map";
import { NamePages } from "../../shared/pages-info";

interface WorkPageProps {}

const WorkPage: FC<PropsWithChildren<WorkPageProps>> = () => {
  const router = useRouter();

  const currentPage = router.query["work-id"] as NamePages;
  return (
    <main>
      {router.query["work-id"]}
      {workMap.get(currentPage)?.map((workInfo) => {
        const fileSrc = `/work-result/${currentPage}/${workInfo.ref}`;

        if (workInfo.type === "image") {
          return <Image src={fileSrc} width={300} height={100} />;
        }

        if (workInfo.type === "doc") {
          return (
            <a href={fileSrc} target="_blank" rel="noopener noreferrer">
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
