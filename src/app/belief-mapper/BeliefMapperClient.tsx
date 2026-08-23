'use client';

import { useState } from 'react';

type AnswerValue = 'yes' | 'not_sure' | 'no';
type Stage = 'Explorer' | 'Aligned' | 'Strong Alignment';
type MapperAnswer = { questionId: string; answer: AnswerValue };
type MapperResult = {
  version: string;
  score: number;
  maxScore: number;
  classification: Stage;
  summary: string;
  identityNotice: string;
  dataPolicy: string;
};

const questions = [
  { id: 'source', text: 'Do you believe everything comes from one source?' },
  { id: 'truth', text: 'Do you believe there is one truth behind everything?' },
  { id: 'purpose', text: 'Do you believe your life has a purpose?' },
  { id: 'connection', text: 'Do you feel connected to something greater than yourself?' },
  { id: 'identity', text: 'Have you thought about your belief identity?' },
] as const;

const answerOptions: { label: string; value: AnswerValue }[] = [
  { label: 'Yes', value: 'yes' },
  { label: 'Not sure', value: 'not_sure' },
  { label: 'No', value: 'no' },
];

const apiBase = (process.env.NEXT_PUBLIC_ONEGODIAN_API_URL || 'https://api.onegodian.org').replace(/\/$/, '');

export default function BeliefMapperClient() {
  const [started, setStarted] = useState(false);
  const [index, setIndex] = useState(0);
  const [answers, setAnswers] = useState<MapperAnswer[]>([]);
  const [result, setResult] = useState<MapperResult | null>(null);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState('');

  async function submitAnswers(nextAnswers: MapperAnswer[]) {
    setSubmitting(true);
    setError('');

    try {
      const response = await fetch(`${apiBase}/api/v1/belief-mapper/evaluate`, {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({ answers: nextAnswers }),
      });

      if (!response.ok) throw new Error(`Belief Mapper API returned ${response.status}`);
      const data = (await response.json()) as MapperResult;
      setResult(data);
    } catch (err) {
      console.error(err);
      setError('Your result could not be calculated right now. Your answers were not saved. Please try again.');
    } finally {
      setSubmitting(false);
    }
  }

  async function answer(value: AnswerValue) {
    if (submitting) return;
    const next = [...answers, { questionId: questions[index].id, answer: value }];
    setAnswers(next);

    if (index >= questions.length - 1) {
      await submitAnswers(next);
      return;
    }

    setIndex((current) => current + 1);
  }

  function restart() {
    setStarted(false);
    setIndex(0);
    setAnswers([]);
    setResult(null);
    setSubmitting(false);
    setError('');
  }

  return (
    <main style={styles.page}>
      <section style={styles.shell} aria-live="polite">
        <div style={styles.brand}>ONEGODIAN™ • BELIEF MAPPER</div>

        {!started && !result && (
          <div style={styles.card}>
            <div style={styles.orb}>1</div>
            <h1 style={styles.h1}>What do you believe at your core?</h1>
            <p style={styles.copy}>
              Five quick questions. No account required. The mapper evaluates answer alignment and does not declare your identity.
            </p>
            <button style={styles.primary} onClick={() => setStarted(true)}>Start the 10-second check</button>
            <p style={styles.note}>Voluntary reflection only. You decide how you identify.</p>
          </div>
        )}

        {started && !result && (
          <div style={styles.card}>
            <div style={styles.progressTrack} aria-label={`Question ${index + 1} of ${questions.length}`}>
              <div style={{ ...styles.progressFill, width: `${((index + 1) / questions.length) * 100}%` }} />
            </div>
            <div style={styles.kicker}>QUESTION {index + 1} OF {questions.length}</div>
            <h2 style={styles.h2}>{questions[index].text}</h2>
            <div style={styles.answers}>
              {answerOptions.map((option) => (
                <button key={option.value} style={styles.answer} disabled={submitting} onClick={() => answer(option.value)}>
                  {submitting ? 'Calculating…' : option.label}
                </button>
              ))}
            </div>
            {error && (
              <div role="alert" style={styles.error}>
                <strong>Unable to calculate.</strong>
                <span>{error}</span>
                <button style={styles.secondary} onClick={restart}>Start over</button>
              </div>
            )}
          </div>
        )}

        {result && (
          <div style={styles.card}>
            <div style={styles.badge}>{result.classification}</div>
            <h1 style={styles.h1}>Your reflection result</h1>
            <p style={styles.copy}>{result.summary}</p>
            <div style={styles.score}>Reflection score: {result.score}/{result.maxScore}</div>
            <p style={styles.note}>{result.identityNotice}</p>
            <p style={styles.dataNote}>{result.dataPolicy}</p>
            <div style={styles.actions}>
              <a href="https://onegodian.org" style={styles.primaryLink}>Learn what OneGodian means</a>
              <button style={styles.secondary} onClick={restart}>Try again</button>
            </div>
            <div style={styles.version}>{result.version}</div>
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
  dataNote: { fontSize: 12, lineHeight: 1.5, color: '#94a3b8', textAlign: 'center', marginTop: 8 },
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
  error: { display: 'grid', gap: 10, marginTop: 20, padding: 16, borderRadius: 14, background: 'rgba(239,68,68,.08)', border: '1px solid rgba(239,68,68,.25)', color: '#fecaca', fontSize: 13, lineHeight: 1.5 },
  version: { marginTop: 18, textAlign: 'center', color: '#64748b', fontSize: 11 },
};
