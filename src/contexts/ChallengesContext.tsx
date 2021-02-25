import { createContext, ReactNode, useEffect, useState } from 'react';
import challenges from '../../challenges.json';

interface challenge {
  type: 'body' | 'eye';
  description: string;
  amount: number;
}

interface ChallengesContextData {
  level: number;
  currentExperience: number;
  challengedCompleted: number;
  activeChallenge: challenge;
  experienceToNextLevel: number;
  levelUp: () => void;
  startNewChallenge: () => void;
  resetChallenge: () => void;
  completeChallenge: () => void;
  
}

interface ChallengesProviderProps {
  children: ReactNode;
}

export const ChallengesContext = createContext({} as ChallengesContextData);

export function ChallengesProvider({ children }: ChallengesProviderProps) {
  const [level, setLevel] = useState(1);
  const [currentExperience, setcurrentExperience] = useState(0);
  const [challengedCompleted, setchallengedCompleted] = useState(0);

  const [activeChallenge, setActiveChallenge] = useState(null);

  const experienceToNextLevel = Math.pow((level + 1) * 4, 2)

  function levelUp() {
    setLevel(level + 1);
  }

  useEffect(() => {
    Notification.requestPermission();
  }, [])

  function startNewChallenge() {
    const randomChallengeIndex = Math.floor(Math.random() * challenges.length)

    const challenge = challenges[randomChallengeIndex];
    setActiveChallenge(challenge)

    new Audio('/notification.mp3').play();

    if(Notification.permission ==='granted') {
      new Notification('Novo desafio', {
        body: `Valendo ${challenge.amount}xp!`
      })
    }
  }

  function resetChallenge() {
    setActiveChallenge(null)
  }

  function completeChallenge() {
    if(!activeChallenge) {
      return;
    }

    const { amount } = activeChallenge;

    let finalExperience = currentExperience + amount;

    if(finalExperience >= experienceToNextLevel) {
      finalExperience = finalExperience - experienceToNextLevel;
      levelUp()
    }

    setcurrentExperience(finalExperience);
    setActiveChallenge(null);
    setchallengedCompleted(challengedCompleted + 1)
  }

  return (
    <ChallengesContext.Provider
      value={{
        level,
        currentExperience,
        challengedCompleted,
        experienceToNextLevel,
        levelUp,
        startNewChallenge,
        resetChallenge,
        activeChallenge,
        completeChallenge
        
      }}
    >
      {children}
    </ChallengesContext.Provider>
  );
}
