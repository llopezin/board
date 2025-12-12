"use client";

import { useSearchParams } from "next/navigation";
import Boulder from "./components/Boulder/Boulder";
import { useRouter } from "next/navigation";

/* This page will be server side rendered when database storage is implemented */

export default function BoulderPage() {
  const searchParams = useSearchParams();
  const id = searchParams.get("id");
  const router = useRouter();

  if (!id) router.push("/");

  return <Boulder id={id!} />;
}
