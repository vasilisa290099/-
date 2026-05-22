import React from 'react';

const G = {
  bg: '#07020f',
  card: 'rgba(255,255,255,0.04)',
  bdr: 'rgba(255,255,255,0.09)',
  gold: '#fbbf24',
  purple: '#c084fc',
  cyan: '#67e8f9',
  green: '#4ade80',
  red: '#f87171',
  blue: '#60a5fa',
  orange: '#fb923c',
  pink: '#f472b6',
  muted: '#6b7280',
  sub: '#9ca3af',
  text: '#e5e7eb',
};

const Tag = ({ label, color = G.purple }) => (
  <span style={{
    background: color + '20',
    border: `1px solid ${color}50`,
    color,
    fontSize: 8,
    fontWeight: 800,
    padding: '3px 10px',
    borderRadius: 20,
    letterSpacing: '1.5px',
    textTransform: 'uppercase',
  }}>{label}</span>
);

export default function OnePager() {
  return (
    <div style={{
      background: G.bg,
      minHeight: '100vh',
      fontFamily: 'system-ui,-apple-system,sans-serif',
      color: 'white',
      padding: '28px 20px',
    }}>
      <div style={{ maxWidth: 760, margin: '0 auto' }}>

        {/* ── HEADER ── */}
        <div style={{
          background: 'linear-gradient(135deg,rgba(192,132,252,0.10),rgba(103,232,249,0.07))',
          border: '1px solid rgba(192,132,252,0.25)',
          borderRadius: 20,
          padding: '24px 28px 20px',
          marginBottom: 16,
          position: 'relative',
          overflow: 'hidden',
        }}>
          <div style={{
            position: 'absolute', top: -40, right: -40,
            width: 180, height: 180,
            background: 'radial-gradient(circle,rgba(192,132,252,0.18) 0%,transparent 70%)',
            pointerEvents: 'none',
          }} />

          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: 12 }}>
            <div>
              <div style={{ marginBottom: 10 }}>
                <Tag label="One-Pager · Eva White · 2025" color={G.gold} />
              </div>
              <h1 style={{
                fontSize: 'clamp(28px,6vw,46px)',
                fontWeight: 900,
                letterSpacing: '-2px',
                lineHeight: 1.0,
                margin: '0 0 6px',
                background: 'linear-gradient(135deg,#fff 0%,#c084fc 50%,#67e8f9 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}>BIOCHEMICAL<br />RESONANCE</h1>
              <p style={{ color: '#a78bfa', fontSize: 10, letterSpacing: '3px', fontWeight: 700, margin: '0 0 12px' }}>
                NEUROCHEMICAL PROFILING ECOSYSTEM
              </p>
              <p style={{
                color: G.text, fontSize: 13, lineHeight: 1.75, margin: 0,
                fontStyle: 'italic', maxWidth: 440,
              }}>
                "Enter a birth date. Receive a complete neurochemical map.<br />
                <strong style={{ color: 'white' }}>No hardware. No lab. No specialist.</strong>"
              </p>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 8, alignItems: 'flex-end' }}>
              {[
                ['21 yrs', 'research'],
                ['1,000+', 'profiles'],
                ['$8.4B+', 'TAM'],
                ['3', 'products live'],
              ].map(([v, l]) => (
                <div key={l} style={{
                  background: 'rgba(0,0,0,0.45)',
                  border: `1px solid ${G.bdr}`,
                  borderRadius: 10,
                  padding: '8px 16px',
                  textAlign: 'right',
                  minWidth: 90,
                }}>
                  <p style={{ fontSize: 18, fontWeight: 900, color: 'white', margin: 0, lineHeight: 1 }}>{v}</p>
                  <p style={{ fontSize: 8, color: G.sub, margin: '3px 0 0', letterSpacing: '1px' }}>{l.toUpperCase()}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── PROBLEM → SOLUTION ── */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12, marginBottom: 12 }}>

          {/* PROBLEM */}
          <div style={{
            background: G.card,
            border: `1px solid ${G.bdr}`,
            borderLeft: `3px solid ${G.red}`,
            borderRadius: 14,
            padding: '16px 18px',
          }}>
            <Tag label="The Problem" color={G.red} />
            <p style={{ color: 'white', fontWeight: 900, fontSize: 14, margin: '10px 0 8px', lineHeight: 1.2 }}>
              Every person has a neurobiological wiring.<br />
              <span style={{ color: G.red }}>No product maps it.</span>
            </p>
            {[
              'Psychology describes behaviour — not its biological source',
              'Medicine treats symptoms — not the architecture generating them',
              'Personality tests are static — no prediction, no protocol',
              'Two people in conflict speak different neurochemical languages',
            ].map(t => (
              <div key={t} style={{ display: 'flex', gap: 7, alignItems: 'flex-start', marginBottom: 5 }}>
                <div style={{ width: 3, minHeight: 12, background: G.red, borderRadius: 2, marginTop: 4, flexShrink: 0 }} />
                <p style={{ color: G.sub, fontSize: 10, margin: 0, lineHeight: 1.55 }}>{t}</p>
              </div>
            ))}
          </div>

          {/* SOLUTION */}
          <div style={{
            background: G.card,
            border: `1px solid ${G.bdr}`,
            borderLeft: `3px solid ${G.cyan}`,
            borderRadius: 14,
            padding: '16px 18px',
          }}>
            <Tag label="The Solution" color={G.cyan} />
            <p style={{ color: 'white', fontWeight: 900, fontSize: 14, margin: '10px 0 8px', lineHeight: 1.2 }}>
              Birth date → proprietary algorithm →<br />
              <span style={{ color: G.cyan }}>complete neurochemical profile.</span>
            </p>

            <div style={{
              background: 'rgba(103,232,249,0.07)',
              border: `1px solid rgba(103,232,249,0.2)`,
              borderRadius: 10,
              padding: '10px 13px',
              marginBottom: 8,
            }}>
              <p style={{ color: G.text, fontSize: 11, margin: 0, lineHeight: 1.65, textAlign: 'center' }}>
                🔒 <strong style={{ color: 'white' }}>The computation method is proprietary.</strong><br />
                Like 23andMe — you don't need to understand PCR<br />to receive your DNA results.
              </p>
            </div>

            {[
              ['Dominant neurotransmitter hierarchy', G.purple],
              ['Stress architecture + discharge Vector', G.orange],
              ['Real-time load — what the NS needs today', G.gold],
              ['Communication gap between two people', G.cyan],
            ].map(([t, c]) => (
              <div key={t} style={{ display: 'flex', gap: 7, alignItems: 'flex-start', marginBottom: 5 }}>
                <div style={{ width: 3, minHeight: 12, background: c, borderRadius: 2, marginTop: 4, flexShrink: 0 }} />
                <p style={{ color: G.sub, fontSize: 10, margin: 0, lineHeight: 1.55 }}>{t}</p>
              </div>
            ))}
          </div>
        </div>

        {/* ── 3 PRODUCTS ── */}
        <div style={{
          background: G.card,
          border: `1px solid ${G.bdr}`,
          borderRadius: 14,
          padding: '16px 18px',
          marginBottom: 12,
        }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12, flexWrap: 'wrap', gap: 6 }}>
            <Tag label="Three Products · One Ecosystem" color={G.gold} />
            <p style={{ color: G.muted, fontSize: 9, margin: 0 }}>Prototype live · AI-integrated · all three operational</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 10 }}>
            {[
              {
                e: '📚', name: 'Code of Reality', role: 'Book · IP Core',
                desc: '416-page theoretical framework. The Vector: why identical stress → explosion in one person, disease in another, transformation in a third.',
                stats: ['416 pp', '21yr R&D', 'Registered ©'],
                c: G.gold,
              },
              {
                e: '🧠', name: 'App 1 · Biochemical Resonance', role: '"Know Yourself"',
                desc: 'Individual neurochemical profile · Triple Pharmacy (Art + Literature + Sound as Rx) · Daily protocol · Crisis Right Now mode. AI generates response on-demand.',
                stats: ['225+ configs', '6 modules', 'AI-Ready ✅'],
                c: G.purple,
              },
              {
                e: '⚡', name: 'App 2 · Neuro-Translator', role: '"Understand Each Other"',
                desc: 'Two birth dates → dual profiles → computed neurochemical gap → exact communication protocol. AI generates the script. Fully autonomous.',
                stats: ['80+ comm routes', '6 conflicts', 'AI-Ready ✅'],
                c: G.cyan,
              },
            ].map(({ e, name, role, desc, stats, c }) => (
              <div key={name} style={{
                background: c + '09',
                border: `1px solid ${c}30`,
                borderRadius: 12,
                padding: '14px',
              }}>
                <div style={{ display: 'flex', gap: 8, alignItems: 'center', marginBottom: 6 }}>
                  <span style={{ fontSize: 22 }}>{e}</span>
                  <div>
                    <p style={{ color: 'white', fontWeight: 800, fontSize: 11, margin: 0, lineHeight: 1.2 }}>{name}</p>
                    <p style={{ color: c, fontSize: 9, margin: '2px 0 0', fontWeight: 700 }}>{role}</p>
                  </div>
                </div>
                <p style={{ color: G.sub, fontSize: 10, lineHeight: 1.6, margin: '0 0 9px' }}>{desc}</p>
                <div style={{ display: 'flex', gap: 5, flexWrap: 'wrap' }}>
                  {stats.map(s => (
                    <span key={s} style={{
                      background: 'rgba(0,0,0,0.5)',
                      border: `1px solid ${c}25`,
                      color: c,
                      fontSize: 8,
                      fontWeight: 700,
                      padding: '2px 7px',
                      borderRadius: 6,
                    }}>{s}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── CASE STUDIES + MOAT ── */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12, marginBottom: 12 }}>

          {/* CASE STUDIES */}
          <div style={{
            background: G.card,
            border: `1px solid ${G.bdr}`,
            borderRadius: 14,
            padding: '16px 18px',
          }}>
            <Tag label="Predictive Accuracy & Case Studies" color={G.pink} />
            <p style={{ color: G.sub, fontSize: 9, margin: '6px 0 10px', fontStyle: 'italic' }}>
              System operates autonomously via birth dates
            </p>

            {/* Case 1 — Purple */}
            <div style={{
              background: G.purple + '0D',
              border: `1px solid ${G.purple}30`,
              borderRadius: 10,
              padding: '11px 13px',
              marginBottom: 8,
            }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 5 }}>
                <p style={{ color: 'white', fontWeight: 800, fontSize: 11, margin: 0 }}>
                  🎨 B2C: Executive Burnout Prevention
                </p>
                <span style={{ color: G.green, fontSize: 8, fontWeight: 800, flexShrink: 0 }}>✅ RESOLVED</span>
              </div>
              <p style={{ color: G.purple, fontSize: 9, margin: '0 0 4px', fontWeight: 700 }}>
                Tech CEO (Male, 38) · D1-Sympathetic Storm
              </p>
              <p style={{ color: G.muted, fontSize: 9, margin: '0 0 5px', lineHeight: 1.5 }}>
                Algorithm output: Severe risk of chronic insomnia + decision fatigue.<br />
                Generated Rx: Fractal visual therapy (Shishkin protocol) + Bach audio structuring + Vagus nerve kinetic reset.
              </p>
              <div style={{
                background: G.green + '12',
                border: `1px solid ${G.green}30`,
                borderRadius: 6,
                padding: '5px 8px',
              }}>
                <p style={{ color: G.green, fontSize: 9, margin: 0, fontWeight: 700 }}>
                  Cortisol normalized in 15 mins. No medication required.
                </p>
              </div>
            </div>

            {/* Case 2 — Blue */}
            <div style={{
              background: G.blue + '0D',
              border: `1px solid ${G.blue}30`,
              borderRadius: 10,
              padding: '11px 13px',
              marginBottom: 8,
            }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 5 }}>
                <p style={{ color: 'white', fontWeight: 800, fontSize: 11, margin: 0 }}>
                  ⚡ B2B: Co-Founder Conflict Resolution
                </p>
                <span style={{ color: G.green, fontSize: 8, fontWeight: 800, flexShrink: 0 }}>✅ RESOLVED</span>
              </div>
              <p style={{ color: G.blue, fontSize: 9, margin: '0 0 4px', fontWeight: 700 }}>
                Two key business partners · stalled negotiations
              </p>
              <p style={{ color: G.muted, fontSize: 9, margin: '0 0 5px', lineHeight: 1.5 }}>
                Algorithm output: "Defensive Aggression" vs "Truth Filter" — communication gap identified.<br />
                Neuro-Translator generated 1-line exact script bypassing neurochemical triggers.
              </p>
              <div style={{
                background: G.green + '12',
                border: `1px solid ${G.green}30`,
                borderRadius: 6,
                padding: '5px 8px',
              }}>
                <p style={{ color: G.green, fontSize: 9, margin: 0, fontWeight: 700 }}>
                  Conflict resolved instantly. Team workflow restored.
                </p>
              </div>
            </div>

            <div style={{
              background: G.gold + '10',
              border: `1px solid ${G.gold}30`,
              borderRadius: 8,
              padding: '8px 10px',
              textAlign: 'center',
            }}>
              <p style={{ color: G.gold, fontSize: 10, margin: 0, lineHeight: 1.6 }}>
                <strong>Zero manual expert input required.</strong><br />
                <span style={{ color: G.sub, fontSize: 9 }}>AI generates output directly from birth data via proprietary algorithm.</span>
              </p>
            </div>
          </div>

          {/* MOAT */}
          <div style={{
            background: G.card,
            border: `1px solid ${G.bdr}`,
            borderRadius: 14,
            padding: '16px 18px',
          }}>
            <Tag label="Why Us · Moat" color={G.green} />
            <p style={{ color: 'white', fontWeight: 800, fontSize: 12, margin: '10px 0 8px' }}>
              What cannot be replicated quickly
            </p>
            {[
              {
                t: '21-year data corpus',
                d: '1,000+ profiles · historical validation · proprietary prescription library',
                c: G.gold,
              },
              {
                t: 'IP registered',
                d: 'Book + App 1 © UA 2025 · App 2 in progress · Temporary Protection EU',
                c: G.green,
              },
              {
                t: 'Methodology depth',
                d: '~2,000 lines original code · 30+ original terms · 8 invented concepts',
                c: G.purple,
              },
              {
                t: 'Autonomous AI-Ready Core',
                d: '100% digitized proprietary methodology. LLM-integrated architecture (GPT-4o / Claude ready). The system operates independently via API without manual expert input. Highly scalable.',
                c: G.cyan,
                highlight: true,
              },
            ].map(({ t, d, c, highlight }) => (
              <div key={t} style={{
                marginBottom: 8,
                ...(highlight ? {
                  background: G.cyan + '08',
                  border: `1px solid ${G.cyan}28`,
                  borderRadius: 10,
                  padding: '9px 11px',
                } : {}),
              }}>
                <div style={{ display: 'flex', gap: 6, alignItems: 'center', marginBottom: 2 }}>
                  <div style={{ width: 6, height: 6, borderRadius: '50%', background: c, flexShrink: 0 }} />
                  <p style={{ color: 'white', fontWeight: 700, fontSize: 10, margin: 0 }}>{t}</p>
                  {highlight && (
                    <span style={{
                      background: G.cyan + '22', color: G.cyan,
                      fontSize: 7, fontWeight: 900,
                      padding: '1px 6px', borderRadius: 5, marginLeft: 2,
                    }}>NEW</span>
                  )}
                </div>
                <p style={{ color: G.muted, fontSize: 9, margin: '0 0 0 12px', lineHeight: 1.5 }}>{d}</p>
              </div>
            ))}

            {/* WORLD FIRSTS mini */}
            <div style={{ marginTop: 10 }}>
              <Tag label="8 Original Inventions" color={G.gold} />
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 4, marginTop: 8 }}>
                {[
                  ['The Vector', G.gold],
                  ['Triple Pharmacy', G.purple],
                  ['Affective Flickering Axis', G.cyan],
                  ['Neuro Comm. Gap', G.orange],
                  ['FMOD Matrix', G.pink],
                  ['Channel Dampening', G.red],
                ].map(([t, c]) => (
                  <div key={t} style={{ display: 'flex', gap: 5, alignItems: 'center' }}>
                    <span style={{ color: c, fontSize: 8 }}>★</span>
                    <p style={{ color: G.sub, fontSize: 9, margin: 0 }}>{t}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* ── MARKET ── */}
        <div style={{
          background: G.card,
          border: `1px solid ${G.bdr}`,
          borderRadius: 14,
          padding: '16px 18px',
          marginBottom: 12,
        }}>
          <Tag label="Market" color={G.blue} />
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 8, margin: '10px 0' }}>
            {[
              ['$500B+', 'Mental Health Tech', G.purple],
              ['$4.3B', 'Relationship Apps', G.pink],
              ['$2.2B', 'Self-Knowledge Apps', G.gold],
              ['$8.4B+', 'Our TAM', G.green],
            ].map(([v, l, c]) => (
              <div key={l} style={{
                background: c + '10', border: `1px solid ${c}30`,
                borderRadius: 10, padding: '10px 8px', textAlign: 'center',
              }}>
                <p style={{ fontSize: 18, fontWeight: 900, color: c, margin: 0, lineHeight: 1 }}>{v}</p>
                <p style={{ fontSize: 9, color: G.sub, margin: '4px 0 0', lineHeight: 1.3 }}>{l}</p>
              </div>
            ))}
          </div>
          <p style={{ color: G.sub, fontSize: 10, margin: 0, lineHeight: 1.6 }}>
            Target partners: <strong style={{ color: 'white' }}>BetterHelp · Wysa · Calm · Lasting · Paired · Oura</strong> — neurochemical profiling layer ready to embed via API. No equivalent exists.
          </p>
        </div>

        {/* ── THE ASK ── */}
        <div style={{
          background: 'linear-gradient(135deg,rgba(251,191,36,0.08),rgba(192,132,252,0.06))',
          border: '1px solid rgba(251,191,36,0.25)',
          borderRadius: 14,
          padding: '16px 18px',
          marginBottom: 12,
        }}>
          <Tag label="What We're Looking For" color={G.gold} />
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 8, marginTop: 12 }}>
            {[
              { e: '🇪🇺', t: 'EU Ecosystem', d: 'Mentorship · accelerator · House of Startups · EIC · Horizon', c: G.blue },
              { e: '🔵', t: 'Licensing Partner', d: 'Wellness or MH app to embed neurochemical profiling. System ready today.', c: G.purple },
              { e: '🟢', t: 'Technical Co-founder', d: 'CTO / engineer for production mobile app. Equity + revenue from day 1.', c: G.green },
              { e: '🟡', t: 'Pilot Partner', d: 'Clinic · HR · coaching org · university. Real users + co-authored validation.', c: G.gold },
            ].map(({ e, t, d, c }) => (
              <div key={t} style={{
                background: c + '09', border: `1px solid ${c}28`,
                borderRadius: 11, padding: '12px',
                textAlign: 'center',
              }}>
                <span style={{ fontSize: 22 }}>{e}</span>
                <p style={{ color: 'white', fontWeight: 800, fontSize: 11, margin: '6px 0 4px' }}>{t}</p>
                <p style={{ color: G.sub, fontSize: 9, margin: 0, lineHeight: 1.5 }}>{d}</p>
              </div>
            ))}
          </div>
        </div>

        {/* ── CONTACT FOOTER ── */}
        <div style={{
          background: G.card,
          border: `1px solid ${G.bdr}`,
          borderRadius: 14,
          padding: '16px 20px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: 12,
        }}>
          <div>
            <p style={{ color: 'white', fontWeight: 900, fontSize: 16, margin: '0 0 2px' }}>Eva White</p>
            <p style={{ color: G.purple, fontSize: 10, margin: '0 0 6px', letterSpacing: '1px' }}>
              Founder · Author · Independent Researcher · Ukraine 🇺🇦 · EU 🇪🇺
            </p>
            <p style={{ color: G.sub, fontSize: 10, margin: 0, fontStyle: 'italic', lineHeight: 1.6 }}>
              "Make neurobiological self-knowledge as accessible as a blood test."
            </p>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 6, alignItems: 'flex-end' }}>
            {[
              { icon: '📧', label: 'vasilisa290@gmail.com', href: 'mailto:vasilisa290@gmail.com' },
              { icon: '💼', label: 'linkedin.com/in/eva-white-tech', href: 'https://www.linkedin.com/in/eva-white-tech' },
            ].map(({ icon, label, href }) => (
              <a key={label} href={href} target="_blank" rel="noreferrer" style={{
                background: 'rgba(0,0,0,0.5)',
                border: `1px solid ${G.bdr}`,
                borderRadius: 20,
                padding: '5px 16px',
                fontSize: 10,
                color: G.text,
                textDecoration: 'none',
                display: 'block',
              }}>
                {icon} {label}
              </a>
            ))}
          </div>
        </div>

        <p style={{
          color: G.muted, fontSize: 8, textAlign: 'center',
          marginTop: 14, letterSpacing: '1.5px',
        }}>
          BIOCHEMICAL RESONANCE · © 2025 EVA WHITE · ALL RIGHTS RESERVED · NDA REQUIRED FOR TECHNICAL DISCLOSURE
        </p>

      </div>
    </div>
  );
}
