import { expect, test, beforeAll, vi } from "vitest";
import { render } from "vitest-browser-react";
import { userEvent } from "vitest/browser";
import "@/app/styles/globals.css";
import CreateBoulder from "@/app/create-boulder/components/CreateBoulder/CreateBoulder";
import { saveBoulderErrors } from "@/features/SaveBoulder/constants/errorsMessages";

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

  const { getByRole, getByLabelText, getByTestId, getByTitle } = await render(<CreateBoulder />);

  await userEvent.click(getByTestId("test-hold"));
  await userEvent.click(getByTitle("top"));
  await userEvent.click(getByTestId("test-top"));

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

test("Save boulder: User gets an error message if name already exists", async () => {
  const { getByRole, getByLabelText, getByTestId, getByText } = await render(<CreateBoulder />);

  const trigger = getByRole("button", { name: "Save Boulder" });

  await userEvent.click(trigger);

  const nameInput = getByLabelText("Name");
  await userEvent.clear(nameInput);
  await userEvent.fill(nameInput, "My Awesome Boulder");
  const submitButton = await getByTestId("test-save-boulder");

  await userEvent.click(submitButton);

  await expect.element(getByText(saveBoulderErrors.nameExists)).toBeInTheDocument();
});

test("Save boulder: User gets an error message if no start or top holds are set", async () => {
  const { getByRole, getByLabelText, getByTestId, getByText, getByTitle } = await render(<CreateBoulder />);

  const clearButton = getByTitle("clear boulder");
  await userEvent.click(clearButton);

  const trigger = getByRole("button", { name: "Save Boulder" });
  await userEvent.click(trigger);

  const nameInput = getByLabelText("Name");
  await userEvent.clear(nameInput);
  await userEvent.fill(nameInput, "Test");
  const submitButton = await getByTestId("test-save-boulder");

  await userEvent.click(submitButton);

  await expect.element(getByText(saveBoulderErrors.noStartHold)).toBeInTheDocument();
  await expect.element(getByText(saveBoulderErrors.noTopHold)).toBeInTheDocument();
});
