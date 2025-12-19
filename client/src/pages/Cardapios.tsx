import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';

interface Meal {
  name: string;
  description: string;
  icon: string;
  benefits: string[];
}

interface DayMenu {
  day: string;
  meals: {
    breakfast: Meal;
    morningSnack: Meal;
    lunch: Meal;
    afternoonSnack: Meal;
    dinner: Meal;
  };
}

const WEEKLY_MENU: DayMenu[] = [
  {
    day: 'Segunda-feira',
    meals: {
      breakfast: {
        name: 'Iogurte Natural com Frutas Vermelhas',
        description: 'Iogurte integral com morangos, mirtilos, framboesas e sementes de chia',
        icon: '🥛',
        benefits: ['Probióticos', 'Antioxidantes', 'Ômega-3'],
      },
      morningSnack: {
        name: 'Punhado de Nozes e Castanhas',
        description: 'Nozes, castanha-do-pará e amêndoas (30g)',
        icon: '🌰',
        benefits: ['Gorduras saudáveis', 'Selênio', 'Vitamina E'],
      },
      lunch: {
        name: 'Salmão Grelhado com Arroz Integral',
        description: 'Salmão (150g), arroz integral e salada de folhas escuras com azeite extra virgem',
        icon: '🐟',
        benefits: ['Ômega-3', 'Proteína', 'Fibras'],
      },
      afternoonSnack: {
        name: 'Chá de Hibisco com Abacate',
        description: 'Chá de hibisco gelado e ½ abacate com limão',
        icon: '🥑',
        benefits: ['Anti-inflamatório', 'Potássio', 'Hidratação'],
      },
      dinner: {
        name: 'Sopa de Legumes com Gengibre',
        description: 'Sopa com abóbora, cenoura, gengibre fresco e frango desfiado',
        icon: '🍲',
        benefits: ['Anti-inflamatório', 'Digestão', 'Aquecimento'],
      },
    },
  },
  {
    day: 'Terça-feira',
    meals: {
      breakfast: {
        name: 'Omelete com Espinafre e Azeite',
        description: '2 ovos, espinafre fresco, azeite de oliva extra virgem',
        icon: '🍳',
        benefits: ['Proteína', 'Ferro', 'Antioxidantes'],
      },
      morningSnack: {
        name: 'Cenoura Baby com Homus',
        description: 'Cenoura cortada e pasta de grão de bico caseira',
        icon: '🥕',
        benefits: ['Fibras', 'Vitamina A', 'Proteína'],
      },
      lunch: {
        name: 'Frango com Batata Doce e Brócolis',
        description: 'Frango desfiado (150g), batata doce cozida e brócolis no vapor',
        icon: '🍗',
        benefits: ['Proteína magra', 'Carboidrato complexo', 'Vitamina C'],
      },
      afternoonSnack: {
        name: 'Maçã com Manteiga de Amendoim',
        description: 'Maçã inteira e 1 colher de sopa de manteiga de amendoim integral',
        icon: '🍎',
        benefits: ['Fibras', 'Antioxidantes', 'Gordura saudável'],
      },
      dinner: {
        name: 'Salada Completa com Atum',
        description: 'Atum em água, folhas verdes, tomate, cenoura e azeite extra virgem',
        icon: '🥗',
        benefits: ['Ômega-3', 'Proteína', 'Vitaminas'],
      },
    },
  },
  {
    day: 'Quarta-feira',
    meals: {
      breakfast: {
        name: 'Smoothie Verde Anti-inflamatório',
        description: 'Couve, maçã, gengibre, água de coco e sementes de linhaça',
        icon: '🥤',
        benefits: ['Desintoxicante', 'Anti-inflamatório', 'Fibras'],
      },
      morningSnack: {
        name: 'Punhado de Amêndoas',
        description: 'Amêndoas cruas (30g)',
        icon: '🌰',
        benefits: ['Vitamina E', 'Magnésio', 'Fibras'],
      },
      lunch: {
        name: 'Lentilha com Legumes',
        description: 'Lentilha cozida, abobrinha, cenoura e azeite extra virgem',
        icon: '🍲',
        benefits: ['Proteína vegetal', 'Ferro', 'Fibras'],
      },
      afternoonSnack: {
        name: 'Kefir de Leite',
        description: 'Kefir natural sem açúcar (200ml)',
        icon: '🥛',
        benefits: ['Probióticos', 'Cálcio', 'Proteína'],
      },
      dinner: {
        name: 'Omelete com Cogumelos',
        description: '2 ovos, cogumelos frescos e salada de rúcula com azeite',
        icon: '🍄',
        benefits: ['Proteína', 'Vitaminas do complexo B', 'Antioxidantes'],
      },
    },
  },
  {
    day: 'Quinta-feira',
    meals: {
      breakfast: {
        name: 'Abacate Amassado com Ovos',
        description: 'Abacate com limão e 2 ovos mexidos',
        icon: '🥑',
        benefits: ['Gordura saudável', 'Proteína', 'Potássio'],
      },
      morningSnack: {
        name: 'Castanhas de Caju',
        description: 'Castanha de caju crua (30g)',
        icon: '🌰',
        benefits: ['Cobre', 'Zinco', 'Magnésio'],
      },
      lunch: {
        name: 'Peixe Branco com Quinoa',
        description: 'Tilápia assada (150g), quinoa cozida e aspargos no vapor',
        icon: '🐟',
        benefits: ['Proteína magra', 'Aminoácidos', 'Vitaminas'],
      },
      afternoonSnack: {
        name: 'Pêra com Canela',
        description: 'Pêra inteira com canela polvilhada',
        icon: '🍐',
        benefits: ['Fibras', 'Antioxidantes', 'Açúcares naturais'],
      },
      dinner: {
        name: 'Wrap Integral com Frango',
        description: 'Wrap integral, frango desfiado, alface, tomate e azeite',
        icon: '🌯',
        benefits: ['Fibras', 'Proteína', 'Carboidrato complexo'],
      },
    },
  },
  {
    day: 'Sexta-feira',
    meals: {
      breakfast: {
        name: 'Mingau de Aveia com Leite Vegetal',
        description: 'Aveia integral, leite vegetal, canela e nozes',
        icon: '🥣',
        benefits: ['Fibras solúveis', 'Beta-glucana', 'Energia'],
      },
      morningSnack: {
        name: 'Frutas Vermelhas',
        description: 'Morango, mirtilo e framboesa (100g)',
        icon: '🫐',
        benefits: ['Antioxidantes', 'Vitamina C', 'Fibras'],
      },
      lunch: {
        name: 'Peixe (Sardinha) com Legumes',
        description: 'Sardinha assada (150g), batata doce e brócolis',
        icon: '🐟',
        benefits: ['Ômega-3', 'Cálcio', 'Vitamina D'],
      },
      afternoonSnack: {
        name: 'Queijo Cottage com Azeite',
        description: 'Queijo cottage (100g) com azeite e orégano',
        icon: '🧀',
        benefits: ['Proteína', 'Cálcio', 'Probióticos'],
      },
      dinner: {
        name: 'Salada de Quinoa com Vegetais',
        description: 'Quinoa, tomate, pepino, cebola roxa e azeite extra virgem',
        icon: '🥗',
        benefits: ['Proteína completa', 'Fibras', 'Vitaminas'],
      },
    },
  },
  {
    day: 'Sábado',
    meals: {
      breakfast: {
        name: 'Panqueca de Banana com Amêndoas',
        description: 'Panqueca feita com banana e farinha de amêndoas, mel natural',
        icon: '🥞',
        benefits: ['Potássio', 'Proteína', 'Energia'],
      },
      morningSnack: {
        name: 'Chá Verde com Gengibre',
        description: 'Chá verde fresco com gengibre ralado',
        icon: '🍵',
        benefits: ['Antioxidantes', 'Anti-inflamatório', 'Termogênico'],
      },
      lunch: {
        name: 'Feijoada Light com Couve',
        description: 'Feijoada sem embutidos, couve refogada com alho',
        icon: '🍲',
        benefits: ['Ferro', 'Proteína', 'Fibras'],
      },
      afternoonSnack: {
        name: 'Iogurte com Granola Caseira',
        description: 'Iogurte natural com granola sem açúcar',
        icon: '🥛',
        benefits: ['Probióticos', 'Fibras', 'Cálcio'],
      },
      dinner: {
        name: 'Caldo de Ossos com Ovo',
        description: 'Caldo de ossos caseiro e ovo cozido',
        icon: '🍲',
        benefits: ['Colágeno', 'Gelatina', 'Aminoácidos'],
      },
    },
  },
  {
    day: 'Domingo',
    meals: {
      breakfast: {
        name: 'Iogurte com Granola e Morangos',
        description: 'Iogurte natural integral, granola caseira e morangos frescos',
        icon: '🥛',
        benefits: ['Probióticos', 'Antioxidantes', 'Fibras'],
      },
      morningSnack: {
        name: 'Sementes de Abóbora',
        description: 'Sementes de abóbora torradas (30g)',
        icon: '🎃',
        benefits: ['Zinco', 'Magnésio', 'Antioxidantes'],
      },
      lunch: {
        name: 'Frango Assado com Salada',
        description: 'Frango assado (150g) e salada completa com azeite',
        icon: '🍗',
        benefits: ['Proteína', 'Vitaminas', 'Minerais'],
      },
      afternoonSnack: {
        name: 'Chá de Hibisco com Abacate',
        description: 'Chá de hibisco gelado e ½ abacate',
        icon: '🥑',
        benefits: ['Anti-inflamatório', 'Hidratação', 'Potássio'],
      },
      dinner: {
        name: 'Sopa Leve de Vegetais',
        description: 'Sopa leve com cenoura, abóbora, cebola e gengibre',
        icon: '🍲',
        benefits: ['Hidratação', 'Vitaminas', 'Minerais'],
      },
    },
  },
];

