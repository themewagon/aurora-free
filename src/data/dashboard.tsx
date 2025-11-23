import {
  AnalyticKPIData,
  ClientLocation,
  OSUserData,
  SessionByOSData,
  TopCampaignsData,
  UserByCohortData,
  UserByCountryData,
  UserEngagementChartData,
  UserEngagementTab,
} from 'types/dashboard';

export const analyticKPIs: AnalyticKPIData[] = [
  {
    title: 'Total Visitors',
    value: 5921649,
    icon: {
      name: 'material-symbols:attribution-outline-rounded',
      color: 'primary',
    },
    link: {
      prefix: 'See in-depth',
      text: 'Traffic sources',
      url: '#!',
    },
  },
  {
    title: 'Bounce Rate',
    value: '62.11%',
    icon: {
      name: 'material-symbols:call-missed-outgoing-rounded',
      color: 'warning',
    },
    link: {
      prefix: 'See page-wise',
      text: 'Performance',
      url: '#!',
    },
  },
  {
    title: 'Conversion',
    value: '21.91%',
    icon: {
      name: 'material-symbols:credit-score-outline-rounded',
      color: 'success',
    },
    link: {
      prefix: "See last week's",
      text: 'Top Products',
      url: '#!',
    },
  },
  {
    title: 'Active Referrals',
    value: 470,
    icon: {
      name: 'material-symbols:conversion-path',
      color: 'info',
    },
    link: {
      prefix: 'See all inbound',
      text: 'Referral links',
      url: '#!',
    },
  },
];

export const userEngagementTabs: UserEngagementTab[] = [
  {
    key: 'newUser',
    title: 'New Users',
    value: '275K',
  },
  {
    key: 'avgSession',
    title: 'Avg. Session',
    value: '3m 12s',
  },
  {
    key: 'subscribers',
    title: 'Subscribers',
    value: '3.72 M',
  },
  {
    key: 'pageViews',
    title: 'Page View',
    value: '523K',
  },
];

export const userEngagementChartData: UserEngagementChartData = {
  newUser: {
    actual: [
      48458, 59261, 53556, 68184, 34439, 45729, 30668, 33356, 58359, 46298, 40294, 55000, 50854,
      49839, 53560, 39428, 51885, 45606, 67112, 47288,
    ],
    projected: [
      60011, 76108, 62186, 76185, 55675, 55579, 41574, 70346, 30044, 41786, 30712, 63402, 45871,
      62857, 48390, 48801, 53452, 76411, 55450, 32191,
    ],
  },
  avgSession: {
    actual: [5, 4, 5, 4, 4, 4, 6, 3, 3, 3, 4, 3, 4, 5, 4, 3, 3, 3, 4, 2],
    projected: [5, 3, 6, 2, 3, 3, 3, 6, 3, 4, 4, 7, 6, 4, 6, 6, 5, 4, 2, 2],
  },
  subscribers: {
    actual: [
      673376, 1393866, 514229, 540505, 552731, 935344, 1009759, 1430342, 925869, 838345, 559880,
      1430771, 1082764, 1012778, 1230272, 1022238, 1308372, 1103138, 1109148, 834265,
    ],
    projected: [
      1382780, 744987, 955123, 630721, 552345, 1041834, 510343, 917766, 824350, 1427699, 692779,
      1011717, 832913, 1191009, 1067323, 1192070, 515341, 564620, 1471685, 692878,
    ],
  },
  pageViews: {
    actual: [
      130768, 229964, 247511, 275619, 220999, 251273, 285853, 239383, 257941, 145971, 154547,
      134104, 150520, 280825, 253793, 275212, 187087, 254150, 152188, 185579,
    ],
    projected: [
      120553, 227355, 181531, 235976, 247717, 299365, 214921, 267551, 121081, 118930, 272410,
      200217, 289031, 280382, 113487, 286664, 196646, 216526, 253414, 193437,
    ],
  },
};

export const topCampaignsChartData: TopCampaignsData[] = [
  {
    campaign: 'Search',
    users: 112000,
  },
  {
    campaign: 'Direct',
    users: 82000,
  },
  {
    campaign: 'Referral',
    users: 58000,
  },
  {
    campaign: 'Unassigned',
    users: 42000,
  },
  {
    campaign: 'Social',
    users: 30000,
  },
  {
    campaign: 'Newsletter',
    users: 16000,
  },
];

