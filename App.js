import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <nav className="navbar">
        <div className="logo">🐾 Paw-City</div>
        <ul className="nav-links">
          <li>Home</li>
          <li>About</li>
          <li>Volunteer</li>
          <li>Impact Stories</li>
          <li>Contact</li>
        </ul>
      </nav>

      <header className="hero">
        <h1 className="hero-text">Making Cities Paw-some! 🐾✨</h1>
        <div className="hero-buttons">
          <button className="cta primary">Join the Movement</button>
          <button className="cta secondary">Volunteer Now</button>
          <button className="cta">Learn More</button>
        </div>
      </header>

      <section className="volunteer-form-section">
        <h2>Become a Volunteer 🐶</h2>
        <form className="volunteer-form">
          <input type="text" placeholder="Your Name" required />
          <input type="text" placeholder="Your City" required />
          <select required>
            <option value="">Select Role Preference</option>
            <option value="event">Event Helper</option>
            <option value="coordinator">City Coordinator</option>
            <option value="trainer">Pet Trainer</option>
          </select>
          <button type="submit">Sign Up</button>
        </form>
      </section>

      <section className="impact-stories">
        <h2>Impact Stories 🐾</h2>
        <div className="story-placeholder">
          <p>“My dog park was built last year thanks to the campaign!” – Alex, New York 🐕</p>
          <p>“We hosted a pet-adoption fair with over 30 adoptions!” – Priya, Mumbai 🐱</p>
        </div>
      </section>

      <footer>
        <p>Made with ❤️ for the Pet-Friendly City Campaign | 🐶🐱🐾</p>
      </footer>
    </div>
  );
}

export default App;
