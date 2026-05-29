import { act } from "react";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { vi } from "vitest";
import App from "./App";
import store from "./globalState/store";

describe("App shell", () => {
  it("renders the shared navigation after the splash screen", async () => {
    vi.useFakeTimers();

    render(
      <Provider store={store}>
        <MemoryRouter
          initialEntries={["/"]}
          future={{
            v7_startTransition: true,
            v7_relativeSplatPath: true,
          }}
        >
          <App />
        </MemoryRouter>
      </Provider>
    );

    await act(async () => {
      vi.advanceTimersByTime(1500);
    });

    expect(
      screen.getByRole("heading", {
        name: /the cleanest way to launch your next mobile-first web project/i,
      })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("link", { name: /web mobile template/i })
    ).toBeInTheDocument();

    vi.useRealTimers();
  });
});
