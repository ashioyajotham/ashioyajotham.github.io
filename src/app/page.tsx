'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import { useTheme } from 'next-themes';
import { motion, AnimatePresence } from 'framer-motion';

/* ═══════════════════════════════════════════════════════════════
   DATA
   ═══════════════════════════════════════════════════════════════ */

const TYPING_PHRASES = [
  'mechanistic_interpretability.research()',
  'cot_faithfulness.analyze(model)',
  'circuits.discover(reasoning=True)',
  'alignment.think_deeply()',
  'safety.verify(model.intentions)',
  'activations.patch(layer=16)',
];

const PROJECTS = [
  {
    title: 'COT-FAITHFULNESS-MECH-INTERP',
    desc: 'Mechanistic analysis of CoT faithfulness in GPT-2 Small. Linear probe achieves 88% accuracy (ROC-AUC 0.949) detecting unfaithful CoT from residual streams. Identified 23 causal circuit components; steering vectors achieve ~72% success shifting unfaithful → faithful.',
    tags: ['Python', 'PyTorch', 'TransformerLens'],
    link: 'https://github.com/ashioyajotham/cot-faithfulness-mech-interp',
    status: 'FEATURED',
    variant: 'green' as const,
    year: '2025',
  },
  {
    title: 'EVALUATION AWARENESS DETECTION',
    desc: 'Do LLMs internally represent being monitored? Linear probing detects "evaluation awareness" with 92.3% accuracy at layer 16 and 70.3% transfer to subtle cues.',
    tags: ['Python', 'PyTorch', 'Probing'],
    link: 'https://github.com/ashioyajotham/eval-awareness-research',
    colab: 'https://colab.research.google.com/github/ashioyajotham/eval-awareness-research/blob/main/notebooks/eval_awareness.ipynb',
    status: 'FEATURED',
    variant: 'blue' as const,
    year: '2025',
  },
  {
    title: 'GREATER THAN CIRCUIT',
    desc: 'Reverse-engineering the circuit responsible for numerical comparisons in GPT-2 Small using activation patching and mechanistic interpretability techniques.',
    tags: ['Python', 'TransformerLens', 'Activation Patching'],
    link: 'https://github.com/ashioyajotham/greater-than-circuit',
    status: 'RESEARCH',
    variant: 'green' as const,
    year: '2024',
  },
  {
    title: 'EXPLORING SAES',
    desc: 'Sparse Autoencoder implementation for neural network interpretability. Features interactive visualization dashboard and W&B integration.',
    tags: ['Python', 'SAE', 'W&B'],
    link: 'https://github.com/ashioyajotham/exploring_saes',
    wandb: 'https://wandb.ai/ashioyajotham/sae-interpretability',
    status: 'RESEARCH',
    variant: 'gold' as const,
    year: '2024',
  },
  {
    title: 'VALUE-ALIGNED CONFABULATION (VAC)',
    desc: 'Framework for evaluating when LLM "hallucination" is harmful vs. beneficial speculation. Novel metrics for the truthfulness-utility trade-off.',
    tags: ['Python', 'LLM', 'Ethics'],
    link: 'https://github.com/ashioyajotham/Value-Aligned-Confabulation-VAC-Research',
    status: 'RESEARCH',
    variant: 'pink' as const,
    year: '2024',
  },
  {
    title: 'FINGPT TRADER',
    desc: 'Algorithmic trading system using confidence-weighted sentiment analysis. Fine-tuned Falcon-7B for African markets with lightweight technical analysis.',
    tags: ['Python', 'Falcon-7B', 'Finance'],
    link: 'https://github.com/ashioyajotham/fingpt_trader',
    paper: 'https://openreview.net/forum?id=yyNP1L26c6',
    status: 'ACTIVE',
    variant: 'blue' as const,
    year: '2025',
  },
  {
    title: 'WEATHER FORECASTING WITH LORA',
    desc: 'Testing "LoRA Without Regret" methodology. Transforms numerical weather data → natural language forecasts via parameter-efficient fine-tuning with RLHF.',
    tags: ['Python', 'LoRA', 'RLHF'],
    link: 'https://github.com/ashioyajotham/weather_forecasting_lora',
    status: 'WRITING UP',
    variant: 'gold' as const,
    year: '2025',
  },
  {
    title: 'AI COMPUTE GROWTH SIMULATOR',
    desc: 'Interactive visualization of exponential AI infrastructure growth. Compute capacity, investment costs, power requirements. Based on Epoch AI data.',
    tags: ['JavaScript', 'D3.js', 'Data Viz'],
    link: 'https://ashioyajotham.github.io/ai-compute-simulator/',
    status: 'TOOL',
    variant: 'green' as const,
    year: '2025',
  },
  {
    title: 'ELIMU RESEARCH ASSISTANT',
    desc: 'AI-powered tool enabling Kenyan educators to generate locally relevant, credibly sourced educational content using the ReAct framework. Available on PyPI.',
    tags: ['Python', 'ReAct', 'EdTech'],
    link: 'https://github.com/ashioyajotham/Elimu-Research-Assistant',
    pypi: 'https://pypi.org/project/elimu-research-assistant/',
    status: 'TOOL',
    variant: 'pink' as const,
    year: '2024',
  },
];

const PUBLICATIONS = [
  { year: '2025', title: 'Democratizing Quantitative Trading in African Markets', venue: 'AIBF 2025', link: 'https://openreview.net/forum?id=yyNP1L26c6' },
  { year: '2024', title: 'Enhancing HIV Testing Indicator Reporting', venue: 'DSAI Journal', link: 'https://conferences.kabarak.ac.ke/index.php/dsai/issue/view/15' },
  { year: '2023', title: 'The Future Remains Unsupervised', venue: 'Deep Learning Indaba', link: 'https://openreview.net/forum?id=Hk7QOUpP82' },
];

const ESSAYS = [
  {
    title: 'AI Priesthood vs AI Pluralism',
    date: 'February 4, 2026',
    desc: 'On builders, clerics, and the future of intelligence. Every major technological revolution produces two kinds of institutions — and AI is no different.',
    link: 'https://ashioyajotham.github.io/essays/ai-priesthood.html',
  },
];

