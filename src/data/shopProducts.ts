export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  icon: string;
  category: string;
  details?: {
    bonus?: string;
    resources?: string;
    components?: string;
    weapons?: string;
    explosives?: string;
  };
}

export const categories = [
  'Все товары',
  'Привилегии',
  'Ресурсы',
  'Боеприпасы',
  'Инструменты',
  'Взрывчатка',
  'Одежда',
  'Конструкции',
  'Медикаменты',
  'Еда',
  'Компоненты',
  'Машины',
  'Электричество',
  'Фермерство',
  'Праздники'
];

export const products: Product[] = [
  {
    id: 1,
    name: 'Start',
    price: 99,
    description: 'Начальные привилегии на сервере',
    icon: 'Zap',
    category: 'Привилегии',
    details: {
      bonus: '+1 к выбору спального места',
      resources: '5,000 дерева, 5,000 камня',
      components: '50 металлических пружин, 30 шестерёнок',
      weapons: 'Револьвер, Полуавтоматический пистолет',
      explosives: '5 ракет'
    }
  },
  {
    id: 2,
    name: 'Plus',
    price: 199,
    description: 'Улучшенные привилегии с дополнительными бонусами',
    icon: 'TrendingUp',
    category: 'Привилегии',
    details: {
      bonus: '+2 к выбору спального места',
      resources: '10,000 дерева, 10,000 камня, 5,000 металла',
      components: '100 металлических пружин, 60 шестерёнок, 30 металлических труб',
      weapons: 'Автомат, Снайперская винтовка',
      explosives: '10 ракет, 3 C4'
    }
  },
  {
    id: 3,
    name: 'VIP',
    price: 299,
    description: 'VIP привилегии для опытных игроков',
    icon: 'Crown',
    category: 'Привилегии',
    details: {
      bonus: '+3 к выбору спального места',
      resources: '20,000 дерева, 20,000 камня, 15,000 металла',
      components: '200 металлических пружин, 120 шестерёнок, 80 металлических труб',
      weapons: 'LR-300, Болтовка, Револьвер Python',
      explosives: '20 ракет, 8 C4'
    }
  },
  {
    id: 4,
    name: 'Premium',
    price: 499,
    description: 'Премиальные привилегии с максимальными бонусами',
    icon: 'Star',
    category: 'Привилегии',
    details: {
      bonus: '+4 к выбору спального места',
      resources: '35,000 дерева, 35,000 камня, 25,000 металла, 5,000 HQM',
      components: '350 металлических пружин, 200 шестерёнок, 150 металлических труб',
      weapons: 'M249, MP5, Дробовик',
      explosives: '35 ракет, 15 C4'
    }
  },
  {
    id: 5,
    name: 'Deluxe',
    price: 799,
    description: 'Максимальные привилегии для элиты сервера',
    icon: 'Award',
    category: 'Привилегии',
    details: {
      bonus: '+5 к выбору спального места',
      resources: '50,000 дерева, 50,000 камня, 40,000 металла, 10,000 HQM',
      components: '500 металлических пружин, 300 шестерёнок, 250 металлических труб, 100 листов металла',
      weapons: 'M249, LR-300, Снайперская винтовка, Дробовик боевой',
      explosives: '50 ракет, 25 C4, 10 торпед'
    }
  },
  {
    id: 6,
    name: '10,000 Ресурсов',
    price: 149,
    description: 'Дерево, камень, металл и ткань',
    icon: 'Box',
    category: 'Ресурсы'
  },
  {
    id: 7,
    name: '50,000 Металла',
    price: 349,
    description: 'Металлические фрагменты для постройки',
    icon: 'Blocks',
    category: 'Ресурсы'
  },
  {
    id: 8,
    name: '5.56 Патроны (1000 шт)',
    price: 199,
    description: 'Боеприпасы для автоматов',
    icon: 'Crosshair',
    category: 'Боеприпасы'
  },
  {
    id: 9,
    name: 'Набор инструментов',
    price: 179,
    description: 'Топор, кирка, молот высокого качества',
    icon: 'Hammer',
    category: 'Инструменты'
  },
  {
    id: 10,
    name: 'C4 (10 шт)',
    price: 599,
    description: 'Взрывчатка для рейдов',
    icon: 'Bomb',
    category: 'Взрывчатка'
  },
  {
    id: 11,
    name: 'Тяжёлая броня',
    price: 249,
    description: 'Полный комплект защитной одежды',
    icon: 'Shield',
    category: 'Одежда'
  },
  {
    id: 12,
    name: 'Металлические стены (100 шт)',
    price: 399,
    description: 'Прочные конструкции для базы',
    icon: 'Home',
    category: 'Конструкции'
  },
  {
    id: 13,
    name: 'Аптечки (50 шт)',
    price: 129,
    description: 'Медикаменты для восстановления здоровья',
    icon: 'Heart',
    category: 'Медикаменты'
  },
  {
    id: 14,
    name: 'Набор еды',
    price: 79,
    description: 'Мясо, овощи и консервы',
    icon: 'Apple',
    category: 'Еда'
  },
  {
    id: 15,
    name: 'Компоненты (100 шт)',
    price: 189,
    description: 'Разные компоненты для крафта',
    icon: 'Cog',
    category: 'Компоненты'
  },
  {
    id: 16,
    name: 'Минивертолёт',
    price: 899,
    description: 'Личный транспорт для быстрого перемещения',
    icon: 'Plane',
    category: 'Машины'
  },
  {
    id: 17,
    name: 'Генератор + батареи',
    price: 299,
    description: 'Источник питания для базы',
    icon: 'Zap',
    category: 'Электричество'
  },
  {
    id: 18,
    name: 'Набор фермера',
    price: 159,
    description: 'Семена, удобрения и инструменты',
    icon: 'Sprout',
    category: 'Фермерство'
  },
  {
    id: 19,
    name: 'Новогодний набор',
    price: 399,
    description: 'Праздничные скины и декорации',
    icon: 'Gift',
    category: 'Праздники'
  }
];
