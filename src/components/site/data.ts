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
  { label: "ILINA Program", abbr: "ILINA", field: "Jr Research Fellow", link: "https://www.ilinaprogram.org/2026-jrfs" },
];

export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  link?: string;
  github?: string;
  variant: "green" | "gold" | "blue" | "pink";
  thumbnail?: string; // path like /projects/file.jpg or /projects/road-N.png
  badge?: string; // optional badge like "FEATURED", "IN PROGRESS", "COMING SOON"
}

export const PROJECTS: Project[] = [
  {
    id: "cot-faithfulness-mech-interp",
    title: "CoT-Faithfulness-Mech-Interp",
    description:
      "Mechanistic interpretability analysis of chain-of-thought faithfulness. Includes activation patching, circuit analysis, and benchmarks for evaluating whether reasoning traces genuinely reflect model computations.",
    tags: ["Python", "PyTorch", "TransformerLens"],
    github: "https://github.com/ashioyajotham/cot-faithfulness-mech-interp",
    variant: "green",
    thumbnail: "/projects/cot-faithfulness.jpg",
    badge: "★ FEATURED",
  },
  {
    id: "reasoning-circuit-atlas",
    title: "Reasoning Circuit Atlas",
    description:
      "Interactive atlas mapping reasoning circuits across model scales. Visualizes how faithfulness circuits develop during training.",
    tags: ["Python", "Plotly", "Streamlit"],
    variant: "blue",
    thumbnail: "/projects/reasoning-atlas.jpg",
    badge: "IN PROGRESS",
  },
  {
    id: "superposition-reasoning",
    title: "Superposition & Reasoning",
    description:
      "How superposition in MLP layers affects the model's ability to maintain faithful intermediate reasoning states.",
    tags: ["SAE", "Feature Extraction"],
    variant: "gold",
    thumbnail: "/projects/superposition.png",
    badge: "EXPLORATION",
  },
  {
    id: "patchlib",
    title: "PatchLib",
    description:
      "Lightweight library for structured activation patching experiments with clean abstractions for causal tracing.",
    tags: ["Python", "PyTorch", "Open Source"],
    variant: "green",
    thumbnail: "/projects/patchlib.png",
    badge: "IN DEVELOPMENT",
  },
  {
    id: "faithbench",
    title: "FaithBench",
    description:
      "A benchmark for evaluating the faithfulness of chain-of-thought reasoning in large language models. Measures whether reasoning traces genuinely reflect model computations.",
    tags: ["AI Safety", "Benchmark", "LLM"],
    github: "https://github.com/ashioyajotham/faithbench",
    variant: "green",
    thumbnail: "/projects/road-1.png",
  },
  {
    id: "circuitlens",
    title: "CircuitLens",
    description:
      "Visualization tool for mechanistic interpretability circuits. Maps neural network components to human-understandable computation graphs.",
    tags: ["Interpretability", "Visualization", "Open Source"],
    github: "https://github.com/ashioyajotham/circuitlens",
    variant: "blue",
    thumbnail: "/projects/road-2.png",
  },
  {
    id: "safeprompt",
    title: "SafePrompt",
    description:
      "A safety-aware prompt engineering framework that systematically tests prompt injection vulnerabilities and robustness in LLM systems.",
    tags: ["AI Safety", "Prompt Engineering", "Security"],
    github: "https://github.com/ashioyajotham/safeprompt",
    variant: "gold",
    thumbnail: "/projects/road-3.png",
  },
  {
    id: "tensorlens",
    title: "TensorLens",
    description:
      "Neural network activation analysis and visualization toolkit. Inspect intermediate layer activations to understand model behavior at a granular level.",
    tags: ["ML Tools", "Visualization", "PyTorch"],
    github: "https://github.com/ashioyajotham/tensorlens",
    variant: "blue",
    thumbnail: "/projects/road-6.png",
  },
  {
    id: "thinkaloud",
    title: "ThinkAloud",
    description:
      "Tool for analyzing model reasoning chains step by step. Identifies where reasoning diverges from intended logic and quantifies faithfulness.",
    tags: ["Interpretability", "Reasoning", "Research"],
    github: "https://github.com/ashioyajotham/thinkaloud",
    variant: "pink",
    thumbnail: "/projects/road-8.png",
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
    title: "Democratizing Quantitative Trading in African Markets",
    venue: "AIBF 2025",
    year: 2025,
    authors: "Victor Ashioya",
    link: "https://openreview.net/forum?id=yyNP1L26c6",
  },
  {
    title: "Enhancing HIV Testing Indicator Reporting",
    venue: "DSAI Journal",
    year: 2024,
    authors: "Victor Ashioya",
    link: "https://conferences.kabarak.ac.ke/index.php/dsai/issue/view/15",
  },
  {
    title: "The Future Remains Unsupervised",
    venue: "Deep Learning Indaba",
    year: 2023,
    authors: "Victor Ashioya",
    link: "https://openreview.net/forum?id=Hk7QOUpP82",
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
    title: "AI Priesthood vs AI Pluralism",
    description:
      "On builders, clerics, and the future of intelligence. Every major technological revolution produces two kinds of institutions — and AI is no different.",
    date: "2026-02-04",
    link: "https://ashioyajotham.substack.com",
  },
  {
    title: "My Research Ethos for Alignment & Interpretability",
    description:
      "Builder, anti-doomer, anti-gnostic. I approach AI alignment and interpretability as fields of repair, not apocalyptic forecasting.",
    date: "2026-01-12",
    link: "https://open.substack.com/pub/ashioyajotham/p/my-research-ethos-for-alignment-and",
  },
];

