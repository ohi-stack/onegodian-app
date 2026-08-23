'use client';

import { useMemo, useState } from 'react';

type Answer = 0 | 1 | 2;
type Stage = 'Explorer' | 'Aligned' | 'Strong Alignment';

const questions = [
  'Do you believe everything comes from one source?',
  'Do you believe there is one truth behind everything?',
  'Do you believe your life has a purpose?',
  'Do you feel connected to something greater than yourself?',
  'Have you thought about how you describe your belief identity?',
];

const answerOptions: { label: string; value: Answer }[] = [
  { label: 'Yes', value: 2 },
  { label: 'Not sure', value: 1 },
  { label: 'No', value: 0 },
];

function classify(score: number): Stage {
  if (score >= 8) return 'Strong Alignment';
  if (score >= 5) return 'Aligned';
  return 'Explorer';
}

export default function BeliefMapperClient() {
  const [started, setStarted] = useState(false);
  const [index, setIndex] = useState(0);
  const [answers, setAnswers] = useState<Answer[]>([]);
  const [finished, setFinished] = useState(false);

  const score = useMemo(() => answers.reduce((sum, value) => sum + value, 0), [answers]);
  const stage = classify(score);

  function answer(value: Answer) {
    const next = [...answers, value];
    setAnswers(next);
    if (index >= questions.length - 1) {
      setFinished(true);
      return;
    }
    setIndex(index + 1);
  }

  function restart() {
    setStarted(false);
    setIndex(0);
    setAnswers([]);
    setFinished(false);
  }

  return (
    <main style={styles.page}>
      <section style={styles.shell} aria-live="polite">
        <div style={styles.brand}>ONEGODIAN™ • BELIEF MAPPER</div>

        {!started && !finished && (
          <div style={styles.card}>
            <div style={styles.orb}>1</div>
            <h1 style={styles.h1}>What do you believe at your core?</h1>
            <p style={styles.copy}>
              Five quick questions. No account required. Your answers stay in this browser session and are not treated as a declaration of identity.
            </p>
            <button style={styles.primary} onClick={() => setStarted(true)}>Start the 10-second check</button>
            <p style={styles.note}>Voluntary reflection only. You decide how you identify.</p>
          </div>
        )}

        {started && !finished && (
          <div style={styles.card}>
            <div style={styles.progressTrack} aria-label={`Question ${index + 1} of ${questions.length}`}>
              <div style={{ ...styles.progressFill, width: `${((index + 1) / questions.length) * 100}%` }} />
            </div>
            <div style={styles.kicker}>QUESTION {index + 1} OF {questions.length}</div>
            <h2 style={styles.h2}>{questions[index]}</h2>
            <div style={styles.answers}>
              {answerOptions.map((option) => (
                <button key={option.label} style={styles.answer} onClick={() => answer(option.value)}>
                  {option.label}
                </button>
              ))}
            </div>
          </div>
        )}

        {finished && (
          <div style={styles.card}>
            <div style={styles.badge}>{stage}</div>
            <h1 style={styles.h1}>Your reflection result</h1>
            <p style={styles.copy}>
              {stage === 'Strong Alignment'
                ? 'Your answers show strong alignment with the unity, purpose, and One-Source ideas used in the OneGodian framework.'
                : stage === 'Aligned'
                  ? 'Your answers show meaningful alignment with several OneGodian ideas, with room to keep exploring.'
                  : 'Your answers place you in exploration mode. The next step is learning, not labeling.'}
            </p>
            <div style={styles.score}>Reflection score: {score}/10</div>
            <p style={styles.note}>
              This result is educational and does not assign a religion, legal status, membership, or personal identity. Only you can choose an identity.
            </p>
            <div style={styles.actions}>
              <a href="https://onegodian.org" style={styles.primaryLink}>Learn what OneGodian means</a>
              <button style={styles.secondary} onClick={restart}>Try again</button>
            </div>
          </div>
        )}
      </section>
    </main>
  );
}

