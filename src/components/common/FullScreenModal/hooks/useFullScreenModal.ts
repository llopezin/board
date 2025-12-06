import { FS_MODAL_CUSTOM_EVENT_TYPE } from "../FullScreenModal.constants";
import { FullScreenModalId } from "../FullScreenModal.types";

export function useFullScreenModal(instanceId: FullScreenModalId) {
  function toggleModal() {
    console.log('toggleModal: ', {instanceId});
    const event = new CustomEvent(FS_MODAL_CUSTOM_EVENT_TYPE, {
      detail: { instanceId },
    });
    window.dispatchEvent(event);
  }

  return {
    toggleModal,
  };
}
