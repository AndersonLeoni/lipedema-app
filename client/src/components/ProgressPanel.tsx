import { motion } from 'framer-motion';
import { DailyProgress } from '@/hooks/useDailyChallenge';

interface ProgressPanelProps {
  dailyProgress: DailyProgress;
  progressPercentage: number;
  levelInfo: {
    name: string;
    threshold: number;
    nextThreshold: number;
    pointsToNextLevel: number;
  };
}

export function ProgressPanel({
  dailyProgress,
  progressPercentage,
  levelInfo,
}: ProgressPanelProps) {
  const levelColors = [
    'from-blue-400 to-blue-600',
    'from-purple-400 to-purple-600',
    'from-amber-400 to-orange-600',
  ];

  return (
    <div className="space-y-6">
      {/* Level Badge */}
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="flex justify-center"
      >
        <div
          className={`level-badge bg-gradient-to-br ${levelColors[dailyProgress.level]}`}
        >
          <div className="text-center">
            <div className="text-2xl font-bold">Nv.</div>
            <div className="text-3xl font-bold">{dailyProgress.level + 1}</div>
          </div>
        </div>
      </motion.div>

      {/* Level Name and Description */}
      <div className="text-center">
        <h2 className="text-2xl font-bold text-card-foreground mb-2">
          {levelInfo.name}
        </h2>
        <p className="text-sm text-muted-foreground">
          {dailyProgress.level === 2
            ? 'Você é uma guerreira do lipedema! Continue assim!'
            : `Faltam ${levelInfo.pointsToNextLevel} pontos para o próximo nível`}
        </p>
      </div>

      {/* Daily Progress */}
      <div className="bg-card rounded-2xl p-6 border border-border">
        <div className="flex justify-between items-center mb-4">
          <h3 className="font-semibold text-card-foreground">Progresso Diário</h3>
          <span className="points-badge">
            {dailyProgress.totalPoints}/150 pts
          </span>
        </div>

        <div className="progress-bar">
          <motion.div
            className="progress-fill"
            initial={{ width: 0 }}
            animate={{ width: `${progressPercentage}%` }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          />
        </div>

        <p className="text-xs text-muted-foreground mt-3">
          {progressPercentage === 100
            ? '🎉 Parabéns! Você completou todas as missões de hoje!'
            : `${Math.round(progressPercentage)}% do desafio diário concluído`}
        </p>
      </div>

      {/* Cumulative Progress */}
      <div className="bg-card rounded-2xl p-6 border border-border">
        <div className="flex justify-between items-center mb-4">
          <h3 className="font-semibold text-card-foreground">Pontos Totais</h3>
          <span className="points-badge">
            {dailyProgress.cumulativePoints} pts
          </span>
        </div>

        <div className="space-y-2">
          <div className="flex justify-between text-xs text-muted-foreground">
            <span>Nível {dailyProgress.level + 1}</span>
            <span>Nível {dailyProgress.level + 2}</span>
          </div>
          <div className="progress-bar">
            <motion.div
              className="progress-fill"
              initial={{ width: 0 }}
              animate={{
                width: `${
                  ((dailyProgress.cumulativePoints - levelInfo.threshold) /
                    (levelInfo.nextThreshold - levelInfo.threshold)) *
                  100
                }%`
              }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
            />
          </div>
        </div>
      </div>

      {/* Motivational Message */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="bg-gradient-to-r from-accent/10 to-secondary/10 rounded-2xl p-4 border border-accent/20"
      >
        <p className="text-sm text-card-foreground text-center font-medium">
          💪 Cada missão completa é um passo para uma vida sem dor e inchaço!
        </p>
      </motion.div>
    </div>
  );
}