const styles: Record<string, React.CSSProperties> = {
  page: {
    minHeight: '100vh',
    display: 'grid',
    placeItems: 'center',
    padding: '24px',
    background: 'radial-gradient(circle at top, #35205c 0, #0b1120 42%, #05070d 100%)',
    color: '#fff',
    fontFamily: 'Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, sans-serif',
  },
  shell: { width: '100%', maxWidth: 520 },
  brand: { textAlign: 'center', fontSize: 12, letterSpacing: '.18em', fontWeight: 800, color: '#d9c28f', marginBottom: 18 },
  card: {
    border: '1px solid rgba(255,255,255,.12)',
    borderRadius: 28,
    padding: 'clamp(24px, 6vw, 42px)',
    background: 'linear-gradient(180deg, rgba(18,26,44,.96), rgba(9,14,25,.98))',
    boxShadow: '0 30px 80px rgba(0,0,0,.42)',
  },
  orb: { width: 64, height: 64, display: 'grid', placeItems: 'center', borderRadius: 999, margin: '0 auto 22px', background: 'linear-gradient(135deg,#d7b35f,#7d5cc9)', fontSize: 26, fontWeight: 900 },
  h1: { fontSize: 'clamp(34px, 8vw, 52px)', lineHeight: 1, letterSpacing: '-.04em', textAlign: 'center', margin: '0 0 18px' },
  h2: { fontSize: 'clamp(28px, 7vw, 40px)', lineHeight: 1.08, letterSpacing: '-.035em', margin: '18px 0 28px' },
  kicker: { fontSize: 12, letterSpacing: '.14em', fontWeight: 800, color: '#cdb879', marginTop: 22 },
  copy: { fontSize: 17, lineHeight: 1.6, color: '#cbd5e1', textAlign: 'center' },
  note: { fontSize: 12, lineHeight: 1.5, color: '#94a3b8', textAlign: 'center', marginTop: 16 },
  progressTrack: { height: 8, borderRadius: 999, background: 'rgba(255,255,255,.08)', overflow: 'hidden' },
  progressFill: { height: '100%', borderRadius: 999, background: 'linear-gradient(90deg,#d7b35f,#8b6ad9)', transition: 'width .25s ease' },
  answers: { display: 'grid', gap: 12 },
  answer: { minHeight: 58, borderRadius: 16, border: '1px solid rgba(255,255,255,.15)', background: 'rgba(255,255,255,.055)', color: '#fff', fontSize: 17, fontWeight: 800, cursor: 'pointer' },
  primary: { width: '100%', minHeight: 58, border: 0, borderRadius: 16, background: 'linear-gradient(135deg,#d7b35f,#a88943)', color: '#111827', fontSize: 16, fontWeight: 900, cursor: 'pointer', marginTop: 14 },
  primaryLink: { display: 'grid', placeItems: 'center', minHeight: 58, borderRadius: 16, background: 'linear-gradient(135deg,#d7b35f,#a88943)', color: '#111827', fontSize: 15, fontWeight: 900, textDecoration: 'none', padding: '0 18px' },
  secondary: { minHeight: 58, borderRadius: 16, border: '1px solid rgba(255,255,255,.16)', background: 'transparent', color: '#fff', fontSize: 15, fontWeight: 800, cursor: 'pointer', padding: '0 18px' },
  badge: { display: 'table', margin: '0 auto 20px', padding: '9px 14px', borderRadius: 999, border: '1px solid rgba(215,179,95,.45)', background: 'rgba(215,179,95,.1)', color: '#f4dd9e', fontSize: 13, fontWeight: 900, letterSpacing: '.08em', textTransform: 'uppercase' },
  score: { textAlign: 'center', fontSize: 18, fontWeight: 900, marginTop: 20 },
  actions: { display: 'grid', gap: 10, marginTop: 24 },
};
