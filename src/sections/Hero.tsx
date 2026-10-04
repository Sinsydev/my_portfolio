import Waveform from '../components/Waveform'

function Hero() {
  return (
    <section className="hero section-block" aria-labelledby="hero-title">
      <div className="hero-copy">
        <p className="eyebrow">Software Engineer / AI · Voice · Web Systems</p>
        <h1 id="hero-title">
          I build AI-powered products and real-time software that turn
          conversations into actions.
        </h1>
        <p className="lede">
          I build practical software that connects conversations, data, APIs,
          and AI into useful, responsive product experiences.
        </p>

        <div className="hero-actions">
          <a className="primary-button" href="#work">
            Explore my work
          </a>
          <a className="secondary-button" href="https://github.com/Sinsydev" target="_blank" rel="noreferrer">
            GitHub <span aria-hidden="true">↗</span>
          </a>
        </div>
      </div>

      <div className="hero-visual" aria-hidden="true">
        <div className="signal-caption">
          <span>Conversation to action</span>
          <span className="signal-caption__index">SYS / 01</span>
        </div>
        <div className="signal-panel">
          <div className="signal-topline">
            <span className="status-indicator" />
            <span>Voice · AI · Real-time</span>
          </div>
          <Waveform className="hero-waveform" />
        </div>

        <div className="mini-dashboard">
          <div>
            <p className="mini-label">01 / Input</p>
            <strong>Conversation</strong>
          </div>
          <div>
            <p className="mini-label">02 / Intelligence</p>
            <strong>Context understood</strong>
          </div>
          <div>
            <p className="mini-label">03 / Output</p>
            <strong>Useful action</strong>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero