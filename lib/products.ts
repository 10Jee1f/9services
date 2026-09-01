export interface Product {
  slug: string;
  name: string;
  game: string;
  category: string;
  price: number;
  originalPrice?: number;
  free?: boolean;
  downloadLink?: string;
  status: 'online' | 'updating' | 'offline';
  badge?: string;
  description: string;
  features: string[];
  thumbnail?: string;
  rating: number;
  reviews: number;
  popular?: boolean;
  isNew?: boolean;
}

export const products: Product[] = [
  {
    slug: 'fivem',
    name: 'FIVEM',
    game: 'GTA V',
    category: 'fivem',
    price: 0,
    free: true,
    downloadLink: 'https://www.mediafire.com/file/s20wpnt15tfsvuz/FIVEM+XIT+V1.0+99HS.7z/file',
    status: 'online',
    badge: '🆓 FREE',
    description:
      'The #1 FiveM cheat — completely FREE. Smooth bone-lock aim, auto headshot, and full player ESP. Fully undetected since launch. Download instantly, no payment needed.',
    features: [
      'Bone-Lock Aimbot (smooth & humanized)',
      'Auto Headshot',
      'Player ESP & Box ESP',
      'Health & Distance Display',
      'Anti-Ban Engine',
      'Supports All Devices',
      '24/7 Instagram Support',
    ],
    thumbnail: '/fivem-thumbnail.jpg',
    rating: 4.7,
    reviews: 320,
    popular: true,
    isNew: true,
  },
  {
    slug: 'cheetos',
    name: 'CHEETOS',
    game: 'Free Fire',
    category: 'freefire',
    price: 0,
    free: true,
    downloadLink: 'https://www.mediafire.com/file/o0g2xlny7guv26l/Proxy+Cheetos+☠️.7z/file',
    status: 'online',
    badge: '🆓 FREE',
    description:
      'The #1 Free Fire aimbot — completely FREE. Smooth bone-lock aim, auto headshot, and full player ESP. Fully undetected since launch. Download instantly, no payment needed.',
    features: [
      'Bone-Lock Aimbot (smooth & humanized)',
      'Auto Headshot',
      'Player ESP & Box ESP',
      'Health & Distance Display',
      'Anti-Ban Engine',
      'Supports All Devices',
      '24/7 Instagram Support',
    ],
    thumbnail: '/cheetos-thumbnail.jpg',
    rating: 4.6,
    reviews: 1240,
    popular: true,
  },
  {
    slug: 'jcanfly-ff-aimbot-pro',
    name: 'J4X',
    game: 'Free Fire',
    category: 'freefire',
    price: 0,
    free: true,
    downloadLink: 'https://www.mediafire.com/file/x3tiuy9oj2zaup0/REGEDIT+XIT+AIMBOT+NEYV11+(GRATIS).7z/file',
    status: 'online',
    badge: '🆓 FREE',
    description:
      'The #1 Free Fire aimbot — completely FREE. Smooth bone-lock aim, auto headshot, and full player ESP. Fully undetected since launch. Download instantly, no payment needed.',
    features: [
      'Bone-Lock Aimbot (smooth & humanized)',
      'Auto Headshot',
      'Player ESP & Box ESP',
      'Health & Distance Display',
      'Anti-Ban Engine',
      'Supports All Devices',
      '24/7 Instagram Support',
    ],
    thumbnail: '/ff-aimbot-thumbnail.jpg',
    rating: 4.9,
    reviews: 1240,
    popular: true,
  },
  {
    slug: 'ffh4x-v6',
    name: 'FFH4X V6.0',
    game: 'Free Fire',
    category: 'freefire',
    price: 4.99,
    free: false,
    downloadLink: 'https://tanjix.gumroad.com/l/FFH4X',
    status: 'online',
    description:
      'FFH4X is an unofficial mod menu injector for the mobile game Garena Free Fire. Provides extra in-game features such as auto-aim, speed boost, ESP enemy detection, skins, and other gameplay modifications designed to make matches easier and give players an advantage.',
    features: [
      'Mod Menu Injector',
      'Auto-Aim',
      'Speed Boost',
      'ESP Enemy Detection',
      'Skin Unlocker',
      'Gameplay Modifications',
      'Supports All Devices',
      '24/7 Instagram Support',
    ],
    thumbnail: '/ffh4x-v6-thumbnail.jpg',
    rating: 4.8,
    reviews: 980,
    popular: true,
  },
];

export const categories = [
  { slug: 'freefire', label: 'Free Fire', icon: '🔥' },
];

export const reviews = [
  {
    name: 'FF_KingSlayer',
    avatar: 'FK',
    rating: 5,
    date: '1 day ago',
    product: 'JCANFLY FF Elite Bundle',
    text: 'Absolute beast of a cheat. I went from Silver to Heroic in less than a week. The aimbot is so smooth it looks legit on killcam.',
  },
  {
    name: 'SniperGoat_BR',
    avatar: 'SG',
    rating: 5,
    date: '3 days ago',
    product: 'JCANFLY FF No Recoil',
    text: 'Zero recoil on every single weapon. M1014, AK, MP40 — all laser precise. Never been reported once. Insane value for $7.99.',
  },
  {
    name: 'RushB_PH',
    avatar: 'RB',
    rating: 5,
    date: '5 days ago',
    product: 'JCANFLY FF Aimbot Pro',
    text: 'Auto headshot is ridiculous 😂 Dropped a 20-kill game first try. The anti-ban is rock solid, been using it daily for 2 months.',
  },
  {
    name: 'GhostZone_ID',
    avatar: 'GZ',
    rating: 5,
    date: '1 week ago',
    product: 'JCANFLY FF ESP & Radar',
    text: 'I can see every enemy through walls and the loot tracker saves so much time. Setup took less than 2 minutes. 10/10.',
  },
  {
    name: 'XtremeFF_VN',
    avatar: 'XF',
    rating: 5,
    date: '1 week ago',
    product: 'JCANFLY FF Rank Booster',
    text: 'Hit Heroic for the first time ever. The stealth mode is crazy good — played 50 ranked games and not one ban warning.',
  },
  {
    name: 'LegendKiller_IN',
    avatar: 'LK',
    rating: 4,
    date: '2 weeks ago',
    product: 'JCANFLY FF Speed & Fly',
    text: 'Fly mode is so much fun in casual matches. Speed hack works great too. Would love even more speed options but overall great product.',
  },
];
