import { act } from "react";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { vi } from "vitest";
import App from "./App";
import useAuthStore from "./state/useAuthStore";

describe("App shell", () => {
  it("renders the shared navigation after the splash screen", async () => {
    vi.useFakeTimers();
    useAuthStore.setState({
      currentUser: null,
      userData: {},
      userPosts: [],
    });

    render(
      <MemoryRouter
        initialEntries={["/"]}
        future={{
          v7_startTransition: true,
          v7_relativeSplatPath: true,
        }}
      >
        <App />
      </MemoryRouter>
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