export default function Cardapios() {
  const [selectedDay, setSelectedDay] = React.useState(0);
  const currentMenu = WEEKLY_MENU[selectedDay];

  return (
    <div className="space-y-8">
      {/* Day Selector */}
      <div className="grid grid-cols-2 md:grid-cols-7 gap-2">
        {WEEKLY_MENU.map((menu, index) => (
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
            {menu.day.split('-')[0]}
          </motion.button>
        ))}
      </div>

      {/* Meals for Selected Day */}
      <motion.div
        key={selectedDay}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="space-y-4"
      >
        <h2 className="text-2xl font-bold text-card-foreground mb-6">
          {currentMenu.day}
        </h2>

        {/* Breakfast */}
        <MealCard
          meal={currentMenu.meals.breakfast}
          mealType="Café da Manhã"
          time="7:00 - 8:00"
        />

        {/* Morning Snack */}
        <MealCard
          meal={currentMenu.meals.morningSnack}
          mealType="Lanche da Manhã"
          time="10:00 - 10:30"
        />

        {/* Lunch */}
        <MealCard
          meal={currentMenu.meals.lunch}
          mealType="Almoço"
          time="12:00 - 13:00"
        />

        {/* Afternoon Snack */}
        <MealCard
          meal={currentMenu.meals.afternoonSnack}
          mealType="Lanche da Tarde"
          time="15:00 - 15:30"
        />

        {/* Dinner */}
        <MealCard
          meal={currentMenu.meals.dinner}
          mealType="Jantar"
          time="19:00 - 20:00"
        />
      </motion.div>

      {/* Hydration Reminder */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="bg-gradient-to-r from-accent/10 to-secondary/10 rounded-2xl p-6 border border-accent/20"
      >
        <h3 className="font-bold text-card-foreground mb-3 flex items-center gap-2">
          <span>💧</span> Dica Importante: Hidratação
        </h3>
        <p className="text-sm text-card-foreground leading-relaxed">
          Beba pelo menos <strong>2 litros de água</strong> durante o dia. Você pode adicionar rodelas de limão ou gengibre para potencializar o efeito anti-inflamatório. A hidratação é essencial para o funcionamento do sistema linfático!
        </p>
      </motion.div>
    </div>
  );
}

interface MealCardProps {
  meal: Meal;
  mealType: string;
  time: string;
}

function MealCard({ meal, mealType, time }: MealCardProps) {
  return (
    <Card className="mission-card">
      <div className="flex gap-4">
        <div className="text-4xl flex-shrink-0">{meal.icon}</div>
        <div className="flex-1">
          <div className="flex items-start justify-between mb-2">
            <div>
              <h3 className="font-bold text-lg text-card-foreground">
                {meal.name}
              </h3>
              <p className="text-xs text-muted-foreground">{mealType} • {time}</p>
            </div>
          </div>

          <p className="text-sm text-card-foreground mb-3">
            {meal.description}
          </p>

          <div className="flex flex-wrap gap-2">
            {meal.benefits.map((benefit, index) => (
              <span
                key={index}
                className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-accent/10 text-accent"
              >
                {benefit}
              </span>
            ))}
          </div>
        </div>
      </div>
    </Card>
  );
}

import React from 'react';