const QUEST_LOG = [
  {
    period: '2025 — PRESENT',
    status: 'ACTIVE QUEST' as const,
    title: 'AI SAFETY RESEARCHER @ BLUEDOT',
    desc: 'Full-time research at Bluedot focusing on mechanistic interpretability, chain-of-thought faithfulness, and evaluation awareness detection in LLMs.',
  },
  {
    period: '2025 — PRESENT',
    status: 'ACTIVE QUEST' as const,
    title: 'JUNIOR RESEARCH FELLOW @ ILINA PROGRAM',
    desc: 'Building "runtime safety governors" using activation steering to detect and correct deceptive model behavior in real-time, testing if these controls generalize to Swahili.',
  },
  {
    period: '2025 — PRESENT',
    status: 'ACTIVE QUEST' as const,
    title: 'RESEARCHER @ AMNESTY INTERNATIONAL KENYA',
    desc: 'Part of the RightUp 2.0 program — a youth-led research initiative investigating tech-facilitated repression and how surveillance tools silence activists and civil society.',
  },
  {
    period: '2023 — PRESENT',
    status: 'COMPLETED' as const,
    title: 'GDE AI & GDG PWANI LEAD',
    desc: 'Google Developer Expert in AI. Leading partnerships at GDG Pwani, organizing community events and I/O Extended. Growing the Kenyan AI developer community.',
  },
  {
    period: '2024',
    status: 'COMPLETED' as const,
    title: 'DEEP DIVE: MECH INTERP',
    desc: 'Studied transformer circuits, superposition, and SAEs. Replicated key results from Anthropic and Redwood Research.',
  },
  {
    period: '2023',
    status: 'COMPLETED' as const,
    title: 'AI SAFETY FOUNDATIONS',
    desc: 'Built foundational understanding of alignment, RLHF, constitutional AI, and theoretical safety frameworks. Wrote "The Future Remains Unsupervised" for Deep Learning Indaba.',
  },
  {
    period: 'EARLIER',
    status: 'BACKSTORY' as const,
    title: 'ML & SOFTWARE ENGINEERING',
    desc: 'Developed strong foundations in ML, deep learning, and software engineering at Kabarak University.',
  },
];

/* ═══════════════════════════════════════════════════════════════
   COMPONENTS
   ═══════════════════════════════════════════════════════════════ */

function ThemeToggle() {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const id = requestAnimationFrame(() => setMounted(true));
    return () => cancelAnimationFrame(id);
  }, []);

  if (!mounted) {
    return (
      <div className="w-10 h-10 border-2 border-px-dim flex items-center justify-center text-px-dim font-pixel text-[10px]">
        ...
      </div>
    );
  }

  const isDark = resolvedTheme === 'dark';

  return (
    <button
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
      className="w-10 h-10 border-2 border-px-dim flex items-center justify-center text-px-dim hover:border-px-green hover:text-px-green transition-colors"
      title={isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
      aria-label="Toggle theme"
    >
      {isDark ? (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
          <circle cx="12" cy="12" r="5" />
          <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" />
        </svg>
      ) : (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
          <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
        </svg>
      )}
    </button>
  );
}

function Navigation({ onMenuToggle }: { onMenuToggle: () => void }) {
  const links = [
    { label: 'ABOUT', href: '#about' },
    { label: 'RESEARCH', href: '#research' },
    { label: 'PROJECTS', href: '#projects' },
    { label: 'WRITING', href: '#writing' },
    { label: 'NOW', href: '#now' },
    { label: 'CONTACT', href: '#contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-px-bg/95 border-b-2 border-px-dark" style={{ backdropFilter: 'blur(4px)' }}>
      <div className="max-w-6xl mx-auto h-16 px-4 md:px-6 flex items-center justify-between">
        <a href="#" className="font-pixel text-xs md:text-sm text-px-green tracking-wider">
          <span className="text-px-gold">▶</span> ASHIOYA
        </a>
        <div className="hidden lg:flex items-center gap-6">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="nav-link-pixel">{l.label}</a>
          ))}
        </div>
        <div className="flex items-center gap-2">
          <ThemeToggle />
          <a href="https://github.com/ashioyajotham" target="_blank" rel="noopener noreferrer"
            className="pixel-btn-ghost text-[7px] px-3 py-2 hidden sm:inline-flex" style={{ borderWidth: 2, padding: '8px 10px' }}>
            GITHUB
          </a>
          <button onClick={onMenuToggle} className="lg:hidden text-px-green p-2" aria-label="Open menu">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
              <rect y="2" width="20" height="3" rx="0" />
              <rect y="8" width="20" height="3" rx="0" />
              <rect y="14" width="20" height="3" rx="0" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
}

