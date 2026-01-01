import { Suspense } from "react";
import BoulderList from "./components/BoulderList/BoulderList";
import getBoulderList from "./services/getBoulderList";
import { Spinner } from "@/components/common/Spinner/Spinner";

export default async function BoulderListPage() {
  const bouldersListResponse = getBoulderList();

  return (
    <Suspense fallback={<Spinner />}>
      <BoulderList boulderList={bouldersListResponse} />
    </Suspense>
  )
}

