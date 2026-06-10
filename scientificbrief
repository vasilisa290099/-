import React from 'react';

const gold = '#f59e0b';
const purple = '#a78bfa';
const cyan = '#22d3ee';
const red = '#f87171';
const green = '#4ade80';
const bgMain = '#080d1a';
const bgCard = '#111827';
const bgDeep = '#0d1424';

const Tag = ({ children, color }) => (
  <span className="text-xs font-bold px-2 py-1 rounded tracking-wider" style={{ backgroundColor: `${color}22`, color, border: `1px solid ${color}44` }}>
    {children}
  </span>
);

const Anchor = ({ title, desc }) => (
  <div className="rounded p-3 text-xs" style={{ backgroundColor: bgDeep }}>
    <div className="font-semibold mb-1" style={{ color: gold }}>{title}</div>
    <div className="text-gray-400 leading-relaxed">{desc}</div>
  </div>
);

const Metric = ({ label, desc, color }) => (
  <div className="flex gap-2 items-start rounded p-2 text-xs" style={{ backgroundColor: bgDeep, borderLeft: `2px solid ${color}` }}>
    <div>
      <span className="font-semibold" style={{ color }}>{label}</span>
      <span className="text-gray-500 mx-1">—</span>
      <span className="text-gray-400">{desc}</span>
    </div>
  </div>
);

