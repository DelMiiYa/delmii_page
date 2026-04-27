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

function WriteupRow({ item, index }) {
  const navigate = useNavigate();

  return (
    <FadeIn delay={index * 0.06}>
      <motion.div
        onClick={() => navigate(`/writeups/${item.id}`)}
        whileHover={{ x: 6 }}
        transition={{ duration: 0.2 }}
        style={{
          display: "grid",
          gridTemplateColumns: "1fr auto",
          gap: "1rem",
          padding: "1.25rem 1.5rem",
          border: "1px solid var(--border)",
          borderRadius: "4px",
          background: "var(--surface)",
          cursor: "pointer",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* left accent on hover */}
        <motion.div
          initial={{ scaleY: 0 }}
          whileHover={{ scaleY: 1 }}
          transition={{ duration: 0.2 }}
          style={{
            position: "absolute",
            left: 0,
            top: 0,
            bottom: 0,
            width: "2px",
            background: categoryColors[item.category] || "var(--accent)",
            transformOrigin: "top",
          }}
        />

        <div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.75rem",
              marginBottom: "0.4rem",
              flexWrap: "wrap",
            }}
          >
            <span
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "1rem",
                color: "var(--text)",
                fontWeight: 400,
              }}
            >
              {item.title}
            </span>
            <span
              style={{
                fontSize: "0.6rem",
                letterSpacing: "0.1em",
                color: categoryColors[item.category] || "var(--accent)",
                border: `1px solid ${categoryColors[item.category] || "var(--accent)"}`,
                padding: "1px 7px",
                borderRadius: "2px",
                opacity: 0.8,
              }}
            >
              {item.category}
            </span>
            <span
              style={{
                fontSize: "0.6rem",
                letterSpacing: "0.08em",
                color: difficultyColor[item.difficulty],
                opacity: 0.8,
              }}
            >
              ● {item.difficulty}
            </span>
          </div>

          <p
            style={{
              fontSize: "0.75rem",
              color: "var(--muted)",
              lineHeight: 1.6,
              maxWidth: "600px",
            }}
          >
            {item.summary}
          </p>

          <span
            style={{
              fontSize: "0.65rem",
              color: "var(--muted)",
              marginTop: "0.5rem",
              display: "block",
            }}
          >
            {item.ctf}
          </span>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "0.5rem",
            alignSelf: "center",
          }}
        >
          <span style={{ fontSize: "0.65rem", color: "var(--muted)" }}>
            {item.year}
          </span>
          <span style={{ fontSize: "0.75rem", color: "var(--muted)" }}>→</span>
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

      <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
        {writeups.map((item, i) => (
          <WriteupRow key={item.id} item={item} index={i} />
        ))}
      </div>
    </div>
  );
}
