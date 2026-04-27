import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import FadeIn from "../components/FadeIn";
import { writeups } from "../data/writeups";

const difficultyColor = {
  easy: "#6fcf97",
  medium: "#f2994a",
  hard: "#eb5757",
};

const categoryColors = {
  Web: "#56ccf2",
  Crypto: "#bb6bd9",
  Pwn: "#eb5757",
  Reverse: "#f2994a",
  Forensics: "#6fcf97",
  Misc: "#c8b89a",
  OSINT: "#2f80ed",
};

function WriteupCard({ item, index }) {
  const navigate = useNavigate();

  return (
    <FadeIn delay={index * 0.08}>
      <motion.div
        onClick={() => navigate(`/writeups/${item.id}`)}
        whileHover={{ y: -4 }}
        transition={{ duration: 0.25 }}
        style={{
          padding: "1.5rem",
          border: "1px solid var(--border)",
          borderRadius: "4px",
          background: "var(--surface)",
          cursor: "pointer",
          position: "relative",
          overflow: "hidden",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          gap: "0.75rem",
        }}
      >
        {/* top accent line on hover */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileHover={{ scaleX: 1 }}
          transition={{ duration: 0.3 }}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: "2px",
            background: categoryColors[item.category] || "var(--accent)",
            transformOrigin: "left",
          }}
        />

        {/* tags row */}
        <div
          style={{
            display: "flex",
            gap: "0.5rem",
            alignItems: "center",
            flexWrap: "wrap",
          }}
        >
          <span
            style={{
              fontSize: "0.6rem",
              letterSpacing: "0.1em",
              color: categoryColors[item.category] || "var(--accent)",
              border: `1px solid ${categoryColors[item.category] || "var(--accent)"}`,
              padding: "2px 7px",
              borderRadius: "2px",
              opacity: 0.85,
            }}
          >
            {item.category}
          </span>
          <span
            style={{
              fontSize: "0.6rem",
              color: difficultyColor[item.difficulty],
              letterSpacing: "0.05em",
            }}
          >
            ● {item.difficulty}
          </span>
        </div>

        {/* title */}
        <span
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "1.1rem",
            color: "var(--text)",
            fontWeight: 400,
            lineHeight: 1.2,
          }}
        >
          {item.title}
        </span>

        {/* summary */}
        <p
          style={{
            fontSize: "0.75rem",
            color: "var(--muted)",
            lineHeight: 1.7,
            flex: 1,
          }}
        >
          {item.summary}
        </p>

        {/* footer */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginTop: "auto",
          }}
        >
          <span style={{ fontSize: "0.65rem", color: "var(--muted)" }}>
            {item.ctf}
          </span>
          <span style={{ fontSize: "0.65rem", color: "var(--muted)" }}>
            {item.year}
          </span>
        </div>
      </motion.div>
    </FadeIn>
  );
}

export default function WriteupsPage() {
  return (
    <div
      style={{
        maxWidth: "1200px",
        margin: "0 auto",
        padding: "8rem 2.5rem 6rem",
      }}
    >
      <FadeIn>
        <button
          onClick={() => window.history.back()}
          style={{
            background: "none",
            border: "none",
            color: "var(--muted)",
            fontSize: "0.7rem",
            letterSpacing: "0.1em",
            cursor: "pointer",
            marginBottom: "3rem",
            padding: 0,
            display: "flex",
            alignItems: "center",
            gap: "0.5rem",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.color = "var(--text)")}
          onMouseLeave={(e) => (e.currentTarget.style.color = "var(--muted)")}
        >
          ← back
        </button>
      </FadeIn>

      <FadeIn delay={0.05}>
        <div style={{ marginBottom: "3rem" }}>
          <h1
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "2.5rem",
              fontWeight: 400,
              color: "var(--text)",
              marginBottom: "0.5rem",
            }}
          >
            CTF Writeups
          </h1>
          <p style={{ fontSize: "0.75rem", color: "var(--muted)" }}>
            {writeups.length} writeup{writeups.length !== 1 ? "s" : ""} — things
            I broke into (legally)
          </p>
        </div>
      </FadeIn>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
          gap: "1rem",
        }}
      >
        {writeups.map((item, i) => (
          <WriteupCard key={item.id} item={item} index={i} />
        ))}
      </div>
    </div>
  );
}
