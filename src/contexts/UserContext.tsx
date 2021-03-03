import { createContext, ReactNode, useState } from 'react';
import { LoginModal } from '../components/LoginModal';

interface UserContextData {
  closeLoginModal: () => void;
  openLoginModal: () => void;
}

interface UserProviderProps {
  children: ReactNode;
}

export const UserContext = createContext({} as UserContextData);

export function UserProvider({
  children,
}: UserProviderProps) {

  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

  function openLoginModal() {
    setIsLoginModalOpen(true);
  }

  function closeLoginModal() {
    setIsLoginModalOpen(false);
  }


  return (
    <UserContext.Provider
      value={{
        openLoginModal,
        closeLoginModal,
      }}
    >
      {children}
      { isLoginModalOpen && <LoginModal />}
    </UserContext.Provider>
  )
} 