import {
  Bot,
  BriefcaseBusiness,
  Code2,
  GraduationCap,
  Layers3,
  MessageCircle,
  Music,
  PenLine,
  Rocket,
  Smartphone,
  Workflow,
} from "lucide-react";

export const profile = {
  name: "Swarnali Roy",
  role: "Senior Software Engineer",
  headline:
    "React Native and React engineer building production apps, polished interfaces, and release-ready product workflows.",
  summary:
    "I build production-grade React Native, React, and Next.js experiences, translate Figma into refined interfaces, integrate real APIs, and help teams ship through clear Agile workflows.",
  about: [
    "Software Engineer with 4+ years of experience building production-level mobile and web applications using React Native, React, Next.js, TypeScript, and NestJS. I work across cross-platform development, API integration, performance optimization, and release-ready user experiences.",
    "My recent work includes owning mobile feature development, translating Figma designs into polished responsive interfaces, integrating monetization SDKs, building supporting backend APIs, and managing App Store and Google Play release cycles.",
    "Alongside engineering, I bring Agile coordination experience: facilitating daily stand-ups, translating requirements into Jira tickets, supporting backlog refinement, tracking blockers, and documenting workflows in Confluence. I also use AI-assisted tools like Claude, Codex, ChatGPT, and GitHub Copilot to accelerate delivery and improve code quality.",
  ],
  location: "Dhaka, Bangladesh",
  email: "swarnali.roy093@gmail.com",
  resumeHref: "/resume/swarnali-roy-resume.pdf",
  socials: [
    {
      label: "GitHub",
      href: "https://github.com/SwarnaliRoy94",
    },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/royswarnali/",
    },
    {
      label: "DEV",
      href: "https://dev.to/swarnaliroy94",
    },
  ],
};

export const stats = [
  { value: "4+", label: "Years of production engineering" },
  { value: "180K+", label: "DEV Community views" },
  { value: "App Store", label: "Release cycle ownership" },
];

export const focusAreas = [
  {
    title: "Mobile engineering",
    description:
      "Cross-platform React Native apps with responsive UI, release ownership, monetization, and app store delivery.",
    icon: Smartphone,
  },
  {
    title: "Frontend systems",
    description:
      "Next.js and React interfaces with TypeScript, Tailwind CSS, Redux Toolkit, RTK Query, REST, and GraphQL.",
    icon: Layers3,
  },
  {
    title: "Agile delivery",
    description:
      "Jira tickets, sprint visibility, backlog support, Confluence documentation, and team coordination.",
    icon: Workflow,
  },
  {
    title: "AI-assisted workflow",
    description:
      "Claude, Codex, ChatGPT, GitHub Copilot, and prompt engineering for faster debugging and cleaner delivery.",
    icon: Bot,
  },
];

export const experiences = [
  {
    company: "Younode, Inc.",
    role: "Software Engineer & Agile Coordinator",
    period: "Jan 2024 - Present",
    location: "Remote",
    summary:
      "Owns React Native feature delivery for a production social music app while supporting sprint clarity, release coordination, and cross-functional execution.",
    highlights: [
      "Developed and maintained cross-platform mobile features using React Native with strong UX and Figma-to-code accuracy.",
      "Owned feature work including follow interactions, like animations, onboarding, monetization, and UI rebranding streams.",
      "Managed mobile release cycles: build generation, versioning, deployment, App Store, and Google Play coordination.",
      "Integrated AppLovin and Meta Audience Network for in-feed ads and built NestJS APIs to support mobile functionality.",
      "Facilitated daily Scrum stand-ups, translated requirements into Jira tickets, clarified acceptance criteria, and tracked blockers.",
      "Documented workflows and technical decisions in Confluence while using AI tools to accelerate debugging, ticket drafting, and delivery.",
    ],
    tags: [
      "React Native",
      "NestJS",
      "AppLovin",
      "Jira",
      "Confluence",
      "Release management",
    ],
  },
  {
    company: "Codeware Innovations",
    role: "Frontend & Mobile App Developer",
    period: "Oct 2021 - Apr 2023",
    location: "Dhaka, Bangladesh",
    summary:
      "Built client-facing React, Next.js, and React Native applications, including live sports products and production web platforms.",
    highlights: [
      "Built a React Native mobile app for a live sports news platform with live scores, match stats, and chat features.",
      "Developed production web applications including a domain purchasing platform using Next.js, TypeScript, Redux Toolkit, and RTK Query.",
      "Delivered social web features with Instagram-like interactions using React, Redux, and WordPress integrations.",
      "Integrated REST and GraphQL APIs while optimizing high-frequency frontend updates and reducing unnecessary re-renders.",
      "Introduced daily stand-ups, Trello/Kanban practices, and Notion documentation to improve team visibility.",
    ],
    tags: [
      "Next.js",
      "React Native",
      "GraphQL",
      "Redux Toolkit",
      "RTK Query",
      "Kanban",
    ],
  },
  {
    company: "Upwork",
    role: "Freelance Frontend Developer",
    period: "Jan 2021 - Sep 2021",
    location: "International clients",
    summary:
      "Delivered early web and mobile projects for international clients with ownership across communication, implementation, and timelines.",
    highlights: [
      "Delivered web and mobile apps using React, React Native, Redux, and API integrations.",
      "Managed requirements, timelines, and communication across client-facing projects.",
    ],
    tags: ["React", "React Native", "Redux", "Client communication"],
  },
];

