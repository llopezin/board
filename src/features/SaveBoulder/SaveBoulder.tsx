"use client";

import FullScreenModal from "@/components/common/FullScreenModal/FullScreenModal";
import { fullScreenModalIds } from "@/components/common/FullScreenModal/FullScreenModal.constants";
import React from "react";
import SaveBoulderForm from "./components/SaveBoulderForm/SaveBoulderForm";
import { useFullScreenModal } from "@/components/common/FullScreenModal/hooks/useFullScreenModal";
import SaveIcon from "@/components/icons/save";
import CloseIcon from "@/components/icons/close";
import { SaveBoulderProps } from "./SaveBoulder.types";

const SaveBoulder = ({ saveFn }: SaveBoulderProps) => {
  const { toggleModal } = useFullScreenModal(fullScreenModalIds.saveModal);

  const onSaveFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const boulderName = formData.get("boulderName") as string;
    const grade = formData.get("boulderGrade") as string;

    const { success } = saveFn(boulderName, grade);

    if (success) toggleModal();
  };

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
        <button className="absolute right-0 top-0" onClick={toggleModal}>
          <CloseIcon className="w-5 h-5 [&>path]:fill-white" />
        </button>
        <SaveBoulderForm onSubmit={onSaveFormSubmit} />
      </FullScreenModal>
    </>
  );
};

export default SaveBoulder;
