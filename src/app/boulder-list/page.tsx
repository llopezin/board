import { Suspense } from "react";
import BoulderList from "./components/BoulderList/BoulderList";
import getBoulderList from "./services/getBoulderList";
import { Spinner } from "@/components/common/Spinner/Spinner";

export const dynamic = 'force-dynamic';

export default async function BoulderListPage() {
  const bouldersListResponse = await getBoulderList();

  return (
    <Suspense fallback={<Spinner />}>
      <BoulderList boulderList={bouldersListResponse} />
    </Suspense>
  )
}