export const projects = [
  {
    name: "Pulp",
    category: "Music sharing social platform",
    stack: ["React Native", "Spotify API", "Firebase", "AppLovin"],
    description:
      "Production social music app with curated playlists, listening-history unlocks, rebranded UI, in-feed ads, and release support.",
    previewImages: [
      {
        src: "/projects/Pulp Portfolio Photos/pulp_collect.PNG",
        alt: "Pulp collection screen",
      },
      {
        src: "/projects/Pulp Portfolio Photos/pulp_connect.PNG",
        alt: "Pulp connect screen",
      },
      {
        src: "/projects/Pulp Portfolio Photos/pulp_discover.PNG",
        alt: "Pulp music discovery screen",
      },
    ],
    previewLayout: "phone-grid",
    appStoreUrl: "https://apps.apple.com/us/app/pulp/id1561314695",
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.younode.pulp",
    icon: Music,
  },
  {
    name: "Sportsdemy",
    category: "Sports news and live data",
    stack: ["Next.js", "React Native", "GraphQL"],
    description:
      "Built both the Next.js website and React Native app for real-time sports data, live scores, match stats, chat features, and high-frequency frontend updates.",
    previewImages: [
      {
        src: "/projects/Sportsdemy/sportsdemy_allmatches.png",
        alt: "Sportsdemy all matches mobile screen",
      },
      {
        src: "/projects/Sportsdemy/match_info.png",
        alt: "Sportsdemy match information screen",
      },
      {
        src: "/projects/Sportsdemy/live_chat.png",
        alt: "Sportsdemy live chat screen",
      },
      {
        src: "/projects/Sportsdemy/prev_matches.png",
        alt: "Sportsdemy previous matches screen",
      },
      {
        src: "/projects/Sportsdemy/tounament_standings.png",
        alt: "Sportsdemy tournament standings screen",
      },
    ],
    previewLayout: "phone-grid",
    icon: Rocket,
  },
  {
    name: "HireCraft",
    category: "Online assessment platform",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Zustand"],
    description:
      "Role-based employer and candidate panels with exam timers, progress handling, auto-submission, and workflow-focused UX.",
    previewImages: [
      {
        src: "/projects/hirecraft-login.png",
        alt: "HireCraft sign-in screen",
      },
    ],
    githubUrl: "https://github.com/SwarnaliRoy94/HireCraft",
    liveUrl: "https://hire-craft-xi.vercel.app/login",
    icon: BriefcaseBusiness,
  },
  {
    name: "TripTailor",
    category: "AI travel assistant",
    stack: ["React", "LLM APIs", "Claude", "Codex"],
    description:
      "AI-powered travel assistant for planning trips and flight-booking workflows, built with LLM integration and AI-assisted development.",
    previewImages: [
      {
        src: "/projects/TripTailor Portfolio/TripTailor_Landing.png",
        alt: "TripTailor landing screen",
      },
      {
        src: "/projects/TripTailor Portfolio/trip_form.png",
        alt: "TripTailor trip planning form",
      },
      {
        src: "/projects/TripTailor Portfolio/plan.png",
        alt: "TripTailor generated trip options",
      },
    ],
    githubUrl: "https://github.com/SwarnaliRoy94/TravelAgent",
    liveUrl: "https://travel-agent-3oig.vercel.app/",
    icon: Bot,
  },
  {
    name: "Blood Bank App",
    category: "Donor discovery mobile app",
    stack: ["React Native", "Redux Toolkit"],
    description:
      "Mobile app for donor search, donor profiles, authentication, password recovery, profile updates, and image uploads.",
    previewImages: [
      {
        src: "/projects/BloodBank/login.png",
        alt: "Blood Bank app login screen",
      },
      {
        src: "/projects/BloodBank/blood_bank_home.png",
        alt: "Blood Bank app home screen",
      },
      {
        src: "/projects/BloodBank/become_a_donor.png",
        alt: "Blood Bank become a donor screen",
      },
    ],
    previewLayout: "phone-grid",
    githubUrl: "https://github.com/SwarnaliRoy94/bloodbankapp",
    icon: MessageCircle,
  },
  {
    name: "Exam Taker App",
    category: "Mobile exam experience",
    stack: ["React Native"],
    description:
      "MCQ exam flow with subject selection, countdown timer, swipeable questions, review flags, and visual question states.",
    previewImages: [
      {
        src: "/ExamTaker/catagory_choosing.png",
        alt: "Exam Taker subject selection screen",
      },
      {
        src: "/ExamTaker/question.png",
        alt: "Exam Taker question screen",
      },
      {
        src: "/ExamTaker/drawer.png",
        alt: "Exam Taker question drawer screen",
      },
    ],
    previewLayout: "phone-grid",
    githubUrl: "https://github.com/SwarnaliRoy94/examTakerApplication",
    icon: PenLine,
  },
];

