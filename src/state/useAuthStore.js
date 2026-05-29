import { create } from "zustand";
import { devtools } from "zustand/middleware";

const initialState = {
  currentUser: null,
  userData: {},
  userPosts: [],
};

const useAuthStore = create()(
  devtools(
    (set) => ({
      ...initialState,
      setCurrentUser: (currentUser) => set({ currentUser }, false, "auth/setCurrentUser"),
      clearCurrentUser: () =>
        set(
          {
            currentUser: null,
            userData: {},
          },
          false,
          "auth/clearCurrentUser"
        ),
      setUserData: (userData) => set({ userData }, false, "auth/setUserData"),
      setUserPosts: (userPosts) => set({ userPosts }, false, "auth/setUserPosts"),
      resetAuth: () => set(initialState, false, "auth/resetAuth"),
    }),
    { name: "auth-store" }
  )
);

export default useAuthStore;
