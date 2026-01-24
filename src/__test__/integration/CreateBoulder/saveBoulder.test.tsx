import CreateBoulder from "@/app/create-boulder/components/CreateBoulder/CreateBoulder";
import "@/app/styles/globals.css";
import { saveBoulderErrors } from "@/features/SaveBoulder/constants/errorsMessages";
import { beforeAll, expect, test, vi } from "vitest";
import { render } from "vitest-browser-react";
import { userEvent } from "vitest/browser";

vi.mock('next/navigation', () => ({
  useRouter: vi.fn(() => ({
    push: vi.fn(),
  })),
}));

vi.mock('@/features/SaveBoulder/actions/saveBoulder', () => ({
  default: vi.fn((_state: unknown, formData: FormData) => {
    const name = formData.get("name") as string;
    const boulderData = formData.get("boulder") as string;
    const boulder = JSON.parse(boulderData);

    const errors: string[] = [];
    const existingBoulders = JSON.parse(window.localStorage.getItem("boulderList") || "[]");

    if (!boulder.start.length) errors.push("Boulder must have a start hold");
    if (!boulder.top.length) errors.push("Boulder must have a top hold");
    if (existingBoulders.some((b: { name: string }) => b.name === name)) {
      errors.push("A boulder with this name already exists");
    }

    if (errors.length) return Promise.resolve({ success: false, errors });

    existingBoulders.push({ name, boulder });
    window.localStorage.setItem("boulderList", JSON.stringify(existingBoulders));
    return Promise.resolve({ success: true });
  }),
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
