"use client";

import React, { useEffect } from "react";
import { FS_MODAL_CUSTOM_EVENT_TYPE } from "./FullScreenModal.constants";
import { FullScreenModalProps } from "./FullScreenModal.types";
import { createPortal } from "react-dom";
import { FocusTrap } from "focus-trap-react";
import { twMerge } from "tailwind-merge";

const FullScreenModal = ({
  instanceId,
  children,
  className,
}: FullScreenModalProps) => {
  const [isOpen, setIsOpen] = React.useState(false);

  function handleOpen(e: CustomEvent) {
    if (e.detail.instanceId === instanceId) {
      setIsOpen((prev) => !prev);
    }
  }

  useEffect(() => {
    const controller = new AbortController();

    window?.addEventListener(
      FS_MODAL_CUSTOM_EVENT_TYPE,
      handleOpen as EventListener,
      { signal: controller.signal }
    );

    return () => controller.abort();
  }, []);

  return (
    isOpen &&
    createPortal(
      <FocusTrap>
        <div
          className={twMerge(
            "h-screen w-screen z-10 fixed top-0 left-0 overflow-auto",
            className
          )}
          role="dialog"
          aria-modal="true"
          id={instanceId}
        >
          {children}
        </div>
      </FocusTrap>,
      document.getElementById("modal-root")!
    )
  );
};

export default FullScreenModal;
