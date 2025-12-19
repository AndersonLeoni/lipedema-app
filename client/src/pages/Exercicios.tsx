import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

interface Exercise {
  name: string;
  description: string;
  duration: string;
  reps?: string;
  icon: string;
  benefits: string[];
  instructions: string[];
}

interface WorkoutPlan {
  day: string;
  focus: string;
  type: 'cardio' | 'strength' | 'specific';
  exercises: Exercise[];
  totalDuration: string;
}

const WEEKLY_WORKOUT: WorkoutPlan[] = [
  {
    day: 'Segunda-feira',
    focus: 'Fortalecimento (Membros Superiores)',
    type: 'strength',
    totalDuration: '45 minutos',
    exercises: [
      {
        name: 'Aquecimento Dinâmico',
        description: 'Preparar o corpo para o treino',
        duration: '5 min',
        icon: '🔥',
        benefits: ['Aumento de frequência cardíaca', 'Preparação muscular'],
        instructions: [
          'Rotação de ombros (10 repetições)',
          'Círculos com os braços (10 repetições)',
          'Alongamento dinâmico dos ombros',
        ],
      },
      {
        name: 'Rosca Direta com Halteres',
        description: 'Fortalecimento dos bíceps',
        duration: '3 séries x 12 repetições',
        reps: '3x12',
        icon: '💪',
        benefits: ['Fortalecimento de braços', 'Ativação muscular'],
        instructions: [
          'De pé, com halteres nas mãos (peso leve)',
          'Flexione os cotovelos trazendo os halteres até os ombros',
          'Abaixe lentamente até a posição inicial',
          'Mantenha o ritmo constante',
        ],
      },
      {
        name: 'Rosca Inversa',
        description: 'Fortalecimento dos tríceps',
        duration: '3 séries x 12 repetições',
        reps: '3x12',
        icon: '💪',
        benefits: ['Fortalecimento de tríceps', 'Tonificação'],
        instructions: [
          'De pé, com halteres nas mãos com as palmas viradas para baixo',
          'Flexione os cotovelos trazendo os halteres até os ombros',
          'Abaixe lentamente até a posição inicial',
        ],
      },
      {
        name: 'Elevação Lateral de Ombros',
        description: 'Fortalecimento dos deltoides',
        duration: '3 séries x 12 repetições',
        reps: '3x12',
        icon: '🏋️',
        benefits: ['Fortalecimento de ombros', 'Melhora de postura'],
        instructions: [
          'De pé, com halteres nas mãos ao lado do corpo',
          'Eleve os halteres até a altura dos ombros',
          'Abaixe lentamente até a posição inicial',
        ],
      },
      {
        name: 'Prancha',
        description: 'Fortalecimento do core',
        duration: '3 séries x 30-45 segundos',
        reps: '3x30-45s',
        icon: '🏋️',
        benefits: ['Fortalecimento de core', 'Estabilidade'],
        instructions: [
          'Posição de prancha com antebraços no chão',
          'Mantenha o corpo alinhado da cabeça aos pés',
          'Respire normalmente',
          'Descanse 30 segundos entre as séries',
        ],
      },
    ],
  },
  {
    day: 'Terça-feira',
    focus: 'Cardio e Drenagem Linfática',
    type: 'cardio',
    totalDuration: '40 minutos',
    exercises: [
      {
        name: 'Natação',
        description: 'Melhor exercício para drenagem linfática',
        duration: '30-40 minutos',
        icon: '🏊',
        benefits: ['Drenagem linfática', 'Baixo impacto', 'Cardio efetivo'],
        instructions: [
          'Comece com 5 minutos de aquecimento leve',
          'Alterne entre diferentes nados (crawl, costas, peito)',
          'Mantenha um ritmo confortável e constante',
          'Termine com 5 minutos de desaquecimento',
        ],
      },
      {
        name: 'Hidroginástica (Alternativa)',
        description: 'Se não tiver acesso à piscina',
        duration: '30-40 minutos',
        icon: '🌊',
        benefits: ['Pressão da água', 'Drenagem', 'Movimento suave'],
        instructions: [
          'Movimentos de caminhada na água (cintura)',
          'Movimentos de perna (elevação e flexão)',
          'Movimentos de braço com resistência da água',
          'Alongamento na água ao final',
        ],
      },
    ],
  },
  {
    day: 'Quarta-feira',
    focus: 'Fortalecimento (Membros Inferiores)',
    type: 'strength',
    totalDuration: '45 minutos',
    exercises: [
      {
        name: 'Aquecimento',
        description: 'Preparação para treino de pernas',
        duration: '5 min',
        icon: '🔥',
        benefits: ['Aquecimento muscular', 'Preparação'],
        instructions: [
          'Caminhada leve no local',
          'Rotação de quadril',
          'Alongamento dinâmico de pernas',
        ],
      },
      {
        name: 'Agachamento Livre',
        description: 'Fortalecimento de pernas e glúteos',
        duration: '3 séries x 12 repetições',
        reps: '3x12',
        icon: '🦵',
        benefits: ['Fortalecimento de pernas', 'Ativação da bomba muscular'],
        instructions: [
          'De pé, pés na largura dos ombros',
          'Flexione os joelhos como se fosse sentar',
          'Mantenha o peito ereto',
          'Retorne à posição inicial',
        ],
      },
      {
        name: 'Elevação de Calcanhares',
        description: 'Fortalecimento da panturrilha (bomba muscular)',
        duration: '3 séries x 15 repetições',
        reps: '3x15',
        icon: '🦵',
        benefits: ['Ativação da panturrilha', 'Drenagem linfática'],
        instructions: [
          'De pé, apoiado em uma parede ou cadeira',
          'Eleve os calcanhares ficando na ponta dos pés',
          'Abaixe lentamente até a posição inicial',
          'Mantenha o ritmo constante',
        ],
      },
      {
        name: 'Leg Press (ou Agachamento na Parede)',
        description: 'Fortalecimento de coxas',
        duration: '3 séries x 12 repetições',
        reps: '3x12',
        icon: '🦵',
        benefits: ['Fortalecimento de coxas', 'Tonificação'],
        instructions: [
          'Costas contra a parede',
          'Deslize para baixo até formar um ângulo de 90 graus',
          'Mantenha a posição por 2-3 segundos',
          'Retorne à posição inicial',
        ],
      },
      {
        name: 'Alongamento de Pernas',
        description: 'Recuperação e flexibilidade',
        duration: '5 min',
        icon: '🧘',
        benefits: ['Flexibilidade', 'Recuperação'],
        instructions: [
          'Alongamento de quadríceps (cada perna)',
          'Alongamento de isquiotibial',
          'Alongamento de panturrilha',
        ],
      },
    ],
  },
  {
    day: 'Quinta-feira',
    focus: 'Cardio de Baixo Impacto',
    type: 'cardio',
    totalDuration: '30 minutos',
    exercises: [
      {
        name: 'Bicicleta Ergométrica',
        description: 'Cardio efetivo e seguro para lipedema',
        duration: '30 minutos',
        icon: '🚴',
        benefits: ['Ativação da panturrilha', 'Cardio seguro', 'Drenagem'],
        instructions: [
          'Ajuste o assento para que o joelho fique ligeiramente flexionado',
          'Comece com intensidade leve (5 min)',
          'Aumente gradualmente a intensidade',
          'Mantenha um ritmo confortável',
          'Termine com 5 minutos de desaquecimento',
        ],
      },
      {
        name: 'Caminhada Rápida (Alternativa)',
        description: 'Se não tiver acesso à bicicleta',
        duration: '30 minutos',
        icon: '🚶',
        benefits: ['Cardio acessível', 'Ativação muscular'],
        instructions: [
          'Comece com 5 minutos de caminhada leve',
          'Aumente o ritmo para uma caminhada rápida',
          'Mantenha os braços em movimento',
          'Termine com 5 minutos de desaquecimento',
        ],
      },
    ],
  },
  {
    day: 'Sexta-feira',
    focus: 'Exercícios Específicos e Drenagem',
    type: 'specific',
    totalDuration: '30 minutos',
    exercises: [
      {
        name: 'Elevação das Pernas Contra a Parede',
        description: 'Drenagem linfática passiva',
        duration: '10-15 minutos',
        icon: '🦵',
        benefits: ['Drenagem linfática', 'Redução de inchaço', 'Relaxamento'],
        instructions: [
          'Deite-se no chão com as pernas elevadas contra a parede',
          'Mantenha as pernas retas',
          'Relaxe completamente',
          'Faça respirações profundas',
        ],
      },
      {
        name: 'Bicicleta no Ar',
        description: 'Ativação da panturrilha e drenagem',
        duration: '5 minutos',
        icon: '🚴',
        benefits: ['Ativação da panturrilha', 'Drenagem ativa'],
        instructions: [
          'Deite-se no chão',
          'Eleve as pernas e simule o movimento de pedalar',
          'Mantenha um ritmo constante',
          'Faça movimentos suaves',
        ],
      },
      {
        name: 'Compressão e Relaxamento de Pernas',
        description: 'Bomba linfática ativa',
        duration: '5 minutos',
        icon: '💪',
        benefits: ['Ativação da bomba linfática', 'Drenagem'],
        instructions: [
          'Deitado, flexione e estenda os pés repetidamente',
          'Faça movimentos lentos e controlados',
          'Mantenha o ritmo constante',
          'Sinta a ativação da panturrilha',
        ],
      },
      {
        name: 'Alongamento Completo',
        description: 'Recuperação e flexibilidade',
        duration: '5 minutos',
        icon: '🧘',
        benefits: ['Flexibilidade', 'Recuperação', 'Relaxamento'],
        instructions: [
          'Alongamento de pernas (quadríceps, isquiotibial, panturrilha)',
          'Alongamento de costas',
          'Alongamento de braços',
          'Respiração profunda durante todo o alongamento',
        ],
      },
    ],
  },
  {
    day: 'Sábado',
    focus: 'Atividade Prazerosa',
    type: 'cardio',
    totalDuration: '60 minutos',
    exercises: [
      {
        name: 'Yoga ou Pilates',
        description: 'Movimento leve e relaxante',
        duration: '60 minutos',
        icon: '🧘',
        benefits: ['Flexibilidade', 'Força', 'Relaxamento mental'],
        instructions: [
          'Escolha uma aula de yoga ou pilates',
          'Foque em movimentos lentos e controlados',
          'Respire profundamente durante toda a sessão',
          'Termine com meditação ou relaxamento',
        ],
      },
      {
        name: 'Caminhada na Natureza (Alternativa)',
        description: 'Atividade ao ar livre',
        duration: '60 minutos',
        icon: '🚶',
        benefits: ['Cardio leve', 'Contato com natureza', 'Bem-estar mental'],
        instructions: [
          'Escolha um local tranquilo para caminhar',
          'Mantenha um ritmo confortável',
          'Aproveite a natureza ao seu redor',
          'Faça pausas quando necessário',
        ],
      },
    ],
  },
  {
    day: 'Domingo',
    focus: 'Descanso Ativo',
    type: 'specific',
    totalDuration: '20 minutos',
    exercises: [
      {
        name: 'Alongamento Suave',
        description: 'Recuperação e flexibilidade',
        duration: '15 minutos',
        icon: '🧘',
        benefits: ['Flexibilidade', 'Recuperação', 'Relaxamento'],
        instructions: [
          'Alongamento estático de todas as principais grupos musculares',
          'Mantenha cada alongamento por 30 segundos',
          'Respire profundamente',
          'Sem pressão, apenas relaxamento',
        ],
      },
      {
        name: 'Elevação das Pernas',
        description: 'Drenagem linfática final da semana',
        duration: '5 minutos',
        icon: '🦵',
        benefits: ['Drenagem linfática', 'Redução de inchaço'],
        instructions: [
          'Deite-se com as pernas elevadas contra a parede',
          'Relaxe completamente',
          'Faça respirações profundas',
          'Aproveite o momento de descanso',
        ],
      },
    ],
  },
];