export const userByCountryData: UserByCountryData[] = [
  {
    id: 1,
    country: {
      name: 'Nepal',
      flag: 'twemoji:flag-nepal',
    },
    totalUsers: 84694,
    newUsers: 9536,
    engagedSessions: 19536,
    growthRate: '2.90%',
    actions: true,
  },
  {
    id: 2,
    country: {
      name: 'India',
      flag: 'twemoji:flag-india',
    },
    totalUsers: 30612,
    newUsers: 7700,
    engagedSessions: 2900,
    growthRate: '-4.31%',
    actions: true,
  },
  {
    id: 3,
    country: {
      name: 'Australia',
      flag: 'twemoji:flag-australia',
    },
    totalUsers: 22112,
    newUsers: 2778,
    engagedSessions: 21778,
    growthRate: '0.05%',
    actions: true,
  },
  {
    id: 4,
    country: {
      name: 'USA',
      flag: 'twemoji:flag-us-outlying-islands',
    },
    totalUsers: 9928,
    newUsers: 2272,
    engagedSessions: 29272,
    growthRate: '11.31%',
    actions: true,
  },
  {
    id: 5,
    country: {
      name: 'Egypt',
      flag: 'twemoji:flag-egypt',
    },
    totalUsers: 9025,
    newUsers: 1374,
    engagedSessions: 10374,
    growthRate: '3.77%',
    actions: true,
  },
  {
    id: 6,
    country: {
      name: 'France',
      flag: 'twemoji:flag-france',
    },
    totalUsers: 5357,
    newUsers: 3374,
    engagedSessions: 3374,
    growthRate: '-1.94%',
    actions: true,
  },
  {
    id: 7,
    country: {
      name: 'Bangladesh',
      flag: 'twemoji:flag-bangladesh',
    },
    totalUsers: 5271,
    newUsers: 1901,
    engagedSessions: 16901,
    growthRate: '2.01%',
    actions: true,
  },
];

export const userByOSData: OSUserData[] = [
  {
    name: 'Mobile',
    value: 10,
    children: [
      { name: 'iOS', value: 8 },
      { name: 'Android', value: 2 },
    ],
  },
  {
    name: 'Tablet',
    value: 20,
    children: [
      { name: 'iPadOS', value: 14 },
      { name: 'Android', value: 6 },
    ],
  },
  {
    name: 'Desktop',
    value: 70,
    children: [
      { name: 'Windows', value: 35 },
      { name: 'Linux', value: 21 },
      { name: 'MacOS', value: 9.1 },
      { name: 'ChromeOS', value: 4.9 },
    ],
  },
];

export const sessionByOSChartData: SessionByOSData = {
  actual: [43, 24, 17, 41, 20, 39, 27, 42, 30, 21, 40, 19, 34, 45, 36],
  projected: [22, 41, 37, 20, 10, 29, 39, 14, 22, 27, 34, 25, 24, 32, 16],
};

export const userByCohortData: UserByCohortData[] = [
  { time: 'May 12 - May 18', count: 142, engagements: [142, 120, 103, 80, 40] },
  { time: 'May 19 - May 25', count: 185, engagements: [185, 128, 70, 52, 4] },
  { time: 'May 26 - Jun 01', count: 112, engagements: [112, 83, 53, 32, 2] },
  { time: 'Jun 02 - Jun 08', count: 56, engagements: [56, 20, 16, 2, 1] },
  { time: 'Jun 09 - Jun 15', count: 47, engagements: [47, 26, 5, 1, 0] },
  { time: 'Jun 16 - Jun 22', count: 27, engagements: [27, 2, 1, 0, 0] },
];

export const userLocations: ClientLocation[] = [
  { name: 'Japan', value: 44000 },
  { name: 'Greenland', value: 41000 },
  { name: 'India', value: 38000 },
  { name: 'Egypt', value: 27000 },
  { name: 'Mexico', value: 19000 },
  { name: 'Angola', value: 13000 },
  { name: 'Colombia', value: 11000 },
  { name: 'Finland', value: 7000 },
];
