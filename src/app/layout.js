import "./globals.css";


export const metadata = {
  title: "Babble API",
  description: "SkipFinder/s official API endpoints and documentation",
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