export default function ScientificBrief() {
  return (
    <div className="min-h-screen text-white" style={{ backgroundColor: bgMain, fontFamily: 'system-ui, sans-serif' }}>
      <div className="max-w-5xl mx-auto px-8 py-8">

        {/* HEADER */}
        <div className="flex justify-between items-center pb-4 mb-6" style={{ borderBottom: '1px solid #1e2d4a' }}>
          <div className="flex items-center gap-3">
            <span className="text-2xl">⚡</span>
            <div>
              <div className="font-bold tracking-widest text-xs" style={{ color: gold }}>BIOCHEMICAL RESONANCE ECOSYSTEM</div>
              <div className="text-xs text-gray-500 tracking-wider">SCIENTIFIC METHODOLOGY BRIEF · v7.2 · 2026</div>
            </div>
          </div>
          <div className="text-right text-xs text-gray-500">
            <div className="mb-1">FOR SCIENTIFIC & INSTITUTIONAL AUDIENCES</div>
            <div style={{ color: purple }}>Eva White · Luxembourg / Ukraine</div>
          </div>
        </div>

        {/* TITLE */}
        <div className="mb-6">
          <div className="text-xs tracking-widest font-semibold mb-2" style={{ color: gold }}>METHODOLOGY OVERVIEW — ONE PAGE</div>
          <h1 className="text-3xl font-bold mb-3 leading-tight">
            Temporal Architecture<br />
            <span style={{ color: purple }}>→ Neurochemical Profile</span>
          </h1>
          <p className="text-gray-400 text-sm leading-relaxed max-w-3xl">
            A proprietary behavioral-analytics algorithm mapping chronobiological birth parameters to
            10 neurochemical system modules. The output: the individual's innate neural tension architecture
            and primary <span style={{ color: gold, fontWeight: 600 }}>"First Break Channel"</span> — the biological pathway most vulnerable to systemic collapse.
            Input is temporal. Mechanism is biological. Architecture determines outcome.
          </p>
        </div>

        {/* WHY IT WORKS — MECHANISM BOX */}
        <div className="rounded-lg p-4 mb-5" style={{ backgroundColor: bgCard, borderLeft: `3px solid ${cyan}` }}>
          <div className="text-xs font-bold tracking-widest mb-3" style={{ color: cyan }}>THE BIOLOGICAL BRIDGE — WHY TEMPORAL DATA CONTAINS BIOLOGICAL SIGNAL</div>
          <div className="grid grid-cols-3 gap-4 text-xs text-gray-400">
            <div>
              <div className="font-semibold mb-1 text-white">Prenatal Neurochemical Environment</div>
              Seasonal variation in maternal serotonin, cortisol, and melatonin directly shapes fetal neurotransmitter receptor density. Birth timestamp = proxy for this developmental window.
            </div>
            <div>
              <div className="font-semibold mb-1 text-white">Perinatal HPA Axis Calibration</div>
              Gestational cortisol exposure programs the stress-response set-point for life. This is established endocrinology — not theoretical. The timestamp anchors the environmental cortisol load.
            </div>
            <div>
              <div className="font-semibold mb-1 text-white">Circadian Architecture Imprinting</div>
              Light-dark cycle length at birth influences dopaminergic and GABAergic baseline tone. Documented seasonal birth effects on schizophrenia, mood disorders, and cognitive profiles exist in peer-reviewed literature.
            </div>
          </div>
          <div className="mt-3 text-xs rounded p-2" style={{ backgroundColor: bgDeep }}>
            <span style={{ color: cyan, fontWeight: 600 }}>Key distinction: </span>
            <span className="text-gray-400">This is NOT "planets influence personality." This is "the biological environment present during the sensitive developmental window — indexed by temporal marker — creates differential neurochemical architecture." The mechanism is biological. The input happens to be a date.</span>
          </div>
        </div>

        {/* 3-COLUMN GRID */}
        <div className="grid grid-cols-3 gap-4 mb-5">

          {/* COL 1: Scientific Anchors */}
          <div className="rounded-lg p-4" style={{ backgroundColor: bgCard }}>
            <div className="text-xs font-bold tracking-widest mb-3 pb-2" style={{ color: gold, borderBottom: `1px solid ${gold}33` }}>
              SCIENTIFIC ANCHORS
            </div>
            <div className="space-y-2">
              <Anchor title="Chronobiology" desc="Prenatal temporal environment shapes neurotransmitter baseline. Seasonal 5-HT, GABA, dopamine variation — peer-documented." />
              <Anchor title="HPA Axis Research" desc="Perinatal cortisol determines lifelong stress-response architecture. Established in developmental neuroscience & endocrinology." />
              <Anchor title="Ukhtomsky Dominance" desc="Primary neural focus determines behavioral & somatic collapse pathways. Soviet neurophysiology, 1923 — structurally sound framework." />
              <Anchor title="Stress-Architecture Typology" desc="EXTERNAL / INTERNAL / INVERTED vector maps to HPA, parasympathetic, and somatic tension discharge routes." />
            </div>
          </div>

          {/* COL 2: Algorithm Output */}
          <div className="rounded-lg p-4" style={{ backgroundColor: bgCard }}>
            <div className="text-xs font-bold tracking-widest mb-2 pb-2" style={{ color: purple, borderBottom: `1px solid ${purple}33` }}>
              ALGORITHM OUTPUT — 10 MODULES
            </div>
            <div className="text-xs text-gray-500 mb-3 italic">Single input: birth timestamp. 225+ unique neural configurations.</div>
            <div className="space-y-2">
              <Metric label="LOOP %" desc="Stress-loop retention without discharge" color={gold} />
              <Metric label="Sympathetic %" desc="Autonomic activation (norm: ~70%)" color={purple} />
              <Metric label="Vector Type" desc="External / Internal / Inverted tension route" color={cyan} />
              <Metric label="Channel Dampening" desc="5HT/OXT blockage — social bonding axis %" color={gold} />
              <Metric label="Ukhtomsky Focus" desc="Brain dominance point — primary anchor" color={purple} />
              <Metric label="First Break Channel" desc="Primary biological collapse pathway" color={red} />
              <Metric label="Intensity 1–10" desc="Systemic load (Critical threshold: 8+)" color={red} />
            </div>
            <div className="mt-3 rounded p-2 text-xs" style={{ backgroundColor: bgDeep, borderLeft: `2px solid ${purple}` }}>
              <div className="font-semibold mb-1" style={{ color: purple }}>Diagnostic Resolution Example</div>
              <div className="text-gray-400">
                Standard model: <span className="text-gray-300">"Type A, high stress."</span><br />
                BRE output: <span style={{ color: cyan }}>"HPA-dominant · 77% loop · First Break: vascular · Onset window: 73–78."</span>
              </div>
            </div>
          </div>

          {/* COL 3: Positioning */}
          <div className="rounded-lg p-4 flex flex-col gap-3" style={{ backgroundColor: bgCard }}>
            <div>
              <div className="text-xs font-bold tracking-widest mb-3 pb-2" style={{ color: cyan, borderBottom: `1px solid ${cyan}33` }}>
                SCIENTIFIC POSITIONING
              </div>
              <div className="text-xs font-bold mb-2" style={{ color: green }}>✓ THIS IS:</div>
              <div className="space-y-1 text-xs text-gray-300 mb-4">
                {[
                  'Proprietary pattern-recognition algorithm',
                  'Behavioral architecture differentiation model',
                  'Chronobiological correlation framework',
                  'Retrospectively validated profiling system (30+ cases)',
                  'Architecture-aware conflict & health analytics',
                ].map(item => (
                  <div key={item} className="flex gap-2">
                    <span style={{ color: green }}>→</span><span>{item}</span>
                  </div>
                ))}
              </div>
              <div className="text-xs font-bold mb-2" style={{ color: red }}>✗ THIS IS NOT:</div>
              <div className="space-y-1 text-xs text-gray-300 mb-4">
                {[
                  'Medical or clinical diagnostic instrument',
                  'Published peer-reviewed methodology',
                  'Astrological personality framework',
                  'Prospective clinical prediction claim',
                ].map(item => (
                  <div key={item} className="flex gap-2">
                    <span style={{ color: red }}>✗</span><span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded p-3 text-xs" style={{ backgroundColor: bgDeep, borderLeft: `2px solid ${purple}` }}>
              <div className="font-semibold mb-1" style={{ color: purple }}>NEXT VALIDATION STEP</div>
              <div className="text-gray-400 leading-relaxed">
                Blind prospective cohort study: algorithm generates profiles; clinical team assesses outcomes post-hoc.
                <span style={{ color: cyan }}> Open to institutional partnership.</span>
              </div>
            </div>
          </div>
        </div>

        {/* VALIDATION ROW */}
        <div className="rounded-lg p-4 mb-5" style={{ backgroundColor: bgCard, borderLeft: `3px solid ${gold}` }}>
          <div className="text-xs font-bold tracking-widest mb-3" style={{ color: gold }}>RETROSPECTIVE VALIDATION — CASE BOOK 2026</div>
          <div className="grid grid-cols-4 gap-4 text-xs">
            {[
              ['6 Profiles · 3 Pairs', 'Identical stress archetype → divergent outcomes. Both profiles in each pair correctly predicted before review of biographical outcome.', gold],
              ['Differential Specificity', '"Not dementia broadly — PCA specifically, onset 59." Not direction of prediction only — type, axis, and window.', purple],
              ['Independent Review', '"The program differentiated them biologically, not cosmetically." — Independent scientific observer, June 2026', cyan],
              ['30+ Extended Cases', 'Neurodegenerative trajectory analysis. Validated against documented medical and life records across extended private dataset.', green],
            ].map(([title, desc, color]) => (
              <div key={title}>
                <div className="font-semibold mb-1" style={{ color }}>{title}</div>
                <div className="text-gray-400 leading-relaxed">{desc}</div>
              </div>
            ))}
          </div>
        </div>

        {/* APPLICATIONS + IP */}
        <div className="grid grid-cols-4 gap-4 mb-6">
          {[
            ['🏢', 'Predictive HR & Leadership', 'Burnout prevention · Team neuro-compatibility · First Break Channel mapping', '$53B+ TAM', gold],
            ['🤝', 'Strategic Conflict Resolution', 'B2B negotiations · Co-founder conflicts · M&A integration · 120+ scripts', 'B2B · Consulting', purple],
            ['🏥', 'Clinical & Preventive HealthTech', 'Pre-symptomatic pathway ID · Predictive profiling for dementia & cardiovascular', '$500B+ · 18% CAGR', cyan],
          ].map(([icon, title, desc, market, color]) => (
            <div key={title} className="rounded-lg p-3 text-xs" style={{ backgroundColor: bgCard }}>
              <div className="text-lg mb-2">{icon}</div>
              <div className="font-semibold mb-1" style={{ color }}>{title}</div>
              <div className="text-gray-400 leading-relaxed mb-2">{desc}</div>
              <Tag color={color}>{market}</Tag>
            </div>
          ))}
          <div className="rounded-lg p-3 text-xs flex flex-col justify-between" style={{ backgroundColor: bgCard }}>
            <div>
              <div className="font-bold tracking-widest mb-2 text-xs" style={{ color: gold }}>IP SECURED</div>
              <div className="text-gray-400 mb-3 leading-relaxed">Copyright No. 147149 & 146964<br />Ukrainian National Office of IP & Innovations</div>
              <div className="font-bold tracking-widest mb-2 text-xs" style={{ color: purple }}>PLATFORM</div>
              <div className="text-gray-400 leading-relaxed">v7.2 Core · GitHub-ready<br />225+ Neural Configs · AI-Ready</div>
            </div>
            <div className="mt-3 rounded p-2 text-center text-xs" style={{ backgroundColor: bgDeep }}>
              <div style={{ color: gold }}>evawhite.tech@gmail.com</div>
            </div>
          </div>
        </div>

        {/* FOOTER */}
        <div className="text-center mb-4">
          <div className="text-xs text-gray-500 italic leading-relaxed max-w-2xl mx-auto">
            "Make neurobiological self-knowledge as accessible as a blood test. No hardware. No lab. Enter a date."
          </div>
          <div className="text-xs mt-1" style={{ color: gold }}>— Eva White, Founder · Biochemical Resonance Ecosystem</div>
        </div>

        <div className="flex justify-between items-center pt-3 text-xs text-gray-600" style={{ borderTop: '1px solid #1e2d4a' }}>
          <div>BIOCHEMICAL RESONANCE ECOSYSTEM · SCIENTIFIC BRIEF · 2026</div>
          <div style={{ color: gold }}>⚡</div>
          <div>Copyright No. 147149 & 146964 · Luxembourg / Ukraine</div>
        </div>

      </div>
    </div>
  );
}
