import { redirect } from "next/navigation";
import Boulder from "./components/Boulder/Boulder";


export default async function BoulderPage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | undefined }>
}) {
  const params = await searchParams;
  const id = params.id;

  if (!id) redirect("/");

  return <Boulder id={id} />;
}
