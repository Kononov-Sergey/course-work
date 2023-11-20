import { FC, PropsWithChildren } from "react";
import { useRouter } from "next/router";

interface WorkPageProps {}

const WorkPage: FC<PropsWithChildren<WorkPageProps>> = () => {
  const router = useRouter();
  return <div>{router.query["work-id"]}</div>;
};

export default WorkPage;
