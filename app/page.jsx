"use client";

import { useMemo, useState } from "react";

export default function Page() {
  const [text, setText] = useState("");

  // نفس فكرة “السلامة الإجرائية” في الصورة: تتغير حسب حالة بسيطة
  const status = useMemo(() => {
    const t = text.trim();
    if (!t) return { label: "جاهزية مبدئية", dot: "#f59e0b" };
    if (t.length < 40) return { label: "قيد المراجعة", dot: "#3b82f6" };
    return { label: "سلامة إجرائية وجاهزية كاملة", dot: "#2e7d32" };
  }, [text]);

  return (
    <>
      {/* Top Bar */}
      <header className="topbar">
        <div className="user">
          <div className="userIcon">👤</div>
          <span>محمد خالد</span>
        </div>

        <div className="topTitle">كاتب الضبط</div>
      </header>

      {/* Main */}
      <main className="wrapper">
        <section className="card">
          <div className="rowHead">
            <h2 className="h2">محضر الجلسة القضائية</h2>

            <div className="statusPill" title="حالة السلامة الإجرائية">
              <span
                className="dot"
                style={{
                  background: status.dot,
                  boxShadow:
                    status.dot === "#2e7d32"
                      ? "0 0 0 4px rgba(46,125,50,.15)"
                      : status.dot === "#3b82f6"
                      ? "0 0 0 4px rgba(59,130,246,.18)"
                      : "0 0 0 4px rgba(245,158,11,.18)"
                }}
              />
              {status.label}
            </div>
          </div>

          <textarea
            className="textarea"
            placeholder="اكتبي محضر الجلسة هنا..."
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </section>

        <div className="actions">
          <button
            className="btn"
            disabled={!text.trim()}
            onClick={() => alert("تم اعتماد المحضر (تجربة واجهة فقط)")}
          >
            اعتماد المحضر
          </button>
        </div>
      </main>

      {/* Bottom Bar */}
      <footer className="bottombar">
        <div className="bottomItem">آخر تحديث: 10:57 ص</div>
        <div className="bottomItem">السلامة الإجرائية: نجاح مراجعة</div>
        <div className="bottomItem bottomMuted">حالة الجلسة: قيد التحرير</div>
      </footer>
    </>
  );
}