export default function Exercicios() {
  const [selectedDay, setSelectedDay] = useState(0);
  const [expandedExercise, setExpandedExercise] = useState<string | null>(null);
  const currentWorkout = WEEKLY_WORKOUT[selectedDay];

  return (
    <div className="space-y-8">
      {/* Day Selector */}
      <div className="grid grid-cols-2 md:grid-cols-7 gap-2">
        {WEEKLY_WORKOUT.map((workout, index) => (
          <motion.button
            key={index}
            onClick={() => setSelectedDay(index)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`py-3 px-2 rounded-lg font-semibold text-sm transition-all ${
              selectedDay === index
                ? 'bg-accent text-white shadow-lg'
                : 'bg-card text-card-foreground border border-border hover:border-accent'
            }`}
          >
            {workout.day.split('-')[0]}
          </motion.button>
        ))}
      </div>

      {/* Workout Details */}
      <motion.div
        key={selectedDay}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="space-y-6"
      >
        <div className="bg-gradient-to-r from-accent/10 to-secondary/10 rounded-2xl p-6 border border-accent/20">
          <h2 className="text-2xl font-bold text-card-foreground mb-2">
            {currentWorkout.day}
          </h2>
          <p className="text-sm text-muted-foreground mb-4">
            {currentWorkout.focus}
          </p>
          <div className="flex items-center gap-4">
            <span className="inline-block px-4 py-2 rounded-full bg-accent text-white font-semibold text-sm">
              ⏱️ {currentWorkout.totalDuration}
            </span>
            <span className="inline-block px-4 py-2 rounded-full bg-secondary text-white font-semibold text-sm">
              {currentWorkout.type === 'cardio'
                ? '❤️ Cardio'
                : currentWorkout.type === 'strength'
                ? '💪 Fortalecimento'
                : '🎯 Específico'}
            </span>
          </div>
        </div>

        {/* Exercises List */}
        <div className="space-y-4">
          {currentWorkout.exercises.map((exercise, index) => (
            <ExerciseCard
              key={index}
              exercise={exercise}
              isExpanded={expandedExercise === exercise.name}
              onToggle={() =>
                setExpandedExercise(
                  expandedExercise === exercise.name ? null : exercise.name
                )
              }
            />
          ))}
        </div>
      </motion.div>

      {/* Important Tips */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="bg-gradient-to-r from-secondary/20 to-accent/20 rounded-2xl p-6 border border-secondary/30"
      >
        <h3 className="font-bold text-card-foreground mb-3 flex items-center gap-2">
          <span>⚠️</span> Dicas Importantes
        </h3>
        <ul className="text-sm text-card-foreground space-y-2">
          <li>✓ Sempre use a meia de compressão durante os exercícios</li>
          <li>✓ Comece devagar e aumente a intensidade gradualmente</li>
          <li>✓ Respire profundamente durante todo o exercício</li>
          <li>✓ Pare imediatamente se sentir dor intensa</li>
          <li>✓ Mantenha a consistência: exercite-se regularmente</li>
        </ul>
      </motion.div>
    </div>
  );
}

interface ExerciseCardProps {
  exercise: Exercise;
  isExpanded: boolean;
  onToggle: () => void;
}

function ExerciseCard({ exercise, isExpanded, onToggle }: ExerciseCardProps) {
  return (
    <Card
      className="mission-card cursor-pointer"
      onClick={onToggle}
    >
      <div className="flex gap-4">
        <div className="text-4xl flex-shrink-0">{exercise.icon}</div>
        <div className="flex-1">
          <div className="flex items-start justify-between mb-2">
            <div>
              <h3 className="font-bold text-lg text-card-foreground">
                {exercise.name}
              </h3>
              <p className="text-xs text-muted-foreground">
                {exercise.duration}
                {exercise.reps && ` • ${exercise.reps}`}
              </p>
            </div>
            <span className="text-xl">
              {isExpanded ? '▼' : '▶'}
            </span>
          </div>

          <p className="text-sm text-card-foreground mb-3">
            {exercise.description}
          </p>

          <div className="flex flex-wrap gap-2 mb-3">
            {exercise.benefits.map((benefit, index) => (
              <span
                key={index}
                className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-accent/10 text-accent"
              >
                {benefit}
              </span>
            ))}
          </div>

          {isExpanded && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="mt-4 pt-4 border-t border-border"
            >
              <h4 className="font-semibold text-card-foreground mb-2">
                Como fazer:
              </h4>
              <ol className="text-sm text-card-foreground space-y-2 list-decimal list-inside">
                {exercise.instructions.map((instruction, index) => (
                  <li key={index}>{instruction}</li>
                ))}
              </ol>
            </motion.div>
          )}
        </div>
      </div>
    </Card>
  );
}
