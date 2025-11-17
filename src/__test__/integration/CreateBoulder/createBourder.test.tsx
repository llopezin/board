import CreationBoard from "@/app/features/CreateBoulder/CreationBoard";
import { expect, test } from "vitest";
import { render } from "vitest-browser-react";
import { userEvent } from "vitest/browser";
import "@/app/globals.css";
import holdStyles from "@/app/components/Board/styles";

test("Create boulder: First click sets hold as start", async () => {
  const { getByTestId } = await render(<CreationBoard />);

  await expect.element(getByTestId("test-hold")).toBeInTheDocument();
  await userEvent.click(getByTestId("test-hold"));

  for (const className of holdStyles.start) {
    await expect.element(getByTestId("test-hold")).toHaveClass(className);
  }
});

test("Create boulder: Second click toggles hold off", async () => {
  const { getByTestId } = await render(<CreationBoard />);

  await userEvent.click(getByTestId("test-hold"));

  for (const className of holdStyles.start) {
    await expect.element(getByTestId("test-hold")).not.toHaveClass(className);
  }
});

test("Create boulder: Two first clicked holds are set as start", async () => {
  const { getByTestId } = await render(<CreationBoard />);

  await userEvent.click(getByTestId("test-hold"));
  await userEvent.click(getByTestId("test-hold-1"));

  for (const className of holdStyles.start) {
    await expect.element(getByTestId("test-hold")).toHaveClass(className);
    await expect.element(getByTestId("test-hold-1")).toHaveClass(className);
  }
});

test("Create boulder: Third clicked hold is set as hand", async () => {
  const { getByTestId } = await render(<CreationBoard />);

  await userEvent.click(getByTestId("test-hold-2"));

  for (const className of holdStyles.hand) {
    await expect.element(getByTestId("test-hold-2")).toHaveClass(className);
  }
});

test("Create boulder: If a third top hold is clicked, first one is turned off", async () => {
  const { getByTestId, getByText } = await render(<CreationBoard />);

  await userEvent.click(getByText("top"));
  await userEvent.click(getByTestId("test-top"));

  for (const className of holdStyles.top) {
    await expect.element(getByTestId("test-top")).toHaveClass(className);
  }

  await userEvent.click(getByTestId("test-top-1"));
  await userEvent.click(getByTestId("test-top-2"));

  for (const className of holdStyles.top) {
    await expect.element(getByTestId("test-top")).not.toHaveClass(className);
    await expect.element(getByTestId("test-top-1")).toHaveClass(className);
    await expect.element(getByTestId("test-top-2")).toHaveClass(className);
  }
});
