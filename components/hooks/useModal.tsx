import { create } from 'zustand'

interface ModalStore {
  isOpen: boolean
  openModal: () => void
  closeModal: () => void
  setModalOpen: (isOpen: boolean) => void
}

export const useModalStore = create<ModalStore>((set) => ({
  isOpen: false,
  openModal: () => set({ isOpen: true }),
  closeModal: () => set({ isOpen: false }),
  setModalOpen: (isOpen) => set({ isOpen })
}))