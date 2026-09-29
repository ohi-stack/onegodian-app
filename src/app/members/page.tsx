import { onegodianMembersPlugin } from '../../config/onegodian-members-plugin';

const features = [
  'Member dashboard',
  'OneGodian 101 orientation',
  'Digital ID',
  'Certificates',
  'Protected resources',
  'WooCommerce membership sync',
  'OneGodian Calendar OTS-V5',
];

const buttonStyle = {
  border: '1px solid rgba(216,179,90,0.42)',
  color: '#f0d98a',
  padding: '13px 18px',
  borderRadius: 999,
  fontWeight: 950,
  textDecoration: 'none',
  background: 'rgba(216,179,90,0.08)',
} as const;

export default function MembersPage() {
  const cfg = onegodianMembersPlugin;

  return (
    <main
      style={{
        minHeight: '100vh',
        background:
          'radial-gradient(circle at top left, rgba(111,60,255,0.22), transparent 34%), radial-gradient(circle at bottom right, rgba(216,179,90,0.18), transparent 34%), linear-gradient(180deg,#070607 0%,#17121f 52%,#070607 100%)',
        color: cfg.brand.softWhite,
        padding: '72px 24px',
        fontFamily:
          'Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
      }}
    >
      <section style={{ maxWidth: 1120, margin: '0 auto' }}>
        <div
          style={{
            display: 'inline-flex',
            border: `1px solid ${cfg.brand.gold}`,
            color: cfg.brand.goldLight,
            borderRadius: 999,
            padding: '9px 14px',
            fontSize: 12,
            fontWeight: 900,
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            background: 'rgba(216,179,90,0.10)',
          }}
        >
          OneGodian Members • v{cfg.version} • production candidate
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: 28,
            alignItems: 'stretch',
            marginTop: 28,
          }}
        >
          <div
            style={{
              border: '1px solid rgba(216,179,90,0.28)',
              borderRadius: 28,
              padding: 32,
              background: 'rgba(255,255,255,0.045)',
              boxShadow: '0 22px 70px rgba(0,0,0,0.30)',
            }}
          >
            <h1 style={{ fontSize: 48, lineHeight: 1.05, margin: '0 0 16px', fontWeight: 950 }}>
              OneGodian Member Access
            </h1>
            <p style={{ color: 'rgba(245,241,232,0.82)', fontSize: 18, lineHeight: 1.75, maxWidth: 760 }}>
              The OneGodian App is aligned with the OneGodian Members v{cfg.version} production candidate.
              WordPress and WooCommerce remain the source of membership, checkout, login, and order truth;
              this app provides the member-facing navigation and access gateway.
            </p>

            <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginTop: 28 }}>
              <a
                href={cfg.myAccountUrl}
                style={{
                  background: `linear-gradient(135deg, ${cfg.brand.gold} 0%, ${cfg.brand.goldLight} 100%)`,
                  color: cfg.brand.obsidian,
                  padding: '13px 18px',
                  borderRadius: 999,
                  fontWeight: 950,
                  textDecoration: 'none',
                }}
              >
                Login / My Account
              </a>
              <a href={cfg.dashboardUrl} style={buttonStyle}>Open Dashboard</a>
              <a href={cfg.onegodian101Url} style={buttonStyle}>Start OneGodian 101</a>
            </div>
          </div>

          <aside
            style={{
              border: '1px solid rgba(216,179,90,0.24)',
              borderRadius: 28,
              padding: 26,
              background: 'rgba(7,6,7,0.72)',
            }}
          >
            <h2 style={{ margin: '0 0 14px', fontSize: 24 }}>Login Details</h2>
            <p style={{ color: 'rgba(245,241,232,0.78)', lineHeight: 1.7 }}>
              Credentials are entered only on OneGodian.org. This app does not collect or store your password.
            </p>
            <dl style={{ margin: '20px 0', display: 'grid', gap: 14 }}>
              <div>
                <dt style={{ color: cfg.brand.goldLight, fontWeight: 900 }}>Username or email address</dt>
                <dd style={{ margin: '4px 0 0', color: 'rgba(245,241,232,0.72)' }}>Use the username or email attached to your OneGodian account.</dd>
              </div>
              <div>
                <dt style={{ color: cfg.brand.goldLight, fontWeight: 900 }}>Password</dt>
                <dd style={{ margin: '4px 0 0', color: 'rgba(245,241,232,0.72)' }}>Enter your password on the secure OneGodian.org account page.</dd>
              </div>
              <div>
                <dt style={{ color: cfg.brand.goldLight, fontWeight: 900 }}>Remember me</dt>
                <dd style={{ margin: '4px 0 0', color: 'rgba(245,241,232,0.72)' }}>Use this option only on a private device.</dd>
              </div>
            </dl>
            <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
              <a href={cfg.lostPasswordUrl} style={buttonStyle}>Forgot Password</a>
              <a href={cfg.createAccountUrl} style={buttonStyle}>Create Account</a>
              <a href={cfg.membershipsUrl} style={buttonStyle}>Explore Membership</a>
            </div>
          </aside>
        </div>

        <section
          style={{
            border: '1px solid rgba(111,60,255,0.38)',
            borderRadius: 24,
            padding: 24,
            background: 'rgba(111,60,255,0.10)',
            marginTop: 22,
          }}
        >
          <h2 style={{ margin: '0 0 12px' }}>OneGodian 101</h2>
          <p style={{ margin: 0, color: 'rgba(245,241,232,0.78)', lineHeight: 1.7 }}>
            Orientation progress is owned by the OneGodian Members plugin and exposed through the authenticated Members API. Formal University course progress and certificates remain separate LMS records.
          </p>
          <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap', marginTop: 18 }}>
            <a href={cfg.onegodian101Url} style={buttonStyle}>Open Orientation</a>
            <a href={cfg.onegodian101ProgressUrl} style={buttonStyle}>View Progress</a>
          </div>
        </section>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: 14,
            marginTop: 22,
          }}
        >
          {features.map((feature) => (
            <div
              key={feature}
              style={{
                border: '1px solid rgba(216,179,90,0.20)',
                borderRadius: 18,
                padding: 18,
                background: 'rgba(255,255,255,0.04)',
                fontWeight: 850,
              }}
            >
              {feature}
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
