import { useEffect, useState } from 'react';
import type { CSSProperties } from 'react';

type Page = 'home' | 'envelope' | 'gallery';

const baseUrl = import.meta.env.BASE_URL;
const photoCount = 32;
const photos = Array.from(
  { length: photoCount },
  (_, index) => `${baseUrl}photos/photo-${String(index + 1).padStart(2, '0')}.jpg`,
);
const anniversaryPhotos = photos.slice(16, 32);
const envelopeHearts = Array.from({ length: 18 }, (_, index) => ({
  id: index,
  left: `${8 + ((index * 23) % 84)}%`,
  delay: `${(index % 7) * 0.12}s`,
}));

function getPageFromHash(): Page {
  const hash = window.location.hash.replace('#/', '');
  if (hash === 'envelope' || hash === 'gallery') return hash;
  return 'home';
}

function getEnvelopePhotoStyle(index: number): CSSProperties {
  return {
    '--photo-order': index,
    '--photo-rotate': `${(index - 8) * 1.8}deg`,
  } as CSSProperties;
}

const reasons = [
  'your smile makes every day feel softer',
  'you make ordinary moments feel like magic',
  'you are my favorite hello and my sweetest home',
  'you make my heart do tiny cartwheels',
];

const loveLetters = [
  'I would choose you in every version of every day.',
  'You make my world feel gentle, bright, and safe.',
  'Every memory with you becomes one of my favorite stories.',
  'Your laugh is one of the prettiest sounds in my life.',
  'I love the little things about you more than words can hold.',
  'Being yours is still my favorite part of everything.',
  'You are my calm place and my biggest smile.',
  'I fall for you again in the smallest moments.',
];

const floatingHearts = Array.from({ length: 28 }, (_, index) => ({
  id: index,
  left: `${(index * 37) % 100}%`,
  delay: `${(index % 9) * 0.55}s`,
  duration: `${7 + (index % 7) * 0.8}s`,
  size: `${14 + (index % 5) * 5}px`,
}));

function KittyFace({ className = '' }: { className?: string }) {
  return (
    <div className={`kitty ${className}`} aria-hidden="true">
      <span className="ear ear-left" />
      <span className="ear ear-right" />
      <span className="bow">
        <span />
        <span />
      </span>
      <span className="eye eye-left" />
      <span className="eye eye-right" />
      <span className="nose" />
      <span className="whisker whisker-left top" />
      <span className="whisker whisker-left bottom" />
      <span className="whisker whisker-right top" />
      <span className="whisker whisker-right bottom" />
    </div>
  );
}

function FlowerScene() {
  return (
    <div className="flower-scene" aria-label="A cute masked hero giving Hello Kitty a flower">
      <div className="spider-cute" aria-hidden="true">
        <span className="spider-head">
          <span />
          <span />
        </span>
        <span className="spider-body" />
        <span className="spider-arm flower-arm">
          <span className="flower">
            <span />
            <span />
            <span />
            <span />
          </span>
        </span>
        <span className="spider-arm wave-arm" />
      </div>
      <KittyFace className="flower-kitty" />
    </div>
  );
}

function FloatingHearts() {
  return (
    <div className="heart-field" aria-hidden="true">
      {floatingHearts.map((heart) => (
        <span
          key={heart.id}
          className="floating-heart"
          style={{
            left: heart.left,
            animationDelay: heart.delay,
            animationDuration: heart.duration,
            width: heart.size,
            height: heart.size,
          }}
        />
      ))}
    </div>
  );
}

function Nav({ page }: { page: Page }) {
  return (
    <nav className="site-nav" aria-label="Website pages">
      <a className={page === 'home' ? 'active' : ''} href="#/">
        home
      </a>
      <a className={page === 'envelope' ? 'active' : ''} href="#/envelope">
        envelope
      </a>
      <a className={page === 'gallery' ? 'active' : ''} href="#/gallery">
        gallery
      </a>
    </nav>
  );
}

function HomePage() {
  return (
    <>
      <section className="hero">
        <div className="hero-copy">
          <p className="eyebrow">made with all my love</p>
          <h1>For my beautiful girlfriend</h1>
          <p>
            A tiny pink world full of our memories, little hearts, soft sparkles, and one very
            fancy kitty bow because you deserve something adorable.
          </p>
          <div className="hero-actions">
            <a className="love-button" href="#/envelope">
              open 14 months
            </a>
            <a className="love-button secondary" href="#/gallery">
              read the letters
            </a>
          </div>
        </div>

        <div className="hero-photo-stack" aria-label="Favorite memories">
          <img src={photos[0]} alt="A favorite memory together" />
          <img src={photos[1]} alt="A sweet photo memory" />
          <img src={photos[2]} alt="A cute moment from the album" />
          <KittyFace />
        </div>
      </section>

      <section className="ticker" aria-label="Love notes">
        <div>
          <span>love you forever</span>
          <span>sweetheart</span>
          <span>my favorite person</span>
          <span>hello kitty hugs</span>
          <span>heart eyes always</span>
        </div>
      </section>

      <section className="reasons" aria-label="Reasons I love you">
        {reasons.map((reason, index) => (
          <article key={reason} className="reason-card">
            <span>{String(index + 1).padStart(2, '0')}</span>
            <p>{reason}</p>
          </article>
        ))}
      </section>
    </>
  );
}

