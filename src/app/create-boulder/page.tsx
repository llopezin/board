import { getAuthenticatedUser } from "@/app/(auth)/_services/authenticate-by-token";
import { routes } from "@/constants/routes";
import { redirect } from "next/navigation";
import { use } from "react";
import CreateBoulder from "./components/CreateBoulder/CreateBoulder";

export default function CreateBoulderPage() {
  const user = use(getAuthenticatedUser());

  if (!user) redirect(routes.login);

  return <CreateBoulder />;
}
