import "./globals.css";

export const metadata = {
  title: "Brunch & Co",
  description: "Restaurant de brunch à Bordeaux",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
