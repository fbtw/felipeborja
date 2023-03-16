import { AnimatePresence } from 'framer-motion';

import { AppProps } from 'next/app';

import { ThemeProvider } from 'next-themes';

import '../styles/index.css';
import { Layout } from 'Templates/Layout';

function MyApp({ Component, pageProps }: AppProps) {
	return (

			<ThemeProvider attribute="class">
				<Layout>
					<AnimatePresence
						exitBeforeEnter
						initial={false}
						onExitComplete={() => window.scrollTo(0, 0)}
					>
						<Component {...pageProps} />
					</AnimatePresence>
				</Layout>
			</ThemeProvider>

	);
}

export default MyApp;
