"use client";
import { useState } from "react";

export default function Page() {
  const [text, setText] = useState("");
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  async function analyze() {
    setLoading(true);
    setResult(null);

    const r = await fetch("/api/analyze", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ text })
    });

    const data = await r.json();
    setResult(data);
    setLoading(false);
  }

  const colors = {
    RED: "#c62828",
    YELLOW: "#f9a825",
    GREEN: "#2e7d32",
    BLACK: "#000000",
    GRAY: "#9e9e9e"
  };

  return (
    <div style={{
      minHeight: "100vh",
      background: "linear-gradient(135deg,#0f5132,#198754)",
      padding: 40,
      fontFamily: "sans-serif",
      color: "white"
    }}>

      <h1>نموذج تحليل الإجراء — ومض</h1>

      <textarea
        value={text}
        onChange={e => setText(e.target.value)}
        placeholder="الصقي نص المحضر هنا..."
        style={{
          width: "100%",
          height: 180,
          padding: 12,
          borderRadius: 8,
          border: "none",
          marginTop: 20
        }}
      />

      <button
        onClick={analyze}
        disabled={loading}
        style={{
          marginTop: 20,
          padding: "12px 24px",
          borderRadius: 8,
          border: "none",
          fontSize: 16
        }}
      >
        {loading ? "جاري التحليل..." : "تحليل"}
      </button>

      {result && (
        <div style={{
          marginTop: 30,
          padding: 20,
          borderRadius: 12,
          background: colors[result.level] || "#333"
        }}>
          <h2>{result.level}</h2>
          <p>{result.reason}</p>
          <p>{result.hint}</p>
        </div>
      )}

    </div>
  );
}
