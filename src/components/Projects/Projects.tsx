import s from './Projects.module.scss';

import imgStt from '../../assets/stt.market.webp';
import imgIqPump from '../../assets/iq-pump.webp';
import imgWinWin from '../../assets/win.stt.market.webp';
import imgMooMine from '../../assets/moo-mine.webp';
import imgNtStake from '../../assets/nt-stake.webp';
import imgJarald from '../../assets/Jarald.webp';
import imgLegacy from '../../assets/Legacy.webp';

interface Project {
  name: string;
  description: string;
  image: string;
  link?: string;
  linkLabel?: string;
  badge?: string;
  inactive?: boolean;
}

const projects: Project[] = [
  {
    name: 'STT Ecosystem',
    description: 'A blockchain ecosystem built around smart contracts, digital assets and automated reward distribution mechanisms. The ecosystem includes a deflationary token model, decentralized infrastructure and on-chain referral technologies.',
    image: imgStt,
    link: 'https://stt.market',
    linkLabel: 'Visit Project',
    badge: 'Requires Web3 Wallet Authentication',
  },
  {
    name: 'IQ Pump',
    description: 'An educational gaming platform combining knowledge, competition and interactive learning mechanics. Designed to make learning engaging through quizzes, tournaments and gamified progression systems.',
    image: imgIqPump,
    link: 'https://t.me/iqPumpBot?startapp',
    linkLabel: 'Visit Project',
  },
  {
    name: 'Win-Win',
    description: 'A decentralized lottery platform powered by transparent smart contracts and automated prize distribution mechanisms. Built to demonstrate fairness, transparency and automation through blockchain technology.',
    image: imgWinWin,
    link: 'https://win.stt.market',
    linkLabel: 'Visit Project',
    badge: 'Requires Web3 Wallet Authentication',
  },
  {
    name: 'MooMine',
    description: 'A digital farming simulation focused on resource management, strategic planning and long-term progression. Players develop virtual production chains and optimize resource allocation within a growing economy.',
    image: imgMooMine,
    link: 'https://t.me/moomine_bot?startapp',
    linkLabel: 'Visit Project',
  },
  {
    name: 'NT Stake',
    description: 'A gamified participation ecosystem exploring digital ownership, staking mechanics and user engagement models. Combines economic simulation with long-term progression systems.',
    image: imgNtStake,
    link: 'https://t.me/ntpay_exchange_bot?startapp',
    linkLabel: 'Visit Project',
  },
  {
    name: 'Jarald',
    description: 'A personal artificial intelligence platform and digital memory system designed for individuals and organizations. Jarald enables users to build personalized AI knowledge structures, digital assistants and intelligent workflows.',
    image: imgJarald,
    linkLabel: 'In Development',
    inactive: true,
  },
  {
    name: 'Legacy',
    description: 'An island economy simulator where players build, manage and expand their own digital world. The game focuses on resource management, strategic development and long-term economic decision making.',
    image: imgLegacy,
    linkLabel: 'In Development',
    inactive: true,
  },
];

export default function Projects() {
  return (
    <section id="projects" className={s.section}>
      <div className={s.container}>
        <div className={s.header}>
          <span className={s.label}>Our Projects</span>
          <span className={s.line} />
        </div>

        <div className={s.grid}>
          {projects.map((project) => (
            <div key={project.name} className={s.card}>
              <div className={s.cardTop}>
                <div className={s.iconWrap}>
                  <img src={project.image} alt={project.name} className={s.icon} />
                </div>
                <h3 className={s.cardTitle}>{project.name}</h3>
              </div>

              <p className={s.cardDesc}>{project.description}</p>

              {project.badge && (
                <span className={s.badge}>{project.badge}</span>
              )}

              <div className={s.cardBottom}>
                {project.inactive ? (
                  <span className={s.btnInactive}>{project.linkLabel}</span>
                ) : (
                  <a
                    href={project.link}
                    className={s.btn}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {project.linkLabel}
                    <span className={s.arrow}>&rarr;</span>
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
