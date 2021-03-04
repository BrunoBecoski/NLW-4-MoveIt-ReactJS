import { createContext, ReactNode, useState } from 'react';
import { LoginModal } from '../components/LoginModal';

interface UserContextData {
  profileName: string;
  profileImage: string;
  profile: boolean;
  handleInputValue: (value: string) => void;
  handleImageProfile: (url: string) => void;
  closeLoginModal: () => void;
  openLoginModal: () => void;
  createAccount: () => void;
}

interface UserProviderProps {
  children: ReactNode;
}

export const UserContext = createContext({} as UserContextData);

export function UserProvider({
  children,
}: UserProviderProps) {

  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [profileName, setprofileName] = useState('');
  const [profileImage, setProfileImage] = useState('/icons/logo.svg');
  const [profile, setProfile] = useState(false);

  function handleInputValue(value: string) {
    setprofileName(value);
  }

  function handleImageProfile(url: string) {
    setProfileImage(url);
  }

  function openLoginModal() {
    setIsLoginModalOpen(true);
  }

  function closeLoginModal() {
    setIsLoginModalOpen(false);
  }

  function createAccount() {
    setProfile(false);
  }

  return (
    <UserContext.Provider
      value={{
        profile,
        profileName,
        profileImage,
        handleInputValue,
        handleImageProfile,
        openLoginModal,
        closeLoginModal,
        createAccount,
      }}
    >
      {children}
      { isLoginModalOpen && <LoginModal />}
    </UserContext.Provider>
  )
} 