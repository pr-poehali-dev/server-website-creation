export interface Server {
  id: number;
  name: string;
  ip: string;
  description: string;
  online: number;
  maxPlayers: number;
  wipeSchedule: string;
  mapSize: string;
  features: string[];
}

export const servers: Server[] = [
  {
    id: 1,
    name: "Rustica | x2 | Classic",
    ip: "connect 185.248.100.50:28015",
    description: "Классический сервер с удвоенной скоростью фарма. Идеально подходит для игроков, которые хотят быстрее развиваться, но при этом сохранить баланс игры.",
    online: 87,
    maxPlayers: 150,
    wipeSchedule: "Каждый четверг в 18:00 МСК",
    mapSize: "4000x4000",
    features: ["x2 Фарм", "Еженедельные вайпы", "Активная администрация", "События каждые выходные"]
  },
  {
    id: 2,
    name: "Rustica | x5 | Solo/Duo/Trio",
    ip: "connect 185.248.100.51:28015",
    description: "Сервер с увеличенным рейтом фарма для маленьких команд. Максимум 3 игрока в команде, что создает более честную и сбалансированную игру.",
    online: 142,
    maxPlayers: 200,
    wipeSchedule: "Каждые 3 дня в 20:00 МСК",
    mapSize: "3500x3500",
    features: ["x5 Фарм", "Лимит команды: 3 игрока", "Частые вайпы", "PvP ивенты"]
  },
  {
    id: 3,
    name: "Rustica | x10 | PvP Arena",
    ip: "connect 185.248.100.52:28015",
    description: "Хардкорный PvP сервер с высокой скоростью фарма. Для тех, кто любит интенсивные сражения и быстрое развитие. Постоянные ивенты и турниры.",
    online: 95,
    maxPlayers: 150,
    wipeSchedule: "Ежедневно в 12:00 МСК",
    mapSize: "3000x3000",
    features: ["x10 Фарм", "Ежедневные вайпы", "Арена 24/7", "Турниры с призами"]
  },
  {
    id: 4,
    name: "Rustica | Vanilla | Hardcore",
    ip: "connect 185.248.100.53:28015",
    description: "Ванильный сервер без модификаций для настоящих ценителей классического Rust. Долгие вайпы, большая карта, сложный выживание.",
    online: 63,
    maxPlayers: 200,
    wipeSchedule: "Раз в месяц (первый четверг)",
    mapSize: "5000x5000",
    features: ["Vanilla опыт", "Месячные вайпы", "Большая карта", "Хардкорное выживание"]
  },
  {
    id: 5,
    name: "Rustica | Modded | Build & Chill",
    ip: "connect 185.248.100.54:28015",
    description: "Сервер с модами для строительства и расслабленной игры. Увеличенный стак предметов, телепорты, возможность сохранения построек.",
    online: 51,
    maxPlayers: 100,
    wipeSchedule: "Раз в 2 недели по воскресеньям",
    mapSize: "4500x4500",
    features: ["Моды на строительство", "Сохранение построек", "Телепорты", "Увеличенный стак"]
  }
];
