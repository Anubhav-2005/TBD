export type Service = {
  slug: string;
  title: string;
  eyebrow: string;
  summary: string;
  price: string;
  timeline: string;
  deliverables: string[];
  technology: string[];
};

export const services: Service[] = [
  {
    slug: "websites",
    title: "Websites that earn attention",
    eyebrow: "Website development",
    summary:
      "Editorially sharp, impossibly fast sites built around the moment a buyer decides to care.",
    price: "From ₹1.8L",
    timeline: "4–8 weeks",
    deliverables: [
      "Content architecture",
      "Responsive interface",
      "CMS-ready build",
      "Analytics baseline",
    ],
    technology: ["Next.js", "TypeScript", "Cloudinary", "Vercel"],
  },
  {
    slug: "web-apps",
    title: "Software with a point of view",
    eyebrow: "Custom web apps",
    summary:
      "Useful software for the operational knots that spreadsheets and off-the-shelf tools leave behind.",
    price: "From ₹6L",
    timeline: "8–16 weeks",
    deliverables: ["Product strategy", "UX system", "Secure application", "Team enablement"],
    technology: ["Next.js", "PostgreSQL", "Prisma", "Redis"],
  },
  {
    slug: "ecommerce",
    title: "Commerce without friction",
    eyebrow: "E-commerce",
    summary:
      "Storefronts that make choosing feel simple—and give teams a calmer way to run growth.",
    price: "From ₹3.5L",
    timeline: "6–12 weeks",
    deliverables: ["Conversion design", "Catalog migration", "Payments", "Lifecycle analytics"],
    technology: ["Shopify", "Next.js", "Razorpay", "Klaviyo"],
  },
  {
    slug: "brand",
    title: "A brand people can repeat",
    eyebrow: "Branding & UI/UX",
    summary:
      "A distinctive verbal and visual system designed to make every subsequent decision easier.",
    price: "From ₹2.4L",
    timeline: "4–10 weeks",
    deliverables: ["Positioning", "Identity system", "Design language", "Launch toolkit"],
    technology: ["Figma", "FigJam", "After Effects", "Storybook"],
  },
  {
    slug: "growth",
    title: "Growth with signal",
    eyebrow: "SEO & marketing",
    summary:
      "Search, content, and campaigns that compound rather than chase a weekly dashboard spike.",
    price: "From ₹75K/mo",
    timeline: "90-day runway",
    deliverables: ["Search strategy", "Content engine", "Campaign creative", "Reporting"],
    technology: ["GA4", "Search Console", "HubSpot", "Looker Studio"],
  },
  {
    slug: "automation",
    title: "Operations, unblocked",
    eyebrow: "Automation & maintenance",
    summary:
      "Reliable systems that remove repetitive work, reduce risk, and leave your team room to think.",
    price: "From ₹60K/mo",
    timeline: "2–6 weeks",
    deliverables: ["Workflow audit", "Automations", "Monitoring", "Runbooks"],
    technology: ["Zapier", "n8n", "PostgreSQL", "Sentry"],
  },
];

export const industries = [
  "Restaurants",
  "Hospitals",
  "Schools",
  "Gyms",
  "Real Estate",
  "Hotels",
  "Law Firms",
  "Startups",
  "E-Commerce",
  "Manufacturing",
  "Clinics",
  "Corporate",
].map((title) => ({
  slug: title.toLowerCase().replace(/[^a-z0-9]+/g, "-"),
  title,
  promise: `A digital experience built for the way modern ${title.toLowerCase()} buyers decide.`,
}));

export const caseStudies = [
  {
    slug: "meridian-health",
    client: "Meridian Health",
    category: "Healthcare platform",
    title: "Making specialist care feel within reach.",
    metric: "+42%",
    metricLabel: "qualified consultations",
    accent: "from-cyan-300 via-blue-500 to-violet-600",
    technologies: ["Next.js", "Sanity", "GA4"],
    challenge:
      "High-intent visitors could not quickly find the right specialist or understand the next step.",
    result:
      "A calm guided path that made care options legible, bringing qualified consultation requests up 42% in 90 days.",
  },
  {
    slug: "northstar-living",
    client: "Northstar Living",
    category: "Real estate",
    title: "A property brand with room to breathe.",
    metric: "3.1×",
    metricLabel: "site engagement",
    accent: "from-amber-200 via-orange-400 to-rose-500",
    technologies: ["Next.js", "Cloudinary", "HubSpot"],
    challenge: "An exceptional portfolio was hidden behind dense copy and an inflexible CMS.",
    result:
      "An image-led story system and enquiry journey that increased meaningful browsing by 3.1×.",
  },
  {
    slug: "field-notes",
    client: "Field Notes",
    category: "B2B SaaS",
    title: "Turning a technical tool into a clear invitation.",
    metric: "-28%",
    metricLabel: "sales cycle",
    accent: "from-emerald-200 via-teal-500 to-cyan-600",
    technologies: ["Next.js", "PostHog", "Resend"],
    challenge: "The product was powerful, but buyers needed a sales call to understand its value.",
    result:
      "A focused narrative and interactive product tour helped teams self-qualify earlier, shortening sales cycles by 28%.",
  },
];

export const faqs = [
  [
    "What does an engagement start with?",
    "A focused working session. We align on the business problem, decision-makers, success measures, and the smallest credible first move.",
  ],
  [
    "Do you work with in-house teams?",
    "Often. We plug into existing product, marketing, and engineering teams with a clear decision rhythm and documented handoffs.",
  ],
  [
    "Can you support us after launch?",
    "Yes. We offer measured growth, maintenance, and automation retainers for teams who need a reliable long-term partner.",
  ],
  [
    "How do you price projects?",
    "We scope outcomes before interfaces. Fixed project ranges are agreed after discovery; ongoing work uses a monthly capacity model.",
  ],
] as const;

export const insights = [
  {
    slug: "the-cost-of-an-unclear-homepage",
    title: "The cost of an unclear homepage",
    category: "Conversion",
    minutes: 6,
    excerpt: "Most conversion problems begin before a visitor reaches your first CTA.",
  },
  {
    slug: "designing-for-the-second-decision",
    title: "Designing for the second decision",
    category: "Product",
    minutes: 8,
    excerpt: "The strongest product experiences make the next important choice feel inevitable.",
  },
  {
    slug: "a-better-way-to-measure-brand",
    title: "A better way to measure brand",
    category: "Strategy",
    minutes: 5,
    excerpt:
      "Brand measures should tell you whether preference is becoming easier—not just louder.",
  },
];

export const navItems: { href: Route; label: string }[] = [
  { href: "/services/websites" as Route, label: "Capabilities" },
  { href: "/work", label: "Selected work" },
  { href: "/process", label: "How we work" },
  { href: "/insights", label: "Insights" },
];
import type { Route } from "next";
