import { create } from "zustand";

export const useGenderState = create((set) => ({
  gender: "",
  setGender: (value) => set({ gender: value }),
}));
