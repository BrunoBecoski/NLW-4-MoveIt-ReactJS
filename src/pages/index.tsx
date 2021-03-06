import { GetServerSideProps } from 'next';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

import { Login } from '../components/Login';
import { UserProvider } from '../contexts/UserContext';

interface HomeProps {
  hasUser: boolean;
}

export default function Home(props: HomeProps) {
  const router = useRouter();

  useEffect(() => {
    if (props.hasUser === true) {
      router.push('/dashboard');
    }
  }, [props])

  return (
    <UserProvider>
      <Login />
    </UserProvider>
  )
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const cookies = await ctx.req.cookies;

  if (cookies.userName) {
    return {
      props: {
        hasUser: true,
      }
    }
  } else {
    return {
      props: {
        hasUser: false,
      }
    }
  }
}