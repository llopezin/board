
import { routes } from "@/constants/routes";
import { getAuthenticatedUser } from "@/lib/auth/auth-service";
import { redirect } from "next/navigation";
import CreateBoulder from "./components/CreateBoulder/CreateBoulder";

export default async function CreateBoulderPage() {
  const user = await getAuthenticatedUser();

  if (!user) redirect(routes.login);

  return <CreateBoulder />;
}
