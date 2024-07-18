import Navbar from "@/components/Navbar";
import "@/styles/globals.css";
import Home from ".";
import Head from "next/head";
import Footer from "@/components/Footer";
import { AnimatePresence } from "framer-motion";
import { useRouter } from "next/router";
import { Analytics } from "@vercel/analytics/react";
import Script from "next/script";

export default function App({ Component, pageProps }) {
	const router = useRouter();
	return (
		<>
			<Head>
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link
					rel="apple-touch-icon"
					sizes="180x180"
					href="/images/favicon_io/apple-touch-icon.png"
				/>
				<link
					rel="icon"
					type="image/png"
					sizes="32x32"
					href="/images/favicon_io//favicon-32x32.png"
				/>
				<link
					rel="icon"
					type="image/png"
					sizes="16x16"
					href="/images/favicon_io//favicon-16x16.png"
				/>
				<link rel="manifest" href="/images/favicon_io//site.webmanifest" />
			</Head>
			<Script
				async
				src="https://www.googletagmanager.com/gtag/js?id=G-9HC9M72TFR"
			></Script>
			<Script
			  id="google-analytics-script" // Added an id attribute here
			>
			  {`window.dataLayer = window.dataLayer || [];
				function gtag(){dataLayer.push(arguments);}
				gtag('js', new Date());
			
				gtag('config', 'G-9HC9M72TFR');
			  `}
			</Script>
			<main className="font-mont bg-light dark:bg-dark w-full min-h-screen">
				<Navbar />
				<AnimatePresence mode="wait">
					<Component key={router.asPath} {...pageProps} />
				</AnimatePresence>
				<Footer />
				<Analytics />
			</main>
		</>
	);
}
