import s from './Technologies.module.scss';

const techs = [
  {
    icon: (
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="24" cy="16" r="6" stroke="currentColor" strokeWidth="1.5"/>
        <circle cx="14" cy="32" r="4" stroke="currentColor" strokeWidth="1.5"/>
        <circle cx="34" cy="32" r="4" stroke="currentColor" strokeWidth="1.5"/>
        <line x1="20" y1="20" x2="16" y2="28" stroke="currentColor" strokeWidth="1.5"/>
        <line x1="28" y1="20" x2="32" y2="28" stroke="currentColor" strokeWidth="1.5"/>
        <line x1="18" y1="32" x2="30" y2="32" stroke="currentColor" strokeWidth="1.5"/>
      </svg>
    ),
    title: 'Artificial Intelligence',
    desc: 'Local AI systems, intelligent agents and digital memory technologies.',
  },
  {
    icon: (
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <polyline points="16,14 10,24 16,34" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
        <polyline points="32,14 38,24 32,34" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
        <line x1="26" y1="12" x2="22" y2="36" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    title: 'Software Development',
    desc: 'Modern web, mobile and cloud applications.',
  },
  {
    icon: (
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="12" y="12" width="24" height="24" rx="2" stroke="currentColor" strokeWidth="1.5"/>
        <rect x="18" y="18" width="12" height="12" rx="1" stroke="currentColor" strokeWidth="1.5"/>
        <line x1="24" y1="8" x2="24" y2="12" stroke="currentColor" strokeWidth="1.5"/>
        <line x1="24" y1="36" x2="24" y2="40" stroke="currentColor" strokeWidth="1.5"/>
        <line x1="8" y1="24" x2="12" y2="24" stroke="currentColor" strokeWidth="1.5"/>
        <line x1="36" y1="24" x2="40" y2="24" stroke="currentColor" strokeWidth="1.5"/>
      </svg>
    ),
    title: 'Blockchain Infrastructure',
    desc: 'Smart contracts, decentralized systems and digital asset ecosystems.',
  },
  {
    icon: (
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="10" y="10" width="28" height="20" rx="2" stroke="currentColor" strokeWidth="1.5"/>
        <polygon points="20,16 20,26 30,21" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinejoin="round"/>
        <line x1="18" y1="36" x2="30" y2="36" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <line x1="24" y1="30" x2="24" y2="36" stroke="currentColor" strokeWidth="1.5"/>
      </svg>
    ),
    title: 'Game Development',
    desc: 'Interactive products connecting users with emerging technologies through engaging experiences.',
  },
];

export default function Technologies() {
  return (
    <section id="technologies" className={s.section}>
      <div className={s.container}>
        <div className={s.header}>
          <span className={s.label}>Our Technologies</span>
          <span className={s.line} />
        </div>

        <div className={s.grid}>
          {techs.map((tech) => (
            <div key={tech.title} className={s.card}>
              <div className={s.icon}>{tech.icon}</div>
              <h3 className={s.title}>{tech.title}</h3>
              <p className={s.desc}>{tech.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