function EnvelopePage() {
  const [isEnvelopeOpen, setIsEnvelopeOpen] = useState(false);

  return (
    <section className={`anniversary page-section ${isEnvelopeOpen ? 'is-open' : ''}`} aria-label="Happy 14 months">
      <div className="anniversary-copy">
        <p className="eyebrow">happy 14 months</p>
        <h2>Open this little love envelope</h2>
        <p>
          A tiny Hello Kitty surprise filled with hearts, happy dances, better picture reveals, and
          a cute masked hero giving Kitty a flower.
        </p>
      </div>

      <div className="envelope-stage">
        <button
          className="kitty-envelope"
          type="button"
          aria-expanded={isEnvelopeOpen}
          onClick={() => setIsEnvelopeOpen((open) => !open)}
        >
          <span className="envelope-back" />
          <span className="envelope-letter">
            <strong>Happy 14 Months</strong>
            <small>i love you so much</small>
          </span>
          <span className="envelope-flap" />
          <span className="envelope-front">
            <KittyFace />
            <span className="tap-note">{isEnvelopeOpen ? 'close envelope' : 'tap to open'}</span>
          </span>
        </button>

        <div className="surprise-burst" aria-hidden="true">
          {envelopeHearts.map((heart) => (
            <span
              key={heart.id}
              className="burst-heart"
              style={{ left: heart.left, animationDelay: heart.delay }}
            />
          ))}
          <KittyFace />
          <KittyFace />
          <KittyFace />
        </div>

        <FlowerScene />

        <div className="envelope-photos" aria-label="Happy 14 months pictures">
          {anniversaryPhotos.map((photo, index) => (
            <figure key={photo} className="envelope-photo" style={getEnvelopePhotoStyle(index)}>
              <img src={photo} alt={`14 month memory ${index + 1}`} loading="lazy" />
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

function GalleryPage() {
  const [openLetters, setOpenLetters] = useState<number[]>([]);

  const toggleLoveLetter = (index: number) => {
    setOpenLetters((current) =>
      current.includes(index) ? current.filter((item) => item !== index) : [...current, index],
    );
  };

  return (
    <section className="memories page-section" id="memories">
      <div className="section-heading">
        <p className="eyebrow">our little gallery</p>
        <h2>Every picture is a tiny love letter</h2>
      </div>
      <div className="photo-grid">
        {photos.map((photo, index) => (
          <figure
            key={photo}
            className={`photo-card card-${(index % 5) + 1} ${openLetters.includes(index) ? 'is-flipped' : ''}`}
          >
            <button
              className="photo-flip"
              type="button"
              aria-pressed={openLetters.includes(index)}
              aria-label={`Open love letter for memory ${index + 1}`}
              onClick={() => toggleLoveLetter(index)}
            >
              <span className="photo-inner">
                <span className="photo-front">
                  <img src={photo} alt={`Memory ${index + 1}`} loading="lazy" />
                  <span className="photo-caption">
                    <span>letter</span>
                    moment {index + 1}
                  </span>
                </span>
                <span className="photo-letter">
                  <span>love letter {index + 1}</span>
                  <strong>{loveLetters[index % loveLetters.length]}</strong>
                  <small>tap to see the photo again</small>
                </span>
              </span>
            </button>
          </figure>
        ))}
      </div>
    </section>
  );
}

function App() {
  const [page, setPage] = useState<Page>(getPageFromHash);

  useEffect(() => {
    const handleHashChange = () => setPage(getPageFromHash());
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  return (
    <main>
      <FloatingHearts />
      <Nav page={page} />
      {page === 'home' && <HomePage />}
      {page === 'envelope' && <EnvelopePage />}
      {page === 'gallery' && <GalleryPage />}
      <section className="message">
        <KittyFace />
        <div>
          <p className="eyebrow">one more thing</p>
          <h2>You are loved in every tiny detail.</h2>
          <p>
            I hope this makes you smile the same way you make me smile. You are my favorite person,
            my prettiest thought, and the sweetest part of my day.
          </p>
        </div>
      </section>
    </main>
  );
}

export default App;
