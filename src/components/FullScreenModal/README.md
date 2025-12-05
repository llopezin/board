# FullScreenModal

A full-screen modal component with focus trap support.

## Setup

Before creating a new modal, add a unique ID to the `fullScreenModalIds` object in `FullScreenModal.constants.ts`,
this is used by useFullScreenModal to build the toggleModal unique to your new instance:

```typescript
const fullScreenModalIds = {
  saveModal: "save-modal",
  yourNewModal: "your-new-modal", // Add new ID here
} as const;
```

## Usage

```tsx
import FullScreenModal from "./FullScreenModal";
import { useFullScreenModal } from "./hooks/useFullScreenModal";
import { fullScreenModalIds } from "./FullScreenModal.constants";

// In your component
const { toggleModal } = useFullScreenModal(fullScreenModalIds.yourModal);

// Render the modal
<FullScreenModal 
  instanceId={fullScreenModalIds.yourModal}
  ariaLabel="Modal description"
>
  Your modal content here
</FullScreenModal>

// Trigger the modal
<button onClick={toggleModal}>Open Modal</button>
```

## Props

- `instanceId` - Unique identifier for the modal instance
- `ariaLabel` or `ariaLabelledBy` - Accessibility label
- `children` - Modal content
