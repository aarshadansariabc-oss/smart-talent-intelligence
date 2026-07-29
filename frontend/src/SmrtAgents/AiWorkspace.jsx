import React from "react";
import "./AiWork.css";
import {
  FaRobot,
  FaSearch,
  FaFileAlt,
  FaBrain,
  FaBullseye,
  FaRocket,
  FaMicrophone,
  FaBookOpen,
  FaFlask,
  FaChartLine,
  FaArrowRight,
} from "react-icons/fa";

const agents = [
  {
    id: 1,
    title: "Resume Intelligence",
    icon: <FaFileAlt />,
    description:
      "Analyse resumes, calculate ATS score and extract skills intelligently.",
    status: "Active",
    color: "#3b82f6",
  },
  {
    id: 2,
    title: "Skill Intelligence",
    icon: <FaBrain />,
    description:
      "Identify skill gaps, strengths and emerging technologies.",
    status: "Active",
    color: "#8b5cf6",
  },
  {
    id: 3,
    title: "Talent Matching",
    icon: <FaBullseye />,
    description:
      "Find the best talent opportunities using intelligent matching.",
    status: "Ready",
    color: "#22c55e",
  },
  {
    id: 4,
    title: "Career Intelligence",
    icon: <FaRocket />,
    description:
      "Generate personalised career roadmaps and future predictions.",
    status: "Ready",
    color: "#f97316",
  },
  {
    id: 5,
    title: "Interview Intelligence",
    icon: <FaMicrophone />,
    description:
      "Prepare mock interviews and evaluate candidate performance.",
    status: "Beta",
    color: "#ef4444",
  },
  {
    id: 6,
    title: "Learning Intelligence",
    icon: <FaBookOpen />,
    description:
      "Recommend courses, certifications and personalised learning paths.",
    status: "Ready",
    color: "#06b6d4",
  },
  {
    id: 7,
    title: "Research Intelligence",
    icon: <FaFlask />,
    description:
      "Analyse research papers and discover innovation opportunities.",
    status: "Beta",
    color: "#6366f1",
  },
  {
    id: 8,
    title: "Explainability Center",
    icon: <FaChartLine />,
    description:
      "Understand AI reasoning, confidence score and decision transparency.",
    status: "Active",
    color: "#eab308",
  },
];

const AIWorkspace = () => {
  return (
    <div className="workspace-container">

      {/* Header */}

      <div className="workspace-header">

        <div>

          <h1>
            <FaRobot className="robot-icon" />
            AI Workspace
          </h1>

          <p>
            Launch intelligent AI agents to analyse, predict and explain
            talent intelligence.
          </p>

        </div>

        <button className="new-session-btn">
          + New Session
        </button>

      </div>

      {/* Search */}

      <div className="search-wrapper">

        <FaSearch className="search-icon" />

        <input
          type="text"
          placeholder="Search AI Agents..."
        />

      </div>

      {/* Agent Grid */}

      <div className="agent-grid">

        {agents.map((agent) => (

          <div
            className="agent-card"
            key={agent.id}
          >

            <div
              className="agent-icon"
              style={{
                background: agent.color,
              }}
            >
              {agent.icon}
            </div>

            <div className="status-badge">
              {agent.status}
            </div>

            <h2>{agent.title}</h2>

            <p>{agent.description}</p>

            <div className="capabilities">

              <span>AI Powered</span>

              <span>Explainable</span>

              <span>Real-Time</span>

            </div>

            <button className="launch-btn">

              Launch Agent

              <FaArrowRight />

            </button>

          </div>

        ))}

      </div>

      {/* Bottom Section */}

      <div className="bottom-grid">

        <div className="activity-panel">

          <h3>Recent AI Activities</h3>

          <ul>

            <li>
              Resume Agent analysed Resume.pdf
            </li>

            <li>
              Skill Agent extracted 18 skills
            </li>

            <li>
              Career Agent generated roadmap
            </li>

            <li>
              Explainability report generated
            </li>

          </ul>

        </div>

        <div className="status-panel">

          <h3>System Status</h3>

          <div className="status-item">
            <span>Resume Agent</span>
            <span className="online">● Online</span>
          </div>

          <div className="status-item">
            <span>Skill Agent</span>
            <span className="online">● Online</span>
          </div>

          <div className="status-item">
            <span>Career Agent</span>
            <span className="processing">
              ● Processing
            </span>
          </div>

          <div className="status-item">
            <span>Research Agent</span>
            <span className="offline">
              ● Idle
            </span>
          </div>

        </div>

      </div>

    </div>
  );
};

export default AIWorkspace;