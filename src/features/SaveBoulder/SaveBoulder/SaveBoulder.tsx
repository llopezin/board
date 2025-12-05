"use client";

import Button from "@/components/Button/Button";
import { ButtonSizes } from "@/components/Button/types";
import FullScreenModal from "@/components/FullScreenModal/FullScreenModal";
import { fullScreenModalIds } from "@/components/FullScreenModal/FullScreenModal.constants";
import React from "react";
import SaveBoulderForm from "../SaveBoulderForm/SaveBoulderForm";
import { useFullScreenModal } from "@/components/FullScreenModal/hooks/useFullScreenModal";
import SaveIcon from "@/icons/save";
import CloseIcon from "@/icons/close";
import { SaveBoulderProps } from "./SaveBoulder.types";

const SaveBoulder = ({ saveFn }: SaveBoulderProps) => {
  const { toggleModal } = useFullScreenModal(fullScreenModalIds.saveModal);

  const onSaveFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const boulderName = formData.get("boulderName") as string;
    const grade = formData.get("boulderGrade") as string;

    saveFn(boulderName, grade);
    toggleModal();
  };

  return (
    <>
      <Button size={ButtonSizes.SMALL} onClick={toggleModal}>
        <span className="sr-only">Save Boulder</span>
        <SaveIcon className="w-5 h-5 fill-white" />
      </Button>

      <FullScreenModal
        className="flex items-center justify-center bg-stone-800"
        instanceId={fullScreenModalIds.saveModal}
        ariaLabel="save boulder"
      >
        <button className="absolute right-0 top-0 p-2" onClick={toggleModal}>
          <CloseIcon className="w-5 h-5 [&>path]:fill-white" />
        </button>
        <SaveBoulderForm onSubmit={onSaveFormSubmit} />
      </FullScreenModal>
    </>
  );
};

export default SaveBoulder;
