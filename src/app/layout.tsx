import type { Metadata } from "next";
import "./globals.css"; // Ensure you have global styles here

export const metadata: Metadata = {
  title: "Iter Vitae Africa",
  description: "Navigating Your Path to Better Health",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
        {/* Link to Panchang font from Fontshare */}
        <link
          rel="stylesheet"
          href="https://api.fontshare.com/css?f[]=panchang@400,500,600,700&display=swap"
        />
      </head>
      <body className="antialiased font-inter">
        {children}
      </body>
    </html>
  );
}
