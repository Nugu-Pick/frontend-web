import { renderWithProviders, screen } from "@/shared/test";
import { ExampleQuery } from "./example-query";

describe("ExampleQuery", () => {
  it("shows the loading state, then the resolved message", async () => {
    renderWithProviders(<ExampleQuery />);

    expect(screen.getByText("loading…")).toBeInTheDocument();

    expect(await screen.findByText("TanStack Query is working")).toBeInTheDocument();
  });
});
