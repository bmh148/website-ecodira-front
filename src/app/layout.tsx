import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'ECODIRA - Solutions énergétiques renouvelables',
  description: 'ECODIRA est votre partenaire de confiance pour les pompes à chaleur et l\'isolation extérieure. Découvrez nos solutions écologiques pour votre maison.',
  keywords: 'pompe à chaleur, isolation extérieure, énergie renouvelable, économie d\'énergie, écologie',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr" className="h-full">
      <body className={`${inter.className} h-full antialiased`}>
        <div className="min-h-full">
          {children}
          <Footer />
        </div>
      </body>
    </html>
  )
}