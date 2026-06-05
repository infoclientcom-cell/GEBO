import s from './Philosophy.module.scss';

export default function Philosophy() {
  return (
    <section className={s.section}>
      <div className={s.container}>
        <div className={s.header}>
          <span className={s.label}>Our Philosophy</span>
          <span className={s.line} />
        </div>

        <h2 className={s.title}>Technology Through Experience</h2>

        <div className={s.content}>
          <p className={s.text}>
            We believe that the future of technology should be understandable, accessible and engaging.
          </p>
          <p className={s.text}>
            Through software, artificial intelligence, blockchain systems and interactive digital
            experiences, GEBO creates products that help people interact with complex technologies
            in a natural way.
          </p>
        </div>
      </div>
    </section>
  );
}
