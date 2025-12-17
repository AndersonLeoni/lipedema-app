import { useDailyChallenge } from '@/hooks/useDailyChallenge';
import { MissionCard } from '@/components/MissionCard';
import { ProgressPanel } from '@/components/ProgressPanel';
import { motion } from 'framer-motion';

export default function Home() {
  const { dailyProgress, toggleMission, getProgressPercentage, getLevelInfo } =
    useDailyChallenge();

  const progressPercentage = getProgressPercentage();
  const levelInfo = getLevelInfo();

  const today = new Date();
  const formattedDate = today.toLocaleDateString('pt-BR', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-gradient-to-r from-accent to-secondary text-white py-8 px-4 shadow-lg"
      >
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-4xl">🎯</span>
            <h1 className="text-3xl md:text-4xl font-bold">Desafio Lipedema</h1>
          </div>
          <p className="text-accent-foreground/90 text-sm md:text-base">
            Sua jornada para uma vida sem dor e inchaço
          </p>
          <p className="text-accent-foreground/70 text-xs md:text-sm mt-2">
            {formattedDate}
          </p>
        </div>
      </motion.header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Missions */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-2"
          >
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-card-foreground mb-6">
                Suas Missões de Hoje
              </h2>

              <div className="space-y-4">
                {dailyProgress.missions.map((mission, index) => (
                  <motion.div
                    key={mission.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                  >
                    <MissionCard
                      mission={mission}
                      onToggle={toggleMission}
                    />
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Motivational Section */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="bg-gradient-to-br from-secondary/20 to-accent/20 rounded-2xl p-6 border border-secondary/30"
            >
              <h3 className="font-bold text-card-foreground mb-3 flex items-center gap-2">
                <span>💡</span> Dica do Dia
              </h3>
              <p className="text-sm text-card-foreground leading-relaxed">
                Lembre-se: a consistência é a chave! Pequenas mudanças diárias
                levam a grandes resultados. Você está no controle da sua saúde.
              </p>
            </motion.div>
          </motion.div>

          {/* Right Column - Progress */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-1"
          >
            <div className="sticky top-8">
              <ProgressPanel
                dailyProgress={dailyProgress}
                progressPercentage={progressPercentage}
                levelInfo={levelInfo}
              />
            </div>
          </motion.div>
        </div>
      </main>

      {/* Footer */}
      <motion.footer
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="bg-card border-t border-border mt-16 py-8 px-4"
      >
        <div className="max-w-6xl mx-auto text-center text-sm text-muted-foreground">
          <p>
            Este aplicativo é um guia de apoio e não substitui o acompanhamento
            médico especializado.
          </p>
          <p className="mt-2">
            Consulte sempre um angiologista, nutricionista ou educador físico.
          </p>
        </div>
      </motion.footer>
    </div>
  );
}
