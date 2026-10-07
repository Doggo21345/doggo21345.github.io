// Everything on the site comes from this file. Edit here, not in the components.
// Any link left as '' is hidden on the page.

export const profile = {
  name: 'Arya Panda',
  tagline: 'Growth & GTM data science. Behavioral analytics. Black belt.',
  location: 'Austin, TX  ·  Bellevue, WA (Fall 2026)',
  links: {
    email: '',
    linkedin: '',
    github: 'https://github.com/azpanda-glitch',
    youtube: '',
    tiktok: '',
    newsletter: '',
    resume: '',
  },
};

// Mass Effect style codex entry
export const codex = {
  primary: [
    'Junior at the University of Texas at Austin studying Business Analytics, Plan II Honors, and Data Science. GPA 3.91, graduating May 2027.',
    'I like figuring out why people do what they do inside a product: why they come back, why they leave, and which accounts are about to grow.',
  ],
  secondary: [
    'In high school I started a social media marketing agency, grew it to six figures, and sold it. That is where I learned that numbers only matter if they change a decision.',
    'Off the clock I make videos about the internship grind on YouTube and TikTok, and I run The Beehive, a newsletter of early-career internship openings.',
  ],
  stats: [
    { label: 'Class', value: 'Data Scientist' },
    { label: 'Origin', value: 'Austin, TX' },
    { label: 'Specialty', value: 'Growth · GTM · Behavior' },
    { label: 'Missions completed', value: '5 internships' },
  ],
};

// Galaxy map. x/y are percentages on the map.
export const missions = [
  {
    id: 'amazon',
    system: 'Amazon',
    role: 'Business Intelligence Engineer Intern',
    team: 'Alexa+ Mobile Product Analytics',
    when: 'Fall 2026',
    where: 'Bellevue, WA',
    status: 'ACTIVE',
    x: 72, y: 30,
    brief:
      'Building an analysis the team can re-run every week that ranks the reasons customers stop using the Alexa mobile app.',
    details: [
      'Built a customer-level table of possible causes: how deeply people use the app, how long they have had it, which devices they own, and how well Alexa answered them.',
      'Compared several model types and picked an Explainable Boosting Machine, a model that is accurate and still shows exactly how much each cause adds.',
      'Split each week-over-week change in lapse into two parts: customers changing their behavior vs. the customer mix shifting.',
      'Found that quality metrics only make sense once you hold usage volume fixed, since heavy users naturally see more errors.',
      'The result feeds a line in the weekly engagement report that leadership reads.',
    ],
    tools: ['Redshift', 'SQL', 'Python', 'EBM', 'XGBoost', 'SHAP', 'Claude Code'],
  },
  {
    id: 'xbox',
    system: 'Microsoft Xbox',
    role: 'Data Science Intern',
    team: 'Gaming Analytics',
    when: 'Summer 2026',
    where: 'Redmond, WA',
    status: 'COMPLETE',
    x: 52, y: 62,
    brief: 'Consumer (B2C) analytics on how players behave across Xbox.',
    details: [],
    tools: ['Python', 'SQL'],
  },
  {
    id: 'snowflake',
    system: 'Snowflake',
    role: 'Intern',
    team: '',
    when: '',
    where: '',
    status: 'COMPLETE',
    x: 30, y: 40,
    brief: 'Business (B2B) analytics: predicting which customer accounts were going to grow.',
    details: [],
    tools: ['SQL', 'Python'],
  },
  {
    id: 'tiktok',
    system: 'TikTok',
    role: 'Intern',
    team: '',
    when: '',
    where: '',
    status: 'COMPLETE',
    x: 18, y: 72,
    brief: '',
    details: [],
    tools: [],
  },
  {
    id: 'cloudflare',
    system: 'Cloudflare',
    role: 'Intern',
    team: '',
    when: '',
    where: '',
    status: 'COMPLETE',
    x: 84, y: 74,
    brief: '',
    details: [],
    tools: [],
  },
  {
    id: 'pepsico',
    system: 'PepsiCo',
    role: 'Intern',
    team: '',
    when: '',
    where: '',
    status: 'COMPLETE',
    x: 12, y: 22,
    brief: '',
    details: [],
    tools: [],
  },
];

