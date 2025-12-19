import { redirect } from "next/navigation";
import Boulder from "./components/Boulder/Boulder";
import { routes } from "@/domain/contants/routes";
import BoardHeaderNav from "@/components/common/BoardHeaderNav/BoardHeaderNav";
import GoToBoulderListButton from "@/components/common/GoToBoulderListButton/GoToBoulderListButton";
import GoToCreateBoulderButton from "@/components/common/GoToCreateBoulderButton/GoToCreateBoulderButton";


export default async function BoulderPage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | undefined }>
}) {
  const params = await searchParams;
  const id = params.id;

  if (!id) redirect(routes.home);

  return (
    <div className="relative grid grid-rows-[auto_1fr_auto] h-dvh">
      <BoardHeaderNav>
        {/* Add go back button here */}
        <GoToCreateBoulderButton />
        <GoToBoulderListButton />
      </BoardHeaderNav>
      <Boulder id={id} />
    </div>
  );
}
