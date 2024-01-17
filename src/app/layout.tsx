import type { Metadata } from 'next'
import { Poppins } from "next/font/google";
import './globals.css'
import HeaderComponent from '@/components/header/Header';
import Form from '@/components/form';

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});


export const metadata: Metadata = {
  title: 'Perguntas dinâmicas',
  description: 'App Next js',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${poppins.className} bg-zinc-200`}>
        <HeaderComponent />

        <div>
          <Form title="Pesquisa de Satisfação:" />
        </div>

        {children}
      </body>
    </html>
  )
}
/*  */