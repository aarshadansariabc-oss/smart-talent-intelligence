import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <>
      {/* Navbar */}
      <nav className="navbar">
        <div className="logo">TalentMind AI</div>

        <div className="nav-links">
          <a href="/">Home</a>
          <a href="/about">About</a>
          <a href="/contact">Contact</a>

          <a href="/login">
            <button className="login-btn">Login</button>
          </a>

          <a href="/register">
            <button className="register-btn">Register</button>
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-left">
          <h1>
            Explainable <span>Multi-Agent AI</span>
            <br />
            Talent Intelligence Platform
          </h1>

          <p>
            Empowering recruiters and job seekers with AI-driven recruitment,
            resume analysis, intelligent candidate ranking, skill gap analysis,
            and career recommendations.
          </p>

          <div className="hero-buttons">
            <a href="/register">
              <button className="primary-btn">Get Started</button>
            </a>

            <a href="/login">
              <button className="secondary-btn">Login</button>
            </a>
          </div>
        </div>

        <div className="hero-right">
          <img
            src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=900"
            alt="AI Recruitment"
          />
        </div>
      </section>

      {/* Features */}
      <section className="features">

        <div className="card">
          <h2>🤖 AI Resume Analysis</h2>
          <p>
            Upload your resume and receive intelligent feedback with
            explainable insights.
          </p>
        </div>

        <div className="card">
          <h2>🎯 Smart Job Matching</h2>
          <p>
            Find jobs that truly match your profile using advanced AI.
          </p>
        </div>

        <div className="card">
          <h2>📈 Career Roadmap</h2>
          <p>
            Discover missing skills and receive a personalized career growth
            plan.
          </p>
        </div>

        <div className="card">
          <h2>🏆 Candidate Ranking</h2>
          <p>
            Help recruiters identify the most suitable candidates with
            explainable rankings.
          </p>
        </div>

      </section>

      {/* Footer */}
      <footer className="footer">
        <h3>TalentMind AI</h3>

        <p>
          Explainable Multi-Agent AI Talent Intelligence Platform
        </p>

        <p>© 2026 TalentMind AI. All Rights Reserved.</p>
      </footer>
    </>
  );
};

export default Home;