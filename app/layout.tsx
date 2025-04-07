import './globals.css'
import { Inter } from 'next/font/google'
import ClientLayout from './components/ClientLayout'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'ECODIRA - Solutions Énergétiques Durables',
  description: 'ECODIRA propose des solutions énergétiques durables pour réduire votre empreinte carbone et vos coûts énergétiques.',
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