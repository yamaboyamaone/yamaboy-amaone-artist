import React from 'react';
import { createRoot } from 'react-dom/client';
import { ArrowDown, ArrowUpRight, AudioLines, Disc3, ExternalLink, Instagram, Menu, Music2, Play, Radio, Sparkles, X, Youtube } from 'lucide-react';
import portrait from './assets/yamaboy-portrait.png';
import './styles.css';

const links = {
  audiomack: 'https://audiomack.com/yama-boy-amaone-/',
  release: 'https://onerpm.link/250225110109',
  linktree: 'https://linktr.ee/Yamaboyamaone',
  tiktok: 'https://www.tiktok.com/@yamaboy_amaone',
  gamma: 'https://yamaboy-amaone-lt6z0lw.gamma.site',
};

const tracks = [
  { number: '01', title: 'ANTASHI KAINA', type: 'LATEST RELEASE', note: 'Out now · Stream everywhere', href: links.release, tag: 'NEW MUSIC' },
  { number: '02', title: 'Koda Yaushe', type: 'SINGLE', note: 'Featuring Mdgozil', href: 'https://audiomack.com/yama-boy-amaone-/song/koda-yaushe', tag: 'LISTEN' },
  { number: '03', title: 'Kaunar Ki', type: 'PROJECT', note: 'A collection of sounds and stories', href: 'https://audiomack.com/yama-boy-amaone-/album/kaunar-ki', tag: 'PLAY PROJECT' },
];

