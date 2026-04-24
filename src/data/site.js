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
  'Boardroom-ready visual language',
  'Fast, responsive delivery',
  'SEO and metadata included',
  'Vercel-friendly deployment',
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
    summary:
      'Executive-facing websites that look premium, load fast, and give your company a sharper first impression.',
    outcomes: [
      'Clear positioning and messaging hierarchy',
      'Responsive layouts that hold up on every screen',
      'Metadata, structured content, and conversion-ready sections',
    ],
    deliverables: ['Site strategy', 'UX writing support', 'Design system', 'Production build'],
  },
  {
    id: 'product-platforms',
    title: 'Custom platforms and portals',
    summary:
      'Internal tools, portals, and operating systems that reduce friction for teams, clients, and leadership.',
    outcomes: [
      'Role-based dashboard experiences',
      'Clean information architecture for complex workflows',
      'Stable frontends that feel enterprise, not improvised',
    ],
    deliverables: ['Product scoping', 'UI architecture', 'Frontend engineering', 'Launch support'],
  },
  {
    id: 'automation',
    title: 'Automation and AI operations',
    summary:
      'Workflow layers that remove repetitive manual work while keeping the experience human and trustworthy.',
    outcomes: [
      'Lead routing and follow-up automation',
      'Ops dashboards connected to live business signals',
      'Practical AI features without gimmicky UI',
    ],
    deliverables: ['Process mapping', 'Automation design', 'Integration planning', 'Operational QA'],
  },
  {
    id: 'launch-readiness',
    title: 'Launch readiness and growth support',
    summary:
      'The final layer that makes a project feel production-grade: documentation, deployment, analytics, and handoff.',
    outcomes: [
      'Vercel-ready deployment and routing setup',
      'Environment variable documentation',
      'Clean README and production checklist',
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
    summary:
      'A single operating view for leadership, approvals, and rollout coordination across multiple markets.',
    challenge:
      'The team was juggling spreadsheets, scattered approvals, and inconsistent reporting across regions, which slowed every launch.',
    solution:
      'We restructured the workflow into a dashboard-led portal with cleaner states, approvals, and reporting surfaces that leadership could read quickly.',
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
    summary:
      'A conversion-focused website refresh that made the company feel larger, sharper, and easier to trust.',
    challenge:
      'The old site looked generic and overused startup patterns that did not match the company’s pricing, clients, or ambition.',
    solution:
      'We introduced a restrained visual system, stronger typography, a better content hierarchy, and a cleaner lead path without the usual AI-generated feel.',
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
    summary:
      'A contact flow designed to feel premium to the user and operationally clean for the team receiving enquiries.',
    challenge:
      'The business needed a reliable contact experience with stronger validation, better signals, and cleaner deployment behaviour.',
    solution:
      'We built a production-friendly form flow with structured payloads, deployment notes, and a Vercel-compatible contact endpoint.',
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
      'We start by tightening the message, audience, and business outcome so the design and build decisions stay disciplined.',
  },
  {
    title: 'Design the premium layer',
    description:
      'Layout, type, spacing, color, motion, and content hierarchy are shaped to feel deliberate rather than generated.',
  },
  {
    title: 'Ship the production build',
    description:
      'We wire the frontend, metadata, deployment setup, contact flow, and documentation so launch is straightforward.',
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
  'Built for ambitious teams that want a cleaner digital presence',
  'Focused on websites, software surfaces, and operational clarity',
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

