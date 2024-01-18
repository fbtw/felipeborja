import { IEducation, IJob, IPodcast } from '@types';

import { mapEducation } from 'Utils/mappings/mapEducation';
import { mapJobs } from 'Utils/mappings/mapJobs';
import { mapPodcasts } from 'Utils/mappings/mapPodcasts';
import { NextPage } from 'next';

import { AnimatePage } from 'Atoms/AnimatePage';
import { Button } from 'Atoms/Button';
import { Container } from 'Atoms/Container';
import { Education } from 'Organisms/Education';
import { Icon } from 'Atoms/Icon';

import { SeoHead } from 'Atoms/SeoHead';
import { WorkExperience } from 'Organisms/WorkExperience';

interface IProps {
	podcasts: IPodcast[];
	jobs: IJob[];
	education: IEducation[];
}

const AboutPage: NextPage<IProps> = ({ podcasts, jobs, education }) => {
	return (
		<AnimatePage>
			<SeoHead
				title="Felipe Borja | About"
				description="Some extra information about me"
			/>
			<Container>
				<h1 className="headline text-3xl md:text-5xl lg:text-6xl mt-8">
					About Me
				</h1>
				<h2 className="font-bold text-xl md:text-2xl mt-2">
					Software Developer from Latin America
				</h2>
				<p className="my-4  text-lg ">
					I’m a Argentinian-Chilean-Ecuadorian, 34 year old software developer,
					I possess expertise in various areas such as Mobile, Web, and Backend development, QA testing, server maintenance, and general office work. Over the course of my career, I have worked for international consultancies, government contractors, and as a freelancer. My experience encompasses version control systems, agile programming, and volunteering.

				</p>
				<p className="my-4  text-lg">
					I have always harbored a deep interest in creating top-notch software and continually strive to learn new tools, programming languages, and techniques. My passion for developing useful applications, websites, and solutions for both my clients and personal projects remains unwavering.
				</p>
				<p className="my-4  text-lg">
					As a web developer, I have worked extensively with a range of technologies including JavaScript, Java, PHP, C++, and Python. I specialize in working with frameworks such as Android, React, Next.js, Node, and Flutter, and have been honing my skills in this field for as long as I can remember.
				</p>
				<p className="my-4  text-lg">
					I am excited about the opportunity to bring my skills and experience to the next project or consulting, and am confident that my passion for software development and dedication to quality will make me a valuable resource.
				</p>

				<h2 className="headline mt-12 mb-4 text-4xl">Education</h2>
				<h2 className="font-bold text-xl md:text-2xl mt-12 mb-4">Formal Education</h2>
				<p className="my-4 text-lg">
					Escuela Politécnica Nacional / 2008-2012
				<br/>
					UTPL / 2013-2018
				</p>
				<h2 className="font-bold text-xl md:text-2xl mt-12 mb-4">Online Courses</h2>
				<p className="my-4 text-lg">
					Android App Dev. / Udacity
					<br/>
					Flutter Framework / Udemy
					<br/>
					Advanced Android / Udacity
					<br/>
					Modern Javascript / Udemy
					<br/>
					Complete Python / Codeacademy
					<br/>
					Solidity Language / Udemy
					<br/>
					Advanced Java and JSF / Clearminds
					<br/>
					Linux Server / ESPE
				</p>


				<div className="flex flex-row justify-center mt-8 ">
					<Button
						href="https://www.github.com/fbtw"

						className="group flex gap-2 whitespace-nowrap m-1">
						<div className="w-6 text-blue-500 group-hover:text-off-white dark:text-purple-500 ">
							<Icon icon="GITHUB" />
						</div>
						<div className="block headline group-hover:text-off-white">
							Visit Github
						</div>
					</Button>
					<Button
					href="https://play.google.com/store/apps/dev?id=8774751131767386028"
					className="group flex gap-2 whitespace-nowrap m-1">
					<div className="w-6 text-blue-500 group-hover:text-off-white dark:text-purple-500">
						<Icon icon="PLAYSTORE" />
					</div>
					<div className="block headline group-hover:text-off-white">
						Visit Playstore
					</div>
				</Button>
				</div>

			</Container>
		</AnimatePage>
	);
};


export default AboutPage;
