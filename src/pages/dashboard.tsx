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

interface DashboardProps {
  userName: string;
  userAvatar: string;
  level: number;
  currentExperience: number;
  challengesCompleted: number;
}


export default function Dashboard(props: DashboardProps) {

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
  const {
    userName,
    userAvatar,
    level,
    currentExperience,
    challengesCompleted
  } = ctx.req.cookies;

  return {
    props: {
      userName,
      userAvatar,
      level: Number(level),
      currentExperience: Number(currentExperience),
      challengesCompleted: Number(challengesCompleted),
    }
  }
}