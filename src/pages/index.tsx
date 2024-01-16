import { AnimatePage } from 'Atoms/AnimatePage';
import { Container } from 'Atoms/Container';
import { SeoHead } from 'Atoms/SeoHead';
import Typed from 'react-typed';

import LogoCypress from 'Public/assets/tools/android.svg';
import LogoFigma from 'Public/assets/tools/react.svg';
import LogoGraphql from 'Public/assets/tools/java-Logo.svg';
import LogoHygraph from 'Public/assets/tools/symfony.svg';
import LogoNext from 'Public/assets/tools/nextjs.svg';
import LogoPrismic from 'Public/assets/tools/laravel.svg';
import LogoStorybook from 'Public/assets/tools/mysql.svg';
import LogoFlutter from 'Public/assets/tools/flutter-logo.svg';
import LogoVercel from 'Public/assets/tools/vercel.svg';
import LogoDjango from 'Public/assets/tools/py.svg';
import LogoWF from 'Public/assets/tools/wildfly.svg';

const IndexPage = () => {
	const talkAbout = [
		'React',
		'JavaScript',
		'TailwindCSS',
		'Android',
		'Flutter',
		'PHP',
		'Next.js',
		'JAVA',
		'C++',
		'Dart',
		'Python',
		'Machine Learning',
	];

	return (
		<AnimatePage>
			<SeoHead
				title="Felipe Borja | Portfolio"
				description="A Full-Stack Software Engineer with a focus on Flutter, Android and JS. I have more than 15 years experience working in software engineering and consulting."
				keywords={[
					'Software Engineer',
					'Felipe Borja',
					'Software Developer',
					'Front-End',
					'Full-Stack',
					'React',
					'Java',
					'JavaScript',
					'Android',
					'PHP',
					'Tailwind',
				]}
			/>
			<section id="home" className="h-full">
				<Container>
					<h1 className="headline mt-20 text-3xl md:text-5xl lg:text-6xl">
						Hi! my name is Felipe Borja
					</h1>
					<p className="my-8 text-lg md:text-xl lg:text-2xl">
						I&apos;m a software developer from Argentina with over 14 years of programming experience,
						specialised in mobile, web and backend development, QA testing, server maintenance and tech support.
						I&apos;ve studied on both in-person and remote universities, finished a dozen of online courses.<br/>
						Professionally I&apos;ve worked on several international consultancy companies and as a government contractor.
						I&apos;ve have several personal projects, freelance jobs and also I&apos;ve work as a volunteer for nonprofit organizations, my favorite tools are{' '}
						<Typed
							loop
							typeSpeed={50}
							backSpeed={20}
							strings={talkAbout}
							smartBackspace
							backDelay={1200}
							loopCount={0}
							showCursor
							cursorChar="|"
						/>
						.
					</p>
					<p className={" text-lg md:text-xl lg:text-2xl"}>
						You can find some of my repos at {''}
						<a
							href="https://github.com/fbtw"
							title="Button with link"
							target="_blank"
							rel="noopener noreferrer"
							className="underlined font-bold relative border-b-2 border-grey-300 dark:border-grey-700 hover:border-b-0"
						>
							Github
						</a>
						.
					</p>
				</Container>
			</section>
			<section id="tools" className="my-40">
				<Container>
					<h2 className="headline text-xl md:text-2xl lg:text-3xl mt-24 text-center">
						These is some of the tech I use
					</h2>

					<div className="flex flex-wrap items-center justify-center max-w-5xl mt-8 mx-auto gap-x-16 gap-y-8">
						<LogoNext className="w-32 h-24" aria-label="Next.js" />
						<LogoFlutter className="w-32 h-24" aria-label="Flutter" />
						<LogoHygraph className="w-28 md:w-36 h-24" aria-label="Hygraph" />
						<LogoPrismic className="w-16 md:w-20 h-24" aria-label="Prismic" />
						<LogoStorybook className="w-24 md:w-30 h-24" aria-label="Storybook" />
						<LogoGraphql className="w-28 md:w-36 h-24" aria-label="GraphQL" />
						<LogoVercel className="w-32 md:w-36 h-24" aria-label="Vercel" />
						<LogoFigma className="w-32 h-24" aria-label="Figma" />
						<LogoCypress className="w-24 md:w-30 h-24" aria-label="Cypress" />
						<LogoDjango className="w-32 h-24" aria-label="Django" />
						<LogoWF className="w-32 h-24" aria-label="Wildfly" />
					</div>
				</Container>
			</section>
			<section id="services">
				<Container>
					<h2 className="headline mt-20 text-2xl md:text-4xl lg:text-5xl">
						Services I provide
					</h2>

					<h3 className="headline mt-10 text-lg md:text-xl lg:text-2xl">
						Software Consultancy
					</h3>
					<p className="my-4 text-lg md:text-xl lg:text-2xl">
						I specialize in assisting startups and established businesses in identifying the appropriate tech stack for their project,
						collaborating with you throughout the process to grow your team as needed.
					</p>
					<p className="my-4 text-lg md:text-xl lg:text-2xl">
						Whether it&apos;s a complete overhaul of your existing product or the addition of a single new feature, I have the expertise to assist you. With my experience developing a variety of enterprise software stacks using the latest open source frameworks, as well as cloud-based solutions that enhance user experience while minimizing costs.
					</p>
					<p className="my-4 text-lg md:text-xl lg:text-2xl">
						I provide consulting services to businesses and organizations that want to create scalable and high-performing web solutions. By thoroughly understanding my client&apos;s needs, I can guide them in making informed decisions regarding software architecture and technology stacks.
					</p>

					<h3 className="headline mt-20 text-xl md:text-2xl lg:text-4xl">
						Website & App Development
					</h3>
					<p className="my-4 text-lg md:text-xl lg:text-2xl">
						My expertise lies in constructing well-designed, accessible, and high-performing native and web applications, as well as websites. Throughout my 14 years of experience, I have collaborated with clients ranging from startups to large enterprises, prioritizing clean code, performance, and accessibility.
					</p>
					<p className="my-4 text-lg md:text-xl lg:text-2xl">
						As a consultant in web and mobile development, I guide my clients in creating top-notch digital products that meet their business needs. My services go beyond simply building websites and apps; I strive to ensure that they are visually appealing, speedy, and inclusive. Together, we can unlock your full potential.
					</p>

					<h2 className="headline mt-20 text-xl md:text-2xl lg:text-4xl">
						Check out
					</h2>

					<div className="grid grid-cols-2">

						<h3 className="m-20 font-bold text-xl md:text-2xl lg:text-3xl">
							Projects I&apos;ve work on
							<a className="underlined font-bold relative border-b-2 border-grey-300 dark:border-grey-700 hover:border-b-0" href={'/uses'} > -{'>'} </a>

						</h3>
						<h3 className="m-20 font-bold text-xl md:text-2xl lg:text-3xl">
							Formal experience
							<a className="underlined font-bold relative border-b-2 border-grey-300 dark:border-grey-700 hover:border-b-0" href={'/case-studies'} > -{'>'} </a>
						</h3>
					</div>
				</Container>
			</section>
		</AnimatePage>
	);
};

export default IndexPage;
