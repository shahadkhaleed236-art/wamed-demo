import "./globals.css";

export const metadata = {
  title: "كاتب الضبط",
  description: "محضر الجلسة القضائية"
};

export default function RootLayout({ children }) {
  return (
    <html lang="ar" dir="rtl">
      <body>{children}</body>
    </html>
  );
}
