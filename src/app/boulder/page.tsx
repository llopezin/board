import { redirect } from "next/navigation";
import Boulder from "./components/Boulder/Boulder";
import { routes } from "@/domain/contants/routes";
import BoardHeaderNav from "@/components/common/BoardHeaderNav/BoardHeaderNav";
import GoToBoulderListButton from "@/components/common/GoToBoulderListButton/GoToBoulderListButton";
import GoToCreateBoulderButton from "@/components/common/GoToCreateBoulderButton/GoToCreateBoulderButton";
import GoBackButton from "@/components/common/GoBackButton/GoBackButton";
import BoardHeaderBar from "@/components/common/BoardHeaderNav/BoardHeaderBar";
import BoulderName from "./components/BoulderName/BoulderName";
import getBoulder from "./services/getBoulder";
import { Suspense } from "react";
import Board from "@/features/Board/Board";

export default async function BoulderPage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | undefined }>
}) {
  const params = await searchParams;
  const id = params.id;
  const name = params.name;

  if (!id) redirect(routes.home);

  const boulderDataRes = getBoulder(id);

  return (
    <div className="relative grid grid-rows-[auto_auto_1fr_auto] h-dvh">
      <BoardHeaderBar>
        <GoBackButton />
        <BoardHeaderNav>
          <GoToCreateBoulderButton />
          <GoToBoulderListButton />
        </BoardHeaderNav>
      </BoardHeaderBar>
      <BoulderName name={name!} />
      <Suspense fallback={<Board />}>
        <Boulder bouderDataRes={boulderDataRes} />
      </Suspense>
    </div>
  );
}
