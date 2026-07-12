import { onegodianMembersPlugin } from '../../config/onegodian-members-plugin';

const features = [
  'Member dashboard',
  'Digital ID',
  'Certificates',
  'Protected resources',
  'WooCommerce membership sync',
  'OneGodian Calendar OTS-V5',
];

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
          OneGodian Members • v{cfg.version} • Synced
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'minmax(0,1.4fr) minmax(280px,0.6fr)',
            gap: 28,
            alignItems: 'stretch',
            marginTop: 28,
          }}
        >
          <div
            style={{
              border: `1px solid rgba(216,179,90,0.28)`,
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
              The OneGodian App is now synced with the production OneGodian Members WordPress plugin.
              WordPress and WooCommerce remain the source of membership, checkout, login, and order truth;
              the app provides the member-facing navigation and access gateway.
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
              <a
                href={cfg.membershipsUrl}
                style={{
                  border: `1px solid rgba(216,179,90,0.42)`,
                  color: cfg.brand.goldLight,
                  padding: '13px 18px',
                  borderRadius: 999,
                  fontWeight: 950,
                  textDecoration: 'none',
                  background: 'rgba(216,179,90,0.08)',
                }}
              >
                View Memberships
              </a>
              <a
                href={cfg.dashboardUrl}
                style={{
                  border: `1px solid rgba(111,60,255,0.55)`,
                  color: cfg.brand.softWhite,
                  padding: '13px 18px',
                  borderRadius: 999,
                  fontWeight: 950,
                  textDecoration: 'none',
                  background: 'rgba(111,60,255,0.16)',
                }}
              >
                Open Dashboard
              </a>
            </div>
          </div>

          <aside
            style={{
              border: `1px solid rgba(216,179,90,0.24)`,
              borderRadius: 28,
              padding: 26,
              background: 'rgba(7,6,7,0.72)',
            }}
          >
            <h2 style={{ margin: '0 0 14px', fontSize: 24 }}>Production Sync</h2>
            <dl style={{ margin: 0, display: 'grid', gap: 12 }}>
              <div>
                <dt style={{ color: cfg.brand.goldLight, fontSize: 12, fontWeight: 900, textTransform: 'uppercase' }}>Plugin</dt>
                <dd style={{ margin: 0 }}>{cfg.name}</dd>
              </div>
              <div>
                <dt style={{ color: cfg.brand.goldLight, fontSize: 12, fontWeight: 900, textTransform: 'uppercase' }}>Version</dt>
                <dd style={{ margin: 0 }}>{cfg.version}</dd>
              </div>
              <div>
                <dt style={{ color: cfg.brand.goldLight, fontSize: 12, fontWeight: 900, textTransform: 'uppercase' }}>Checkout</dt>
                <dd style={{ margin: 0 }}>WooCommerce product links</dd>
              </div>
              <div>
                <dt style={{ color: cfg.brand.goldLight, fontSize: 12, fontWeight: 900, textTransform: 'uppercase' }}>HPOS</dt>
                <dd style={{ margin: 0 }}>Compatible</dd>
              </div>
            </dl>
          </aside>
        </div>

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
                border: `1px solid rgba(216,179,90,0.20)`,
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
