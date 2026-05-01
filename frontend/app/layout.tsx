import '@/style/_global.scss'
import '@/style/reset.css'
import Header from '@/components/header/header';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
      <head>
      </head>
      <body>
        <Header/>
        {children}
      </body>
    </html>
  );
}