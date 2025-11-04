export interface DayZServer {
  id: number;
  name: string;
  ip: string;
  description: string;
  online: number;
  maxPlayers: number;
  wipeSchedule: string;
  mapName: string;
  features: string[];
}

export const dayzServers: DayZServer[] = [
  {
    id: 1,
    name: "Dayzica | Chernarus+ PvP",
    ip: "185.230.64.101:2302",
    description: "Классический хардкор PvP сервер на карте Chernarus+",
    online: 48,
    maxPlayers: 60,
    wipeSchedule: "Каждые 2 месяца",
    mapName: "Chernarus+",
    features: [
      "Хардкорная экономика лута",
      "PvP без ограничений",
      "Расширенный набор оружия",
      "Кастомные локации",
      "Активная админка 24/7"
    ]
  },
  {
    id: 2,
    name: "Dayzica | Livonia RP",
    ip: "185.230.64.102:2302",
    description: "Ролевой сервер на Livonia с уникальными событиями",
    online: 35,
    maxPlayers: 50,
    wipeSchedule: "Каждые 3 месяца",
    mapName: "Livonia",
    features: [
      "Строгий ролевой отыгрыш",
      "Система фракций и групп",
      "Безопасные торговые зоны",
      "Еженедельные события",
      "Whitelist система"
    ]
  },
  {
    id: 3,
    name: "Dayzica | Deer Isle x3",
    ip: "185.230.64.103:2302",
    description: "Модифицированный сервер с увеличенным лутом на Deer Isle",
    online: 52,
    maxPlayers: 70,
    wipeSchedule: "Каждый месяц",
    mapName: "Deer Isle",
    features: [
      "Лут x3",
      "Больше машин и вертолётов",
      "Кастомные военные базы",
      "Расширенное строительство",
      "PvP + PvE зоны"
    ]
  },
  {
    id: 4,
    name: "Dayzica | Namalsk Extreme",
    ip: "185.230.64.104:2302",
    description: "Экстремальное выживание на холодном острове Namalsk",
    online: 28,
    maxPlayers: 40,
    wipeSchedule: "Каждые 6 недель",
    mapName: "Namalsk",
    features: [
      "Система холода и гипотермии",
      "Радиационные зоны",
      "Редкое оружие и снаряжение",
      "Подземные бункеры",
      "Хардкор режим"
    ]
  },
  {
    id: 5,
    name: "Dayzica | Esseker PvE",
    ip: "185.230.64.105:2302",
    description: "PvE сервер для спокойной игры с друзьями",
    online: 18,
    maxPlayers: 30,
    wipeSchedule: "Каждые 4 месяца",
    mapName: "Esseker",
    features: [
      "PvE режим",
      "Увеличенное время дня",
      "Базовое строительство без лимитов",
      "Кооперативные миссии",
      "Дружелюбное комьюнити"
    ]
  }
];