// Side quests = projects, at work and on my own. Empty brief shows 'Briefing incoming'; empty status hides the stamp. Leave link as '' to hide it.
export const sideQuests = [
  {
    name: 'Green Portfolio',
    type: 'Data science project',
    status: '',
    brief: '',
    details: [],
    tools: [],
    link: '',
  },
  {
    name: 'Genie',
    type: 'Xbox data science project',
    status: '',
    brief: '',
    details: [],
    tools: [],
    link: '',
  },
  {
    name: 'Sourcing Helper',
    type: 'Chrome extension',
    status: 'LIVE',
    brief:
      'Reads the LinkedIn job posting you are looking at and builds one-click searches for the recruiters, hiring team, and past interns behind it.',
    details: [
      'Builds LinkedIn Boolean searches and Google X-ray searches from the role and company on the page.',
      'Optional email finder that tries several sources in order and checks each address before you use it.',
      'Never scrapes or automates LinkedIn. It only reads the posting on screen.',
    ],
    tools: ['JavaScript', 'Chrome Extensions API', 'Python tests'],
    link: 'https://github.com/azpanda-glitch/linkedin-sourcing-helper',
  },
  {
    name: 'Job Application Tracker',
    type: 'Google Apps Script',
    status: 'LIVE',
    brief:
      'Watches Gmail for application updates and logs every one to a Google Sheet, so I never update a tracker by hand.',
    details: [
      'Sorts each email into applied, online assessment, interview, rejection, or offer, with one tab per term.',
      'Backfills a full year of email, then scans every hour.',
      'Looks up the original posting on public job boards and asks for the smallest Gmail permission possible.',
    ],
    tools: ['Apps Script', 'Gmail API', 'Google Sheets'],
    link: '',
  },
  {
    name: 'The Beehive',
    type: 'Newsletter',
    status: 'ONGOING',
    brief: 'A newsletter that rounds up early-career internship openings every other day.',
    details: [
      'Each post lists company, role, pay, location, degree level, and a direct link to apply.',
      'Made my own Python and SVG pipeline that turns each roundup into on-brand graphics.',
    ],
    tools: ['Beehiiv', 'Python', 'SVG'],
    link: '',
  },
  {
    name: 'Internship Journey',
    type: 'YouTube & TikTok',
    status: 'ONGOING',
    brief: 'Short videos for college students trying to land internships, including a "Day X of Amazon internship" series.',
    details: [],
    tools: ['Video editing', 'Scripting'],
    link: '',
  },
  {
    name: 'Social Media Agency',
    type: 'Business',
    status: 'ACQUIRED',
    brief: 'Started a social media marketing agency in high school, grew it to six figures, and sold it.',
    details: [],
    tools: ['Marketing', 'Sales', 'Client management'],
    link: '',
  },
];

// Persona 5 style social stats. Rank is 1-5.
export const socialStats = [
  { stat: 'Knowledge', rank: 5, title: 'Erudite', note: 'SQL, Python, statistics, experiment design' },
  { stat: 'Proficiency', rank: 4, title: 'Skilled', note: 'Redshift, PySpark, QuickSight, Airflow, Git' },
  { stat: 'Guts', rank: 5, title: 'Lionhearted', note: 'Built and sold a company in high school' },
  { stat: 'Charm', rank: 4, title: 'Charismatic', note: '4 years of marketing, makes videos for fun' },
  { stat: 'Kindness', rank: 4, title: 'Selfless', note: 'Runs a free internship newsletter for students' },
];

// Persona 5 style confidants = hobbies
export const confidants = [
  { arcana: 'VII', name: 'The Chariot', what: 'Martial Arts', line: 'Black belt. Discipline first, then everything else.', rank: 10 },
  { arcana: 'VIII', name: 'Strength', what: 'Gym & Basketball', line: 'Pickup runs and lifting keep the brain working.', rank: 8 },
  { arcana: 'XIV', name: 'Temperance', what: 'Cooking', line: 'Same recipe, small changes, taste test. Basically A/B testing.', rank: 7 },
  { arcana: '0', name: 'The Fool', what: 'Gaming', line: 'Mass Effect, Persona, and way too many late nights with friends.', rank: 9 },
  { arcana: 'XVII', name: 'The Star', what: 'Content', line: 'Documenting the internship journey so others can skip the guesswork.', rank: 6 },
  { arcana: 'XIX', name: 'The Sun', what: 'The Beehive', line: 'A newsletter of early-career internship openings.', rank: 6 },
];