/* ═══════════ RESEARCH PAGE DATA ═══════════ */

export const RESEARCH_BELIEFS = [
  `World models > scaling language models`,
  `Alignment is stewardship, not prophecy`,
  `Pessimism ≠ intelligence`,
  `To see a failure mode is to inherit responsibility for it`,
];

export const RESEARCH_ARC = [
  {
    year: "2023",
    html: `I started with the intuition that self-supervised approaches were undersold. The field was drunk on supervised fine-tuning; I wrote <a href="https://openreview.net/forum?id=Hk7QOUpP82" target="_blank" rel="noopener noreferrer" class="now-link">\"The Future Remains Unsupervised\"</a> for Deep Learning Indaba as a counterweight.`,
  },
  {
    year: "2024",
    html: `Then I got interested in failure modes. Why do models produce confident nonsense? The term \"hallucination\" felt too forgiving—I started calling it <em>confabulation</em>, borrowing from neuroscience. Began building <a href="https://github.com/ashioyajotham/Value-Aligned-Confabulation-VAC-Research" target="_blank" rel="noopener noreferrer" class="now-link">metrics for measuring it</a>.`,
  },
  {
    year: "2025",
    html: `Now I&apos;m going deeper: mechanistic interpretability. Can we detect when a model \"knows\" it&apos;s being evaluated? Can we find the exact pathways where reasoning goes wrong? The work is harder but more satisfying.`,
  },
];

export const NOAM_QUOTE = {
  text: `\"We offer no explanation as to why these architectures seem to work; we attribute their success, as all else, to divine benevolence.\"`,
  source: "Noam Shazeer",
  paper: "GLU Variants Improve Transformer",
  link: "https://arxiv.org/abs/2002.05202",
  year: 2020,
};

export interface NowEntry {
  html: string;
}

export interface NowSection {
  title: string;
  icon: string;
  items: NowEntry[];
}

export const NOW_SECTIONS: NowSection[] = [
  {
    title: "Working on",
    icon: "⚡",
    items: [
      {
        html: `Researcher in <a href="https://www.amnestykenya.org/" target="_blank" rel="noopener noreferrer" class="now-link">Amnesty International Kenya</a>&apos;s <a href="https://www.amnestykenya.org/rightup-2-0/" target="_blank" rel="noopener noreferrer" class="now-link">RightUp 2.0</a> program — a youth-led research initiative investigating tech-facilitated repression and how surveillance tools and digital tactics are used to silence activists and civil society.`,
      },
      {
        html: 'Junior Research Fellow at the <a href="https://www.ilinaprogram.org/" target="_blank" rel="noopener noreferrer" class="now-link">ILINA Program</a>, focusing on technical AI safety and mechanistic interpretability. Building "runtime safety governors" using activation steering to detect and correct deceptive model behavior in real-time, specifically testing if these internal safety controls generalize to Swahili.',
      },
      {
        html: 'Leading partnerships at <a href="https://gdg.community.dev/gdg-pwani/" target="_blank" rel="noopener noreferrer" class="now-link">GDG Pwani</a> — currently prepping for <a href="https://gdg.community.dev/gdg-pwani/" target="_blank" rel="noopener noreferrer" class="now-link">Google I/O Extended Pwani 2026</a>, reaching out to partners and sponsors.',
      },
    ],
  },
  {
    title: "Thinking about",
    icon: "💭",
    items: [
      {
        html: 'The politics of AI governance. Who gets to decide what "safe" means, and whether the current landscape is trending toward pluralism or priesthood.',
      },
      {
        html: 'The gap between alignment research and deployment reality. The field has a theory-practice problem that nobody wants to name directly.',
      },
    ],
  },
  {
    title: "Reading",
    icon: "📖",
    items: [
      {
        html: `<em>The Infinity Machine</em> by Sebastian Mallaby — the biography of <a href="https://en.wikipedia.org/wiki/Demis_Hassabis" target="_blank" rel="noopener noreferrer" class="now-link">Demis Hassabis</a> and the story of <a href="https://deepmind.google/" target="_blank" rel="noopener noreferrer" class="now-link">DeepMind</a>&apos;s quest toward superintelligence.`,
      },
      {
        html: `Re-reading <em>Seeing Like a State</em> (Scott) — keeps being relevant. Working through the Anthropic interpretability papers to trace how the field&apos;s assumptions evolved.`,
      },
    ],
  },
  {
    title: "Building",
    icon: "🔧",
    items: [
      {
        html: `A small tool for visualizing attention patterns in a way that&apos;s actually useful for debugging. Early stages. May never ship.`,
      },
    ],
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