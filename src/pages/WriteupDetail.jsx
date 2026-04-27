import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { writeups } from "../data/writeups";

const difficultyColor = {
  easy: "#6fcf97",
  medium: "#f2994a",
  hard: "#eb5757",
};

// Minimal markdown renderer — handles the most common CTF writeup patterns
function renderMarkdown(text) {
  const lines = text.split("\n");
  const elements = [];
  let i = 0;

  while (i < lines.length) {
    const line = lines[i];

    // code block
    if (line.startsWith("```")) {
      const lang = line.slice(3).trim();
      const codeLines = [];
      i++;
      while (i < lines.length && !lines[i].startsWith("```")) {
        codeLines.push(lines[i]);
        i++;
      }
      elements.push(
        <pre
          key={i}
          style={{
            background: "#111",
            border: "1px solid var(--border)",
            borderRadius: "4px",
            padding: "1rem 1.25rem",
            overflowX: "auto",
            margin: "1.25rem 0",
            fontSize: "0.75rem",
            lineHeight: 1.7,
            color: "#c8b89a",
            fontFamily: "var(--font-mono)",
          }}
        >
          <code>{codeLines.join("\n")}</code>
        </pre>,
      );
      i++;
      continue;
    }

    // h2
    if (line.startsWith("## ")) {
      elements.push(
        <h2
          key={i}
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "1.4rem",
            fontWeight: 400,
            color: "var(--text)",
            margin: "2.5rem 0 0.75rem",
            borderBottom: "1px solid var(--border)",
            paddingBottom: "0.5rem",
          }}
        >
          {line.slice(3)}
        </h2>,
      );
      i++;
      continue;
    }

    // h3
    if (line.startsWith("### ")) {
      elements.push(
        <h3
          key={i}
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "1.1rem",
            fontWeight: 400,
            color: "var(--text)",
            margin: "1.5rem 0 0.5rem",
          }}
        >
          {line.slice(4)}
        </h3>,
      );
      i++;
      continue;
    }

    // empty line
    if (line.trim() === "") {
      i++;
      continue;
    }

    // paragraph — inline code and bold
    const rendered = line
      .replace(
        /`([^`]+)`/g,
        `<code style="background:#111;padding:2px 6px;border-radius:3px;font-size:0.8em;color:#c8b89a;font-family:var(--font-mono)">$1</code>`,
      )
      .replace(
        /\*\*([^*]+)\*\*/g,
        `<strong style="color:var(--text)">$1</strong>`,
      );

    elements.push(
      <p
        key={i}
        style={{
          fontSize: "0.8rem",
          color: "var(--muted)",
          lineHeight: 1.8,
          margin: "0.5rem 0",
        }}
        dangerouslySetInnerHTML={{ __html: rendered }}
      />,
    );
    i++;
  }

  return elements;
}

export default function WriteupDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const writeup = writeups.find((w) => w.id === id);

  if (!writeup) {
    return (
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "8rem 2.5rem",
          textAlign: "center",
        }}
      >
        <p style={{ color: "var(--muted)", fontSize: "0.8rem" }}>
          writeup not found.
        </p>
        <button
          onClick={() => navigate("/writeups")}
          style={{
            background: "none",
            border: "none",
            color: "var(--accent)",
            cursor: "pointer",
            marginTop: "1rem",
            fontSize: "0.75rem",
          }}
        >
          ← back to writeups
        </button>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      style={{
        maxWidth: "760px",
        margin: "0 auto",
        padding: "8rem 2.5rem 6rem",
      }}
    >
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

      {/* header */}
      <div
        style={{
          marginBottom: "3rem",
          paddingBottom: "2rem",
          borderBottom: "1px solid var(--border)",
        }}
      >
        <div
          style={{
            display: "flex",
            gap: "0.75rem",
            alignItems: "center",
            marginBottom: "1rem",
            flexWrap: "wrap",
          }}
        >
          <span
            style={{
              fontSize: "0.65rem",
              color: "var(--muted)",
              letterSpacing: "0.1em",
            }}
          >
            {writeup.ctf}
          </span>
          <span style={{ color: "var(--border)" }}>·</span>
          <span style={{ fontSize: "0.65rem", color: "var(--muted)" }}>
            {writeup.year}
          </span>
          <span style={{ color: "var(--border)" }}>·</span>
          <span
            style={{
              fontSize: "0.65rem",
              color: difficultyColor[writeup.difficulty],
            }}
          >
            ● {writeup.difficulty}
          </span>
        </div>

        <h1
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(1.8rem, 5vw, 2.8rem)",
            fontWeight: 400,
            color: "var(--text)",
            lineHeight: 1.1,
            marginBottom: "1rem",
          }}
        >
          {writeup.title}
        </h1>

        <p
          style={{ fontSize: "0.8rem", color: "var(--muted)", lineHeight: 1.7 }}
        >
          {writeup.summary}
        </p>
      </div>

      {/* content */}
      <div>{renderMarkdown(writeup.content)}</div>
    </motion.div>
  );
}
