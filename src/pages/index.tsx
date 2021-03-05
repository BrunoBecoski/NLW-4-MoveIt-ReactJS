import { GetServerSideProps } from 'next';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

import { Login } from '../components/Login';
import { UserProvider } from '../contexts/UserContext';

interface HomeProps {
  userName: string | null;
}

export default function Home(props: HomeProps) {
  const router = useRouter();

  useEffect(() => {
    if (!props.userName === null) {
      router.push('/dashboard');
    }
  }, [props]);

  return (
    <UserProvider>
      <Login />
    </UserProvider>
  )


}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const cookies = ctx.req.cookies;

  if (cookies.userName) {
    return {
      props: {
        userName: cookies.userName,
      }
    }
  } else {
    return {
      props: {
        userName: null,
      }
    }
  }
}