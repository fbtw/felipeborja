
import { NextPage } from 'next';
import Imagen from 'next/image';
import profilePic from '../../public/assets/screenshot 2 demo.jpeg';
import { AnimatePage } from 'Atoms/AnimatePage';
import { Container } from 'Atoms/Container';
import { SeoHead } from 'Atoms/SeoHead';

interface IProps {
	//markdown: RichTextContent;
	//<RichText content={markdown} renderers={mdxComponents}/>
}

const UsesPage: NextPage<IProps> = ({  }) => {
	return (
		<AnimatePage>
			<SeoHead
				title="Projects"
				description="This is a comprehensive list of tech equipment and software I use for my day-to-day work as a software engineer in the UK."
			/>
			<Container>
				<h1 className="headline text-3xl md:text-5xl lg:text-6xl my-8">
					Projects
				</h1>
				<p className="my-4 text-xl md:text-2xl lg:text-4xl ">
					Here are some of the projects I've made or volunteer for
				</p>
				<h1 className="headline text-xl md:text-2xl lg:text-4xl my-8">
					Simulador de Votaciones (2022 - *)
				</h1>
				<div className="grid grid-cols-2 gap-6">
					<p className="my-8 text-lg md:text-xl lg:text-2xl">
						Native Android app, free public survey service made mainly for the 2023 elections and other public
						consultations in Argentina
						<br/><br/>
						This is a running project, you can try the app
						<a className="underlined font-bold relative border-b-2 border-grey-300 dark:border-grey-700 hover:border-b-0" href={'https://play.google.com/store/apps/details?id=org.simuladorelecciones.ar'} > here</a> and support it on
						<a className="underlined font-bold relative border-b-2 border-grey-300 dark:border-grey-700 hover:border-b-0" href={'http://ko-fi.com/simvot'} > Ko-fi</a> or
						<a className="underlined font-bold relative border-b-2 border-grey-300 dark:border-grey-700 hover:border-b-0" href={'http://liberapay.com/simvot'} > Liberapay</a>
					</p>
					<Imagen
						src={profilePic}
						alt="Picture"
						width={400}
						height={500}
					/>
				</div>

				<h1 className="headline text-xl md:text-2xl lg:text-4xl mt-8">Huaca Gallery (2021)</h1>
				<p className="my-8 text-lg md:text-xl lg:text-2xl">
					Web responsive, online digital gallery made in collaboration with 10 Ecuadorian artists
					<br/>
					Made using nextJS, Typescript, Tailwind and Solidity
				</p>
				<h1 className="headline text-xl md:text-2xl lg:text-4xl mt-8">Spher App (2020)</h1>
				<p className="my-8 text-lg md:text-xl lg:text-2xl">
					Volunteer job, a small foundation from Denmark and Sweden focused on women safety and women's rights
					<br/>
					I helped with the design and error fixing using Flutter, testing and spanish translations.
				</p>
				<h1 className="headline text-xl md:text-2xl lg:text-4xl mt-8">En qué ayudo (2020)</h1>
				<p className="my-8 text-lg md:text-xl lg:text-2xl">
					Volunteer job, a project we made with some friends during the 2020 quarantine to help feeding people in need, we reached out more than 350 families
					<br/>
					I made the static frontpage website (pure html/css/js) and built the SQL database.
				</p>
				<h1 className="headline text-xl md:text-2xl lg:text-4xl mt-8">¡Servidos! (2018-2020)</h1>
				<p className="my-8 text-lg md:text-xl lg:text-2xl">
					Full platform project including a native PHP recruiting website, native Android app, Java-Spring backend,
					linux server, wordpress blog and mastodon social instance.
					<br/>
					It started as a restaurant catalog, then more functionality was added to support all kind of small
					businesses and personal services
				</p>
				<h1 className="headline text-xl md:text-2xl lg:text-4xl mt-8">Chef's Bios (2016)</h1>
				<p className="my-8 text-lg md:text-xl lg:text-2xl">
					PHP and Laravel website, it was a job seeking and recruitment platform specialized on gourmet restaurants and bar
				</p>
				<h1 className="headline text-xl md:text-2xl lg:text-4xl mt-8">Irodoku Puzzle (2013-2015)</h1>
				<p className="my-8 text-lg md:text-xl lg:text-2xl">
					An native Android game with generative mechanics made in C++ and Java with full Google Play Games API support
				</p>
			</Container>
		</AnimatePage>
	);
};
/*
export async function getStaticProps() {
	const { data } = await client.query({
		query: gql`
			query UsesPageQuery {
				page(where: { slug: "uses" }) {
					content {
						raw
					}
				}
			}
		`,
	});

	return {
		props: {
			markdown: data.page.content.raw,
		},
	};
}*/

export default UsesPage;
