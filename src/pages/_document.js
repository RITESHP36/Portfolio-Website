import Document, { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

class MyDocument extends Document {
	render() {
		return (
			<Html>
				<Head>
					<link
						href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap"
						rel="stylesheet"
					/>
					<style>{`
            :root {
              --font-mont: 'Montserrat', sans-serif;
            }
          `}</style>
				</Head>
				<Script
					async
					src="https://www.googletagmanager.com/gtag/js?id=G-9HC9M72TFR"
				></Script>
				<Script>
					{`window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-9HC9M72TFR');
          `}
				</Script>
				<body>
					<Script id="theme-switcher" strategy="beforeInteractive">
						{`
              if(localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                document.documentElement.classList.add('dark')
              } else {
                document.documentElement.classList.remove('dark')
              }
            `}
					</Script>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}

export default MyDocument;
