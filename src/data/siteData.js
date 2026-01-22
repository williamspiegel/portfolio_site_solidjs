// Site data extracted from old portfolio
export const personalInfo = {
  name: 'William Spiegel',
  title: 'Mobile Developer',
  bio: 'Mobile developer specializing in cross-platform and native app development. I build polished, user-focused applications using React Native, Flutter, and native Android and iOS technologies. Passionate about crafting intuitive interfaces and leveraging APIs to deliver seamless user experiences. Explore my open-source projects on GitHub or connect with me to discuss opportunities.',
  photo: '/images/profile.jpg',
  email: 'willy.spiegel@gmail.com',
  resumeUrl: '/William_Spiegel_Resume.pdf',
  social: {
    github: 'https://github.com/williamspiegel',
    linkedin: 'https://www.linkedin.com/in/william-spiegel/',
  },
};

export const projects = [
  {
    id: 1,
    title: 'Swipey for Reddit',
    platform: 'Flutter',
    platformDetails: 'iOS, Android, MacOS, Windows, Web',
    description:
      'A carousel-oriented Reddit client built to improve mobile browsing.',
    images: [
      '/images/projects/swipey-1.png',
      '/images/projects/swipey-2.png',
      '/images/projects/swipey-3.png',
      '/images/projects/swipey-4.png',
      '/images/projects/swipey-5.png',
    ],
    fullDescription:
      'The idea for Swipey sprung up from my frustrations with the official Reddit app. There are many long-term bugs with the official app such as collapsing comments spontaneously not working in the middle of browsing content and tons of design elements not fit for a mobile context. I am building Swipey around the way I normally browse Reddit — in a carousel orientation. The app always stays in a carousel screen, with navigation between subreddits being served in a bottom sheet for better thumb reachability.',
    gradient: 'pink',
  },
  {
    id: 2,
    title: 'MyVax',
    platform: 'React Native',
    platformDetails: 'iOS and Android',
    description:
      'Healthcare app for managing medications, immunizations, and health documents.',
    images: [
      '/images/projects/myvax-1.png',
      '/images/projects/myvax-2.png',
      '/images/projects/myvax-3.png',
      '/images/projects/myvax-4.png',
      '/images/projects/myvax-5.png',
    ],
    fullDescription:
      'MyVax and MIMI-Rx are apps owned by EagleForce targeted towards the healthcare space for patients and providers to have their medications, immunizations, vitals, and healthcare documents all in one digital place. They are essentially the same app but with different branding.',
    playStore:
      'https://play.google.com/store/apps/details?id=com.eagleforce.myVax&hl=en_US&gl=US',
    appStore: 'https://apps.apple.com/us/app/myvax/id1529542003',
    gradient: 'blue',
  },
  {
    id: 3,
    title: 'Swipey Classic',
    platform: 'React Native',
    platformDetails: 'iOS and Android',
    description:
      'The original React Native implementation of Swipey, now open source.',
    images: [
      '/images/projects/swipey-classic-1.png',
      '/images/projects/swipey-classic-2.png',
    ],
    fullDescription:
      'This was my first implementation of Swipey. One of the major pitfalls of trying to make complicated and uncommon UI features such as deeply nested collapsible comments is the lack of first party support.',
    github: 'https://github.com/williamspiegel/Swipey',
    gradient: 'orange',
  },
];

export const favoriteGames = [
  {
    id: 1,
    title: 'Path of Exile',
    image: '/images/games/poe.png',
    site: 'https://www.pathofexile.com/',
    reddit: 'https://www.reddit.com/r/pathofexile/',
    steam: 'https://store.steampowered.com/app/238960/Path_of_Exile/',
    youtube: 'https://www.youtube.com/user/grindinggear',
    description:
      "Path of Exile is hands down my favorite game of all time. Although I don't play games as much as I used to, I always set aside a weekend for every new expansion that comes out every three or so months. It is a true spiritual successor to Diablo 2 with its gothic colors and atmosphere in addition to its extreme difficulty and character diversity.",
  },
  {
    id: 2,
    title: 'Old School RuneScape',
    image: '/images/games/osrs.png',
    site: 'https://oldschool.runescape.com/',
    reddit: 'https://www.reddit.com/r/2007scape/',
    youtube: 'https://www.youtube.com/user/OldSchoolRSCommunity',
    steam: 'https://store.steampowered.com/app/1343370/Old_School_RuneScape/',
    description:
      'I have played RuneScape on and off since 2006. What drove me to the game was the elegance and simplicity of the combat system in addition to the interactivity between the inventory system and the game world. Its quests are truly one of a kind with excellent writing.',
  },
  {
    id: 3,
    title: 'Risk of Rain 2',
    image: '/images/games/ror2.png',
    site: 'https://www.riskofrain.com/',
    steam: 'https://store.steampowered.com/app/632360/Risk_of_Rain_2/',
    reddit: 'https://www.reddit.com/r/riskofrain/',
    youtube: 'https://www.youtube.com/user/spacegame2012',
    description:
      'Risk of Rain 2 is the best 3D roguelite shooter on the market. One of my favorite things about the gameplay is how difficulty scales with time, so time management is crucial. The procedural generation of levels in the game gives a fresh experience every playthrough.',
  },
];

export const navLinks = [
  { path: '/', label: 'About Me' },
  { path: '/favorite-games', label: 'Favorite Games' },
  { path: '/contact', label: 'Contact' },
];
