"use client";
import { useState } from "react";

export default function Page() {
  const [text, setText] = useState("");
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  async function analyze() {
    if (!text.trim()) return;

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
    GRAY: "#757575"
  };

  return (
    <div style={{minHeight:"100vh",background:"#166534",padding:"40px",direction:"rtl"}}>
      
      <h1 style={{color:"white",fontSize:"28px",marginBottom:"20px"}}>
        نموذج تحليل الإجراء — ومض
      </h1>

      <textarea
        value={text}
        onChange={(e)=>setText(e.target.value)}
        placeholder="الصقي نص المحضر هنا..."
        style={{
          width:"100%",
          height:"220px",
          borderRadius:"12px",
          padding:"16px",
          fontSize:"16px"
        }}
      />

      <button
        onClick={analyze}
        disabled={loading}
        style={{
          marginTop:"20px",
          background:"#e5e7eb",
          border:"none",
          padding:"12px 26px",
          borderRadius:"10px",
          cursor:"pointer",
          fontSize:"16px"
        }}
      >
        {loading ? "جاري التحليل..." : "تحليل"}
      </button>

      {result && (
        <div style={{
          marginTop:"25px",
          background:"white",
          padding:"20px",
          borderRadius:"12px"
        }}>
          <div style={{
            fontSize:"20px",
            fontWeight:"bold",
            color: colors[result.level] || "#000"
          }}>
            المستوى: {result.level}
          </div>

          <div style={{marginTop:"10px"}}>
            السبب: {result.reason}
          </div>

          <div style={{marginTop:"10px"}}>
            التلميح: {result.hint}
          </div>
        </div>
      )}

    </div>
  );
}
