
import { getAuthenticatedUser } from "@/app/(auth)/_services/authenticate-by-token";
import { routes } from "@/constants/routes";
import { redirect } from "next/navigation";
import CreateBoulder from "./components/CreateBoulder/CreateBoulder";

export default async function CreateBoulderPage() {
  const user = await getAuthenticatedUser();

  if (!user) redirect(routes.login);

  return <CreateBoulder />;
}
