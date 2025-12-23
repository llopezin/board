import { expect, test, beforeAll, vi } from "vitest";
import { render } from "vitest-browser-react";
import { userEvent } from "vitest/browser";
import "@/app/styles/globals.css";
import CreateBoulder from "@/app/(create-boulder)/components/CreateBoulder/CreateBoulder";

vi.mock('next/navigation', () => ({
  useRouter: vi.fn(() => ({
    push: vi.fn(),
  })),
}));

beforeAll(() => {
  const modalRoot = document.createElement("div");
  modalRoot.setAttribute("id", "modal-root");
  document.body.appendChild(modalRoot);
});

test("Save boulder: User can open save modal and save a boulder", async () => {
  window.localStorage.clear();

  const { getByRole, getByLabelText, getByTestId } = await render(<CreateBoulder />);

  const trigger = getByRole("button", { name: "Save Boulder" });

  await expect.element(trigger).toBeInTheDocument();
  await userEvent.click(trigger);

  const nameInput = getByLabelText("Name");
  await expect.element(nameInput).toBeInTheDocument();
  await userEvent.clear(nameInput);
  await userEvent.fill(nameInput, "My Awesome Boulder");
  const submitButton = await getByTestId("test-save-boulder");

  await userEvent.click(submitButton);

  const storedData = window.localStorage.getItem("boulderList");
  expect(storedData).not.toBeNull();

  const parsedData = JSON.parse(storedData!);
  expect(parsedData).toHaveLength(1);
  expect(parsedData[0].name).toBe("My Awesome Boulder");
});
