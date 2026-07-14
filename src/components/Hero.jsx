import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="top"
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-end",
        padding: "0 2.5rem 4rem",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* subtle grid texture */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "linear-gradient(var(--border) 1px, transparent 1px), linear-gradient(90deg, var(--border) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
          opacity: 0.18,
          pointerEvents: "none",
        }}
      />

      <div style={{ position: "relative", maxWidth: "900px" }}>
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          style={{
            fontSize: "0.7rem",
            letterSpacing: "0.2em",
            color: "var(--muted)",
            marginBottom: "1.5rem",
          }}
        >
          portfolio — {new Date().getFullYear()}
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.9,
            delay: 0.35,
            ease: [0.25, 0.1, 0.25, 1],
          }}
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(3.5rem, 10vw, 8rem)",
            lineHeight: 1.0,
            color: "var(--text)",
            marginBottom: "2rem",
            fontWeight: 400,
          }}
        >
          DelMii
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "clamp(0.85rem, 2vw, 1rem)",
            color: "var(--accent)",
            fontStyle: "italic",
            letterSpacing: "0.02em",
          }}
        >
          my empty trophy shelf.
        </motion.p>
      </div>

      {/* scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.8 }}
        style={{
          position: "absolute",
          bottom: "2rem",
          right: "2.5rem",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "6px",
        }}
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          style={{
            width: "1px",
            height: "48px",
            background: "linear-gradient(to bottom, transparent, var(--muted))",
          }}
        />
        <span
          style={{
            fontSize: "0.6rem",
            color: "var(--muted)",
            letterSpacing: "0.15em",
            writingMode: "vertical-rl",
          }}
        >
          scroll
        </span>
      </motion.div>
    </section>
  );
}
