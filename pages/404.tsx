import * as React from "react";
import Link from "next/link";

export default function Custom404() {
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#1B2A41", // Hoya Midnight Blue
        color: "#F2E5D5", // Sandstone Neutral
        fontFamily: "'Oswald', sans-serif",
        textAlign: "center",
        padding: "2rem"
      }}
    >
      <h1 style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)", marginBottom: "1rem" }}>
        404 – Page Not Found
      </h1>
      <p style={{ fontSize: "clamp(1rem, 3vw, 1.5rem)", marginBottom: "2rem" }}>
        The page you requested isn’t here.  
        But together, we can shape what comes next.
      </p>
      <Link
        href="/"
        style={{
          padding: "0.75rem 1.5rem",
          backgroundColor: "#D4AF37", // Scholar Gold
          color: "#121212",
          borderRadius: "0.5rem",
          fontWeight: "bold",
          textDecoration: "none",
          fontSize: "1.125rem"
        }}
      >
        Return Home
      </Link>
    </div>
  );
}
