import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Salary Data Privacy Scanner – Scan if your salary data is being sold",
  description: "Monitors data broker sites and alerts when your salary information appears for sale. Protect your privacy today."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="6ccc3aca-786a-4639-bd34-e2b00c973063"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] min-h-screen">
        {children}
      </body>
    </html>
  );
}
