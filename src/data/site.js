export const siteConfig = {
  name: 'RYNX',
  legalName: 'RYNX',
  siteUrl: 'https://rynx.dev',
  email: 'hello@rynx.dev',
  location: 'India',
  defaultTitle: 'RYNX | Premium websites, software platforms, and automation systems',
  description:
    'RYNX designs premium websites, internal platforms, automation workflows, and launch-ready digital systems for modern businesses.',
  keywords: [
    'RYNX',
    'web design agency',
    'custom software studio',
    'Vercel ready website',
    'automation systems',
    'internal dashboards',
    'premium agency website',
    'software development company',
  ],
  social: {
    github: 'https://github.com/Suraj1812/RYNX',
  },
}

export const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'Work', href: '/projects' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
]

export const proofPoints = [
  'Sharper first impression',
  'Responsive on every screen',
  'SEO and metadata included',
  'Vercel-ready build',
]

export const homeStats = [
  { value: '4-8', label: 'week launch tracks' },
  { value: '24h', label: 'average response window' },
  { value: '3', label: 'core lanes: strategy, design, engineering' },
  { value: '100%', label: 'handoff clarity and documentation' },
]

export const serviceLines = [
  {
    id: 'brand-sites',
    title: 'Brand and marketing websites',
    media: '/visual-brand-motion.svg',
    summary:
      'Premium websites with cleaner hierarchy, better pacing, and a stronger first impression.',
    outcomes: [
      'Sharper messaging',
      'Responsive layouts',
      'Conversion-ready structure',
    ],
    deliverables: ['Site strategy', 'UX writing support', 'Design system', 'Production build'],
  },
  {
    id: 'product-platforms',
    title: 'Custom platforms and portals',
    media: '/visual-dashboard-motion.svg',
    summary:
      'Dashboards and portals that feel clear, fast, and easier for teams to operate.',
    outcomes: [
      'Role-based flows',
      'Clear information hierarchy',
      'Enterprise-grade frontend feel',
    ],
    deliverables: ['Product scoping', 'UI architecture', 'Frontend engineering', 'Launch support'],
  },
  {
    id: 'automation',
    title: 'Automation and AI operations',
    media: '/visual-automation-motion.svg',
    summary:
      'Automation layers that remove repetitive work without making the product feel robotic.',
    outcomes: [
      'Lead routing',
      'Ops visibility',
      'Practical AI features',
    ],
    deliverables: ['Process mapping', 'Automation design', 'Integration planning', 'Operational QA'],
  },
  {
    id: 'launch-readiness',
    title: 'Launch readiness and growth support',
    media: '/visual-launch-motion.svg',
    summary:
      'The deployment, QA, and handoff layer that makes the project feel ready to ship.',
    outcomes: [
      'Vercel deployment setup',
      'Environment docs',
      'Production checklist',
    ],
    deliverables: ['Deployment prep', 'QA sweep', 'SEO pass', 'Support runway'],
  },
]

export const capabilities = [
  'Responsive product marketing',
  'Design systems and UI cleanup',
  'Corporate presentation websites',
  'Internal dashboards and reporting views',
  'Lead capture and contact flows',
  'Automation-ready frontend foundations',
]

