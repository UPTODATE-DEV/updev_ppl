import { createContext } from "react";

interface Modal {
  isOpen: boolean;
  toggle: () => void;
}

export const ModalContext = createContext<Modal | null>(null);

export default function Modal() {
  return <div>index</div>;
}
