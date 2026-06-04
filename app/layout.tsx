import type { Metadata } from "next"
import localFont from "next/font/local"

import Footer from "@/components/footer"
import Header from "@/components/header"
import "./globals.css"

const generalSans = localFont({
  src: [
    {
      path: "../public/fonts/gsr.otf",
      weight: "400",
    },
    {
      path: "../public/fonts/gsm.otf",
      weight: "500",
    },
    {
      path: "../public/fonts/gssb.otf",
      weight: "700",
    },
    {
      path: "../public/fonts/gsb.otf",
      weight: "800",
    },
  ],
})

export const metadata: Metadata = {
  title: "The Stability Nexus",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var localValue = localStorage.getItem('theme');
                  var supportDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches === true;
                  if (localValue === 'dark' || (!localValue && supportDarkMode)) {
                    document.documentElement.classList.add('dark');
                  } else {
                    document.documentElement.classList.remove('dark');
                  }
                } catch (e) {}
              })();
            `,
          }}
        />
      </head>
      <body className={generalSans.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
