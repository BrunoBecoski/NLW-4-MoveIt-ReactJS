import { createContext, ReactNode, useEffect, useState } from 'react';
import Cookies from 'js-cookie';

import { LoginModal } from '../components/LoginModal';
import { LoginGithubModal } from '../components/LoginGithubModal';
import { useRouter } from 'next/router';

interface UserContextData {
  userName: string;
  userAvatar: string;
  handleInputName: (value: string) => void;
  handleInputAvatar: (url: string) => void;
  closeLoginModal: () => void;
  openLoginModal: () => void;
  closeLoginGithubModal: () => void;
  openLoginGithubModal: () => void;
  createAccount: () => void;
}

interface UserProviderProps {
  children: ReactNode;
  name: string;
  avatar: string;
}

export const UserContext = createContext({} as UserContextData);

export function UserProvider({
  children,
  name,
  avatar,
}: UserProviderProps) {

  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isLoginGithubModalOpen, setIsLoginGithubModalOpen] = useState(false);
  const [userName, setUserName] = useState('');
  const [userAvatar, setUserAvatar] = useState('/icons/logo.svg');

  const router = useRouter()

  useEffect(() => {
    setUserName(name);
    setUserAvatar(avatar);
  }, [])

  function handleInputName(value: string) {
    setUserName(value);
  }

  function handleInputAvatar(url: string) {
    setUserAvatar(url);
  }

  function openLoginModal() {
    setIsLoginModalOpen(true);
  }

  function closeLoginModal() {
    setIsLoginModalOpen(false);
  }

  function openLoginGithubModal() {
    setIsLoginGithubModalOpen(true);
  }

  function closeLoginGithubModal() {
    setIsLoginGithubModalOpen(false);
  }


  function createAccount() {
    Cookies.set('userName', userName);
    Cookies.set('userAvatar', userAvatar);
    if (userAvatar === undefined) {
      Cookies.set('userAvatar', '/icons/logo.svg');
    }

    router.push('/dashboard');
  }

  return (
    <UserContext.Provider
      value={{
        userName,
        userAvatar,
        createAccount,
        openLoginModal,
        closeLoginModal,
        openLoginGithubModal,
        closeLoginGithubModal,
        handleInputName,
        handleInputAvatar,
      }}
    >
      {children}
      { isLoginModalOpen && <LoginModal />}
      { isLoginGithubModalOpen && <LoginGithubModal />}
    </UserContext.Provider>
  )
} 