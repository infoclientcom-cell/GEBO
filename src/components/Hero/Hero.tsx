import s from './Hero.module.scss';

export default function Hero() {
  return (
    <section className={s.hero}>
      <div className={s.container}>
        <h1 className={s.title}>
          Building<br />Digital Worlds
        </h1>

        <div className={s.subtitleRow}>
          <span className={s.line} />
          <p className={s.subtitle}>
            Software Development &nbsp;&bull;&nbsp; Artificial Intelligence &nbsp;&bull;&nbsp; Game Development &nbsp;&bull;&nbsp; Blockchain Infrastructure
          </p>
        </div>

        <p className={s.description}>
          GEBO develops software products, artificial intelligence solutions, blockchain infrastructure
          and interactive digital ecosystems designed for the next generation of technology users.
        </p>

        <div className={s.buttons}>
          <a href="#projects" className={s.btnPrimary}>
            Explore Projects
            <span className={s.arrow}>&rarr;</span>
          </a>
          <a href="#contact" className={s.btnOutline}>
            Contact Us
          </a>
        </div>
      </div>

      <div className={s.grid} aria-hidden="true">
        {Array.from({ length: 60 }).map((_, i) => (
          <div key={i} className={s.gridDot} />
        ))}
      </div>
    </section>
  );
}
