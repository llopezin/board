import React from "react";
import { fullScreenModalIds } from "./FullScreenModal.constants";

export type FullScreenModalProps = {
  instanceId: FullScreenModalId;
  children?: React.ReactNode | React.ReactNode[];
  className?: string;
} & (
  | { ariaLabel: string; ariaLabelledBy?: string }
  | { ariaLabel?: string; ariaLabelledBy: string }
);

export type FullScreenModalId =
  (typeof fullScreenModalIds)[keyof typeof fullScreenModalIds];
