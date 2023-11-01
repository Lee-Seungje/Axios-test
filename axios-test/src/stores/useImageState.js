import { create } from "zustand";

export const useImageState = create((set) => ({
  image: null,
  setImage: (value) => set({ image: value }),
}));
