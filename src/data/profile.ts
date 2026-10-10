// Everything on the site comes from this file. Edit here, not in the components.
// Any link left as '' is hidden on the page.

export const profile = {
  name: 'Arya Panda',
  tagline: 'Growth & GTM data science. Behavioral analytics. Black belt.',
  location: 'Austin, TX  ·  Bellevue, WA (Fall 2026)',
  links: {
    email: 'a12pandaa@gmail.com',
    linkedin: 'https://www.linkedin.com/in/aryapanda',
    github: 'https://github.com/Doggo21345',
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
    'In high school I started AP Media and Tech Pulse, a marketing agency. Clients were spending on ads without knowing what worked, so I tested every channel and moved budget to the ones that paid off. I grew it to six figures and sold it.',
    'Off the clock I make videos about the internship grind on YouTube and TikTok, and I run The Beehive, a newsletter of early-career internship openings.',
  ],
  stats: [
    { label: 'Class', value: 'Data Scientist' },
    { label: 'Origin', value: 'Austin, TX' },
    { label: 'Specialty', value: 'Growth · GTM · Behavior' },
    { label: 'Missions completed', value: '5 internships + 1 company' },
  ],
};

// Galaxy map. x/y are percentages on the map. color/rings control the planet image.
export const missions = [
  {
    id: 'amazon',
    logo: '/images/logos/amazon.svg',
    system: 'Amazon Alexa',
    role: 'Product Data Engineering Intern',
    when: 'Fall 2026',
    where: 'Bellevue, WA',
    status: 'ACTIVE',
    color: '#ff9900',
    rings: true,
    x: 74, y: 26,
    brief:
      'Built agents that let product managers pull subscription numbers on their own, and automated churn prediction (guessing who will stop using Alexa).',
    story:
      'PMs had to wait on analysts for every question. I turned their needs into clear metric definitions and an agent that answers directly. Now I am extending it to explain why a metric moved, starting with why people stop using Alexa.',
    details: [
      'Self-serve agents used by 20+ people.',
      'Automated churn prediction, saving the product team 10+ hours a month.',
    ],
    tools: ['AI agents', 'SQL', 'Redshift', 'Python', 'Claude Code'],
  },
  {
    id: 'xbox',
    logo: '/images/logos/xbox.svg',
    system: 'Microsoft Xbox',
    role: 'Growth Marketing Data Science Intern',
    when: 'Summer 2026',
    where: 'Redmond, WA',
    status: 'COMPLETE',
    color: '#107c10',
    rings: false,
    x: 50, y: 50,
    brief:
      'Built a self-serve analytics tool that turns plain-English questions into SQL for the growth marketing org.',
    story:
      'My team was laid off mid-internship, which left me alone on growth data requests for about a month. I moved 3 years of data from Cosmos DB to Databricks and built a tool that turns plain-English questions into SQL. Early results were weak, so I trained it on my own past queries and talked to as many teams as I could.',
    details: [
      'Interviewed 10+ stakeholders. The tool is used by 60+ people and answers 1,000+ questions a day.',
      'Found 2 subscriber groups driving 90%+ of engagement.',
      'Measured a 17% lift in click-through rate from targeting changes.',
    ],
    tools: ['Databricks', 'Cosmos DB', 'SQL', 'Python', 'LLMs'],
  },
  {
    id: 'tiktok',
    logo: '/images/logos/tiktok.svg',
    system: 'TikTok',
    role: 'BizOps Data Engineer',
    when: 'Spring 2026',
    where: 'Austin, TX',
    status: 'COMPLETE',
    color: '#25f4ee',
    rings: true,
    x: 22, y: 70,
    brief:
      'Built a pipeline that automated creative audits (reviews of how a seller\'s ads are doing) and opened the results to the whole sales org.',
    story:
      'Audits were done by hand every time someone asked. I made it one click, and built a Tableau dashboard so people without SQL skills could explore the results.',
    details: [
      'Cut 3 hours of analyst work per audit run.',
      'Self-serve reporting for 100+ analysts and 200+ salespeople.',
      'Cut scattered data by over 90%.',
      'Ran an A/B test on onboarding across 200+ sellers.',
    ],
    tools: ['Airflow', 'dbt', 'Apache Spark', 'Tableau', 'A/B testing'],
  },
  {
    id: 'snowflake',
    logo: '/images/logos/snowflake.svg',
    system: 'Snowflake',
    role: 'ABM Marketing Operations Intern',
    when: 'Fall 2025',
    where: 'Menlo Park, CA',
    status: 'COMPLETE',
    color: '#29b5e8',
    rings: false,
    x: 30, y: 34,
    brief: 'Built models in Python that ranked which accounts sales should go after.',
    story:
      'Sales could not tell which accounts were worth chasing. My model scored them and found new contacts to reach them another way.',
    details: [
      '21% lift in engagement and $365K in annual contract value.',
      'Cut automation errors by 90% and manual data steps by 40%.',
    ],
    tools: ['Python', 'Machine learning', 'SQL'],
  },
  {
    id: 'cloudflare',
    logo: '/images/logos/cloudflare.svg',
    system: 'Cloudflare',
    role: 'Marketing Analyst Intern',
    when: 'Summer 2025',
    where: 'Austin, TX',
    status: 'COMPLETE',
    color: '#f38020',
    rings: true,
    x: 82, y: 72,
    brief:
      'Built a model in BigQuery to predict which partner and event marketing campaigns would perform well.',
    story:
      'Partner and marketing teams were reporting from messy, mismatched data and choosing campaigns without a clear way to spot winners. I gave them one clean source and a model to score campaigns ahead of time.',
    details: [
      'Logistic regression model that improved prediction quality (ROC-AUC) by 17%.',
      'Rebuilt the partner onboarding data flow, cleaning 98%+ of records and saving 40+ hours a quarter.',
      'Automated recurring work, cutting errors by 65%.',
    ],
    tools: ['BigQuery', 'SQL', 'Logistic regression'],
  },
  {
    id: 'pepsico',
    logo: '',
    system: 'PepsiCo',
    role: 'Intern',
    when: '',
    where: '',
    status: 'COMPLETE',
    color: '#2a6ad8',
    rings: false,
    x: 12, y: 18,
    brief:
      'Built RAG agents (AI helpers that look up company information before answering) to handle routine questions.',
    story:
      'People kept phoning the warehouse with the same questions, pulling staff away from their work. My agents answered those questions directly.',
    details: ['Cut phone calls to the warehouse by 21% in one month.'],
    tools: ['LLMs', 'RAG', 'Python'],
  },
  {
    id: 'apmedia',
    logo: '',
    system: 'AP Media and Tech Pulse',
    role: 'Founder and CEO',
    when: '2020 – 2025',
    where: 'Dallas, TX',
    status: 'ACQUIRED',
    color: '#b14cff',
    rings: true,
    x: 56, y: 86,
    brief: 'Started a marketing agency in high school and grew it to six figures before it was acquired.',
    story:
      'Clients were spending on ads without knowing what worked. I tested and measured each channel, then moved budget to the ones that paid off.',
    details: [
      'Ran 15+ A/B tests for 5+ clients.',
      'Built a model showing which channels drove sales, improving conversion rates by 25%.',
    ],
    tools: ['A/B testing', 'Attribution modeling', 'Paid social'],
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
    status: 'SHIPPED',
    brief: 'A self-serve tool that turns plain-English questions into SQL, so the Xbox growth team could get answers without waiting on an analyst.',
    details: [
      'Moved 3 years of data from Cosmos DB to Databricks so the tool had one place to query.',
      'Early answers were weak, so I trained it on my own past queries and on what 10+ teams told me they needed.',
      'Used by 60+ people, answering 1,000+ questions a day.',
    ],
    tools: ['Databricks', 'SQL', 'LLMs'],
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
];

// Skill tree. rank is 1-5; short is the label on the chart.
export const skills = [
  { stat: 'SQL & Data Modeling', short: 'SQL', rank: 5, title: 'Proficient', note: 'Redshift, BigQuery, Databricks, Snowflake. Turning vague questions into clear metric definitions.' },
  { stat: 'Python & Machine Learning', short: 'ML', rank: 5, title: 'Proficient', note: 'Churn prediction at Amazon, account scoring at Snowflake, campaign prediction at Cloudflare.' },
  { stat: 'Data Engineering', short: 'PIPELINES', rank: 4, title: 'Proficient', note: 'Airflow, dbt, and Spark pipelines at TikTok. Moved 3 years of data from Cosmos DB to Databricks at Xbox.' },
  { stat: 'Experimentation', short: 'A/B TESTS', rank: 4, title: 'Proficient', note: 'Onboarding A/B test across 200+ sellers at TikTok, 15+ tests for agency clients, a 17% CTR lift at Xbox.' },
  { stat: 'BI & Dashboards', short: 'BI', rank: 4, title: 'Proficient', note: 'Tableau and self-serve reporting used by 300+ analysts and salespeople at TikTok.' },
  { stat: 'AI & LLM Agents', short: 'AI AGENTS', rank: 5, title: 'Proficient', note: 'Text-to-SQL at Xbox, self-serve agents at Amazon, RAG agents at PepsiCo.' },
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

// Player profile: why media & gaming, plus all-time favorite games.
// Game art: official Steam library covers, used as fan art.
export const playerProfile = {
  pitch: [
    'I think the media and gaming industries are really cool, and that is where I want to build my career.',
    'The work I have enjoyed most sits right there: how players behave at Xbox, how creators and sellers grow on TikTok, and what makes people watch my own videos. I want to do growth and behavioral data science for a game studio, a streaming service, or a media platform.',
  ],
  games: [
    {
      name: 'Cyberpunk 2077',
      studio: 'CD Projekt Red',
      style: 'cp',
      image: '/images/games/cyberpunk-2077.jpg',
      line: 'An open world in Night City where you build your own legend. My all-time number one.',
    },
    {
      name: 'Mass Effect',
      studio: 'BioWare',
      style: 'me',
      image: '/images/games/mass-effect.jpg',
      line: 'A sci-fi trilogy where every choice you make carries forward, all the way to the end.',
    },
    {
      name: 'Persona 5',
      studio: 'Atlus',
      style: 'p5',
      image: '/images/games/persona-5.jpg',
      line: 'Students by day, Phantom Thieves by night. The style of this whole site comes from here.',
    },
  ],
};
