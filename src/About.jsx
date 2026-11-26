import './About.css';

const sections = [
  {
    title: 'What Is Neuromind?',
    text: 'Neuromind is a sound-based wellness platform designed to help individuals experiencing stress, mental exhaustion, and burnout find moments of relaxation. By combining neuroscience with interactive audio experiences, we aim to create an environment where users can unwind, explore calming sounds, and support better sleep.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
        <path d="M4 10v4M8 6v12M12 3v18M16 7v10M20 10v4" />
      </svg>
    ),
  },
  {
    title: 'Our Purpose',
    text: 'Our purpose is to provide users with an accessible way to manage everyday stress and create healthier relaxation and sleep routines. Through our core features, including interactive sound experiences, curated relaxation resources, and educational insights, Neuromind explores how sound and different frequencies may influence brain activity, relaxation, and sleep.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="9" />
        <circle cx="12" cy="12" r="4.5" />
        <circle cx="12" cy="12" r="1" />
      </svg>
    ),
  },
  {
    title: 'Who We Are',
    text: 'We are a student team bringing together our interests in neuroscience, technology, and wellness. We developed Neuromind to explore how scientific research and interactive technology can be used to create meaningful experiences that support everyday well-being.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="9" cy="8" r="3.2" />
        <path d="M3 20c0-3.5 2.7-6 6-6s6 2.5 6 6" />
        <circle cx="17" cy="9" r="2.5" />
        <path d="M16 14.2c3 0 5 2 5 5" />
      </svg>
    ),
  },
  {
    title: 'Our Mission',
    text: 'Our mission is to make the connection between sound and the brain more accessible while providing users with tools and resources to relax, unwind, and prioritize their sleep and mental well-being.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M5 19c0-8 5-13 14-14 0 9-5 14-14 14zM5 19l7-7" />
      </svg>
    ),
  },
];

function About() {
  return (
    <section className="about" id="about">
      <div className="about-head">
        <h2 className="about-title">About Neuromind</h2>
        <p className="about-tagline">
          Helping your mind slow down through the science of sound.
        </p>
      </div>

      <div className="about-grid">
        {sections.map((s) => (
          <article key={s.title} className="about-card">
            <span className="about-icon">{s.icon}</span>
            <h3>{s.title}</h3>
            <p>{s.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export default About;
