import Document, {
	DocumentContext,
	Head,
	Html,
	Main,
	NextScript,
} from 'next/document';

class MyDocument extends Document {
	static async getInitialProps(ctx: DocumentContext) {
		const initialProps = await Document.getInitialProps(ctx);
		return { ...initialProps };
	}

	render() {
		return (
			<Html lang="en-GB">
				<Head>
					<link href="/assets/favicon_light.png" rel="shortcut icon" />
				</Head>
				<body className="antialiased bg-red text-off-black dark:bg-off-black dark:text-off-white">
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}

export default MyDocument;
