import { create } from "zustand";

interface DemoAppState {
  bears: number;
  username: string;
  set: (data: Partial<DemoAppState>) => void;
}

export const useAppState = create<DemoAppState>()((set) => ({
  bears: 0,
  username: "",
  set,
}));
