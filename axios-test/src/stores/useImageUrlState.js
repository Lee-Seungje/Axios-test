import { create } from "zustand";

export const useImageUrlState = create((set) => ({
  imageUrl: "",
  setImageUrl: (value) => set({ image: value }),
}));
