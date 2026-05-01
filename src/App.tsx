const baseUrl = import.meta.env.BASE_URL;
const photos = Array.from(
  { length: 16 },
  (_, index) => `${baseUrl}photos/photo-${String(index + 1).padStart(2, '0')}.jpg`,
);

const reasons = [
  'your smile makes every day feel softer',
  'you make ordinary moments feel like magic',
  'you are my favorite hello and my sweetest home',
  'you make my heart do tiny cartwheels',
];

const floatingHearts = Array.from({ length: 28 }, (_, index) => ({
  id: index,
  left: `${(index * 37) % 100}%`,
  delay: `${(index % 9) * 0.55}s`,
  duration: `${7 + (index % 7) * 0.8}s`,
  size: `${14 + (index % 5) * 5}px`,
}));

function KittyFace() {
  return (
    <div className="kitty" aria-hidden="true">
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

function App() {
  return (
    <main>
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

      <section className="hero">
        <div className="hero-copy">
          <p className="eyebrow">made with all my love</p>
          <h1>For my beautiful girlfriend</h1>
          <p>
            A tiny pink world full of our memories, little hearts, soft sparkles, and one very
            fancy kitty bow because you deserve something adorable.
          </p>
          <a className="love-button" href="#memories">
            open our memories
          </a>
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

      <section className="memories" id="memories">
        <div className="section-heading">
          <p className="eyebrow">our little gallery</p>
          <h2>Every picture is a tiny love letter</h2>
        </div>
        <div className="photo-grid">
          {photos.map((photo, index) => (
            <figure key={photo} className={`photo-card card-${(index % 5) + 1}`}>
              <img src={photo} alt={`Memory ${index + 1}`} loading="lazy" />
              <figcaption>
                <span>heart</span>
                moment {index + 1}
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

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
