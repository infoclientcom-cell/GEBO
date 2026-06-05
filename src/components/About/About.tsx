import s from './About.module.scss';

const stats = [
  { value: '7+', label: 'Products Developed' },
  { value: 'AI \u2022 Web3 \u2022 Games', label: 'Technology Stack' },
  { value: 'Montenegro', label: 'Based' },
  { value: 'Global', label: 'Vision' },
];

export default function About() {
  return (
    <section id="about" className={s.section}>
      <div className={s.container}>
        <div className={s.header}>
          <span className={s.label}>About GEBO</span>
          <span className={s.line} />
        </div>

        <div className={s.content}>
          <p className={s.text}>
            GEBO is a technology company focused on developing software, artificial intelligence,
            gaming platforms, blockchain infrastructure and digital ecosystems.
          </p>
          <p className={s.text}>
            Our mission is to create products that make emerging technologies more accessible
            through intuitive interfaces, interactive experiences and innovative digital solutions.
          </p>

          <a href="#projects" className={s.link}>
            Learn More
            <span className={s.arrow}>&rarr;</span>
          </a>
        </div>

        <div className={s.stats}>
          {stats.map((stat) => (
            <div key={stat.label} className={s.stat}>
              <span className={s.statValue}>{stat.value}</span>
              <span className={s.statLabel}>{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