export const skillCategories = [
  { id: "all", label: "All" },
  { id: "frontend", label: "Frontend & Mobile" },
  { id: "backend", label: "Backend" },
  { id: "state", label: "State" },
  { id: "workflow", label: "Workflow & AI" },
];

export const skills = [
  { name: "React Native", level: 94, category: "frontend" },
  { name: "React.js", level: 92, category: "frontend" },
  { name: "JavaScript", level: 90, category: "frontend" },
  { name: "Next.js", level: 88, category: "frontend" },
  { name: "TypeScript", level: 88, category: "frontend" },
  { name: "Tailwind CSS", level: 82, category: "frontend" },
  { name: "Firebase", level: 68, category: "frontend" },
  { name: "App Store / Google Play Releases", level: 84, category: "frontend" },
  { name: "Redux Toolkit", level: 84, category: "state" },
  { name: "RTK Query", level: 80, category: "state" },
  { name: "Redux", level: 82, category: "state" },
  { name: "Zustand", level: 65, category: "state" },
  { name: "GraphQL", level: 86, category: "backend" },
  { name: "REST APIs", level: 78, category: "backend" },
  { name: "Node.js", level: 70, category: "backend" },
  { name: "MySQL", level: 78, category: "backend" },
  { name: "NestJS", level: 60, category: "backend" },
  { name: "PostgreSQL", level: 60, category: "backend" },
  { name: "Git & GitHub", level: 88, category: "workflow" },
  { name: "Agile/Scrum", level: 84, category: "workflow" },
  { name: "Jira", level: 86, category: "workflow" },
  { name: "Confluence", level: 80, category: "workflow" },
  { name: "AI-assisted Development", level: 84, category: "workflow" },
  { name: "Vercel", level: 80, category: "workflow" },
];

export const credentials = [
  {
    title: "B.Sc. in Computer Science & Engineering",
    subtitle: "Ahsanullah University of Science and Technology",
    meta: "Apr 2014 - Jun 2018",
    icon: GraduationCap,
  },
  {
    title: "React Native",
    subtitle: "Coursera, Meta",
    meta: "Certification",
    icon: Smartphone,
  },
  {
    title: "Agile Development and Scrum",
    subtitle: "Coursera, IBM",
    meta: "Certification",
    icon: Workflow,
  },
  {
    title: "Frontend Developer (React)",
    subtitle: "HackerRank",
    meta: "Certification",
    icon: Code2,
  },
];
