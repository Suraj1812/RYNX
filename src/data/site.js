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
    'premium startup website',
    'custom software studio',
    'Vercel ready website',
    'automation systems',
    'internal dashboards',
    'premium digital product design',
    'frontend engineering studio',
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

export const trustIndicators = [
  'Senior-led design and engineering',
  'Vercel-ready production delivery',
  'Built for B2B, product, and ops-heavy teams',
  'Fast iteration without the agency bloat',
]

export const heroMetrics = [
  { value: 8, suffix: 'w', label: 'premium launch windows', note: 'for focused product and marketing tracks' },
  { value: 24, suffix: 'h', label: 'average response rhythm', note: 'senior-level turnaround on decisions' },
  { value: 3, suffix: '', label: 'core disciplines in one team', note: 'strategy, design, frontend engineering' },
  { value: 100, suffix: '%', label: 'handoff clarity', note: 'docs, deployment, QA, and polish included' },
]

export const homeSpotlights = [
  {
    eyebrow: 'Brand systems',
    title: 'Sharper presence at premium pricing',
    description:
      'Positioning, narrative flow, and visual polish aligned so the product feels more mature at first glance.',
  },
  {
    eyebrow: 'Product surfaces',
    title: 'Operational UI that still feels elegant',
    description:
      'Dashboards, portals, and internal systems that look decisive instead of improvised.',
  },
  {
    eyebrow: 'Launch discipline',
    title: 'Built to ship cleanly on Vercel',
    description:
      'Routing, metadata, performance, and contact flows are treated like part of the design quality bar.',
  },
]

export const clientSignals = [
  {
    title: 'Founder brief',
    quote: 'We need the product to feel investable, not templated.',
  },
  {
    title: 'Ops lead brief',
    quote: 'The interface has to feel clearer under pressure, not louder.',
  },
  {
    title: 'Sales brief',
    quote: 'First impression needs to justify the price point in minutes.',
  },
]

export const serviceLines = [
  {
    id: 'brand-sites',
    title: 'Brand and marketing websites',
    eyebrow: 'For launch, rebrand, and positioning resets',
    media: '/visual-brand-motion.svg',
    summary:
      'Executive-facing websites with stronger hierarchy, better pacing, and a premium first impression.',
    outcomes: ['Sharper narrative', 'Responsive polish', 'Conversion-ready structure'],
    deliverables: ['Strategy', 'UX copy support', 'Design system', 'Production build'],
  },
  {
    id: 'product-platforms',
    title: 'Custom platforms and portals',
    eyebrow: 'For operators, clients, and internal teams',
    media: '/visual-dashboard-motion.svg',
    summary:
      'Dashboards and portals that feel calmer, clearer, and more trustworthy under real usage.',
    outcomes: ['Role-based flows', 'Clear information hierarchy', 'Enterprise-grade frontend feel'],
    deliverables: ['Product scoping', 'UI architecture', 'Frontend engineering', 'Launch support'],
  },
  {
    id: 'automation',
    title: 'Automation and AI operations',
    eyebrow: 'For repetitive work that needs structure',
    media: '/visual-automation-motion.svg',
    summary:
      'Automation layers that remove manual drag without making the experience feel robotic or gimmicky.',
    outcomes: ['Lead routing', 'Ops visibility', 'Practical AI features'],
    deliverables: ['Process mapping', 'Automation design', 'Integration planning', 'Operational QA'],
  },
  {
    id: 'launch-readiness',
    title: 'Launch readiness and growth support',
    eyebrow: 'For teams getting serious about going live',
    media: '/visual-launch-motion.svg',
    summary:
      'The deployment, QA, analytics, and handoff layer that makes the product feel genuinely ready to ship.',
    outcomes: ['Vercel deployment setup', 'Environment docs', 'Production checklist'],
    deliverables: ['Deployment prep', 'QA sweep', 'SEO pass', 'Support runway'],
  },
]

export const capabilities = [
  'Responsive product marketing',
  'Narrative-led landing pages',
  'Corporate presentation websites',
  'Internal dashboards and reporting views',
  'Lead capture and contact flows',
  'Automation-ready frontend foundations',
  'Design system cleanup',
  'Launch and deployment readiness',
]

export const caseStudies = [
  {
    id: 'retail-ops',
    category: 'Internal Systems',
    title: 'Global retail operations portal',
    media: '/visual-dashboard-motion.svg',
    summary:
      'A cleaner operating view for approvals, reporting, and rollout coordination across markets.',
    challenge:
      'The team was juggling spreadsheets, scattered approvals, and inconsistent reporting across regions.',
    solution:
      'We restructured the workflow into a dashboard-led portal with cleaner states, approvals, and reporting.',
    impact: [
      { label: 'approval time', value: '-34%' },
      { label: 'market rollout clarity', value: '+1 shared view' },
      { label: 'handoff friction', value: 'reduced' },
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
      { label: 'launch readiness', value: 'SEO included' },
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
      'A lead flow built to feel premium for users and operationally clean for the receiving team.',
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
    title: 'Clarify the signal',
    description: 'Lock the audience, message, and commercial outcome first.',
  },
  {
    title: 'Design the premium layer',
    description: 'Shape layout, motion, and copy so it feels deliberate and expensive.',
  },
  {
    title: 'Ship the production build',
    description: 'Deploy cleanly with metadata, QA, documentation, and launch support.',
  },
]

export const principles = [
  {
    title: 'Senior-level judgment',
    description:
      'Decisions move faster when the same team understands strategy, interface design, and implementation consequences.',
  },
  {
    title: 'Commercial design thinking',
    description:
      'A premium interface only works when the structure matches the company, the audience, and the price point.',
  },
  {
    title: 'Production before hype',
    description:
      'Routing, performance, metadata, contact delivery, deployment, and QA are treated as part of the brand experience.',
  },
]

export const aboutHighlights = [
  'Independent product and web studio',
  'Built for ambitious teams that want a sharper digital presence',
  'Focused on websites, software surfaces, and clean operations',
]

export const aboutMetrics = [
  { value: 3, suffix: '', label: 'disciplines held together' },
  { value: 1, suffix: ' team', label: 'from concept to launch' },
  { value: 0, suffix: ' fluff', label: 'between design and build' },
]

export const faqItems = [
  {
    question: 'What kind of teams is RYNX best for?',
    answer:
      'RYNX is a strong fit for service businesses, operators, startups growing into a more premium positioning, and product teams that need a sharper digital layer before going larger.',
  },
  {
    question: 'Can this be deployed directly on Vercel?',
    answer:
      'Yes. The project is structured for Vercel with SPA rewrites, a production contact function, and deployment notes in the README.',
  },
  {
    question: 'Can you support both light and dark mode without it feeling gimmicky?',
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

export const contactExpectations = [
  'What feels too generic, cluttered, or low-trust today',
  'What the new experience needs to achieve commercially',
  'How quickly the team wants to move and who signs off',
]

export const timelineOptions = ['As soon as possible', 'Within 2 weeks', 'This month', 'Next quarter']
export const budgetOptions = ['Under $5k', '$5k to $15k', '$15k to $30k', '$30k+', 'Need guidance']
