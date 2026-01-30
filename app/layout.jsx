import "./globals.css";

export const metadata = {
  title: "ومض — النموذج الأولي",
  description: "مراقبة إجرائية لحظية للمحاضر بإشارات لونية"
};

export default function RootLayout({ children }) {
  return (
    <html lang="ar" dir="rtl">
      <body>{children}</body>
    </html>
  );
}