export const caseStudies = [
  {
    id: 'retail-ops',
    category: 'Internal Systems',
    title: 'Global retail operations portal',
    media: '/visual-dashboard-motion.svg',
    summary:
      'A cleaner operating view for approvals, reporting, and rollout coordination.',
    challenge:
      'The team was juggling spreadsheets, scattered approvals, and inconsistent reporting across regions.',
    solution:
      'We turned the flow into a dashboard-led portal with clearer states, approvals, and reporting.',
    impact: [
      { label: 'approval time', value: '-34%' },
      { label: 'market rollout clarity', value: '+1 shared view' },
      { label: 'handoff friction', value: 'significantly reduced' },
    ],
    services: ['UX restructuring', 'Dashboard UI', 'Workflow mapping'],
    stack: ['React', 'Vite', 'Tailwind CSS', 'Vercel'],
  },
  {
    id: 'b2b-growth',
    category: 'Web Experience',
    title: 'Premium B2B growth website',
    media: '/visual-brand-motion.svg',
    summary:
      'A visual refresh that made the company feel sharper, larger, and easier to trust.',
    challenge:
      'The old site looked generic and did not match the company’s pricing, clients, or ambition.',
    solution:
      'We introduced stronger type, better hierarchy, and a cleaner lead path without the AI-made look.',
    impact: [
      { label: 'brand perception', value: 'upgraded' },
      { label: 'content clarity', value: '+structured messaging' },
      { label: 'launch readiness', value: 'SEO + metadata included' },
    ],
    services: ['Brand website', 'Content structure', 'SEO foundation'],
    stack: ['React', 'Framer Motion', 'Vercel'],
  },
  {
    id: 'service-intake',
    category: 'Automation',
    title: 'Lead intake and response workflow',
    media: '/visual-automation-motion.svg',
    summary:
      'A lead flow built to feel premium for users and operationally clean for the team.',
    challenge:
      'The business needed a more reliable contact experience with stronger validation and clearer signals.',
    solution:
      'We built a production-friendly flow with structured payloads and a Vercel-compatible endpoint.',
    impact: [
      { label: 'enquiry quality', value: 'higher signal' },
      { label: 'ops readiness', value: 'documented' },
      { label: 'deployment fit', value: 'Vercel aligned' },
    ],
    services: ['Contact flow design', 'Validation', 'Deployment prep'],
    stack: ['Vercel Functions', 'Resend API', 'React'],
  },
]

export const projectCategories = ['All', ...new Set(caseStudies.map((item) => item.category))]

export const processSteps = [
  {
    title: 'Clarify the business signal',
    description:
      'Lock the audience, message, and business goal first.',
  },
  {
    title: 'Design the premium layer',
    description:
      'Shape layout, type, motion, and content so it feels deliberate.',
  },
  {
    title: 'Ship the production build',
    description:
      'Ship the frontend, metadata, deployment setup, and handoff cleanly.',
  },
]

export const principles = [
  {
    title: 'Senior-level judgment',
    description:
      'Small teams move faster when the person making the decisions also understands the implementation consequences.',
  },
  {
    title: 'Design with commercial context',
    description:
      'A premium interface only works when the messaging, pacing, and structure match the company behind it.',
  },
  {
    title: 'Production before hype',
    description:
      'We care about routing, metadata, contact delivery, deployment, and documentation just as much as visuals.',
  },
]

export const aboutHighlights = [
  'Independent product and web studio',
  'Built for ambitious teams that want a sharper digital presence',
  'Focused on websites, software surfaces, and clean operations',
]

export const faqItems = [
  {
    question: 'What kind of companies is RYNX best for?',
    answer:
      'RYNX is a strong fit for service businesses, operators, startups growing into a more premium positioning, and teams that need a sharper digital layer before going larger.',
  },
  {
    question: 'Can this be deployed directly on Vercel?',
    answer:
      'Yes. The project is structured for Vercel with SPA rewrites, a production contact function, and deployment notes in the README.',
  },
  {
    question: 'Can you support both light and dark mode without making it look gimmicky?',
    answer:
      'Yes. The theme system is built around restrained tokens and persisted preference, so both modes feel intentional rather than decorative.',
  },
]

export const contactChannels = [
  { label: 'Email', value: siteConfig.email },
  { label: 'Location', value: 'India, serving teams worldwide' },
  { label: 'Typical response', value: 'Within one business day' },
  { label: 'Best for', value: 'Websites, software platforms, and automation work' },
]

export const timelineOptions = ['As soon as possible', 'Within 2 weeks', 'This month', 'Next quarter']
export const budgetOptions = ['Under $5k', '$5k to $15k', '$15k to $30k', '$30k+', 'Need guidance']
