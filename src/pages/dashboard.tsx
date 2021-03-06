import { GetServerSideProps } from 'next';
import Head from 'next/head';

import { CompletedChallenges } from '../components/CompletedChallenges';
import { Countdown } from '../components/Countdown';
import { ExperienceBar } from "../components/ExperienceBar";
import { Profile } from '../components/Profile';
import { ChallengeBox } from '../components/ChallengeBox';

import styles from '../styles/pages/Home.module.css';
import { CountdownProvider } from '../contexts/CountdownContext';
import { ChallengesProvider } from '../contexts/ChallengesContext';
import { UserProvider } from '../contexts/UserContext';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

interface DashboardProps {
  hasUser: boolean;
  userName: string;
  userAvatar: string;
  level: number;
  currentExperience: number;
  challengesCompleted: number;
}


export default function Dashboard(props: DashboardProps) {

  const router = useRouter();

  useEffect(() => {
    if (props.hasUser === true) {
      router.push('/');
    }
  }, [props])


  return (
    <UserProvider
      name={props.userName}
      avatar={props.userAvatar}
    >
      <ChallengesProvider
        level={props.level}
        currentExperience={props.currentExperience}
        challengesCompleted={props.challengesCompleted}
      >

        <div className={styles.container}>
          <Head>
            <title>Dashboard | move.it</title>
          </Head>

          <ExperienceBar />

          <CountdownProvider>
            <section>
              <div>
                <Profile />
                <CompletedChallenges />
                <Countdown />
              </div>
              <div>
                <ChallengeBox />
              </div>
            </section>
          </CountdownProvider>
        </div>

      </ChallengesProvider>
    </UserProvider>
  )
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const cookies = ctx.req.cookies;

  if (!cookies.userName) {
    return {
      props: {
        hasUser: true,
      }
    }
  } else {
    return {
      props: {
        userName: cookies.userName,
        userAvatar: cookies.userAvatar,
        level: Number(cookies.level),
        currentExperience: Number(cookies.currentExperience),
        challengesCompleted: Number(cookies.challengesCompleted),
      }
    }
  }
}