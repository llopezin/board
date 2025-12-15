import { expect, test, beforeAll } from "vitest";
import { render } from "vitest-browser-react";
import { userEvent } from "vitest/browser";
import "@/app/styles/globals.css";
import CreateBoulder from "@/app/create-boulder/components/CreateBoulder/CreateBoulder";

beforeAll(() => {
  const modalRoot = document.createElement("div");
  modalRoot.setAttribute("id", "modal-root");
  document.body.appendChild(modalRoot);
});

test("Save boulder: User can open save modal and save a boulder", async () => {
  // Clear local storage to start fresh
  window.localStorage.clear();

  const { getByRole, getByLabelText, getByTestId } = await render(<CreateBoulder />);

  // 1. Open Modal
  // The trigger button is accessible by name "Save Boulder" (via sr-only span)
  const trigger = getByRole("button", { name: "Save Boulder" });

  await expect.element(trigger).toBeInTheDocument();
  await userEvent.click(trigger);


  // 2. Verify Modal & Fill Form
  // Check that the name input is present and visible
  const nameInput = getByLabelText("Name");
  await expect.element(nameInput).toBeInTheDocument();

  // Clear and fill the name input
  await userEvent.clear(nameInput);
  await userEvent.fill(nameInput, "My Awesome Boulder");

  // 3. Save
  // Both the trigger button and the submit button have the name "Save Boulder".
  // Retrieve all such buttons.
  const submitButton = await getByTestId("test-save-boulder");

  await userEvent.click(submitButton);

  // 4. Verify Local Storage
  const storedData = window.localStorage.getItem("boulderList");
  expect(storedData).not.toBeNull();

  const parsedData = JSON.parse(storedData!);
  expect(parsedData).toHaveLength(1);
  expect(parsedData[0].name).toBe("My Awesome Boulder");
});
