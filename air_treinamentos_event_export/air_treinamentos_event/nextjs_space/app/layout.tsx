import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Script from 'next/script'
import './globals.css'

import FloatingRegisterButton from '@/components/floating-register-button'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Imersão Ar Comprimido sem Desperdício - Air Treinamentos',
  description:
    'Treinamento presencial sobre ar comprimido industrial. Aprenda técnicas de eficiência energética, qualidade ISO 8573, redução de vazamentos e otimização de sistemas.',
  keywords:
    'ar comprimido, imersão, treinamento, eficiência energética, ISO 8573, compressores, vazamentos',
  authors: [{ name: 'Air Treinamentos' }],
  openGraph: {
    title: 'Imersão Ar Comprimido sem Desperdício',
    description:
      'Dois dias de imersão especializada em ar comprimido industrial com os melhores profissionais - 6 e 7 de fevereiro de 2026, Rio de Janeiro',
    type: 'website',
  },
  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon.svg',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>
        {/* Google Analytics */}
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-EN54R185LR"
        />

        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-EN54R185LR');
          `}
        </Script>

        {children}

        <FloatingRegisterButton />
      </body>
    </html>
  )
}
