import { redirect } from "next/navigation";
import Boulder from "./components/Boulder/Boulder";
import { routes } from "@/domain/contants/routes";


export default async function BoulderPage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | undefined }>
}) {
  const params = await searchParams;
  const id = params.id;

  if (!id) redirect(routes.home);

  return <Boulder id={id} />;
}
