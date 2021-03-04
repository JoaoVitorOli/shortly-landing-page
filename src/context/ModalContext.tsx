import React, { createContext, ReactNode, useState } from "react";
import ModalMenuMobile from "../components/ModalMenuMobile";

interface ModalContextData {
  isModalHamOpen: boolean,
  openModalHam: () => void,
  closeModalHam: () => void
}

interface ModalProviderProps {
  children: ReactNode;
}

export const ModalContext = createContext({} as ModalContextData);

export function ModalProvider({ children }: ModalProviderProps) {
  const [isModalHamOpen, setIsModalHamOpen] = useState(false);

  function openModalHam() {
    setIsModalHamOpen(true);
    console.log("clickado");
  }

  function closeModalHam() {
    setIsModalHamOpen(false);
    console.log("clickado");
  }

  return(
    <ModalContext.Provider
      value={{
        isModalHamOpen,
        openModalHam,
        closeModalHam
      }}
    >
      {children}

      { isModalHamOpen && <ModalMenuMobile /> }
    </ModalContext.Provider>
  );
}