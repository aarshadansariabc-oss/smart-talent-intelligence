import React, { useState } from "react";
import "./Home.css";

const Home = () => {
  const [showRegister, setShowRegister] = useState(false);

  return (
    <>
      {/* Navbar */}
      <nav className="navbar">
        <div className="logo">TalentMind AI</div>

        <div className="nav-links">
          <a href="/">Home</a>
          <a href="/about">About</a>
          <a href="/contact">Contact</a>

          <button className="login-btn">Login</button>

          <button
            className="register-btn"
            onClick={() => setShowRegister(true)}>
            Register
          </button>
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
            <button
              className="primary-btn"
              onClick={() => setShowRegister(true)}>
              Get Started
            </button>

            <button className="secondary-btn">Login</button>
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
            Upload your resume and receive intelligent feedback with explainable
            insights.
          </p>
        </div>

        <div className="card">
          <h2>🎯 Smart Job Matching</h2>
          <p>Find jobs that truly match your profile using advanced AI.</p>
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

        <p>Explainable Multi-Agent AI Talent Intelligence Platform</p>

        <p>© 2026 TalentMind AI. All Rights Reserved.</p>
      </footer>

      {/* Register Popup */}
      {showRegister && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(0,0,0,0.65)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 9999,
          }}>
          <div
            style={{
              width: "450px",
              background: "#fff",
              borderRadius: "15px",
              padding: "30px",
              position: "relative",
              boxShadow: "0 10px 30px rgba(0,0,0,.3)",
            }}>
            <button
              onClick={() => setShowRegister(false)}
              style={{
                position: "absolute",
                top: "15px",
                right: "20px",
                border: "none",
                background: "transparent",
                fontSize: "28px",
                cursor: "pointer",
              }}>
              ×
            </button>

            <h2
              style={{
                textAlign: "center",
                marginBottom: "10px",
                color: "#2563eb",
              }}>
              Create Account
            </h2>

            <p
              style={{
                textAlign: "center",
                color: "#666",
                marginBottom: "25px",
              }}>
              Join TalentMind AI Today
            </p>

            <form>
              <input
                type="text"
                placeholder="Full Name"
                style={{
                  width: "100%",
                  padding: "12px",
                  marginBottom: "15px",
                  border: "1px solid #ddd",
                  borderRadius: "8px",
                  fontSize: "15px",
                  boxSizing: "border-box",
                }}
              />

              <input
                type="email"
                placeholder="Email Address"
                style={{
                  width: "100%",
                  padding: "12px",
                  marginBottom: "15px",
                  border: "1px solid #ddd",
                  borderRadius: "8px",
                  fontSize: "15px",
                  boxSizing: "border-box",
                }}
              />

              <input
                type="password"
                placeholder="Password"
                style={{
                  width: "100%",
                  padding: "12px",
                  marginBottom: "15px",
                  border: "1px solid #ddd",
                  borderRadius: "8px",
                  fontSize: "15px",
                  boxSizing: "border-box",
                }}
              />

              <input
                type="password"
                placeholder="Confirm Password"
                style={{
                  width: "100%",
                  padding: "12px",
                  marginBottom: "20px",
                  border: "1px solid #ddd",
                  borderRadius: "8px",
                  fontSize: "15px",
                  boxSizing: "border-box",
                }}
              />

              <button
                type="submit"
                style={{
                  width: "100%",
                  padding: "13px",
                  background: "#2563eb",
                  color: "#fff",
                  border: "none",
                  borderRadius: "8px",
                  fontSize: "16px",
                  fontWeight: "bold",
                  cursor: "pointer",
                }}>
                Create Account
              </button>

              <p
                style={{
                  textAlign: "center",
                  margin: "20px 0 10px",
                  color: "#888",
                }}>
                OR
              </p>

              <button
                type="button"
                style={{
                  width: "100%",
                  padding: "13px",
                  background: "#fff",
                  border: "1px solid #ccc",
                  borderRadius: "8px",
                  cursor: "pointer",
                  fontSize: "15px",
                }}>
                Continue with Google
              </button>

              <p
                style={{
                  textAlign: "center",
                  marginTop: "20px",
                  color: "#555",
                }}>
                Already have an account?{" "}
                <a
                  href="/login"
                  style={{
                    color: "#2563eb",
                    textDecoration: "none",
                    fontWeight: "bold",
                  }}>
                  Login
                </a>
              </p>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default Home;