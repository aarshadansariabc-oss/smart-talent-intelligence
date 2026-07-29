import React from "react";

const Dashboard = () => {
  return (
    <div className="db-container">
      {/* --- INLINE CSS BLOCK --- */}
      <style>{`
        :root {
          --bg-main: #f8fafc;
          --bg-card: #ffffff;
          --text-dark: #0f172a;
          --text-muted: #64748b;
          --border-color: #e2e8f0;
          
          --primary-indigo: #4f46e5;
          --primary-hover: #4338ca;
          --emerald: #059669;
          --purple: #9333ea;
          --blue: #2563eb;
        }

        * {
          box-sizing: border-box;
          margin: 0;
          padding: 0;
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, sans-serif;
        }

        .db-container {
          min-height: 100vh;
          background-color: var(--bg-main);
          padding: 32px 16px;
        }

        .db-wrapper {
          max-width: 1140px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          gap: 32px;
        }

        /* Hero Section */
        .db-hero {
          background: var(--bg-card);
          border: 1px solid var(--border-color);
          border-radius: 24px;
          padding: 40px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 32px;
          box-shadow: 0 4px 20px -2px rgba(0, 0, 0, 0.03);
        }

        .hero-badge {
          display: inline-block;
          background-color: #eef2ff;
          color: var(--primary-indigo);
          font-size: 12px;
          font-weight: 700;
          padding: 6px 14px;
          border-radius: 20px;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          margin-bottom: 16px;
        }

        .hero-title {
          font-size: 38px;
          font-weight: 800;
          color: var(--text-dark);
          line-height: 1.2;
          margin-bottom: 12px;
        }

        .text-gradient {
          background: linear-gradient(135deg, var(--primary-indigo), var(--purple));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .hero-description {
          color: var(--text-muted);
          font-size: 16px;
          line-height: 1.6;
          max-width: 580px;
          margin-bottom: 24px;
        }

        .hero-actions {
          display: flex;
          gap: 12px;
          flex-wrap: wrap;
        }

        .btn {
          padding: 12px 24px;
          border-radius: 12px;
          font-size: 15px;
          font-weight: 600;
          cursor: pointer;
          border: none;
          transition: all 0.2s ease-in-out;
        }

        .btn-primary {
          background-color: var(--primary-indigo);
          color: #ffffff;
          box-shadow: 0 8px 16px -4px rgba(79, 70, 229, 0.3);
        }

        .btn-primary:hover {
          background-color: var(--primary-hover);
          transform: translateY(-2px);
        }

        .btn-secondary {
          background-color: #ffffff;
          color: var(--text-dark);
          border: 1px solid var(--border-color);
        }

        .btn-secondary:hover {
          background-color: #f1f5f9;
        }

        .hero-avatar-container {
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .hero-avatar {
          width: 160px;
          height: 160px;
          background: linear-gradient(135deg, #e0e7ff 0%, #f3e8ff 100%);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 70px;
          border: 6px solid #ffffff;
          box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.05);
        }

        /* Stats Grid */
        .stats-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 20px;
        }

        .stat-card {
          background: var(--bg-card);
          border: 1px solid var(--border-color);
          padding: 24px;
          border-radius: 18px;
          text-align: center;
          transition: transform 0.2s ease;
        }

        .stat-card:hover {
          transform: translateY(-3px);
        }

        .stat-number {
          font-size: 34px;
          font-weight: 800;
          margin-bottom: 4px;
        }

        .stat-label {
          color: var(--text-muted);
          font-size: 14px;
          font-weight: 500;
        }

        /* Helpers */
        .color-emerald { color: var(--emerald); }
        .color-indigo { color: var(--primary-indigo); }
        .color-purple { color: var(--purple); }
        .color-blue { color: var(--blue); }

        /* Tools Grid */
        .section-title {
          font-size: 22px;
          font-weight: 700;
          color: var(--text-dark);
          margin-bottom: 18px;
        }

        .tools-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(230px, 1fr));
          gap: 20px;
        }

        .tool-card {
          background: var(--bg-card);
          border: 1px solid var(--border-color);
          padding: 24px;
          border-radius: 18px;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .tool-card:hover {
          transform: translateY(-4px);
          border-color: #c7d2fe;
          box-shadow: 0 12px 20px -5px rgba(0, 0, 0, 0.04);
        }

        .tool-icon {
          width: 48px;
          height: 48px;
          background: #f1f5f9;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 22px;
          margin-bottom: 16px;
        }

        .tool-card h3 {
          font-size: 17px;
          color: var(--text-dark);
          margin-bottom: 6px;
        }

        .tool-card p {
          color: var(--text-muted);
          font-size: 14px;
          line-height: 1.5;
        }

        /* Two Column Grid */
        .two-column-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
          gap: 24px;
        }

        .info-card {
          background: var(--bg-card);
          border: 1px solid var(--border-color);
          padding: 28px;
          border-radius: 20px;
        }

        .card-heading {
          font-size: 20px;
          font-weight: 700;
          color: var(--text-dark);
          margin-bottom: 24px;
        }

        /* Progress Bars */
        .progress-group {
          margin-bottom: 20px;
        }

        .progress-info {
          display: flex;
          justify-content: space-between;
          font-size: 14px;
          font-weight: 600;
          color: var(--text-dark);
          margin-bottom: 8px;
        }

        .progress-track {
          width: 100%;
          height: 10px;
          background-color: #f1f5f9;
          border-radius: 20px;
          overflow: hidden;
        }

        .progress-fill {
          height: 100%;
          border-radius: 20px;
        }

        .fill-indigo { background: linear-gradient(90deg, #6366f1, #4f46e5); }
        .fill-emerald { background: linear-gradient(90deg, #34d399, #10b981); }

        /* Activity List */
        .activity-list {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .activity-item {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 10px;
          background-color: #f8fafc;
          border-radius: 12px;
          color: #334155;
          font-size: 14px;
          font-weight: 500;
        }

        /* Jobs Section */
        .jobs-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
          gap: 20px;
        }

        .job-card {
          background: var(--bg-card);
          border: 1px solid var(--border-color);
          padding: 24px;
          border-radius: 18px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }

        .job-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 6px;
        }

        .job-header h3 {
          font-size: 17px;
          color: var(--text-dark);
        }

        .job-tag {
          background-color: #eef2ff;
          color: var(--primary-indigo);
          font-size: 12px;
          font-weight: 700;
          padding: 4px 10px;
          border-radius: 8px;
        }

        .job-company {
          color: var(--text-muted);
          font-size: 14px;
          font-weight: 500;
          margin-bottom: 20px;
        }

        .btn-apply {
          width: 100%;
          padding: 10px;
          background-color: #f8fafc;
          color: var(--text-dark);
          border: 1px solid var(--border-color);
          border-radius: 10px;
          font-weight: 600;
          font-size: 14px;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .btn-apply:hover {
          background-color: var(--primary-indigo);
          color: #ffffff;
          border-color: var(--primary-indigo);
        }

        /* Mobile Adjustments */
        @media (max-width: 768px) {
          .db-hero {
            flex-direction: column;
            text-align: center;
            padding: 28px 20px;
          }

          .hero-title {
            font-size: 30px;
          }

          .hero-actions {
            justify-content: center;
          }

          .hero-avatar-container {
            display: none;
          }
        }
      `}</style>

      {/* --- DASHBOARD UI HTML --- */}
      <div className="db-wrapper">
        {/* Hero Section */}
        <div className="db-hero">
          <div className="hero-content">
            <span className="hero-badge">✨ TalentMind AI</span>
            <h1 className="hero-title">
              Welcome Back, <span className="text-gradient">Adarsh 👋</span>
            </h1>
            <p className="hero-description">
              Build your career with AI. Analyze your resume, prepare for
              interviews, improve your skills and discover better opportunities.
            </p>
            <div className="hero-actions">
              <button className="btn btn-primary">🚀 Open AI Workspace</button>
              <button className="btn btn-secondary">📄 Upload Resume</button>
            </div>
          </div>
          <div className="hero-avatar-container">
            <div className="hero-avatar">🤖</div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="stats-grid">
          <div className="stat-card">
            <h2 className="stat-number color-emerald">92%</h2>
            <p className="stat-label">Resume Score</p>
          </div>
          <div className="stat-card">
            <h2 className="stat-number color-indigo">31</h2>
            <p className="stat-label">Job Matches</p>
          </div>
          <div className="stat-card">
            <h2 className="stat-number color-purple">14</h2>
            <p className="stat-label">Mock Interviews</p>
          </div>
          <div className="stat-card">
            <h2 className="stat-number color-blue">21</h2>
            <p className="stat-label">Skills Completed</p>
          </div>
        </div>

        {/* AI Tools */}
        <div className="db-section">
          <h2 className="section-title">⚡ AI Tools</h2>
          <div className="tools-grid">
            <div className="tool-card">
              <div className="tool-icon">📄</div>
              <h3>Resume Analyzer</h3>
              <p>Get ATS score with AI suggestions.</p>
            </div>
            <div className="tool-card">
              <div className="tool-icon">🎤</div>
              <h3>Mock Interview</h3>
              <p>Practice HR & Technical interviews.</p>
            </div>
            <div className="tool-card">
              <div className="tool-icon">💼</div>
              <h3>AI Job Finder</h3>
              <p>Personalized job recommendations.</p>
            </div>
            <div className="tool-card">
              <div className="tool-icon">📚</div>
              <h3>Skill Roadmap</h3>
              <p>Learn skills according to your career goal.</p>
            </div>
          </div>
        </div>

        {/* Progress & Activity */}
        <div className="two-column-grid">
          <div className="info-card">
            <h2 className="card-heading">📈 Your Progress</h2>
            <div className="progress-group">
              <div className="progress-info">
                <span>Profile Completion</span>
                <strong className="color-indigo">82%</strong>
              </div>
              <div className="progress-track">
                <div
                  className="progress-fill fill-indigo"
                  style={{ width: "82%" }}></div>
              </div>
            </div>

            <div className="progress-group">
              <div className="progress-info">
                <span>Interview Readiness</span>
                <strong className="color-emerald">74%</strong>
              </div>
              <div className="progress-track">
                <div
                  className="progress-fill fill-emerald"
                  style={{ width: "74%" }}></div>
              </div>
            </div>
          </div>

          <div className="info-card">
            <h2 className="card-heading">🕒 Recent Activity</h2>
            <ul className="activity-list">
              <li className="activity-item">
                <span>✅</span>
                <span>Resume uploaded successfully</span>
              </li>
              <li className="activity-item">
                <span>🤖</span>
                <span>Resume analyzed by AI</span>
              </li>
              <li className="activity-item">
                <span>🎤</span>
                <span>Mock interview completed</span>
              </li>
              <li className="activity-item">
                <span>💼</span>
                <span>12 new jobs found</span>
              </li>
              <li className="activity-item">
                <span>📚</span>
                <span>React Roadmap started</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Recommended Jobs */}
        <div className="db-section">
          <h2 className="section-title">💼 Recommended Jobs</h2>
          <div className="jobs-grid">
            <div className="job-card">
              <div className="job-header">
                <h3>Frontend Developer</h3>
                <span className="job-tag">Remote</span>
              </div>
              <p className="job-company">Google</p>
              <button className="btn-apply">Apply Now</button>
            </div>

            <div className="job-card">
              <div className="job-header">
                <h3>React Developer</h3>
                <span className="job-tag">On-site</span>
              </div>
              <p className="job-company">Microsoft</p>
              <button className="btn-apply">Apply Now</button>
            </div>

            <div className="job-card">
              <div className="job-header">
                <h3>AI Engineer</h3>
                <span className="job-tag">Hybrid</span>
              </div>
              <p className="job-company">OpenAI</p>
              <button className="btn-apply">Apply Now</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