function MobileMenu({ open, onClose }: { open: boolean; onClose: () => void }) {
  const links = [
    { label: 'ABOUT', href: '#about' },
    { label: 'RESEARCH', href: '#research' },
    { label: 'PROJECTS', href: '#projects' },
    { label: 'WRITING', href: '#writing' },
    { label: 'NOW', href: '#now' },
    { label: 'CONTACT', href: '#contact' },
  ];

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ x: '100%' }}
          animate={{ x: 0 }}
          exit={{ x: '100%' }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-50 bg-px-bg flex flex-col items-center justify-center gap-8 border-l-2 border-px-green"
        >
          <button onClick={onClose} className="absolute top-5 right-5 text-px-green text-2xl font-pixel" aria-label="Close menu">✕</button>
          {links.map((l) => (
            <a key={l.href} href={l.href} onClick={onClose}
              className="font-pixel text-sm text-px-gray hover:text-px-green transition-colors">
              {l.label}
            </a>
          ))}
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function Hero() {
  const [typedText, setTypedText] = useState('');
  const phraseIdxRef = useRef(0);
  const charIdxRef = useRef(0);
  const isDeletingRef = useRef(false);

  useEffect(() => {
    const typeLoop = () => {
      const current = TYPING_PHRASES[phraseIdxRef.current];
      if (!isDeletingRef.current) {
        setTypedText(current.substring(0, charIdxRef.current + 1));
        charIdxRef.current++;
        if (charIdxRef.current === current.length) {
          isDeletingRef.current = true;
          setTimeout(typeLoop, 2000);
          return;
        }
        setTimeout(typeLoop, 60 + Math.random() * 30);
      } else {
        setTypedText(current.substring(0, charIdxRef.current - 1));
        charIdxRef.current--;
        if (charIdxRef.current === 0) {
          isDeletingRef.current = false;
          phraseIdxRef.current = (phraseIdxRef.current + 1) % TYPING_PHRASES.length;
          setTimeout(typeLoop, 400);
          return;
        }
        setTimeout(typeLoop, 30);
      }
    };
    const timer = setTimeout(typeLoop, 1200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden">
      {/* Sparkle decorations */}
      <div className="pixel-star absolute top-32 left-[15%]" style={{ animation: 'sparkle 2.5s steps(5) infinite' }} />
      <div className="pixel-star absolute top-48 right-[20%]" style={{ animation: 'sparkle 3s steps(5) infinite 0.5s' }} />
      <div className="pixel-star absolute bottom-40 left-[25%]" style={{ animation: 'sparkle 2s steps(5) infinite 1s' }} />
      <div className="pixel-star absolute top-60 left-[60%]" style={{ animation: 'sparkle 3.5s steps(5) infinite 0.3s', background: 'var(--px-blue)', boxShadow: '4px 0 0 var(--px-blue), -4px 0 0 var(--px-blue), 0 4px 0 var(--px-blue), 0 -4px 0 var(--px-blue)' }} />
      <div className="pixel-star absolute bottom-60 right-[30%]" style={{ animation: 'sparkle 2.8s steps(5) infinite 0.7s', background: 'var(--px-pink)', boxShadow: '4px 0 0 var(--px-pink), -4px 0 0 var(--px-pink), 0 4px 0 var(--px-pink), 0 -4px 0 var(--px-pink)' }} />

      {/* Green glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-full blur-[100px] pointer-events-none"
        style={{ background: 'color-mix(in srgb, var(--px-green) 5%, transparent)' }} />

      <div className="relative z-10 max-w-6xl mx-auto px-4 md:px-6 py-20 text-center">
        {/* Status */}
        <div className="anim-fade flex items-center justify-center gap-3 mb-8">
          <span className="w-3 h-3 bg-px-green pulse-pixel" />
          <span className="font-pixel text-[8px] text-px-gray tracking-wider">OPEN TO COLLABORATION</span>
        </div>

        {/* Pixel Brain */}
        <div className="anim-fade anim-d1 flex justify-center mb-8">
          <div className="pixel-brain pixel-float" />
        </div>

        {/* Name */}
        <h1 className="anim-fade anim-d2 font-pixel text-xl sm:text-2xl md:text-3xl lg:text-4xl tracking-wider leading-relaxed mb-4">
          <span className="text-px-white">ASHIOYA</span><br />
          <span className="text-px-green" style={{ textShadow: '0 0 20px color-mix(in srgb, var(--px-green) 50%, transparent)' }}>JOTHAM</span>
        </h1>

        {/* Subtitle */}
        <p className="anim-fade anim-d3 text-xl md:text-2xl text-px-gray leading-relaxed max-w-2xl mx-auto mb-2">
          I study how neural networks <span className="text-px-green">encode knowledge</span> and{' '}
          <span className="text-px-blue">make decisions</span>.
        </p>

        {/* Typed tagline */}
        <div className="anim-fade anim-d4 h-8 mb-10 flex items-center justify-center">
          <span className="text-px-dim text-lg">{'>'}</span>
          <span className="text-lg text-px-gray ml-2">{typedText}</span>
          <span className="cursor-blink text-px-green ml-0.5 text-lg">█</span>
        </div>

        {/* Buttons */}
        <div className="anim-fade anim-d5 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href="#research" className="pixel-btn">
            <span>▸</span> VIEW RESEARCH
          </a>
          <a href="https://github.com/ashioyajotham" target="_blank" rel="noopener noreferrer" className="pixel-btn-ghost">
            <span>◆</span> GITHUB
          </a>
        </div>

        {/* Scroll indicator */}
        <div className="anim-fade anim-d6 mt-16 flex flex-col items-center gap-2">
          <span className="font-pixel text-[7px] text-px-dim tracking-widest">SCROLL DOWN</span>
          <div className="w-4 h-6 border-2 border-px-dim flex items-start justify-center p-0.5 mt-1">
            <div className="w-2 h-2 bg-px-green" style={{ animation: 'blink 1.2s step-end infinite' }} />
          </div>
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="relative py-20 lg:py-28">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        <div className="reveal text-center mb-14">
          <span className="font-pixel text-[8px] text-px-dim tracking-[0.3em]">── SECTION 01 ──</span>
          <h2 className="font-pixel text-lg md:text-xl text-px-green mt-3 tracking-wider">ABOUT</h2>
          <hr className="pixel-divider max-w-xs mx-auto mt-4" />
        </div>

        <div className="reveal grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          {/* Character Sheet */}
          <div className="char-sheet bg-px-bg p-0 overflow-hidden">
            <div className="corner-bl" />
            <div className="corner-br" />
            <div className="p-0 overflow-hidden" style={{ background: 'color-mix(in srgb, var(--px-green) 10%, var(--px-bg))', borderBottom: '2px solid color-mix(in srgb, var(--px-green) 30%, transparent)' }}>
              <div className="px-5 py-3 flex items-center justify-between">
                <span className="font-pixel text-[9px] text-px-green tracking-wider">CHARACTER SHEET</span>
                <span className="font-pixel text-[7px] text-px-dim">LV. ??</span>
              </div>
            </div>
            <div className="p-5">
              {/* Avatar area */}
              <div className="flex items-center gap-4 mb-5 pb-5 border-b-2 border-dashed" style={{ borderColor: 'color-mix(in srgb, var(--px-dim) 30%, transparent)' }}>
                <div className="w-16 h-16 border-2 border-px-green flex items-center justify-center flex-shrink-0"
                  style={{ background: 'color-mix(in srgb, var(--px-green) 5%, var(--px-bg))' }}>
                  <span className="text-3xl">🧠</span>
                </div>
                <div>
                  <div className="font-pixel text-[10px] text-px-white tracking-wider mb-1">ASHIOYA JOTHAM</div>
                  <div className="font-pixel text-[7px] text-px-gold tracking-wider">CLASS: AI RESEARCHER</div>
                  <div className="font-pixel text-[7px] text-px-blue tracking-wider mt-0.5">SPECIALTY: MECH INTERP</div>
                </div>
              </div>

              {/* Affiliations - no stats bars */}
              <div className="space-y-2 mb-5">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-px-green flex-shrink-0" />
                  <span className="text-px-gray text-base">AI Safety Researcher @ <a href="https://www.bluedot.org/" target="_blank" rel="noopener noreferrer" className="text-px-green hover:underline">Bluedot</a></span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-px-blue flex-shrink-0" />
                  <span className="text-px-gray text-base">Junior Research Fellow @ <a href="https://ilinaprogram.org/" target="_blank" rel="noopener noreferrer" className="text-px-blue hover:underline">ILINA Program</a></span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-px-gold flex-shrink-0" />
                  <span className="text-px-gray text-base"><a href="https://gdg.community.dev/gdg-pwani/" target="_blank" rel="noopener noreferrer" className="text-px-gold hover:underline">GDG Pwani</a> Partnerships Lead</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-px-pink flex-shrink-0" />
                  <span className="text-px-gray text-base">Google Developer Expert — AI</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-px-purple flex-shrink-0" />
                  <span className="text-px-gray text-base">Researcher @ <a href="https://www.amnestykenya.org/rightup-2-0/" target="_blank" rel="noopener noreferrer" className="text-px-purple hover:underline">Amnesty Kenya</a> RightUp 2.0</span>
                </div>
              </div>

              {/* Traits */}
              <div className="grid grid-cols-2 gap-2">
                <div className="border border-px-dim p-2 text-center" style={{ borderColor: 'color-mix(in srgb, var(--px-dim) 30%, transparent)' }}>
                  <div className="font-pixel text-[7px] text-px-dim mb-0.5">ALIGNMENT</div>
                  <div className="font-pixel text-[8px] text-px-green">LAWFUL GOOD</div>
                </div>
                <div className="border border-px-dim p-2 text-center" style={{ borderColor: 'color-mix(in srgb, var(--px-dim) 30%, transparent)' }}>
                  <div className="font-pixel text-[7px] text-px-dim mb-0.5">STATUS</div>
                  <div className="font-pixel text-[8px] text-px-gold">RESEARCHING</div>
                </div>
                <div className="border border-px-dim p-2 text-center" style={{ borderColor: 'color-mix(in srgb, var(--px-dim) 30%, transparent)' }}>
                  <div className="font-pixel text-[7px] text-px-dim mb-0.5">LOCATION</div>
                  <div className="font-pixel text-[8px] text-px-blue">KENYA</div>
                </div>
                <div className="border border-px-dim p-2 text-center" style={{ borderColor: 'color-mix(in srgb, var(--px-dim) 30%, transparent)' }}>
                  <div className="font-pixel text-[7px] text-px-dim mb-0.5">ALMA MATER</div>
                  <div className="font-pixel text-[8px] text-px-pink">KABARAK U</div>
                </div>
              </div>
            </div>
          </div>

          {/* Bio Text */}
          <div className="space-y-5">
            <p className="text-px-gray text-lg leading-relaxed">
              I&apos;m a researcher passionate about making AI systems more{' '}
              <span className="text-px-green">interpretable</span> and{' '}
              <span className="text-px-green">safe</span>. My work sits at the intersection of{' '}
              <span className="text-px-blue">mechanistic interpretability</span>,{' '}
              <span className="text-px-blue">chain-of-thought reasoning</span>, and{' '}
              <span className="text-px-pink">AI alignment</span>.
            </p>
            <p className="text-px-gray text-lg leading-relaxed">
              Currently at <a href="https://www.bluedot.org/" target="_blank" rel="noopener noreferrer" className="text-px-green hover:underline">Bluedot</a>,
              investigating how faithful chain-of-thought reasoning emerges in transformer models — probing not just
              what models <em>say</em>, but whether their internal computations actually <em>reflect</em> the reasoning
              they output.
            </p>
            <p className="text-px-gray text-lg leading-relaxed">
              I believe that understanding the mechanistic basis of reasoning is crucial for building
              AI systems we can truly trust. I also lead partnerships at{' '}
              <a href="https://gdg.community.dev/gdg-pwani/" target="_blank" rel="noopener noreferrer" className="text-px-gold hover:underline">GDG Pwani</a> and
              am a Google Developer Expert in AI.
            </p>
            <div className="flex flex-wrap gap-2 pt-2">
              <span className="pixel-tag">MECH INTERP</span>
              <span className="pixel-tag-blue pixel-tag">AI SAFETY</span>
              <span className="pixel-tag-gold pixel-tag">COT</span>
              <span className="pixel-tag-pink pixel-tag">CIRCUITS</span>
              <span className="pixel-tag">ALIGNMENT</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Research() {
  return (
    <section id="research" className="relative py-20 lg:py-28 border-t-2" style={{ borderColor: 'color-mix(in srgb, var(--px-dim) 20%, transparent)' }}>
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        <div className="reveal text-center mb-14">
          <span className="font-pixel text-[8px] text-px-dim tracking-[0.3em]">── SECTION 02 ──</span>
          <h2 className="font-pixel text-lg md:text-xl text-px-green mt-3 tracking-wider">RESEARCH</h2>
          <hr className="pixel-divider max-w-xs mx-auto mt-4" />
        </div>

        {/* Quote Banner */}
        <div className="reveal mb-10 p-6 md:p-8" style={{ background: 'color-mix(in srgb, var(--px-white) 5%, var(--px-dark))' }}>
          <blockquote className="font-terminal text-lg md:text-xl italic leading-relaxed" style={{ color: 'var(--px-white)' }}>
            &ldquo;We offer no explanation as to why these architectures seem to work; we attribute their success, as all else, to divine benevolence.&rdquo;
          </blockquote>
          <div className="mt-3 text-sm" style={{ color: 'var(--px-dim)' }}>
            — Noam Shazeer,{' '}
            <a href="https://arxiv.org/abs/2002.05202" target="_blank" rel="noopener noreferrer" className="text-px-dim hover:text-px-green transition-colors">GLU Variants Improve Transformer</a>{' '}
            (2020)
          </div>
        </div>

        {/* Main Research Card - CoT Faithfulness */}
        <div className="reveal pixel-card overflow-hidden mb-10">
          <div className="grid grid-cols-1 lg:grid-cols-5">
            <div className="lg:col-span-2 relative overflow-hidden">
              <div className="aspect-square lg:aspect-auto lg:h-full bg-px-surface flex items-center justify-center">
                <div className="text-8xl opacity-20 pixel-img">🧪</div>
              </div>
              <div className="absolute top-4 left-4 font-pixel text-[7px] text-px-green bg-px-bg/80 px-2 py-1 border border-px-green">
                ★ FEATURED — TOP 5 BLUEDOT DEMO DAY
              </div>
            </div>
            <div className="lg:col-span-3 p-6 md:p-8 flex flex-col justify-center">
              <div className="flex flex-wrap items-center gap-2 mb-4">
                <span className="pixel-tag">MECH INTERP</span>
                <span className="text-px-dim text-sm">│</span>
                <span className="font-terminal text-px-dim text-sm">2025</span>
              </div>
              <h3 className="font-pixel text-sm md:text-base text-px-white tracking-wider leading-relaxed mb-4">
                CHAIN-OF-THOUGHT FAITHFULNESS: A MECHANISTIC INTERPRETABILITY APPROACH
              </h3>
              <p className="text-px-gray text-lg leading-relaxed mb-5">
                Mechanistic analysis of reasoning faithfulness in GPT-2 Small. Linear probe achieves 88% accuracy
                (ROC-AUC 0.949) detecting unfaithful CoT from residual streams. Identified 23 causal circuit components;
                steering vectors achieve ~72% success shifting unfaithful → faithful.
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="text-xs text-px-dim border px-2 py-1 font-terminal" style={{ borderColor: 'color-mix(in srgb, var(--px-dim) 30%, transparent)' }}>Transformer Circuits</span>
                <span className="text-xs text-px-dim border px-2 py-1 font-terminal" style={{ borderColor: 'color-mix(in srgb, var(--px-dim) 30%, transparent)' }}>Activation Patching</span>
                <span className="text-xs text-px-dim border px-2 py-1 font-terminal" style={{ borderColor: 'color-mix(in srgb, var(--px-dim) 30%, transparent)' }}>Probing</span>
                <span className="text-xs text-px-dim border px-2 py-1 font-terminal" style={{ borderColor: 'color-mix(in srgb, var(--px-dim) 30%, transparent)' }}>Faithfulness</span>
              </div>
              <div className="flex flex-wrap items-center gap-3">
                <a href="https://github.com/ashioyajotham/cot-faithfulness-mech-interp" target="_blank" rel="noopener noreferrer" className="pixel-btn-sm">
                  ▸ GITHUB
                </a>
                <a href="https://blog.bluedot.org/p/mechanistic-analysis-of-chain-of" target="_blank" rel="noopener noreferrer" className="pixel-btn-ghost text-[8px] px-3 py-2" style={{ borderWidth: 2, padding: '8px 12px', fontSize: '8px' }}>
                  ◈ BLOG POST
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Highlight Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
          <div className="reveal pixel-card-blue pixel-card p-5">
            <div className="font-pixel text-lg text-px-blue mb-3">◎</div>
            <h4 className="font-pixel text-[9px] text-px-white tracking-wider mb-2">CIRCUIT DISCOVERY</h4>
            <p className="text-px-gray text-base leading-relaxed">
              Identifying specific attention heads and MLP neurons that implement faithful reasoning vs. shortcut behavior.
            </p>
          </div>
          <div className="reveal pixel-card-gold pixel-card p-5" style={{ transitionDelay: '0.1s' }}>
            <div className="font-pixel text-lg text-px-gold mb-3">⇄</div>
            <h4 className="font-pixel text-[9px] text-px-white tracking-wider mb-2">FAITHFUL VS. UNFAITHFUL</h4>
            <p className="text-px-gray text-base leading-relaxed">
              Comparing activation patterns when models reason faithfully versus when they rely on memorized answers.
            </p>
          </div>
          <div className="reveal pixel-card-pink pixel-card p-5" style={{ transitionDelay: '0.2s' }}>
            <div className="font-pixel text-lg text-px-pink mb-3">◈</div>
            <h4 className="font-pixel text-[9px] text-px-white tracking-wider mb-2">SAFETY IMPLICATIONS</h4>
            <p className="text-px-gray text-base leading-relaxed">
              Understanding how unfaithful reasoning could lead to deceptive alignment and hidden capabilities.
            </p>
          </div>
        </div>

        {/* Publications + Beliefs */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Publications */}
          <div className="reveal">
            <h3 className="font-pixel text-[10px] text-px-gold tracking-wider mb-5">PUBLICATIONS</h3>
            <div className="space-y-4">
              {PUBLICATIONS.map((pub) => (
                <div key={pub.title} className="pl-4" style={{ borderLeft: '2px solid var(--px-dim)' }}>
                  <div className="font-pixel text-[7px] text-px-dim mb-0.5">{pub.year}</div>
                  <a href={pub.link} target="_blank" rel="noopener noreferrer" className="text-px-white text-base hover:text-px-green transition-colors">
                    {pub.title}
                  </a>
                  <div className="text-px-dim text-sm mt-0.5">{pub.venue}</div>
                </div>
              ))}
              <div className="mt-4">
                <a href="https://scholar.google.com/citations?user=J3rI_FIAAAAJ&hl=en" target="_blank" rel="noopener noreferrer"
                  className="pixel-tag-gold pixel-tag hover:opacity-80 transition-opacity" style={{ cursor: 'pointer' }}>
                  VIEW ALL ON SCHOLAR ▸
                </a>
              </div>
            </div>
          </div>

          {/* Beliefs */}
          <div className="reveal p-5" style={{ background: 'color-mix(in srgb, var(--px-white) 5%, var(--px-dark))' }}>
            <h3 className="font-pixel text-[10px] text-px-green tracking-wider mb-4">WHERE I STAND</h3>
            <ul className="space-y-3">
              {[
                'World models > scaling language models',
                'Alignment is stewardship, not prophecy',
                'Pessimism ≠ intelligence',
                'To see a failure mode is to inherit responsibility for it',
              ].map((belief) => (
                <li key={belief} className="flex items-start gap-3 text-px-gray text-base leading-relaxed">
                  <span className="text-px-green mt-1">▸</span>
                  <span>{belief}</span>
                </li>
              ))}
            </ul>
            <a href="https://open.substack.com/pub/ashioyajotham/p/my-research-ethos-for-alignment-and" target="_blank" rel="noopener noreferrer"
              className="inline-block mt-4 text-px-dim text-sm hover:text-px-green transition-colors">
              Full ethos →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Projects() {
  const getCardClass = (variant: string) => {
    switch (variant) {
      case 'blue': return 'pixel-card-blue pixel-card';
      case 'gold': return 'pixel-card-gold pixel-card';
      case 'pink': return 'pixel-card-pink pixel-card';
      default: return 'pixel-card';
    }
  };

  const getStatusClass = (status: string) => {
    switch (status) {
      case 'FEATURED': return 'pixel-tag';
      case 'ACTIVE': return 'pixel-tag-blue pixel-tag';
      case 'WRITING UP': return 'pixel-tag-gold pixel-tag';
      case 'TOOL': return 'pixel-tag-gold pixel-tag';
      default: return 'pixel-tag';
    }
  };

  return (
    <section id="projects" className="relative py-20 lg:py-28 border-t-2" style={{ borderColor: 'color-mix(in srgb, var(--px-dim) 20%, transparent)' }}>
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        <div className="reveal text-center mb-14">
          <span className="font-pixel text-[8px] text-px-dim tracking-[0.3em]">── SECTION 03 ──</span>
          <h2 className="font-pixel text-lg md:text-xl text-px-green mt-3 tracking-wider">PROJECTS</h2>
          <hr className="pixel-divider max-w-xs mx-auto mt-4" />
          <p className="text-px-gray text-lg mt-4 max-w-2xl mx-auto">
            A mix of interpretability research, open-source tools, and experiments. Some polished; some working prototypes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {PROJECTS.map((project, i) => (
            <div
              key={project.title}
              className={`reveal ${getCardClass(project.variant)} p-5`}
              style={{ transitionDelay: `${i * 0.05}s` }}
            >
              <div className="flex items-center justify-between mb-3">
                <span className={`${getStatusClass(project.status)}`} style={{ fontSize: '6px' }}>
                  {project.status === 'FEATURED' ? '★' : ''} {project.status}
                </span>
                <span className="font-terminal text-px-dim text-sm">{project.year}</span>
              </div>
              <h3 className="font-pixel text-[10px] text-px-white tracking-wider mb-2">{project.title}</h3>
              <p className="text-px-gray text-base leading-relaxed mb-4">{project.desc}</p>
              <div className="flex flex-wrap gap-1.5 mb-4">
                {project.tags.map((tag) => (
                  <span key={tag} className="text-[11px] text-px-dim border px-2 py-0.5 font-terminal"
                    style={{ borderColor: 'color-mix(in srgb, var(--px-dim) 20%, transparent)' }}>
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex flex-wrap items-center gap-3">
                <a href={project.link} target="_blank" rel="noopener noreferrer"
                  className="font-pixel text-[8px] text-px-green hover:text-px-gold transition-colors tracking-wider">
                  EXPLORE REPO ▸
                </a>
                {project.colab && (
                  <a href={project.colab} target="_blank" rel="noopener noreferrer"
                    className="font-pixel text-[7px] text-px-blue hover:text-px-gold transition-colors tracking-wider">
                    ◈ COLAB
                  </a>
                )}
                {project.paper && (
                  <a href={project.paper} target="_blank" rel="noopener noreferrer"
                    className="font-pixel text-[7px] text-px-blue hover:text-px-gold transition-colors tracking-wider">
                    ◈ PAPER
                  </a>
                )}
                {project.wandb && (
                  <a href={project.wandb} target="_blank" rel="noopener noreferrer"
                    className="font-pixel text-[7px] text-px-blue hover:text-px-gold transition-colors tracking-wider">
                    ◈ W&B
                  </a>
                )}
                {project.pypi && (
                  <a href={project.pypi} target="_blank" rel="noopener noreferrer"
                    className="font-pixel text-[7px] text-px-blue hover:text-px-gold transition-colors tracking-wider">
                    ◈ PyPI
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Writing() {
  return (
    <section id="writing" className="relative py-20 lg:py-28 border-t-2" style={{ borderColor: 'color-mix(in srgb, var(--px-dim) 20%, transparent)' }}>
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        <div className="reveal text-center mb-14">
          <span className="font-pixel text-[8px] text-px-dim tracking-[0.3em]">── SECTION 04 ──</span>
          <h2 className="font-pixel text-lg md:text-xl text-px-green mt-3 tracking-wider">WRITING</h2>
          <hr className="pixel-divider max-w-xs mx-auto mt-4" />
        </div>

        <div className="max-w-3xl mx-auto space-y-6">
          {ESSAYS.map((essay) => (
            <a key={essay.title} href={essay.link} target="_blank" rel="noopener noreferrer"
              className="reveal pixel-card-gold pixel-card p-6 block hover:border-px-gold transition-colors">
              <div className="flex flex-wrap items-center gap-3 mb-3">
                <span className="pixel-tag-gold pixel-tag">ESSAY</span>
                <span className="font-terminal text-px-dim text-sm">{essay.date}</span>
              </div>
              <h3 className="font-pixel text-xs md:text-sm text-px-white tracking-wider leading-relaxed mb-3">
                {essay.title}
              </h3>
              <p className="text-px-gray text-base leading-relaxed">{essay.desc}</p>
            </a>
          ))}

          {/* More writing links */}
          <div className="reveal flex flex-wrap gap-4 justify-center pt-6">
            <a href="https://ashioyajotham.substack.com" target="_blank" rel="noopener noreferrer"
              className="pixel-btn-ghost text-[8px] px-3 py-2">
              ◈ SUBSTACK
            </a>
            <a href="https://www.lesswrong.com/users/victor-ashioya" target="_blank" rel="noopener noreferrer"
              className="pixel-btn-ghost text-[8px] px-3 py-2">
              ◈ LESSWRONG
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Now() {
  const [showToast, setShowToast] = useState(false);

  return (
    <section id="now" className="relative py-20 lg:py-28 border-t-2" style={{ borderColor: 'color-mix(in srgb, var(--px-dim) 20%, transparent)' }}>
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        <div className="reveal text-center mb-14">
          <span className="font-pixel text-[8px] text-px-dim tracking-[0.3em]">── SECTION 05 ──</span>
          <h2 className="font-pixel text-lg md:text-xl text-px-green mt-3 tracking-wider">QUEST LOG</h2>
          <hr className="pixel-divider max-w-xs mx-auto mt-4" />
        </div>

        {/* Timeline */}
        <div className="max-w-2xl mx-auto space-y-0">
          {QUEST_LOG.map((quest, i) => {
            const isActive = quest.status === 'ACTIVE QUEST';
            const isCompleted = quest.status === 'COMPLETED';
            const isBackstory = quest.status === 'BACKSTORY';

            return (
              <div key={quest.title} className="reveal relative pl-12 pb-8" style={{ transitionDelay: `${i * 0.1}s` }}>
                {/* Timeline dot */}
                <div className={`absolute left-0 top-1 w-6 h-6 border-2 flex items-center justify-center ${isActive ? 'border-px-green bg-px-green/20' : isBackstory ? 'border-px-dim/50' : 'border-px-dim'}`}>
                  {isActive && <span className="w-2 h-2 bg-px-green" />}
                  {isCompleted && <span className="text-px-gold text-xs">✓</span>}
                </div>

                {/* Dashed line */}
                {i < QUEST_LOG.length - 1 && (
                  <div
                    className="absolute left-[11px] top-8 bottom-0 w-[2px]"
                    style={{
                      background: `repeating-linear-gradient(to bottom, ${isActive ? 'var(--px-green)' : 'var(--px-dim)'} 0px, ${isActive ? 'var(--px-green)' : 'var(--px-dim)'} 4px, transparent 4px, transparent 8px)`,
                      opacity: isBackstory ? 0.2 : 0.3,
                    }}
                  />
                )}

                {/* Content */}
                <div className={`font-pixel text-[7px] mb-1 tracking-wider ${isBackstory ? 'text-px-dim/50' : isActive ? 'text-px-green' : 'text-px-dim'}`}>
                  {quest.period}
                </div>
                <div className={`pixel-tag mb-2 ${isBackstory ? '' : isCompleted ? 'pixel-tag-gold' : ''}`}
                  style={{ fontSize: '6px', borderColor: isBackstory ? 'color-mix(in srgb, var(--px-dim) 30%, transparent)' : undefined, color: isBackstory ? 'var(--px-dim)' : undefined }}>
                  {isActive ? '◆ ACTIVE QUEST' : isCompleted ? '✓ COMPLETED' : '◇ BACKSTORY'}
                </div>
                <h4 className={`font-pixel text-[10px] tracking-wider mb-2 ${isBackstory ? 'text-px-white/60' : 'text-px-white'}`}>
                  {quest.title}
                </h4>
                <p className={`text-base leading-relaxed ${isBackstory ? 'text-px-gray/60' : 'text-px-gray'}`}>
                  {quest.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* What I'm thinking/reading/building */}
        <div className="max-w-2xl mx-auto mt-12 space-y-6">
          <div className="reveal pixel-card p-5">
            <h3 className="font-pixel text-[9px] text-px-blue tracking-wider mb-3">THINKING ABOUT</h3>
            <p className="text-px-gray text-base leading-relaxed">
              The politics of AI governance. Who gets to decide what &ldquo;safe&rdquo; means, and whether the current landscape
              is trending toward pluralism or priesthood. Also: the gap between alignment research and deployment reality.
            </p>
          </div>
          <div className="reveal pixel-card-gold pixel-card p-5" style={{ transitionDelay: '0.1s' }}>
            <h3 className="font-pixel text-[9px] text-px-gold tracking-wider mb-3">READING</h3>
            <p className="text-px-gray text-base leading-relaxed">
              <em>The Infinity Machine</em> by Sebastian Mallaby — the biography of Demis Hassabis and the story of
              DeepMind&apos;s quest toward superintelligence. Also re-reading <em>Seeing Like a State</em> (Scott)
              and working through the Anthropic interpretability papers.
            </p>
          </div>
          <div className="reveal pixel-card-pink pixel-card p-5" style={{ transitionDelay: '0.2s' }}>
            <h3 className="font-pixel text-[9px] text-px-pink tracking-wider mb-3">BUILDING</h3>
            <p className="text-px-gray text-base leading-relaxed">
              A small tool for visualizing attention patterns in a way that&apos;s actually useful for debugging. Early stages.
              May never ship.
            </p>
          </div>
        </div>

        {/* Toast notification */}
        <AnimatePresence>
          {showToast && (
            <motion.div
              initial={{ opacity: 0, y: 80 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 80 }}
              transition={{ duration: 0.3 }}
              className="fixed bottom-8 left-1/2 -translate-x-1/2 z-[9999] font-pixel text-[9px] text-px-green bg-px-bg border-3 border-px-green px-5 py-3"
              style={{ border: '3px solid var(--px-green)', boxShadow: '4px 4px 0 0 var(--px-green-dark)' }}
            >
              ✓ MESSAGE SENT! (DEMO)
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}

function Contact() {
  const [showToast, setShowToast] = useState(false);

  const handleSubmit = useCallback((e: React.FormEvent) => {
    e.preventDefault();
    setShowToast(true);
    (e.target as HTMLFormElement).reset();
    setTimeout(() => setShowToast(false), 3000);
  }, []);

  return (
    <section id="contact" className="relative py-20 lg:py-28 border-t-2" style={{ borderColor: 'color-mix(in srgb, var(--px-dim) 20%, transparent)' }}>
      {/* Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] rounded-full blur-[100px] pointer-events-none"
        style={{ background: 'color-mix(in srgb, var(--px-green) 3%, transparent)' }} />

      <div className="max-w-6xl mx-auto px-4 md:px-6 relative z-10">
        <div className="reveal max-w-2xl mx-auto text-center">
          <span className="font-pixel text-[8px] text-px-dim tracking-[0.3em]">── SECTION 06 ──</span>
          <h2 className="font-pixel text-lg md:text-xl text-px-green mt-3 tracking-wider mb-3">CONTACT</h2>
          <hr className="pixel-divider max-w-xs mx-auto mb-6" />
          <p className="text-px-gray text-lg mb-10">
            Interested in collaborating? Send a message.
          </p>

          {/* Terminal form */}
          <div className="pixel-card text-left overflow-hidden">
            <div className="px-4 py-2 flex items-center gap-2"
              style={{ background: 'color-mix(in srgb, var(--px-green) 10%, var(--px-bg))', borderBottom: '2px solid color-mix(in srgb, var(--px-green) 30%, transparent)' }}>
              <span className="w-3 h-3 bg-px-red" style={{ opacity: 0.6 }} />
              <span className="w-3 h-3 bg-px-gold" style={{ opacity: 0.6 }} />
              <span className="w-3 h-3 bg-px-green" style={{ opacity: 0.6 }} />
              <span className="font-pixel text-[7px] text-px-dim ml-2">MESSAGE_TERMINAL.exe</span>
            </div>
            <form onSubmit={handleSubmit} className="p-5 space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="font-pixel text-[7px] text-px-dim tracking-wider block mb-1.5">{'>'} NAME_</label>
                  <input type="text" required placeholder="your_name" className="pixel-input" />
                </div>
                <div>
                  <label className="font-pixel text-[7px] text-px-dim tracking-wider block mb-1.5">{'>'} EMAIL_</label>
                  <input type="email" required placeholder="you@email.com" className="pixel-input" />
                </div>
              </div>
              <div>
                <label className="font-pixel text-[7px] text-px-dim tracking-wider block mb-1.5">{'>'} SUBJECT_</label>
                <input type="text" placeholder="research_collab..." className="pixel-input" />
              </div>
              <div>
                <label className="font-pixel text-[7px] text-px-dim tracking-wider block mb-1.5">{'>'} MESSAGE_</label>
                <textarea rows={5} required placeholder="Tell me about your idea..." className="pixel-input resize-none" />
              </div>
              <button type="submit" className="pixel-btn w-full justify-center">
                ▸ SEND MESSAGE
              </button>
              <div className="font-terminal text-[11px] text-center" style={{ color: 'color-mix(in srgb, var(--px-dim) 50%, transparent)' }}>
                {'// messages sent to victorashioya960@gmail.com'}
              </div>
            </form>
          </div>

          {/* Social Links */}
          <div className="flex items-center justify-center gap-3 mt-8 flex-wrap">
            {/* GitHub */}
            <a href="https://github.com/ashioyajotham" target="_blank" rel="noopener noreferrer"
              className="w-12 h-12 border-2 border-px-dim flex items-center justify-center text-px-dim hover:border-px-green hover:text-px-green transition-colors"
              title="GitHub">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" /></svg>
            </a>
            {/* X / Twitter */}
            <a href="https://x.com/ashioyajotham_" target="_blank" rel="noopener noreferrer"
              className="w-12 h-12 border-2 border-px-dim flex items-center justify-center text-px-dim hover:border-px-blue hover:text-px-blue transition-colors"
              title="X / Twitter">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>
            </a>
            {/* Email */}
            <a href="mailto:victorashioya960@gmail.com"
              className="w-12 h-12 border-2 border-px-dim flex items-center justify-center text-px-dim hover:border-px-pink hover:text-px-pink transition-colors"
              title="Email">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="square"><rect x="2" y="4" width="20" height="16" rx="0" /><path d="M22 4L12 13 2 4" /></svg>
            </a>
            {/* Google Scholar */}
            <a href="https://scholar.google.com/citations?user=J3rI_FIAAAAJ&hl=en" target="_blank" rel="noopener noreferrer"
              className="w-12 h-12 border-2 border-px-dim flex items-center justify-center text-px-dim hover:border-px-gold hover:text-px-gold transition-colors"
              title="Google Scholar">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M5.242 13.769L0 9.5 12 1l12 8.5-5.242 4.269C17.548 11.249 14.978 9.5 12 9.5c-2.977 0-5.548 1.748-6.758 4.269zM12 10a7 7 0 100 14 7 7 0 000-14z" /></svg>
            </a>
            {/* LinkedIn */}
            <a href="https://www.linkedin.com/in/ashioyajotham/" target="_blank" rel="noopener noreferrer"
              className="w-12 h-12 border-2 border-px-dim flex items-center justify-center text-px-dim hover:border-px-blue hover:text-px-blue transition-colors"
              title="LinkedIn">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>
            </a>
            {/* Substack */}
            <a href="https://ashioyajotham.substack.com" target="_blank" rel="noopener noreferrer"
              className="w-12 h-12 border-2 border-px-dim flex items-center justify-center text-px-dim hover:border-px-green hover:text-px-green transition-colors"
              title="Substack">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M22.539 8.242H1.46V5.406h21.08v2.836zM1.46 10.834V18.6c0 1.458.785 2.121 2.015 2.121h2.345c1.23 0 1.872-.663 1.872-2.121v-1.9h-3.21v-2.836h12.027v2.836H13.3v1.9c0 1.458.742 2.121 1.972 2.121h2.345c1.23 0 2.015-.663 2.015-2.121v-7.766H1.46z" /></svg>
            </a>
          </div>
        </div>
      </div>

      {/* Toast */}
      <AnimatePresence>
        {showToast && (
          <motion.div
            initial={{ opacity: 0, y: 80 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 80 }}
            transition={{ duration: 0.3 }}
            className="fixed bottom-8 left-1/2 -translate-x-1/2 z-[9999] font-pixel text-[9px] text-px-green px-5 py-3"
            style={{ background: 'var(--px-bg)', border: '3px solid var(--px-green)', boxShadow: '4px 4px 0 0 var(--px-green-dark)' }}
          >
            ✓ MESSAGE SENT! (DEMO)
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

function Footer() {
  const year = typeof window !== 'undefined' ? new Date().getFullYear().toString() : '2025';

  const links = [
    { label: 'ABOUT', href: '#about' },
    { label: 'RESEARCH', href: '#research' },
    { label: 'PROJECTS', href: '#projects' },
    { label: 'WRITING', href: '#writing' },
    { label: 'NOW', href: '#now' },
    { label: 'CONTACT', href: '#contact' },
  ];

  return (
    <footer className="border-t-2 py-8" style={{ borderColor: 'color-mix(in srgb, var(--px-dim) 20%, transparent)' }}>
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="font-pixel text-[9px] text-px-green">▶</span>
            <span className="font-pixel text-[9px] text-px-white tracking-wider">ASHIOYA</span>
            <span className="text-px-dim text-sm">│</span>
            <span className="font-terminal text-px-dim text-sm">AI Safety Research</span>
          </div>
          <div className="flex items-center gap-5 font-terminal text-sm">
            {links.map((l) => (
              <a key={l.href} href={l.href} className="text-px-dim hover:text-px-green transition-colors hidden sm:inline">{l.label}</a>
            ))}
          </div>
          <div className="font-pixel text-[7px] text-px-dim tracking-wider">
            © {year}
          </div>
        </div>
        {/* ASCII Art Footer */}
        <div className="mt-6 text-center font-terminal text-xs leading-tight select-none" style={{ color: 'color-mix(in srgb, var(--px-dim) 30%, transparent)' }}>
          <pre>╔══════════════════════════════════════════════════════════╗
║  &quot;The best way to predict the future is to interpret it&quot; ║
╚══════════════════════════════════════════════════════════╝</pre>
        </div>
      </div>
    </footer>
  );
}

/* ═══════════════════════════════════════════════════════════════
   MAIN PAGE
   ═══════════════════════════════════════════════════════════════ */

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Scroll reveal observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -30px 0px' }
    );

    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation onMenuToggle={() => setMobileMenuOpen(true)} />
      <MobileMenu open={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)} />

      <main className="flex-1">
        <Hero />
        <About />
        <Research />
        <Projects />
        <Writing />
        <Now />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}