function App() {
  const [menuOpen, setMenuOpen] = React.useState(false);
  const [playerOpen, setPlayerOpen] = React.useState(false);
  const closeMenu = () => setMenuOpen(false);
  return (
    <div className="site-shell">
      <div className="grain" aria-hidden="true" />
      <header className="topbar">
        <a className="wordmark" href="#home" onClick={closeMenu} aria-label="Yamaboy Amaone home"><span className="mark">Y</span><span>YAMABOY <b>AMAONE</b></span></a>
        <button className="mobile-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? 'Close navigation' : 'Open navigation'}>{menuOpen ? <X /> : <Menu />}</button>
        <nav className={menuOpen ? 'nav-links nav-open' : 'nav-links'}>
          <a href="#music" onClick={closeMenu}>Music</a><a href="#about" onClick={closeMenu}>The Artist</a><a href="#connect" onClick={closeMenu}>Connect</a>
          <a className="nav-cta" href={links.audiomack} target="_blank" rel="noreferrer" onClick={closeMenu}>Listen now <ArrowUpRight size={15}/></a>
        </nav>
      </header>

      <main>
        <section className="hero" id="home">
          <div className="hero-copy">
            <div className="eyebrow"><span className="live-dot" /> INDEPENDENT ARTIST <span className="eyebrow-line" /> NIGERIA</div>
            <h1>YAMABOY<br/><span>AMAONE</span><i className="title-dot">.</i></h1>
            <p className="hero-sub">REAL STORIES. <span>RAW SOUND.</span><br/>A sound made to stay with you.</p>
            <div className="hero-actions"><a href="#music" className="button button-light"><Play size={16} fill="currentColor"/> Explore the music</a><a href={links.linktree} target="_blank" rel="noreferrer" className="text-link">All my links <ArrowUpRight size={16}/></a></div>
            <div className="hero-footnote"><span className="sound-wave"><i/><i/><i/><i/><i/><i/><i/></span><span>AFRO SOUNDS · HAUSA HIP-HOP · MORE</span></div>
          </div>
          <div className="hero-visual">
            <div className="visual-halo" />
            <div className="portrait-frame"><img src={portrait} alt="Yamaboy Amaone wearing a blue checked shirt" /></div>
            <div className="vertical-tag">ARTIST / SONGWRITER / VISION</div>
            <div className="hero-stamp"><span>YB</span><small>THE SOUND<br/>OF AMAONE</small><ArrowUpRight size={18}/></div>
            <div className="hero-number">01 <span>— 05</span></div>
          </div>
          <a href="#music" className="scroll-cue"><ArrowDown size={15}/> SCROLL TO DISCOVER</a>
        </section>

        <section className="marquee" aria-label="Artist genres"><div className="marquee-track"><span>YAMABOY AMAONE</span><b>✳</b><span>AFRO SOUNDS</span><b>✳</b><span>HAUSA HIP-HOP</span><b>✳</b><span>NEW MUSIC</span><b>✳</b><span>YAMABOY AMAONE</span><b>✳</b><span>AFRO SOUNDS</span><b>✳</b></div></section>

        <section className="music-section section-wrap" id="music">
          <div className="section-heading"><div><p className="section-kicker">01 / THE SOUND</p><h2>Press <em>play.</em></h2></div><p className="section-intro">From the first note to the last word —<br/>find your next repeat right here.</p></div>
          <div className="music-feature">
            <div className="feature-art"><img src={portrait} alt="Yamaboy Amaone artist portrait"/><div className="art-overlay"/><div className="art-label"><Disc3 size={17}/> LATEST RELEASE</div><div className="art-title">ANTASHI<br/><em>KAINA</em></div><span className="art-orbit orbit-one"/><span className="art-orbit orbit-two"/></div>
            <div className="feature-content"><div className="release-top"><span className="pill"><span/> OUT NOW</span><span className="release-year">2026 / SINGLE</span></div><p className="mini-kicker">THE LATEST FROM YAMABOY AMAONE</p><h3>ANTASHI<br/><em>KAINA</em></h3><p className="feature-description">The latest sound is here. Listen to “Antashi Kaina” on your favourite streaming platform and share it with your people.</p><a className="button button-accent" href={links.release} target="_blank" rel="noreferrer"><Play size={16} fill="currentColor"/> Stream ANTASHI KAINA <ArrowUpRight size={16}/></a><button className="embed-toggle" onClick={() => setPlayerOpen(!playerOpen)}><AudioLines size={17}/>{playerOpen ? 'Hide Audiomack player' : 'Listen on Audiomack'}<span>{playerOpen ? '−' : '+'}</span></button>{playerOpen && <div className="embed-wrap"><iframe title="Yamaboy Amaone on Audiomack" src="https://audiomack.com/embed/yama-boy-amaone-/song/koda-yaushe" scrolling="no" frameBorder="0" allow="autoplay"/><a className="embed-fallback" href={links.audiomack} target="_blank" rel="noreferrer">Open the full Audiomack catalogue <ArrowUpRight size={14}/></a></div>}<div className="feature-bottom"><span><Radio size={15}/> AVAILABLE ONLINE</span><span>LISTEN LOUD. LIVE FREE.</span></div></div>
          </div>
          <div className="tracklist-heading"><span>MORE FROM THE CATALOGUE</span><a href={links.audiomack} target="_blank" rel="noreferrer">View all on Audiomack <ArrowUpRight size={14}/></a></div>
          <div className="track-list">{tracks.map((track) => <a className="track-row" href={track.href} target="_blank" rel="noreferrer" key={track.number}><span className="track-number">{track.number}</span><div className="track-icon"><Music2 size={19}/></div><div className="track-meta"><span>{track.type}</span><h4>{track.title}</h4><p>{track.note}</p></div><span className="track-tag">{track.tag}</span><span className="track-open"><ArrowUpRight size={18}/></span></a>)}</div>
          <p className="catalogue-note">More songs, albums and updates are available on the official Audiomack profile.</p>
        </section>

        <section className="about-section" id="about"><div className="about-inner section-wrap"><div className="about-image"><img src={portrait} alt="Portrait of artist Yamaboy Amaone"/><div className="about-image-caption"><span>THE PERSON</span><span>BEHIND THE SOUND ↗</span></div></div><div className="about-copy"><p className="section-kicker">02 / THE ARTIST</p><h2>More than<br/>a <em>sound.</em></h2><p className="about-lede">Meet YAMABOY AMAONE — independent artist bringing his own voice, energy and perspective to every record.</p><p className="about-body">Rooted in the energy of Afro sounds and Hausa hip-hop, the music is about expression, feeling and creating a connection that reaches beyond the speakers. This is a journey in progress — come be part of it.</p><div className="about-tags"><span>ARTIST</span><span>SONGWRITER</span><span>AFRO SOUNDS</span><span>HAUSA HIP-HOP</span></div><a className="text-link light-link" href={links.gamma} target="_blank" rel="noreferrer">Explore artist profile <ArrowUpRight size={16}/></a></div></div></section>

        <section className="connect-section section-wrap" id="connect"><div className="section-heading"><div><p className="section-kicker">03 / STAY CONNECTED</p><h2>Come through.<br/><em>Stay tuned.</em></h2></div><p className="section-intro">New music, videos and moments from the journey.<br/>Follow along and spread the sound.</p></div><div className="social-grid"><a className="social-card audiomack-card" href={links.audiomack} target="_blank" rel="noreferrer"><span className="social-icon"><AudioLines/></span><span className="social-label">STREAM MUSIC</span><h3>Audiomack</h3><p>Listen to the catalogue, discover tracks and follow the artist.</p><span className="social-arrow"><ArrowUpRight/></span></a><a className="social-card tiktok-card" href={links.tiktok} target="_blank" rel="noreferrer"><span className="social-icon"><Music2/></span><span className="social-label">SHORT VIDEOS</span><h3>TikTok</h3><p>Clips, snippets and what’s happening behind the music.</p><span className="social-arrow"><ArrowUpRight/></span></a><a className="social-card linktree-card" href={links.linktree} target="_blank" rel="noreferrer"><span className="social-icon"><ExternalLink/></span><span className="social-label">EVERY PLATFORM</span><h3>Linktree</h3><p>One place for all official links and music destinations.</p><span className="social-arrow"><ArrowUpRight/></span></a><a className="social-card release-card" href={links.release} target="_blank" rel="noreferrer"><span className="social-icon"><Disc3/></span><span className="social-label">LATEST DROP</span><h3>ANTASHI KAINA</h3><p>Go straight to the latest release and stream it now.</p><span className="social-arrow"><ArrowUpRight/></span></a></div></section>

        <section className="final-cta"><div className="cta-symbol"><Sparkles size={24}/></div><p className="section-kicker">THE MUSIC DOES THE TALKING</p><h2>Turn it up.<br/><em>Feel something.</em></h2><a className="button button-light" href={links.release} target="_blank" rel="noreferrer"><Play size={16} fill="currentColor"/> Stream ANTASHI KAINA <ArrowUpRight size={16}/></a><div className="cta-decoration">YB / AMAONE</div></section>
      </main>

      <footer className="footer"><a className="wordmark" href="#home"><span className="mark">Y</span><span>YAMABOY <b>AMAONE</b></span></a><span className="footer-note">INDEPENDENT MUSIC. REAL CONNECTION.</span><div className="footer-links"><a href={links.audiomack} target="_blank" rel="noreferrer" aria-label="Audiomack"><AudioLines size={17}/></a><a href={links.tiktok} target="_blank" rel="noreferrer" aria-label="TikTok"><Music2 size={17}/></a><a href={links.linktree} target="_blank" rel="noreferrer" aria-label="Linktree"><ExternalLink size={17}/></a></div><span className="copyright">© {new Date().getFullYear()} YAMABOY AMAONE</span></footer>
    </div>
  );
}

createRoot(document.getElementById('root')).render(<React.StrictMode><App /></React.StrictMode>);
