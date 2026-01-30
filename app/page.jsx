"use client";

import { useMemo, useState } from "react";

export default function Page() {
  const [text, setText] = useState("");

  // نفس فقاعة الحالة اللي بالصورة
  const status = useMemo(() => {
    const t = text.trim();
    if (!t) return { label: "سلامة إجرائية وجاهزية كاملة", dot: "dot-green" };
    if (t.length < 40) return { label: "قيد المراجعة", dot: "dot-yellow" };
    return { label: "سلامة إجرائية وجاهزية كاملة", dot: "dot-green" };
  }, [text]);

  function onApprove() {
    // هنا لاحقًا نربطه بالتحليل/API أو حفظ المحضر
    alert("تم اعتماد المحضر (تجريبي)");
  }

  return (
    <div className="wamed-root" dir="rtl" lang="ar">
      {/* Top bar */}
      <header className="topbar">
        <div className="topbar-left">
          <div className="avatar" aria-hidden="true" />
          <div className="username">محمد خالد</div>
        </div>

        <div className="topbar-right">كاتب الضبط</div>
      </header>

      {/* Content */}
      <main className="content">
        <section className="card">
          {/* Status pill with dot */}
          <div className="status-pill" title={status.label}>
            <span className={`status-dot ${status.dot}`} />
            <span className="status-text">{status.label}</span>
          </div>

          {/* Card title (right) */}
          <div className="card-title">محضر الجلسة القضائية</div>

          {/* Text area */}
          <div className="editor-wrap">
            <textarea
              className="editor"
              value={text}
              onChange={(e) => setText(e.target.value)}
              placeholder=""
              spellCheck={false}
            />
          </div>

          {/* Button bottom-left */}
          <div className="actions">
            <button className="btn-approve" onClick={onApprove}>
              اعتماد المحضر
            </button>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-right">آخر تحديث: 10:57 ص</div>
        <div className="footer-center">
          <span>السلامة الإجرائية: نجاح مراجعة</span>
          <span className="sep">•</span>
          <span>حالة الجلسة: قيد التحرير</span>
        </div>
      </footer>
    </div>
  );
}
