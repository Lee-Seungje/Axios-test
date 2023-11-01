import { create } from "zustand";

export const useAgeState = create((set) => ({
  age: "",
  setAge: (value) => set({ age: value }),
}));
