export interface DayZShopItem {
  id: number;
  name: string;
  description: string;
  price: number;
  category: string;
  icon: string;
  popular?: boolean;
}

export const dayzShopCategories = [
  "Приоритетный слот",
  "Строительные наборы",
  "Инструменты",
  "Медицина",
  "Расходники",
  "Машины"
];

export const dayzShopItems: DayZShopItem[] = [
  {
    id: 1,
    name: "Приоритетный слот на 30 дней",
    description: "Заходите на сервер без очереди в любое время",
    price: 199,
    category: "Приоритетный слот",
    icon: "Star",
    popular: true
  },
  {
    id: 2,
    name: "Приоритетный слот на 90 дней",
    description: "3 месяца доступа без очереди + бонусы",
    price: 499,
    category: "Приоритетный слот",
    icon: "Crown"
  },
  {
    id: 3,
    name: "Набор базового строительства",
    description: "Молоток, гвозди (100шт), пила, топор",
    price: 150,
    category: "Строительные наборы",
    icon: "Hammer",
    popular: true
  },
  {
    id: 4,
    name: "Набор укрепленной базы",
    description: "Металлические листы (10шт), сварка, плоскогубцы",
    price: 350,
    category: "Строительные наборы",
    icon: "Shield"
  },
  {
    id: 5,
    name: "Полный набор строителя",
    description: "Всё для постройки большой базы + генератор",
    price: 650,
    category: "Строительные наборы",
    icon: "Building"
  },
  {
    id: 6,
    name: "Набор инструментов выживальщика",
    description: "Топор, нож, точильный камень, фонарик",
    price: 120,
    category: "Инструменты",
    icon: "Wrench"
  },
  {
    id: 7,
    name: "Охотничий набор",
    description: "Нож для разделки, бинокль, компас, спички",
    price: 180,
    category: "Инструменты",
    icon: "Crosshair"
  },
  {
    id: 8,
    name: "Механический набор",
    description: "Свечи зажигания, аккумулятор, канистра, шланг",
    price: 250,
    category: "Инструменты",
    icon: "Settings"
  },
  {
    id: 9,
    name: "Аптечка первой помощи",
    description: "Бинты (5шт), морфин, витамины, дезинфекция",
    price: 100,
    category: "Медицина",
    icon: "Heart",
    popular: true
  },
  {
    id: 10,
    name: "Набор полевого медика",
    description: "Шприцы (3шт), физраствор, антибиотики, обезболивающее",
    price: 200,
    category: "Медицина",
    icon: "Activity"
  },
  {
    id: 11,
    name: "Набор хирурга",
    description: "Полный набор для лечения тяжелых ран + переливание крови",
    price: 400,
    category: "Медицина",
    icon: "Plus"
  },
  {
    id: 12,
    name: "Набор боеприпасов 5.56",
    description: "120 патронов калибра 5.56x45мм",
    price: 150,
    category: "Расходники",
    icon: "Target"
  },
  {
    id: 13,
    name: "Набор боеприпасов 7.62",
    description: "100 патронов калибра 7.62x39мм",
    price: 180,
    category: "Расходники",
    icon: "Target"
  },
  {
    id: 14,
    name: "Продуктовый набор",
    description: "Консервы (10шт), вода (5л), энергетики (3шт)",
    price: 80,
    category: "Расходники",
    icon: "Package"
  },
  {
    id: 15,
    name: "Набор фермера",
    description: "Семена овощей, садовая лопата, известь (2шт)",
    price: 120,
    category: "Расходники",
    icon: "Leaf"
  },
  {
    id: 16,
    name: "Гражданская машина Olga 24",
    description: "Полностью исправный седан со 100% топливом",
    price: 800,
    category: "Машины",
    icon: "Car",
    popular: true
  },
  {
    id: 17,
    name: "Внедорожник Gunter 2",
    description: "Повышенная проходимость, вместительный багажник",
    price: 1200,
    category: "Машины",
    icon: "Truck"
  },
  {
    id: 18,
    name: "Грузовик V3S",
    description: "Большой грузовик для перевозки стройматериалов",
    price: 1800,
    category: "Машины",
    icon: "Bus"
  },
  {
    id: 19,
    name: "Квадроцикл ATV",
    description: "Быстрый и манёвренный квадроцикл для бездорожья",
    price: 1000,
    category: "Машины",
    icon: "Bike"
  }
];
