import { motion } from "framer-motion";
import { Link, useNavigate, useLocation } from "react-router-dom";

const links = [
  { label: "projects", href: "#projects", anchor: true },
  { label: "writeups", href: "#writeups", anchor: true },
  { label: "art", href: "#art", anchor: true },
  { label: "cat", href: "#cat", anchor: true },
];

export default function Nav() {
  const navigate = useNavigate();
  const location = useLocation();
  const isHome = location.pathname === "/";

  const handleAnchor = (href) => {
    if (!isHome) {
      navigate("/");
      setTimeout(() => {
        document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    } else {
      document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.nav
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 1 }}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "1.5rem 2.5rem",
        backdropFilter: "blur(8px)",
      }}
    >
      <Link
        to="/"
        style={{
          fontFamily: "var(--font-display)",
          fontSize: "1.1rem",
          color: "var(--text)",
          textDecoration: "none",
          letterSpacing: "0.02em",
        }}
      >
        DelMii
      </Link>

      <ul style={{ display: "flex", gap: "2rem", listStyle: "none" }}>
        {links.map((link) =>
          link.anchor ? (
            <li key={link.href}>
              <button
                onClick={() => handleAnchor(link.href)}
                style={{
                  background: "none",
                  border: "none",
                  fontSize: "0.75rem",
                  color: "var(--muted)",
                  letterSpacing: "0.1em",
                  cursor: "pointer",
                  padding: 0,
                  fontFamily: "var(--font-mono)",
                  transition: "color 0.2s",
                }}
                onMouseEnter={(e) => (e.target.style.color = "var(--text)")}
                onMouseLeave={(e) => (e.target.style.color = "var(--muted)")}
              >
                {link.label}
              </button>
            </li>
          ) : (
            <li key={link.href}>
              <Link
                to={link.href}
                style={{
                  fontSize: "0.75rem",
                  color: "var(--muted)",
                  textDecoration: "none",
                  letterSpacing: "0.1em",
                  transition: "color 0.2s",
                }}
                onMouseEnter={(e) => (e.target.style.color = "var(--text)")}
                onMouseLeave={(e) => (e.target.style.color = "var(--muted)")}
              >
                {link.label}
              </Link>
            </li>
          ),
        )}
      </ul>
    </motion.nav>
  );
}
