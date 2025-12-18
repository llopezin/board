import Link from "next/link";
import { BoulderListItemProps } from "./BoulderListItem.types";

export default function BoulderListItem({ boulderData }: BoulderListItemProps) {
  return (
    <Link href={`/boulder?id=${boulderData.id}`}>
      <li className="p-4 border-b border-slate-600 flex justify-between text-white">
        <span>{boulderData.name}</span>
        <span>{boulderData.grade}</span>
      </li>
    </Link>
  );
}
