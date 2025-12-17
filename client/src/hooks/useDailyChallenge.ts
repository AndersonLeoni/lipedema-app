import { useState, useEffect } from 'react';

export interface Mission {
  id: string;
  name: string;
  description: string;
  points: number;
  icon: string;
  category: 'nutrition' | 'movement' | 'selfcare' | 'bonus';
  completed: boolean;
}

export interface DailyProgress {
  date: string;
  totalPoints: number;
  missions: Mission[];
  level: number;
  cumulativePoints: number;
}

const INITIAL_MISSIONS: Mission[] = [
  {
    id: 'nutrition',
    name: 'Missão Nutrição',
    description: 'Seguir o plano alimentar anti-inflamatório (3 refeições + 2 lanches)',
    points: 50,
    icon: '🥗',
    category: 'nutrition',
    completed: false,
  },
  {
    id: 'movement',
    name: 'Missão Movimento',
    description: 'Completar 30-45 minutos de exercício de baixo impacto',
    points: 50,
    icon: '🏊',
    category: 'movement',
    completed: false,
  },
  {
    id: 'selfcare',
    name: 'Missão Autocuidado',
    description: 'Beber 2L de água E usar compressão OU elevar as pernas',
    points: 25,
    icon: '💧',
    category: 'selfcare',
    completed: false,
  },
  {
    id: 'bonus',
    name: 'Missão Bônus',
    description: 'Experimentar nova receita OU fazer 15min de alongamento',
    points: 25,
    icon: '⭐',
    category: 'bonus',
    completed: false,
  },
];

const LEVEL_THRESHOLDS = [0, 1500, 3000];
const LEVEL_NAMES = ['Lipedema Rookie', 'Lipedema Trainee', 'Lipedema Warrior'];

export function useDailyChallenge() {
  const [dailyProgress, setDailyProgress] = useState<DailyProgress>(() => {
    const today = new Date().toISOString().split('T')[0];
    const stored = localStorage.getItem(`daily-progress-${today}`);
    
    if (stored) {
      return JSON.parse(stored);
    }

    // Recuperar pontos cumulativos do dia anterior
    const allDays = Object.keys(localStorage)
      .filter(key => key.startsWith('daily-progress-'))
      .sort()
      .reverse();

    let cumulativePoints = 0;
    if (allDays.length > 0) {
      const lastDay = JSON.parse(localStorage.getItem(allDays[0]) || '{}');
      cumulativePoints = lastDay.cumulativePoints + lastDay.totalPoints;
    }

    return {
      date: today,
      totalPoints: 0,
      missions: INITIAL_MISSIONS,
      level: calculateLevel(cumulativePoints),
      cumulativePoints,
    };
  });

  useEffect(() => {
    const today = new Date().toISOString().split('T')[0];
    localStorage.setItem(`daily-progress-${today}`, JSON.stringify(dailyProgress));
  }, [dailyProgress]);

  const toggleMission = (missionId: string) => {
    setDailyProgress(prev => {
      const updatedMissions = prev.missions.map(mission =>
        mission.id === missionId
          ? { ...mission, completed: !mission.completed }
          : mission
      );

      const totalPoints = updatedMissions.reduce(
        (sum, mission) => sum + (mission.completed ? mission.points : 0),
        0
      );

      const newCumulativePoints = prev.cumulativePoints + totalPoints - prev.totalPoints;
      const newLevel = calculateLevel(newCumulativePoints);

      return {
        ...prev,
        missions: updatedMissions,
        totalPoints,
        cumulativePoints: newCumulativePoints,
        level: newLevel,
      };
    });
  };

  const getProgressPercentage = () => {
    const maxPoints = 150;
    return Math.min((dailyProgress.totalPoints / maxPoints) * 100, 100);
  };

  const getLevelInfo = () => {
    return {
      name: LEVEL_NAMES[dailyProgress.level],
      threshold: LEVEL_THRESHOLDS[dailyProgress.level],
      nextThreshold: LEVEL_THRESHOLDS[dailyProgress.level + 1] || LEVEL_THRESHOLDS[LEVEL_THRESHOLDS.length - 1],
      pointsToNextLevel: Math.max(0, (LEVEL_THRESHOLDS[dailyProgress.level + 1] || LEVEL_THRESHOLDS[LEVEL_THRESHOLDS.length - 1]) - dailyProgress.cumulativePoints),
    };
  };

  return {
    dailyProgress,
    toggleMission,
    getProgressPercentage,
    getLevelInfo,
  };
}

function calculateLevel(cumulativePoints: number): number {
  if (cumulativePoints >= LEVEL_THRESHOLDS[2]) return 2;
  if (cumulativePoints >= LEVEL_THRESHOLDS[1]) return 1;
  return 0;
}
