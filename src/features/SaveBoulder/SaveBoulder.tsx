"use client";

import FullScreenModal from "@/components/common/FullScreenModal/FullScreenModal";
import { fullScreenModalIds } from "@/components/common/FullScreenModal/FullScreenModal.constants";
import SaveBoulderForm from "./components/SaveBoulderForm/SaveBoulderForm";
import { useFullScreenModal } from "@/components/common/FullScreenModal/hooks/useFullScreenModal";
import SaveIcon from "@/components/icons/save";
import CloseIcon from "@/components/icons/close";
import { SaveBoulderProps } from "./SaveBoulder.types";
import { useRouter } from "next/navigation";
import { routes } from "@/constants/routes";

const SaveBoulder = ({ saveFn, boulder }: SaveBoulderProps) => {
  const { toggleModal } = useFullScreenModal(fullScreenModalIds.saveModal);
  const router = useRouter();
  const onSuccess = () => router.push(routes.boulderList);

  return (
    <>
      <div className="flex flex-col items-center">
        <button className="p-2" onClick={toggleModal}>
          <span className="sr-only">Save Boulder</span>
          <SaveIcon className="w-5 h-5 fill-white" />
        </button>
        <span className="text-xs text-white">save</span>
      </div>

      <FullScreenModal
        className="flex items-center justify-center bg-stone-800"
        instanceId={fullScreenModalIds.saveModal}
        ariaLabel="save boulder"
      >
        <button className="absolute right-0 top-0 p-4" onClick={toggleModal}>
          <CloseIcon className="w-5 h-5 [&>path]:fill-white" />
        </button>
        <SaveBoulderForm saveFn={saveFn} boulder={boulder} onSuccess={onSuccess} />
      </FullScreenModal>
    </>
  );
};

export default SaveBoulder;
