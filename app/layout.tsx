import './globals.css'
import { Inter } from 'next/font/google'
import ClientLayout from './components/ClientLayout'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'ECODIRA - Solutions Énergétiques Durables',
  description: 'ECODIRA propose des solutions énergétiques durables pour réduire votre empreinte carbone et vos coûts énergétiques.',
  icons: {
    icon: '/favicon.ico',
    apple: '/favicon.ico',
  },
  viewport: 'width=device-width, initial-scale=1',
  themeColor: '#16a34a',
  manifest: '/manifest.json',
  openGraph: {
    title: 'ECODIRA - Solutions Énergétiques Durables',
    description: 'ECODIRA propose des solutions énergétiques durables pour réduire votre empreinte carbone et vos coûts énergétiques.',
    url: 'https://ecodira.fr',
    siteName: 'ECODIRA',
    images: [
      {
        url: '/images/logo1.png',
        width: 800,
        height: 600,
        alt: 'ECODIRA Logo',
      },
    ],
    locale: 'fr_FR',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <body className={inter.className}>
        <ClientLayout>
          {children}
        </ClientLayout>
      </body>
    </html>
  )
} 