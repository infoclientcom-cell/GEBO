import s from './Partnership.module.scss';

const categories = [
  {
    icon: (
      <svg viewBox="0 0 32 32" fill="none"><path d="M8 6h16v20H8z" stroke="currentColor" strokeWidth="1.5"/><path d="M12 12h8M12 16h8M12 20h5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>
    ),
    label: 'Developers',
  },
  {
    icon: (
      <svg viewBox="0 0 32 32" fill="none"><circle cx="16" cy="12" r="5" stroke="currentColor" strokeWidth="1.5"/><path d="M8 26c0-4.4 3.6-8 8-8s8 3.6 8 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>
    ),
    label: 'Investors',
  },
  {
    icon: (
      <svg viewBox="0 0 32 32" fill="none"><rect x="6" y="8" width="20" height="16" rx="2" stroke="currentColor" strokeWidth="1.5"/><path d="M6 14h20" stroke="currentColor" strokeWidth="1.5"/><path d="M12 8V6M20 8V6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>
    ),
    label: 'Educational Institutions',
  },
  {
    icon: (
      <svg viewBox="0 0 32 32" fill="none"><circle cx="16" cy="16" r="10" stroke="currentColor" strokeWidth="1.5"/><path d="M16 10v6l4 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
    ),
    label: 'Research Organizations',
  },
  {
    icon: (
      <svg viewBox="0 0 32 32" fill="none"><rect x="4" y="4" width="10" height="10" rx="1" stroke="currentColor" strokeWidth="1.5"/><rect x="18" y="4" width="10" height="10" rx="1" stroke="currentColor" strokeWidth="1.5"/><rect x="4" y="18" width="10" height="10" rx="1" stroke="currentColor" strokeWidth="1.5"/><rect x="18" y="18" width="10" height="10" rx="1" stroke="currentColor" strokeWidth="1.5"/></svg>
    ),
    label: 'Technology Companies',
  },
];

export default function Partnership() {
  return (
    <section id="partnership" className={s.section}>
      <div className={s.container}>
        <div className={s.header}>
          <span className={s.label}>Partnership</span>
          <span className={s.line} />
        </div>

        <h2 className={s.title}>Open for Collaboration</h2>

        <p className={s.desc}>
          GEBO actively collaborates with developers, investors, educational institutions,
          research organizations and technology companies. We welcome strategic partnerships
          focused on software development, artificial intelligence, blockchain innovation
          and digital ecosystems.
        </p>

        <div className={s.categories}>
          {categories.map((cat) => (
            <div key={cat.label} className={s.category}>
              <div className={s.catIcon}>{cat.icon}</div>
              <span className={s.catLabel}>{cat.label}</span>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}
