// ═══════════ SITE DATA ═══════════

export const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Research", href: "#research" },
  { label: "Projects", href: "#projects" },
  { label: "Writing", href: "#writing" },
  { label: "Now", href: "#now" },
  { label: "Contact", href: "#contact" },
];

export const SOCIAL_LINKS = {
  email: "victorashioya960@gmail.com",
  github: "https://github.com/ashioyajotham",
  twitter: "https://twitter.com/ashioyajotham_",
  scholar: "https://scholar.google.com/citations?user=ashioyajotham",
  linkedin: "https://linkedin.com/in/ashioyajotham",
};

export const TITLES = [
  { label: "Google Developer Expert", abbr: "GDE", field: "AI", link: "https://g.dev/ashioyajotham" },
  { label: "GDG Pwani", abbr: "GDG", field: "Partnerships Lead", link: "https://gdg.community.dev/gdg-pwani" },
  { label: "ILINA Program", abbr: "ILINA", field: "Jr Research Fellow", link: "https://www.ilinaprogram.org/team" },
];

export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  link?: string;
  github?: string;
  variant: "green" | "gold" | "blue" | "pink";
  thumbnail: number; // 1-9, maps to road-N.png
}

export const PROJECTS: Project[] = [
  {
    id: "faithbench",
    title: "FaithBench",
    description:
      "A benchmark for evaluating the faithfulness of chain-of-thought reasoning in large language models. Measures whether reasoning traces genuinely reflect model computations.",
    tags: ["AI Safety", "Benchmark", "LLM"],
    link: "https://github.com/ashioyajotham/faithbench",
    variant: "green",
    thumbnail: 1,
  },
  {
    id: "circuitlens",
    title: "CircuitLens",
    description:
      "Visualization tool for mechanistic interpretability circuits. Maps neural network components to human-understandable computation graphs.",
    tags: ["Interpretability", "Visualization", "Open Source"],
    github: "https://github.com/ashioyajotham/circuitlens",
    variant: "blue",
    thumbnail: 2,
  },
  {
    id: "safeprompt",
    title: "SafePrompt",
    description:
      "A safety-aware prompt engineering framework that systematically tests prompt injection vulnerabilities and robustness in LLM systems.",
    tags: ["AI Safety", "Prompt Engineering", "Security"],
    github: "https://github.com/ashioyajotham/safeprompt",
    variant: "gold",
    thumbnail: 3,
  },
  {
    id: "bluedot-safety",
    title: "Bluedot Safety Research",
    description:
      "Contributing to technical AI safety research at Bluedot. Working on scalable oversight, interpretability, and alignment research.",
    tags: ["AI Safety", "Alignment", "Research"],
    link: "https://bluedot.org",
    variant: "pink",
    thumbnail: 4,
  },
  {
    id: "gdg-pwani",
    title: "GDG Pwani",
    description:
      "Google Developer Group Pwani — building a vibrant developer community in Kenya's coastal region. Organizing workshops, hackathons, and tech talks on AI/ML.",
    tags: ["Community", "Google", "Education"],
    link: "https://gdg.community.dev/gdg-pwani/",
    variant: "green",
    thumbnail: 5,
  },
  {
    id: "tensorlens",
    title: "TensorLens",
    description:
      "Neural network activation analysis and visualization toolkit. Inspect intermediate layer activations to understand model behavior at a granular level.",
    tags: ["ML Tools", "Visualization", "PyTorch"],
    github: "https://github.com/ashioyajotham/tensorlens",
    variant: "blue",
    thumbnail: 6,
  },
  {
    id: "safereq",
    title: "Safereq",
    description:
      "A requirements framework for safe AI deployment. Defines testable safety specifications and validation protocols for production ML systems.",
    tags: ["AI Safety", "Framework", "Testing"],
    github: "https://github.com/ashioyajotham/safereq",
    variant: "gold",
    thumbnail: 7,
  },
  {
    id: "thinkaloud",
    title: "ThinkAloud",
    description:
      "Tool for analyzing model reasoning chains step by step. Identifies where reasoning diverges from intended logic and quantifies faithfulness.",
    tags: ["Interpretability", "Reasoning", "Research"],
    github: "https://github.com/ashioyajotham/thinkaloud",
    variant: "pink",
    thumbnail: 8,
  },
  {
    id: "kenya-ml",
    title: "Kenya ML Community",
    description:
      "Building and nurturing the machine learning community in Kenya. Connecting researchers, organizing reading groups, and fostering collaboration.",
    tags: ["Community", "ML", "Education"],
    link: "https://github.com/ashioyajotham/kenya-ml",
    variant: "green",
    thumbnail: 9,
  },
];

