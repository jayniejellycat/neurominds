import './Home.css';
import About from './About';
import headphones from './headphones.png';
import brain from './brain.png';
import head from './head.png';
import mountains from './mountains.png';
import soundstudio from './soundstudio.png';

const bars = [14, 26, 40, 58, 34, 70, 48, 82, 56, 90, 62, 76, 44, 64, 30, 50, 22, 36, 16];

const cards = [
  {
    page: 'Sound Studio',
    text: 'Try binaural beats, Solfeggio frequencies, and ambient sound mixers.',
    art: soundstudio,
    artClass: 'art-soundstudio',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
        <path d="M4 10v4M8 6v12M12 3v18M16 7v10M20 10v4" />
      </svg>
    ),
  },
  {
    page: 'Relaxation Library',
    text: 'Listen to curated playlists, guided meditations, and ASMR sounds.',
    art: mountains,
    artClass: 'art-mountains',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinejoin="round">
        <path d="M24 10C30 17 30 29 24 36 18 29 18 17 24 10Z" />
        <path d="M24 36C14 36 7 30 5 20 14 20 21 26 24 36Z" />
        <path d="M24 36C34 36 41 30 43 20 34 20 27 26 24 36Z" />
      </svg>
    ),
  },
  {
    page: 'Wellness Insights',
    text: 'Explore brainwave visuals, relaxation tips, and helpful resources.',
    art: head,
    artClass: 'art-head',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor">
        <rect x="4" y="12" width="4" height="8" rx="1" />
        <rect x="10" y="7" width="4" height="13" rx="1" />
        <rect x="16" y="3" width="4" height="17" rx="1" />
      </svg>
    ),
  },
];

function Home({ onNavigate }) {
  return (
    <div className="home-grid">
      <section className="home-hero">
        <div className="home-wave" aria-hidden="true">
          {bars.map((h, i) => (
            <span key={i} style={{ height: `${h}%` }} />
          ))}
        </div>
        <img className="art art-headphones" src={headphones} alt="" />

        <div className="home-hero-content">
          <p className="eyebrow">Your Solutions</p>
          <h1 className="home-hero-title">Calm. Focus. Reset.</h1>
          <p className="home-hero-text">
            Explore our personalized tools designed to reduce stress,
            enhance focus, and support better sleep.
          </p>
          <button className="home-button" onClick={() => onNavigate('Solutions')}>
            Explore Solutions →
          </button>
        </div>
      </section>

      <section className="home-card home-science">
        <img className="art art-brain" src={brain} alt="" />
        <div className="home-science-top">
          <h2>The Science Behind</h2>
          <button className="home-link" onClick={() => onNavigate('Science Behind')}>
            Learn More →
          </button>
        </div>
        <p>
          Discover how sound can calm the mind, regulate the nervous system,
          and support brain health.
        </p>
      </section>

      <div className="home-row">
        {cards.map((card) => (
          <article
            key={card.page}
            className="home-card"
            onClick={() => onNavigate(card.page)}
          >
            <img className={`art ${card.artClass}`} src={card.art} alt="" />
            <span className="home-icon">{card.icon}</span>
            <h2>{card.page}</h2>
            <p>{card.text}</p>
            <button
              className="home-arrow"
              aria-label={`Open ${card.page}`}
              onClick={(e) => {
                e.stopPropagation();
                onNavigate(card.page);
              }}
            >
              →
            </button>
          </article>
        ))}
      </div>

      <About />
    </div>
  );
}

export default Home;