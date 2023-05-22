// import '../styles/global.css';

import { Inter } from 'next/font/google';

// If loading a variable font, you don't need to specify the font weight
const inter = Inter({ subsets: ['latin'] });
export default function MyApp(
  { Component, pageProps }: { Component: React.ComponentType, pageProps: any },
) {
  return (
    <>
      <style jsx global>
        {`
        html {
          font-family: ${inter.style.fontFamily};
        }
        body {
          margin: 0;
          padding: 0;
        }
      `}

      </style>
      <Component {...pageProps} />
    </>

  );
}