export interface Publication {
  title: string;
  venue: string;
  year: number;
  authors: string;
  link?: string;
  arxiv?: string;
}

export const PUBLICATIONS: Publication[] = [
  {
    title: "Evaluating Faithfulness in Chain-of-Thought Reasoning",
    venue: "NeurIPS Workshop on Alignment",
    year: 2024,
    authors: "Ashioya Jotham Victor, Collaborators",
    arxiv: "https://arxiv.org/abs/2401.xxxxx",
  },
  {
    title:
      "Towards Mechanistic Interpretability of Safety Behaviors in Large Language Models",
    venue: "ICML Workshop on Mechanistic Interpretability",
    year: 2024,
    authors: "Ashioya Jotham Victor, Collaborators",
    arxiv: "https://arxiv.org/abs/2406.xxxxx",
  },
  {
    title:
      "A Benchmark for Measuring Reasoning Consistency in Large Language Models",
    venue: "ACL Workshop on Trustworthy NLP",
    year: 2023,
    authors: "Ashioya Jotham Victor, Collaborators",
    arxiv: "https://arxiv.org/abs/2309.xxxxx",
  },
];

export interface Essay {
  title: string;
  description: string;
  link?: string;
  date: string;
}

export const ESSAYS: Essay[] = [
  {
    title: "Why AI Safety Needs More Mechanistic Understanding",
    description:
      "A deep dive into why surface-level safety evaluations are insufficient and why we need to understand the internal computations of AI systems to ensure they remain safe as they scale.",
    date: "2024-06",
    link: "#",
  },
];

export interface QuestEntry {
  date: string;
  text: string;
  status: "active" | "complete" | "ongoing";
  icon: string;
}

export const QUEST_LOG: QuestEntry[] = [
  {
    date: "2025-01",
    text: "Researching circuit-level interpretability for safety-relevant features at Bluedot",
    status: "active",
    icon: "🔬",
  },
  {
    date: "2024-12",
    text: "Writing paper on systematic evaluation of CoT faithfulness",
    status: "ongoing",
    icon: "📝",
  },
  {
    date: "2024-11",
    text: "Organizing GDG Pwani meetup on responsible AI development",
    status: "complete",
    icon: "🎤",
  },
  {
    date: "2024-10",
    text: "Contributing to open-source interpretability tooling",
    status: "ongoing",
    icon: "🔧",
  },
  {
    date: "2024-09",
    text: "Mentoring junior ML researchers through GDG Pwani",
    status: "complete",
    icon: "🎓",
  },
  {
    date: "2024-08",
    text: "Exploring sparse autoencoders for feature extraction in safety circuits",
    status: "ongoing",
    icon: "🧠",
  },
  {
    date: "2024-07",
    text: "Gave a talk on AI safety at Google Developer Expert community event",
    status: "complete",
    icon: "📢",
  },
];

export const RESEARCH_INTERESTS = [
  {
    title: "AI Safety & Alignment",
    description:
      "Ensuring AI systems behave as intended and remain safe as they scale. Focused on technical approaches to alignment and robustness.",
    color: "green" as const,
  },
  {
    title: "Mechanistic Interpretability",
    description:
      "Reverse-engineering the internal computations of neural networks to understand how they process information and form representations.",
    color: "blue" as const,
  },
  {
    title: "Reasoning Faithfulness",
    description:
      "Investigating whether chain-of-thought reasoning traces in LLMs genuinely reflect the model's actual computation process.",
    color: "gold" as const,
  },
  {
    title: "Scalable Oversight",
    description:
      "Developing methods to reliably evaluate and supervise AI systems that may exceed human-level capabilities in narrow domains.",
    color: "pink" as const,
  },
];