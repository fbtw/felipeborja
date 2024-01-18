
import { NextPage } from 'next';
import Imagen from 'next/image';
import profilePic from '../../public/assets/screenshot 2 demo.jpeg';
import pajaroPic from '../../public/assets/pajaro.jpeg';
import huacaPic from '../../public/assets/huaca.jpg';
import { AnimatePage } from 'Atoms/AnimatePage';
import { Container } from 'Atoms/Container';
import { SeoHead } from 'Atoms/SeoHead';
import {IEducation} from "@types";


interface IProps {
	education: IEducation[];
	//markdown: RichTextContent;
	//<RichText content={markdown} renderers={mdxComponents}/>
}

const UsesPage: NextPage<IProps> = ({  }) => {
	return (
		<AnimatePage>
			<SeoHead
				title="Felipe Borja | Projects"
				description="Some of my Projects and volunteer work that I've done"
			/>
			<Container>
				<h1 className="headline text-3xl md:text-5xl lg:text-6xl my-8">
					Projects
				</h1>
				<p className="my-4 text-xl md:text-2xl lg:text-4xl ">
					Here are some of the projects I&apos;ve made or volunteer for
				</p>
				<h1 className="headline text-xl md:text-2xl lg:text-4xl my-8">
					Pájaro Pelotú (2023 - 2024)
				</h1>
				<div className="grid grid-cols-2 gap-6">
					<div className="w-50">
						<Imagen
							src={pajaroPic}
							alt="App screenshot"/>
					</div>
					<p className="my-8 text-lg md:text-xl lg:text-2xl">
						Flutter multi-platform mobile game, right available only on Android.
						It uses Google's play game API to support Leaderboards.
						<br/><br/>
						You can play it on Google play store
						<a className="underlined font-bold relative border-b-2 border-grey-300 dark:border-grey-700 hover:border-b-0" href={'https://play.google.com/store/apps/details?id=pajaro.pelotudo'} > here </a>
					</p>
				</div>

				<h1 className="headline text-xl md:text-2xl lg:text-4xl my-8">
					Simulador de Votaciones (2022 - 2023)
				</h1>
				<div className="grid grid-cols-2 gap-6">
					<p className="my-8 text-lg md:text-xl lg:text-2xl">
						Native Android app, free public survey service made mainly for the 2023 elections and other public
						consultations in Argentina
						<br/><br/>
						This is a running project, you can try the app
						<a className="underlined font-bold relative border-b-2 border-grey-300 dark:border-grey-700 hover:border-b-0" href={'https://play.google.com/store/apps/details?id=org.simuladorelecciones.ar'} > here</a> and support it on
						<a className="underlined font-bold relative border-b-2 border-grey-300 dark:border-grey-700 hover:border-b-0" href={'http://ko-fi.com/simvot'} > Ko-fi</a>
					</p>
					<div className="w-50">
						<Imagen
							src={profilePic}
							alt="App screenshot"
						/>
					</div>
				</div>

				<h1 className="headline text-xl md:text-2xl lg:text-4xl mt-8">Huaca Gallery (2021)</h1>
				<div className="grid grid-cols-2 gap-6">
					<p className="my-8 text-lg md:text-xl lg:text-2xl">
						Web responsive, online digital gallery made in collaboration with 10 Ecuadorian artists
						<br/>
						Made using nextJS, Typescript, Tailwind and Solidity
					</p>
					<div className="w-50">
						<Imagen
							src={huacaPic}
							alt="App screenshot"
						/>
					</div>
				</div>
				<h1 className="headline text-xl md:text-2xl lg:text-4xl mt-8">Spher App (2020)</h1>
				<p className="my-8 text-lg md:text-xl lg:text-2xl">
					Volunteer job, a small foundation from Denmark and Sweden focused on women safety and women&apos;s rights
					<br/>
					I helped with the design and error fixing using Flutter, testing and spanish translations.
					You can check their web site
					<a className="underlined font-bold relative border-b-2 border-grey-300 dark:border-grey-700 hover:border-b-0" href={' https://spher.app/'} > here </a>
				</p>
				<h1 className="headline text-xl md:text-2xl lg:text-4xl mt-8">En qué ayudo (2020)</h1>
				<p className="my-8 text-lg md:text-xl lg:text-2xl">
					Volunteer job, a project we made with some friends during the 2020 quarantine to help feeding people in need, we reached out more than 350 families
					<br/>
					I made the static frontpage website (pure html/css/js), built the SQL database as well as support other IT areas.
					You can check their
					<a className="underlined font-bold relative border-b-2 border-grey-300 dark:border-grey-700 hover:border-b-0" href={'https://www.facebook.com/enqueayudo'} > facebook page </a>
					to learn more

				</p>
				<h1 className="headline text-xl md:text-2xl lg:text-4xl mt-8">¡Servidos! (2018-2020)</h1>
				<p className="my-8 text-lg md:text-xl lg:text-2xl">
					Full platform project including a native PHP recruiting website, native Android app with Google Maps API, Java-Spring backend,
					linux server, wordpress blog and mastodon social instance.
					<br/>
					It started as a restaurant catalog, then more functionality was added to support all kind of small
					businesses and personal services,
				</p>
				<h1 className="headline text-xl md:text-2xl lg:text-4xl mt-8">Chef&apos;s Bios (2016)</h1>
				<p className="my-8 text-lg md:text-xl lg:text-2xl">
					PHP and Laravel website, it was a job seeking and recruitment platform specialized on gourmet restaurants and bar
				</p>
				<h1 className="headline text-xl md:text-2xl lg:text-4xl mt-8">Irodoku Puzzle (2013-2015)</h1>
				<p className="my-8 text-lg md:text-xl lg:text-2xl">
					An native Android game with generative mechanics made in C++ and Java with full Google Play Games API support
					I develop my own sudoku auto-solving algorithm to generate every level randomly and according to the difficulty,
					It uses Play games API to support leaderboards and achievements.
					You can try it on Google play store
					<a className="underlined font-bold relative border-b-2 border-grey-300 dark:border-grey-700 hover:border-b-0" href={'https://play.google.com/store/apps/details?id=game.irodoku'} > here </a>

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
