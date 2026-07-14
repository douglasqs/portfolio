import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://douglasqs.github.io/portfolio/"),
  title: "Douglas Soares · Full-stack, IA & Integrações",
  description: "Portfólio de Douglas Soares — desenvolvimento full-stack, inteligência artificial, computer vision, APIs e integrações com hardware.",
  keywords: ["Douglas Soares", "full-stack developer", "Python", "integrações", "computer vision", "IA", "Hikvision", "Florianópolis"],
  authors: [{ name: "Douglas Soares", url: "https://github.com/douglasqs" }],
  openGraph: { title: "Douglas Soares · Conecto ideias, dados e o mundo real", description: "Full-stack, IA, computer vision e integrações entre software e hardware.", type: "website", locale: "pt_BR", url: "https://douglasqs.github.io/portfolio/", images: [{ url: "og-techblue.png", width: 1731, height: 909, alt: "Douglas Soares — Full-stack, IA e integrações" }] },
  twitter: { card: "summary_large_image", title: "Douglas Soares · Full-stack, IA & Integrações", description: "Conecto ideias, dados e o mundo real.", images: ["og-techblue.png"] },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="pt-BR"><body>{children}</body></html>;
}
