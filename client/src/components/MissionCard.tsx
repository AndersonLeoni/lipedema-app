import { Checkbox } from '@/components/ui/checkbox';
import { Card } from '@/components/ui/card';
import { Mission } from '@/hooks/useDailyChallenge';
import { motion } from 'framer-motion';

interface MissionCardProps {
  mission: Mission;
  onToggle: (missionId: string) => void;
}

export function MissionCard({ mission, onToggle }: MissionCardProps) {
  const categoryColors = {
    nutrition: 'from-green-400 to-emerald-600',
    movement: 'from-blue-400 to-cyan-600',
    selfcare: 'from-purple-400 to-pink-600',
    bonus: 'from-amber-400 to-orange-600',
  };

  const categoryLabels = {
    nutrition: '🥗 Nutrição',
    movement: '🏊 Movimento',
    selfcare: '💧 Autocuidado',
    bonus: '⭐ Bônus',
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <Card
        className={`mission-card cursor-pointer transition-all ${
          mission.completed ? 'completed' : ''
        }`}
        onClick={() => onToggle(mission.id)}
      >
        <div className="flex items-start gap-4">
          <div className="flex-shrink-0 pt-1">
            <Checkbox
              checked={mission.completed}
              onChange={() => {}}
              className="h-6 w-6 cursor-pointer"
            />
          </div>

          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-2xl">{mission.icon}</span>
              <h3 className="font-semibold text-lg text-card-foreground">
                {mission.name}
              </h3>
            </div>

            <p className="text-sm text-muted-foreground mb-3">
              {mission.description}
            </p>

            <div className="flex items-center justify-between">
              <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold bg-gradient-to-r ${categoryColors[mission.category]} text-white`}>
                {categoryLabels[mission.category]}
              </span>

              <div className="points-badge">
                <span>+{mission.points} pts</span>
              </div>
            </div>
          </div>

          {mission.completed && (
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: 'spring', stiffness: 200 }}
              className="flex-shrink-0"
            >
              <div className="h-8 w-8 rounded-full bg-accent flex items-center justify-center text-white font-bold">
                ✓
              </div>
            </motion.div>
          )}
        </div>
      </Card>
    </motion.div>
  );
}
